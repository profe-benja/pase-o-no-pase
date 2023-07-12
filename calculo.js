
const notaForm = document.getElementById('notaForm');
const npInput = document.getElementById('npInput');
const etInput = document.getElementById('etInput');
const resultadoDiv = document.getElementById('resultado');
const notaFinalP = document.getElementById('notaFinal');
const notaET = document.getElementById('notaET');
const resultadoDiv2 = document.getElementById('resultado2');

function validarNumeros() {
    const npValue = npInput.value;
    const etValue = etInput.value;

    const npValid = /^([1-7](\.[0-9]+)?)$/.test(npValue);
    const etValid = /^([1-7](\.[0-9]+)?)$/.test(etValue);

    npInput.setCustomValidity(npValid ? "" : "Por favor, ingresa un número válido entre 1 y 7.");
    etInput.setCustomValidity(etValid ? "" : "Por favor, ingresa un número válido entre 1 y 7.");

    npInput.reportValidity();
    etInput.reportValidity();
}

function calcular() {
    validarNumeros();

    if (notaForm.checkValidity()) {
        const np = parseFloat(npInput.value);
        const et = parseFloat(etInput.value);

        const npWeight = 0.6;
        const etWeight = 0.4;

        const notaFinal = (np * npWeight) + (et * etWeight);

        notaFinalP.textContent = notaFinal.toFixed(2);
        resultadoDiv.style.display = 'block';

        var porcentaje = (notaFinal * 100) / 7;

        // Actualizar la barra de progreso
        barraProgreso.style.width = porcentaje + "%";
        if (notaFinal < 4.0) {
            notaFinalP.classList.remove('bg-success', 'bg-warning');
            notaFinalP.classList.add('bg-danger');
            
            barraProgreso.classList.remove('bg-success', 'bg-warning');
            barraProgreso.classList.add('bg-danger');
        } else if (notaFinal < 5.0) {
            notaFinalP.classList.remove('bg-success', 'bg-danger');
            notaFinalP.classList.add('bg-warning');

            barraProgreso.classList.remove('bg-success');
            barraProgreso.classList.add('bg-warning');
        } else {
            notaFinalP.classList.remove('bg-danger', 'bg-warning');
            notaFinalP.classList.add('bg-success');

            barraProgreso.classList.remove('bg-danger', 'bg-warning');
            barraProgreso.classList.add('bg-success');
        }
    }
}

function calcularET() {
    const np = parseFloat(npInput.value);
    const npWeight = 0.6;
    const etWeight = 0.4;
    const targetFinal = 4;
    const notaETRequired = (targetFinal - (np * npWeight)) / etWeight;
    notaET.textContent = notaETRequired.toFixed(2);
    resultadoDiv.style.display = 'block';
}

notaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    calcular();
});

npInput.addEventListener('input', calcular);
npInput.addEventListener('input', calcularET);
etInput.addEventListener('input', calcular);
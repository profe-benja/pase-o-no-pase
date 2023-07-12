// Datos del arreglo
var data = [
    ["NOTA", "EXAMEN", "60%", "40%", "NOTA FINAL"],
    [7, "-0,5", "4,2", "-0,2", 4],
    [6.9, "-0,3", "4,14", "-0,1", 4],
    [6.8, "-0,2", "4,08", "-0,1", 4],
    [6.7, 0, "4,02", 0, 4],
    [6.6, 0.1, "3,96", 0, 4],
    [6.5, 0.3, "3,9", 0.1, 4],
    [6.4, 0.4, "3,84", 0.2, 4],
    [6.3, 0.6, "3,78", 0.2, 4],
    [6.2, 0.7, "3,72", 0.3, 4],
    [6.1, 0.9, "3,66", 0.3, 4],
    [6, 1, "3,6", 0.4, 4],
    [5.9, 1.2, "3,54", 0.5, 4],
    [5.8, 1.3, "3,48", 0.5, 4],
    [5.7, 1.5, "3,42", 0.6, 4],
    [5.6, 1.6, "3,36", 0.6, 4],
    [5.5, 1.8, "3,3", 0.7, 4],
    [5.4, 1.9, "3,24", 0.8, 4],
    [5.3, 2.1, "3,18", 0.8, 4],
    [5.2, 2.2, "3,12", 0.9, 4],
    [5.1, 2.3, "3,06", 0.9, 4],
    [5, 2.5, 3, 1, 4],
    [4.9, 2.6, "2,94", 1.1, 4],
    [4.8, 2.8, "2,88", 1.1, 4],
    [4.7, 2.9, "2,82", 1.2, 4],
    [4.6, 3.1, "2,76", 1.2, 4],
    [4.5, 3.2, "2,7", 1.3, 4],
    [4.4, 3.4, "2,64", 1.4, 4],
    [4.3, 3.5, "2,58", 1.4, 4],
    [4.2, 3.7, "2,52", 1.5, 4],
    [4.1, 3.8, "2,46", 1.5, 4],
    [4, 4, "2,4", 1.6, 4],
    [3.9, 4.1, "2,34", 1.7, 4],
    [3.8, 4.3, "2,28", 1.7, 4],
    [3.7, 4.4, "2,22", 1.8, 4],
    [3.6, 4.6, "2,16", 1.8, 4],
    [3.5, 4.7, "2,1", 1.9, 4],
    [3.4, 4.9, "2,04", 2, 4],
    [3.3, 5, "1,98", 2, 4],
    [3.2, 5.2, "1,92", 2.1, 4],
    [3.1, 5.3, "1,86", 2.1, 4],
    [3, 5.5, "1,8", 2.2, 4],
    [2.9, 5.6, "1,74", 2.3, 4],
    [2.8, 5.8, "1,68", 2.3, 4],
    [2.7, 5.9, "1,62", 2.4, 4],
    [2.6, 6.1, "1,56", 2.4, 4],
    [2.5, 6.2, "1,5", 2.5, 4],
    [2.4, 6.4, "1,44", 2.6, 4],
    [2.3, 6.5, "1,38", 2.6, 4],
    [2.2, 6.7, "1,32", 2.7, 4],
    [2.1, 6.8, "1,26", 2.7, 4],
    [2, 7, "1,2", 2.8, 4],
    [1.9, 7.1, "1,14", 2.9, 4],
    [1.8, 7.3, "1,08", 2.9, 4],
    [1.7, 7.4, "1,02", 3, 4],
    [1.6, 7.6, "0,96", 3, 4],
    [1.5, 7.7, "0,9", 3.1, 4],
    [1.4, 7.9, "0,84", 3.2, 4],
    [1.3, 8, "0,78", 3.2, 4],
    [1.2, 8.2, "0,72", 3.3, 4],
    [1.1, 8.3, "0,66", 3.3, 4],
    [1, 8.5, "0,6", 3.4, 4]
];

// Crear la tabla
var table = document.createElement("table");
table.classList.add("table", "table-striped");
table.classList.add("table", "table-sm");
table.classList.add("table", "table-bordered");
table.classList.add("table", "table-hover");
table.classList.add("table", "table-ajuste");
table.setAttribute("min-width", "400px");

// Crear el encabezado de la tabla
var thead = document.createElement("thead");
var trHead = document.createElement("tr");
for (var i = 0; i < data[0].length; i++) {
    var th = document.createElement("th");
    th.textContent = data[0][i];
    trHead.appendChild(th);
}
thead.appendChild(trHead);
table.appendChild(thead);

// Crear el cuerpo de la tabla
var tbody = document.createElement("tbody");
for (var i = 1; i < data.length; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < data[i].length; j++) {
        var td = document.createElement("td");
        if (j == 1) {

            td.innerHTML = "<strong>"+data[i][j]+"</strong>";
        } else {
            td.innerText = data[i][j];
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);

// Agregar la tabla al elemento con el id "tabla"
document.getElementById("tabla").appendChild(table);

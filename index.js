"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", function () {
    var spinner = document.querySelector("#spinner");
    if (spinner) {
        spinner.style.display = "none";
    }
    var todo = document.querySelector("#all");
    if (todo) {
        todo.classList.remove("todo");
    }
});
var tabla = document.querySelector(".tbody");
fetch("https://fakestoreapi.com/products")
    .then(function (response) { return response.json(); })
    .then(function (product) {
    product.forEach(function (p) {
        //primer fila de la tabla
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var tduno = document.createElement("td");
        var tddos = document.createElement("td");
        var tdtres = document.createElement("td");
        var tdcuatro = document.createElement("td");
        var tdcinco = document.createElement("td");
        var tdseis = document.createElement("td");
        // Nos encargamos de la imagen
        var img = document.createElement("img");
        img.src = p.image;
        // Agregamos elementos a nuestro tr, th y td
        th.innerHTML = p.title;
        tduno.appendChild(img);
        tddos.innerHTML = "".concat(p.price);
        tdtres.innerHTML = p.description;
        tdcuatro.innerHTML = p.category;
        tdcinco.innerHTML = "".concat(p.rating.count);
        tdseis.innerHTML = "".concat(p.rating.rate);
        // Agrego los th y td a nuestro tr
        tr.appendChild(th);
        tr.appendChild(tduno);
        tr.appendChild(tddos);
        tr.appendChild(tdtres);
        tr.appendChild(tdcuatro);
        tr.appendChild(tdcinco);
        tr.appendChild(tdseis);
        // Agrego el tr a nuestro tbody
        tabla === null || tabla === void 0 ? void 0 : tabla.appendChild(tr);
    });
})
    .catch(function (error) {
    console.error("Hubo un error en la solicitud:", error);
});
/*// Creamos nuestros elementos para la primer fila de la tabla
const tr = document.createElement("tr");
const th = document.createElement("th");
const tduno = document.createElement("td");
const tddos = document.createElement("td");
const tdtres = document.createElement("td");
const tdcuatro = document.createElement("td");
const tdcinco = document.createElement("td");
const tdseis = document.createElement("td");
// Nos encargamos de la imagen
const img = document.createElement("img");
img.src = producto.image;

// Agregamos elementos a nuestro tr, th y td
th.innerHTML = producto.title;
tduno.appendChild(img);
tddos.innerHTML = producto.price;
tdtres.innerHTML = producto.description;
tdcuatro.innerHTML = producto.category;
tdcinco.innerHTML = producto.rating.count;
tdseis.innerHTML = producto.rating.rate;
// Agrego los th y td a nuestro tr
tr.appendChild(th);
tr.appendChild(tduno);
tr.appendChild(tddos);
tr.appendChild(tdtres);
tr.appendChild(tdcuatro);
tr.appendChild(tdcinco);
tr.appendChild(tdseis);
// Agrego el tr a nuestro tbody
tabla.appendChild(tr);
});
}
}):*/ 

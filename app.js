// Datos de productos en formato JSON
const productos = [
    {
        "folio": "001",
        "descripcion": "Tenis Nike",
        "talla": "28",
        "precio": "$850"
    },
    {
        "folio": "002",
        "descripcion": "Zapato de Vestir",
        "talla": "24",
        "precio": "$700"
    },
    {
        "folio": "003",
        "descripcion": "Botas",
        "talla": "23.5",
        "precio": "$1,200"
    },
    {
        "folio": "004",
        "descripcion": "Tenis para correr",
        "talla": "25",
        "precio": "$950"
    },
    {
        "folio": "005",
        "descripcion": "Crocs",
        "talla": "22",
        "precio": "$500"
    }
];

window.onload = function() {
    const tableBody = document.querySelector("#productos-table tbody");

    productos.forEach(producto => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${producto.folio}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.talla}</td>
            <td>${producto.precio}</td>
        `;

        tableBody.appendChild(row);
    });
};

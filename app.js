// Datos de productos en formato JSON
const productos = [
    {
        "folio": "001",
        "descripcion": "Zapato Deportivo",
        "talla": "28",
        "precio": "$850"
    },
    {
        "folio": "002",
        "descripcion": "Zapato Casual",
        "talla": "24",
        "precio": "$700"
    },
    {
        "folio": "003",
        "descripcion": "Botas de Invierno",
        "talla": "23.5",
        "precio": "$1,200"
    },
    {
        "folio": "004",
        "descripcion": "Zapato de Vestir",
        "talla": "25",
        "precio": "$950"
    },
    {
        "folio": "005",
        "descripcion": "Sandalias Veraniegas",
        "talla": "22",
        "precio": "$500"
    }
];

// Función para cargar los productos en la tabla
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

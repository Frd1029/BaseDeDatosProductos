document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.getElementById("product-table").getElementsByTagName('tbody')[0];

    // Realizar la solicitud HTTP para obtener los datos de la API
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos")
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                const row = productTable.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.textContent = producto.nombre ;
                cell2.textContent = producto.descripcion;
                cell3.textContent = producto.precio ;
            });
        })
        .catch(error => {
            console.error("Error al obtener datos de la API:", error);
        });
});

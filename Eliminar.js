document.addEventListener("DOMContentLoaded", function() {
    var eliminarBotones = document.querySelectorAll('.eliminar-btn');
    eliminarBotones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var idProducto = boton.dataset.id; // Obtener el ID del producto desde el atributo data-id
            eliminarProducto(idProducto);
        });
    });

    function eliminarProducto(idProducto) {
        fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${idProducto}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("El producto ha sido eliminado correctamente de la API.");
                // Redirigir a la página principal u otra página después de eliminar el producto
                window.location.href = "index.html";
            } else {
                alert("Hubo un problema al eliminar el producto de la API.");
            }
        })
        .catch(error => {
            console.error("Error: " + error);
        });
    }
});

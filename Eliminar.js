document.getElementById("eliminar").addEventListener("click", function() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
  
    if (nombre === '' || precio === '' || descripcion === '') {
      alert(" Complete todos los campos para eliminar.");
    } else {
      // Crear un objeto con los datos del formulariogi
      const data = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
      };
  
      // Realizar una solicitud HTTP a la API para eliminar el producto
      fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert("El producto ha sido eliminado correctamente de la API.");
          // Redirigir a la página principal u otra página después de eliminar el producto
          window.location.href = "index.html";
        } else {
          alert("Hubo un problema al eliminar los datos de la API.");
        }
      })
      .catch(error => {
        console.error("Error: " + error);
      });
    }
  });

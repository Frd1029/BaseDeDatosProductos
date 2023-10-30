document.getElementById("eliminar").addEventListener("click", function() {
    const idProducto = document.getElementById("idProducto").value;
    fetch(`https://siaweb-nodejs.carlos-reneren7.repl.co/productos/${idProducto}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        alert("El producto ha sido eliminado correctamente de la API.");
        window.location.href = "index.html";
      } else {
        alert("Hubo un problema al eliminar el producto de la API.");
      }
    })
    .catch(error => {
      console.error("Error: " + error);
    }); 
  });
  
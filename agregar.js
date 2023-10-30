document.getElementById("guardar").addEventListener("click", function() {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  window.location.href = "index.html";

  // Crear un objeto con los datos del formulario
  const data = {
    nombre: nombre,
    precio: precio,
    descripcion: descripcion,
    
  };
  
  
  // Realizar una solicitud HTTP a la API
  fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert("Los datos se han enviado correctamente a la API.");
    } else {
      alert("Hubo un problema al enviar los datos a la API.");
    }
  })
  .catch(error => {
    console.error("Error: " + error);
  }); 

});
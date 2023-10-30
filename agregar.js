document.getElementById("guardar").addEventListener("click", function () {
  alert("Entro");
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;

  if (nombre === '' || precio === '' || descripcion === '') {
    alert(" Complete todos los campos para guardar.");
  } else {
    // Crear un objeto con los datos del formulario
  alert(nombre+"_"+ precio+"_"+descripcion );
    const data = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    };
alert(console.log(data));
    // Realizar una solicitud HTTP a la API
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
      
    })
    .then(response => {
        alert("Entro2" + console.log(data));
        if (response.ok) {
          alert("Los datos se han enviado correctamente a la API.");
          window.location.href = "index.html";
        } else {
          alert("Hubo un problema al enviar los datos a la API.");
        }
      })
      .catch(error => {
        console.error("Error: " + error);
      });
      alert("FIN")
  }
});
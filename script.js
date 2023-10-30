 // Utilizamos fetch para obtener los datos del API
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {
   // Llamamos a una función para crear la tabla con los datos
   createTable(data);
 })
 .catch(error => {
   console.error('Error al obtener los datos:', error);
 });

function createTable(data) {
   const tablaUsuarios = document.getElementById('tablaUsuarios');
   const tbody = tablaUsuarios.querySelector('tbody');

   // Iteramos a través de los datos y creamos filas y celdas en la tabla
   data.forEach(user => {
       const row = tbody.insertRow();
       row.innerHTML = `
           <td>${user.id}</td>
           <td>${user.name}</td>
           <td>${user.email}</td>
           <td>${user.phone}</td>
           <td>${user.company.name}</td>
       `;
   });
}
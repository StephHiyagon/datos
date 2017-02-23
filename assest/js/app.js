
function mostrar(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;
  document.getElementById("name").innerHTML= nombre;
  document.getElementById("lastname").innerHTML= apellido;
  document.getElementById("ident").innerHTML= dni;
  document.getElementById("direc").innerHTML= direccion;
}

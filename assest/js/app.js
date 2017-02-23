function validar(){
  var dni = document.getElementById("dni").value;
  var caract = dni.length
  if(caract == 8){
    return mostrar();
  }else{
    return alert("Información inválida");
  }
}

function mostrar(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direccion = document.getElementById("direccion").value;
  document.getElementById("nombre").value="";
  document.getElementById("apellido").value="";
  document.getElementById("dni").value="";
  document.getElementById("direccion").value="";
  document.getElementById("name").innerHTML= nombre;
  document.getElementById("lastname").innerHTML= apellido;
  document.getElementById("ident").innerHTML= dni;
  document.getElementById("direc").innerHTML= direccion;
}

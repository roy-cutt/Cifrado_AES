
function cifrado(){
let cadena = document.getElementById("Sarchivo").value;
const clave = document.getElementById("txt1").value;

var cifrado = CryptoJS.AES.encrypt(cadena, clave);

var descifrado = CryptoJS.AES.decrypt(cifrado, clave);

document.getElementById("txt2").innerHTML = cifrado;

document.getElementById("txt3").innerHTML = descifrado;


}
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
  }
  
  function mostrarContenido(contenido) {
    var elemento = document.getElementById('Sarchivo');
    elemento.innerHTML = contenido;
  }
  
  document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);

function validar(){
    var cadena = document.getElementById("Sarchivo").value;
    var clave = document.getElementById("txt1").value;
    if (cadena == "" || clave =="") {
        alert("Campos vacios");
    }else if(clave.length < 16 || clave.length > 256){
        alert("la clave debe ser mayor de 16 y menor 256 caracteres");
    }else{
    cifrado();
    leerArchivo();
    descargar();
    }
}

function funy(){
  let pp = document.getElementById("Sarchivo").value;
  const pe = document.getElementById("txt1").value;
  var descifrado = CryptoJS.AES.decrypt(pp, pe);
  if(pp =="" || pe ==""){
    alert("No se han encontrado el archivo")
  }else{
  document.getElementById("txt3").innerHTML = descifrado;
  document.getElementById("txt4").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
  }
  }

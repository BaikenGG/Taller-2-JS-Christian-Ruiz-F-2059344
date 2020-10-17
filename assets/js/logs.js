var listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));

console.log(listaUsuarios[2])
console.log(listaUsuarios)

logs.addEventListener('submit', (e)=> {

e.preventDefault()

var user = document.getElementById("usuario").value;
var contra = document.getElementById("contrasena").value;
  if(user == listaUsuarios[1] && contra == listaUsuarios[2])
    { 
       alert("Bienvenido");
          window.location.href="perfil.html"
        sessionStorage.setItem ('Nombre ', listaUsuarios[0]);
       sessionStorage.setItem ('Usuario ', listaUsuarios[1]);
        sessionStorage.setItem ('Contraseña ', listaUsuarios[2]);
        
    }else{
   alert("Usuario/Contraseña incorrectos");

   window.location="index.html"
    }
    
});

function llenar() {
$("#nombre").val(listaUsuarios[0]);
$("#usuario").val(listaUsuarios[1]);
$("#contrasena").val(listaUsuarios[2]);
}

   
function cerrarsesion(){
	sessionStorage.clear();
	location.href="index.html"
 
}



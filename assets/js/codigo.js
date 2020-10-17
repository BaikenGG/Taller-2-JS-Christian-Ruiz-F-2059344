let usuariosStorage = JSON.parse(localStorage.getItem('usuarios'));


btnIn.addEventListener('submit', (e)=> {

e.preventDefault()
const usuario = document.getElementById("usuario").value;
const nombre = document.getElementById("nombre").value;
const contrasena = document.getElementById("contrasena").value;

const listaUsuarios = [];
listaUsuarios.push(nombre);
listaUsuarios.push(usuario);
listaUsuarios.push(contrasena);


if (usuario === "" || nombre === ""|| contrasena === "") {
    alert("Tiene 1 o varios campos vacíos")
    return false;
  }else{
     if (usuariosStorage[1] === listaUsuarios[1]){
      alert("Ese nombre de usuario ya se enceuntra ocupado :/")
      return false;
    }else{

let guardaUsuarios = JSON.stringify(listaUsuarios);
localStorage.setItem('usuarios',guardaUsuarios);
window.location="index.html"
localStorage.setItem('usuario',usuario);
}
}
});
    


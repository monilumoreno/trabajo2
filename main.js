// acceder al DOM


class Usuarios{

    /*atributos de la clase*/
    nombres
    apellidos
    identificacion
    nIdentificacion
    celular
    correoE
    password

    /*creacion de metodos o constructores*/

    constructor (pNombres, pApellidos, pIdentificacion, pnIdentificacion, pCelular, pCorreoE, pPassword){
    this.nombres=pNombres
    this.apellidos=pApellidos
    this.identificacion=pIdentificacion
    this.nIdentificacion=pnIdentificacion
    this.celular=pCelular
    this.correoE=pCorreoE
    this.password=pPassword 
    }

    nombreCompleto(){

        return this.nombres+' '+ this.apellidos 
    }

    }
    
function datos () {

//creamos variables
var $nombres = document.getElementById("txtNombres").value
var $apellidos = document.getElementById("txtApellidos").value
var $identificacion = document.getElementById("txtIdentificacion").value
var $nIdentificacion = document.getElementById("txtNoIdentificacion").value   
var $celular = document.getElementById("txtCelular").value
var $correoE = document.getElementById("txtCorreoE").value
var $password = document.getElementById("txtPassword").value


const datosUsuarios = new Usuarios($nombres, $apellidos, $identificacion, $nIdentificacion, $celular, $correoE, $password)
const nombreCompleto= datosUsuarios.nombreCompleto()
alert (`Señor:  ${nombreCompleto}`)
console.log(datosUsuarios)


}







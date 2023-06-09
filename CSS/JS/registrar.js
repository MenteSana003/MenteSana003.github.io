function Registrarse(){
    var nombre=document.getElementById("nombre").value;
    var sobrenombre=document.getElementById("sobrenombre").value;
    var edad=document.getElementById("edad").value;
    var ID=document.getElementById("ID").value;
    

    if (nombre=="") {
        
    }
    else {
        console.log(ID + " / " + nombre + " / " + sobrenombre + " / " + edad);
        document.getElementById("nombre").value="";
        document.getElementById("sobrenombre").value="";
        document.getElementById("edad").value="";
        document.getElementById("ID").value="";
    }
     
}
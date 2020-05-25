contraseña = "123456";

function ok(){
    document.getElementById("password").value;
    if(document.getElementById("password").value  == contraseña){
       alert("contraseña correcta");
       MenuPrincipal();
    }else{
        document.getElementById("password").value = "";
        alert("contraseña incorrecta")
    }
}

function MenuPrincipal(){
    window.location = "MenuPrincipal.html";
}
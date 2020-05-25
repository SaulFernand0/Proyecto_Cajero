contraseña = "123456";

function ok(){
    document.getElementById("password").value;
    if(document.getElementById("password").value  == contraseña){    
       document.getElementById("alerta").style.display = 'Block';
       MenuPrincipal();
    }else{
        document.getElementById("password").value = "";
        document.getElementById("alerta1").style.display = 'Block';
    }
}

function MenuPrincipal(){
    window.location = "MenuPrincipal.html";
}
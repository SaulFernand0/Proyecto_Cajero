function consultas(){
    window.location = "consultas.html"
}

function gracias(){
    window.location = "gracias.html";
}

function ingresarmonto(){
    window.location = "ingresarmonto.html";
}

function MenuPrincipal(){
    window.location = "MenuPrincipal.html";
}

function otrascantidades(){
    window.location = "otrascantidades.html";
}

function otrascantidadesdolares(){
    window.location = "otrascantidadesdolares.html";
}

function retiro(){
    window.location = "retiro.html";
}

function retirodolares(){
    window.location = "retirodolares.html";
}

function retirosoles(){
    window.location = "retirosoles.html";
}

function transaccionprocesada(){
    window.location = "transaccionprocesada.html";
}

function transaccionprocesadadolares(){
    window.location = "transaccionprocesadadolares.html";
}

/* validacion multiplo de 10 */

var dinero = 7000;

function caja_monto(){
    var monto = Number(document.getElementById("password").value);

    if(document.getElementById("password").value == ""){ 
        document.getElementById("alerta3").style.display = 'Block';

    }else{   

    document.getElementById("password").value;
    if(monto % 10 == 0){
        var monto_descuento = Number((document.getElementById("password").value));
        var resultante = dinero - monto_descuento;
        alert(resultante);
        dinero = resultante;
        document.getElementById("alerta4").style.display = 'Block';
       transaccionprocesada();
    }else{
        document.getElementById("password").value = "";
        document.getElementById("alerta5").style.display = 'Block';
    }
}
}

/* consulta saldo */
document.getElementById("consultas").value = dinero;
function consulta(){

}

/* validacion opciones soles */

function retiro_20(){
    document.getElementById("boton1").value;
    document.getElementById("alerta2").style.display = 'Block';
    transaccionprocesada();
}

function retiro_150(){
    document.getElementById("boton1").value;
    document.getElementById("alerta2").style.display = 'Block';
    transaccionprocesada();
}

function retiro_390(){
    document.getElementById("boton1").value;
    document.getElementById("alerta2").style.display = 'Block';
    transaccionprocesada();
}

function retiro_100(){
    document.getElementById("boton1").value;
    document.getElementById("alerta2").style.display = 'Block';
    transaccionprocesada();
}

function retiro_200(){
    document.getElementById("boton1").value;
    document.getElementById("alerta2").style.display = 'Block';
    transaccionprocesada();
}

/* validacion multiplo de 10 dolares */

function caja_monto_dolares(){
    var monto = Number(document.getElementById("password").value);

    if(document.getElementById("password").value == ""){ 
        alert("Por favor ingrese una cantidad ")

    }else{  

    document.getElementById("password").value;
    if(monto % 10 == 0){
       alert("Trasaccion exitosa");
       transaccionprocesadadolares();
    }else{
        document.getElementById("password").value = "";
        alert("Ingrese un multiplo de 10")
    }
}
}

/* validacion opciones dolares */

function retiro_20d(){
    document.getElementById("boton1").value;
    alert("Transaccion exitosa");
    transaccionprocesadadolares();
}

function retiro_150d(){
    document.getElementById("boton1").value;
    alert("Transaccion exitosa");
    transaccionprocesadadolares();
}

function retiro_390d(){
    document.getElementById("boton1").value;
    alert("Transaccion exitosa");
    transaccionprocesadadolares();
}

function retiro_100d(){
    document.getElementById("boton1").value;
    alert("Transaccion exitosa");
    transaccionprocesadadolares();
}

function retiro_200d(){
    document.getElementById("boton1").value;
    alert("Transaccion exitosa");
    transaccionprocesadadolares();
}

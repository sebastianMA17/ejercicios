function opercaciones(){
    var numero1=document.getElementById('cajaTexto1').value;
    var numero2=document.getElementById('cajaTexto2').value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
     if(numero1>numero2){
        alert('el numero '+numero1+' es mayor que el numero '+numero2);
    }
    else{
        alert('el numero '+numero2+' es myor que el numero '+numero1);
    }
    return false;

}

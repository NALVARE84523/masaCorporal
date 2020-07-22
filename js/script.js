let peso = prompt("Ingresa tu peso: ");
let altura = prompt("Ingresa tu altura: ", "En centimetros");

    function masaCorporal(){
    let resultado = (peso/(Math.pow(altura, 2))).toFixed(1);
    let estado;
    
    if(resultado <= 15){
        estado = "delgadez muy severa.";
    }else if(resultado <= 15.9){
        estado = "delgadez severa."
    }else if(resultado <= 18.4){
        estado = "delgadez";
    }else if(resultado <= 24.9){
        estado = "peso saludable.";
    }else if(resultado <= 29.9){
        estado = "sobrepeso";
    }else if(resultado <= 34.9){
        estado = "obesidad severa.";
    }else if(resultado >= 35){
        estado = "obesidad morbida.";
    }else{
        document.write("Escribe nuevamente los datos.");
    }
    document.write("Tu indice de masa corporal es: <p>" + resultado + "</p> Tienes " + estado);
}
    masaCorporal(peso. altura);



    let x = prompt('Ingresa un numero para mostrar la tabla de multiplicar');

    function tablaMultiplicar(x){

        document.write("<h2>Tabla de multiplicar del "+ x +"</h2>");
    
        document.write("<ul>");
    
        for(i = 1;i<=10;i++){
            document.write("<li>");
            document.write(x + " x " + i + "= " + x * i);
            document.write("</li>");
        }
    
        document.write("</ul>");
    }
    
    tablaMultiplicar(x);
/*3 chicos entran a un aheladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
    Ellos quieren comprar el helado mas caro que puedan con la plata que tienen.
Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de helados son los siguientes: 
Palito de helado de agua: $0.6 USD
Palito de helado de CREMA: $1 USD
Bombon helado marca heladix: $1.6 USD
Bombon helado marca heladovich: $1.7 USD
Bombon helado marca helardo: $1.8 USD
Potecito de helado con confites: $2.9 USD
Pote de 1/4 KG -> $2.9 USD

    CREAR SOLUCIONES: 
        -Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
        -Si hay 2 o mas con el mismo precio, mostrar ambos.
        -Cofla quiere saber cuanto es el vuelto*/

dineroCofla = prompt("Cuanto dinero tiene Cofla?");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla, comprate el helado de agua");
    alert("Y te sobran " + (dineroCofla - 0.6));
} else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, comprate el helado de crema");
    alert("Y te sobran " + (dineroCofla - 1));
}else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla,comprate el helado marca heladix");
    alert("Y te sobran " + (dineroCofla - 1.6));
}else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, comprate el helado marca heladovich");
    alert("Y te sobran " + (dineroCofla - 1.7));
}else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, comprate el helado marca helardo");
    alert("Y te sobran " + (dineroCofla - 1.8));
}else if(dineroCofla >= 2.9){
    alert("Cofla, comprate el helado con confites o un pote de 1/4kg");
    alert("Y te sobran " + (dineroCofla - 2.9));
} else{
    alert("Lo siento Cofla no te alcanza para ninguno");
}


if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto comprate el helado de agua");
    alert("Y te sobran " + (dineroRoberto - 0.6));
} else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto comprate el helado de crema");
    alert("Y te sobran " + (dineroRoberto - 1));
}else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto comprate el helado marca heladix");
    alert("Y te sobran " + (dineroRoberto - 1.6));
}else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto comprate el helado marca heladovich");
    alert("Y te sobran " + (dineroRoberto - 1.7));
}else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto comprate el helado marca helardo");
    alert("Y te sobran " + (dineroRoberto - 1.8));
}else if(dineroRoberto >= 2.9){
    alert("Roberto comprate el helado con confites o un pote de 1/4kg");
    alert("Y te sobran " + (dineroRoberto - 2.9));
} else{
    alert("Lo siento Roberto no te alcanza para ninguno");
}

if(dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro comprate el helado de agua");
    alert("Y te sobran " + (dineroPedro - 0.6));
} else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro comprate el helado de crema");
    alert("Y te sobran " + (dineroPedro - 1));
}else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el helado marca heladix");
    alert("Y te sobran " + (dineroPedro - 1.6));
}else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro comprate el helado marca heladovich");
    alert("Y te sobran " + (dineroPedro - 1.7));
}else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro comprate el helado marca helardo");
    alert("Y te sobran " + (dineroPedro - 1.8));
}else if(dineroPedro >= 2.9){
    alert("Pedro comprate el helado con confites o un pote de 1/4kg");
    alert("Y te sobran " + (dineroPedro - 2.9));
} else{
    alert("Lo siento Pedro no te alcanza para ninguno");
}


array = [];
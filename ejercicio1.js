//función para encriptar el mensaje
function encrypt(mensaje, clave)
{
    console.log("El mensaje de entrada para encriptar es: "+ mensaje);
    for(let i = 0; i< mensaje.length; i++)
    {
        mensaje[i] = mensaje[i]+clave;
    }
    console.log("El mensaje de salida encriptado es: "+ mensaje);
    return mensaje;
}

//función para desencriptar el mensaje
function decrypt(mensaje, clave)
{
    console.log("El mensaje de entrada para desencriptar es: "+ mensaje);
    for(let i = 0; i< mensaje.length; i++)
    {
        mensaje[i] = mensaje[i]-clave;
    }
    console.log("El mensaje de salida desencriptado es: "+ mensaje);
    return mensaje;
}

//Función secret que recibe el mensaje, el método y la clave.
function secret(mensaje, encriptacion, clave) 
{
    if(encriptacion === encrypt) return encrypt(mensaje, clave);
    else return decrypt(mensaje, clave);
}

//casos de prueba para el punto1 de encriptación
console.log(secret([1, 2, 3, 1, 6, 34, 23, 7, 2], encrypt, 1));
console.log(secret([2, 3, 4, 2, 7, 35, 24, 8, 3], decrypt, 1));

//Función para calcular el mcd entre dos números dados
const mcd = (a,b) => (a === b) ? a : ( (a<b) ? mcd(a,b-a): mcd(b, a-b) );

//Casos de prueba para la función mcd, punto2
console.log("El mcd entre 15 y 48 es: "+mcd(15,48));
console.log("El mcd entre 240 y 60 es: "+mcd(240,60));
console.log("El mcd entre 520 y 60 es: "+mcd(520,60));
console.log("El mcd entre 1250 y 280 es: "+mcd(1250,280));
console.log("El mcd entre 465 y 2360 es: "+mcd(465,2360)); 
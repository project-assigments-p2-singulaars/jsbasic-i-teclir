//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log("Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5")




//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
let firstname="Tecla";
let number=28;
let boolean="true";
let x=null;
let undefinedVariable=undefined;
let person={
    firstname: "Tecla",
    lastname: "Raimondo",
    age:"28",
}
let details= ["name", "lastname", "age", ]
console.log(name, number, boolean, x, undefinedVariable, person, details)




//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres= ["helado", "tarta", "pastel"]
console.log(postres)
//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder={
    firstname:"Tecla",
    age:28,
}
console.log(coder)


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof postres)
console.log(typeof coder)
console.log(typeof firstname)

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let sum = 2 + 2
console.log(sum)



//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let resta = 4 - 2
console.log(resta)




//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let multiplica = 3 * 2
console.log(multiplica)




//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let divide = 4 / 2
console.log(divide)




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let = 1 
let = 2 
console.log(1 == 2)




// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let = 1
let = 1
console.log(1 == 1)




//Ejercicio 11: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
console.log(15 != 20)

//Ejercicio 12: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
console.log(1 === "1")

//Ejercicio 13: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
console.log(1 == 1)


//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let nombre="Tecla";
let surname="Raimondo";
let names = nombre+ " "  +surname
console.log(names)





//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)


let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */

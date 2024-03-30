(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const metaXUserEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(metaXUserEmails);

  //Lista de compras de un carrito
  const shoppingCartItems: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shoppingCartItems);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (number: number): number => {
    return number + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.substring(1);
    return capitalizedWord;
  }
  
  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let eventOccurred: boolean = false;

  if(eventOccurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let canAccess: boolean = true;

  if(canAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const averageOfThreeNumbers: number = (1 + 2 + 3) / 3;

  console.log(averageOfThreeNumbers);
  
  //variable que almacena el valor de PI
  
  let piValue: number = 3.141592654;

  console.log(piValue);
  

  //variabel que controla si un archivo es modificable 
  let isFileEditable: boolean = false;

  if(isFileEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eValue: number = 2.718281828; 

  console.log(eValue);
  
})();
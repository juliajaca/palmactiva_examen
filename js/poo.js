console.log('hola mundo');
document.write('adios mundo');

//constructores
// posibilitan el uso de una plantilla. El constructor es una función
// Las instancias recogen la ifo de la plantilla para poder crear más objetos

//dentro de los paréntesis vamos a crear parámetro siempre
function coche(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

//INSTANCIAR DE UNA FUNCION CONSTRUCTORA
//new es la palabra reservada para crear nuevos objetos a partir de un constructor
var cocheUno = new coche('Toyota', 'LI', 2017);
var cocheDos = new coche('Peugeout', 'Y', 2020);


//Métodos para string
var nombre = 'Toni';
nombre = nombre.toLowerCase(); //esto son métodos
nombre = nombre.toUpperCase();

var numeroCaracteres = nombre.length; //esto es una propiedad
//document.write(numeroCaracteres); // esto es para ver como cambia en vivo cuadno añado caracteres a nombre. Con la consola no refresca por el plugin server live, que no lo hace bien esto

//Módulo matemático que está integrado en JS: Math
var resultado = (50.9 * 20 * 8 /100);

var resultadoRedondear = Math.round(50.9 * 20 * 8 /100);

//cuantos decimales quieres
var resultadoRedondearFixed = resultado.toFixed(2);

//parseFloat-> devuelve un número con decimales
var resultadoParseFloat = parseFloat(resultado);

//parseInt para convertir un float a entero
var resultadoParseInt = parseInt(resultado);


document.write(resultado + "<br>");
document.write(resultadoRedondear+ "<br>");
document.write(resultadoRedondearFixed);
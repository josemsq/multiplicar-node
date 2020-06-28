//requireds
//const fs = require('fs'); //proyecto propip (ya existe y se añade)
//const fs = require('express'); //paquete no nativos de node de terceros
//const fs = require('./fs'); // de archivos de nuestro proyecto

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar'); //destructuracion

//let base = "4";

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

// console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));
//console.log(process.argv);

//console.log(multiplicar);
//console.log(module);

//npm init -- inicializar el package.json
//npm install -- reahcer los node_modules
//npm install --save-dev nodemon // uninstall
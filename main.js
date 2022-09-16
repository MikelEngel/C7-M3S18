/*  
1. Importar Express y sus funciones
2. Hacer instancia de la aplicacción
3. Middleware
4. Declarar las rutas
5. Levantar el servidor
*/


 
//! 1. Importar tods nuestras bibliotecas

const express = require ('express');

//! 2. Hacer instancia de la aplicacción Express y <>

const app = express();

//! 3. Middleware

app.use(express.json());

//! 4. Declarar las rutas

app.get("/", (req, res)=>{
    res.json({mensaje:'Hola'})
});
app.post

//! 5. Levantar el servidor

app.listen(3001, ()=>{
    console.log ('La aplicación corre en el puerto:' + 3001)

});

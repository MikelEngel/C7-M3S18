/*  
1. Importar Express y sus funciones
2. Hacer instancia de la aplicacción
3. Middleware
4. Declarar las rutas
5. Levantar el servidor
*/

const mascotas = [
    {
        tipo: "Perro",
        edad: 5,
        color: "Blanco",
        peso: "8 kg",
        nombre: "Pedro"

    },

    {
        tipo: "Gato",
        edad: 2,
        color: "negro",
        peso: "3 kg",
        nombre: "Michi"

    },
]
 
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


//CREATE - Se hace con POST
app.post("/masacota", (req, res)=>{
    const { tipo, edad, color, peso, nombre } = req.body;
    mascotas.push( {tipo, edad, color, peso, nombre});
    res.jason({mensaje: "Mascota registrada", data:mascotas});
});

//READ - GET
app.get ("/mascota", (req, res)=> {
    res.json({ mascotas });
});


//! 5. Levantar el servidor

app.listen(3001, ()=>{
    console.log ('La aplicación corre en el puerto:' + 3001)

});

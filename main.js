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

    {
        tipo: "Perro",
        edad: 5,
        color: "Negro",
        peso: "8 kg",
        nombre: "Cuco"

    },

    {
        tipo: "Gato",
        edad: 2,
        color: "Marrón",
        peso: "3 kg",
        nombre: "Felix"

    },

]
const peliculas = [
    {
        tipo: "Rápido y furioso",
        year: "2002",
        genero: "accion",
        precio: 20
    }
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

//CREATE - Se hace con POST PELICULAS
app.post("/pelicula", (req, res)=>{
    const { tipo, year, genero, precio } = req.body;
    peliculas.push( {tipo, year, genero, precio});
    res.jason({mensaje: "Pelicula agregada", data:peliculas});
});

//READ - GET
app.get ("/pelicula", (req, res)=> {
    res.json({ peliculas });
});


//UPDATE - PUT

app.put("/mascota", (req, res)=> {
   /*  let indice = -1;
    //Buscar y editar.
    for(let i = 0; i<mascotas.length; i++){
        if (mascotas [i].nombre === req.params.nombre){
            indice=i;
        }
    } */

    const indice = mascotas.findIndex ((mascota)=> mascota.nombre === req.params.nombre);

    if (indice === -1){
        res.jason({error: 'No se encontro a la mascota'});

    }

    const{ tipo,
        edad,
        color,
        peso,
        nombre,
    } =req.body;
    mascotas[indice] = {
        ...mascotas[indice],
        ...{
            tipo,
            edad,
            color,
            peso,
            nombre,  
        },
    };

    res.json({ mascotaEditada: mascotas[indice], todasMascotas: mascotas });

});

//! 5. Levantar el servidor

app.listen(3001, ()=>{
    console.log ('La aplicación corre en el puerto:' + 3001)

});

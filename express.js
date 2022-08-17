const express = require('express');//Cualquier nombre se puede poner en la variable, aquí le estamos diciendo que traiga el módulo "Express"
const { get } = require('http');
const app = express();//le decimos que con el constructor "express" me cree una aplicación 
const PORT = process.env.PORT || 3000; //pregunta cuál es el puerto asignado para la app, y si no está definido, que use el 9000 o cualquier otro puerto
//Vamos a definir el path del proyecto en una variable para que sin importar donde yo abra el proyecto, no me ponga problema
const path = require('path');

app.set('view engine', 'ejs');//Set o setear es configurar, está asignando o configurando algo
//En este caso le vamos a asignar el motor de vistas o de renderizado y le decimos cuál vamos a usar (ejs, pug, etc)
app.set('views', path.join(__dirname, 'src/views'))//Le estoy diciendo que debe buscar esta ruta por defecto

app.get("/", (requ, res)=>{
    res.render('pages/index')//Render porque es el que va a renderizar y mostrar la plantilla
})
app.get("/error",(req, res)=>{
    res.render('pages/error')
})
app.get('/registrar', (req, res)=>{
    res.render('pages/registrar')
})
app.get('/listar', function(req, res) {
    var Aprendices = [
        { nombre: 'Sammy', Ficha: "2364481", Promedio: 3.8},
        { nombre: 'Tux', Ficha: "2364481", Promedio: 4.3},
        { nombre: 'Moby Dock', Ficha: "2364481", Promedio: 3.0}
    ];
    var descrip = "ADSI jornada de la mañana";

    res.render('pages/listar', {
        matriculados: Aprendices,
        descripcion: descrip
    });
});

app.use(express.static('src/views/static/'));//esta es la ruta base para los elementos estáticos



app.listen(PORT, (req,res)=>{//Estándar, se le dice que resiva el request y el response
    console.log(`Ejecutando la aplicación AprendiendoNodeValeriaBustamante en el puerto: ${PORT}`)
})
/*
app.get("/", (req, res)=>{//Ponemos la raiz del proyecto, función callback puede ser una función flecha o puede ser un llamado a otra función o anónima
    res.send("Bienvenido")//Esto es lo que responde cuando llega una petición get a la raiz, "/" esta es la ruta de la app
})

app.get("/about", (req, res)=>{
    res.send("Esta es la página about")
})*/

// importar las bibliotecas
const { Console } = require('console');
const express = require('express');
const path = require('path');
const aboutmeRoutes = require('./routes/aboutme')
const hw2Routes = require('./routes/hw2')

const app = express(); // create an express application
const PORT = 8080

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/about', aboutmeRoutes)
app.use('/homeworks', hw2Routes)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

//Lanzar la app
app.listen(PORT,()=>{
    console.log("servidor en línea");
});
let express = require ("express")
var cors = require('cors')
let bodyParser =  require("body-parser");
let movies = require("./movies");

let  app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/",(req,res)=>{ res.end("Hola!")})

app.get("/movies",async (req,res)=>{
    //let filas = personas.consultar().reduce((x,y) => x + `<tr><td>${y.nombre}</td></tr>`,'')
    //res.end(`<table border=1>${filas}</table>`)
    const resultado = await movies.consultar()
    res.setHeader("Content-type","application/json")
    res.end(JSON.stringify(resultado))

})

app.get("/movies/:id",async (req,res)=>{
    //let filas = personas.consultar().reduce((x,y) => x + `<tr><td>${y.nombre}</td></tr>`,'')
    //res.end(`<table border=1>${filas}</table>`)
    const resultado = await movies.consultarPorId(req.params.id)
    res.setHeader("Content-type","application/json")
    res.end(JSON.stringify(resultado))

})

app.post("/movie", (req,res) => {
    const newMovie = {key:req.body.key, title: req.body.title, description: req.body.description,fecha: req.body.fecha, calificacion: req.body.calificacion ,img:req.body.img} 
    movies.agregar(newMovie)
    res.status(201)
    res.end()
})

app.put("/movie/:idMovie", async(req,res) => {
    const idMovie = (req.params.idMovie)
    const newMovie = { title: req.body.title, description: req.body.description,fecha: req.body.fecha, calificacion: req.body.calificacion ,img:req.body.img} 
    const resultado = await movies.editar(idMovie,newMovie)
    res.setHeader("Content-type","application/json")
    res.end(JSON.stringify(resultado))
})

app.delete("/movie/:idMovie", async(req,res) => {
    const resultado = await movies.eliminar((req.params.idMovie))
    res.setHeader("Content-type","application/json")
    res.end(JSON.stringify(resultado))
})

app.listen(8000)
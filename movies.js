
let movies = []

async function consultar(){
    movies.sort(function (a, b) {
        if (b.fecha > a.fecha) {
            if (b.calificacion > a.calificacion){
                return 1;
            }
           
        }
        if (b.fecha < a.fecha) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
  
      return movies //.sort(movies => movies.fecha < fecha)  
  
}

async function consultarPorId(idMovie){
    return movies.filter(movies => movies.id === idMovie) 
}

async function agregar(movie){
    movies.push(movie)
}

async function editar(idMovie, movie){
    let modifiedMovie = movies.find(movies => movies.id === idMovie)
    console.log(modifiedMovie)
    modifiedMovie.title = movie.title
    modifiedMovie.description = movie.description
    modifiedMovie.fecha = movie.fecha
    modifiedMovie.calificacion = movie.calificacion
    modifiedMovie.img = movie.img
    //movies[idMovie]={nombre:movie.nombre,description:movie.description,fecha:movie.fecha,calificacion: movie.calificacion} = {movie}
    return movies
}

async function eliminar(idMovie){
    movies = movies.filter(movies => movies.id !== idMovie)
    
    //movies.splice(modifiedMovie)
    return movies
    
}

exports.consultar = consultar
exports.agregar = agregar
exports.editar = editar
exports.eliminar = eliminar
exports.consultarPorId = consultarPorId
function getIndex(req, res){
    res.json({
        msj: "Hola mundo despues de desplegar con Heroku, WOW"
    });
}

function postIndex(req, res){
    res.json({
        msj: "Hola desde postIndex"
    });
}


module.exports = { getIndex, postIndex };
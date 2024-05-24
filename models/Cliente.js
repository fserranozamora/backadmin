const { version } = require("os");

const mongoose = require ('mongoose');

//Modelo que vamos a trabajar es igual a la BD ya establecida

const clienteSchema = mongoose.Schema({


nombres:{
    type: String,
    require:true
},
apellidos:{
    type: String,
    require:true
},
cedula:{
    type: Number,
    require:true
},
correo:{
    type: String,
    require:true
},
telefono:{
    type: Number,
    require:true
},
direccion:{
    type: String,
    require:true
},
},{versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema)
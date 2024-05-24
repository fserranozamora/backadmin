const { version } = require("os");

const mongoose = require ('mongoose');

//Modelo que vamos a trabajar es igual a la BD ya establecida

const productoSchema = mongoose.Schema({

    nombre_producto: {
        type: String,
        required: true
    },

    unidades: {
        type: Number,
        required: true
    },

    precio_unitario: {
        type: String,
        required: true
    },

    precio_total: {
        type: String,
        required: true
    },
},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema)
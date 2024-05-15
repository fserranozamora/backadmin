const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre: {
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
    }
}, {versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);
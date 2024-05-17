const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    documento: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    telefono: {
        type: Number,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },
}, {versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema);
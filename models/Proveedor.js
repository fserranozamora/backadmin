const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    
    nit: {
        type: String,
        required: true
    },

    correo: {
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

module.exports = mongoose.model('Proveedor', proveedorSchema);
// modelo de datos para exportar
const Cliente = require('../models/Cliente');

/// funcion agregar clientes
exports.agregarClientes = async (req, res) => {

    try {
        let cliente
        cliente = new Cliente(req.body)
        await cliente.save();
        res.json(cliente);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}


// Funcion para buscar los clientes si están en la base de datos
exports.mostrarClientes = async(req,res) => {
    try{
        const clientes = await Cliente.find();
        res.json({clientes})

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar clientes');
    }
}

// mostrar un solo cliente

exports.mostrarUnCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).send({ msg: "No se encuentra el cliente con ese ID" });
            return
        }
        res.json(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}

//  funcion para eliminar cliente

exports.eliminarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({ msg: "El cliente no existe" });
            return
        }
        await Cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El cliente fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente en la BD');
    }
}


// Funcion para actualizar los datos de un cliente

exports.modificarCliente = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.json({cliente})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar al cliente');

    }

    exports.actualizarCliente = async(req, res) => {
        try {
            const {nombres, apellidos,documento, correo, telefono, direccion} = req.body
            let cliente = await Cliente.findById(req.params.id);
    
            if(!cliente){
                res.status(404).json({msg: 'el cliente no existe'});
                return
            }
                cliente.nombres = nombres;
                cliente.apellidos = apellidos;
                cliente.documento = documento;
                cliente.correo = correo;
                cliente.telefono = telefono;
                cliente.direccion = direccion;
    
                cliente =await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
                res.json(cliente);
    
        } catch (error) {
            console.log(error)
            res.status(500).send('hubo un error al actualizar un cliente');
        }
}

}
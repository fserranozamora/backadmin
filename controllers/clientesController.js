//Exportar el modelo
const Cliente = require('../models/Cliente');

// función agregar clientes

exports.agregarClientes = async(req, res) => {

    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}

// funcion mostrar clientes

exports.mostrarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find()
        res.json({clientes});

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al mostrar los clientes')
    }
}

// Funcion mostrar un cliente

exports.mostrarUnCliente = async(req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id); 
        if(!clientes) {
            res.status(404).json({ msg: 'No se encuentra el cliente con ese Id'}); 
        }
        res.send(clientes);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al buscar un cliente en la web')
    }
}

// Eliminar clientes

exports.eliminarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes) {
            res.status(404).json({msg: 'El cliente no existe'});
            return
        }
        await Cliente.findOneAndDelete({_id:req.params.id}); 
        res.json({msg: 'El cliente fue eliminado'});

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al eliminar clientes en la base de datos')
    }
}

// Actualizar clientes

/*exports.modificarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!cliente) {
            return res.status(404).send('Cliente no encontrado')
        }
        res.json(cliente)
    } catch (err) {
        console.log(err);
        res.status(500).send('Hubo un error al modificar el cliente')
    }
} */

exports.actualizarCliente = async (req, res) => {
    try {
        const {nombres, apellidos, cedula, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente) {
            res.status(404).json({msg: 'El cliente no existe'});
            return
        }
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.cedula = cedula;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new: true});
            res.json(cliente);

    } catch (err) {
        console.log(err)
        res.status(500).send('Hubo un error al actualizar el cliente');
    }

}
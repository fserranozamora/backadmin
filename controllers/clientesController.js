const Cliente = require('../models/Cliente');

exports.agregarClientes = async(req, res) => {

    try {
        let clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente')
    }
}

exports.mostrarClientes = async(req, res) => {

    try {
        let clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los clientes')
    }
}

exports.mostrarUnCliente = async(req, res) => {

    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: "El cliente no se encuentra con este ID"});
        }
        res.send(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar un cliente en la web')
    }
}

exports.eliminarClientes = async(req, res) => {
    try{
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg: "El cliente no existe"});
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente fue eliminado"});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar un cliente en la base de datos")
    }
}

exports.modificarCliente = async(req, res) => {
    try{
        const {nombres, apellidos, cedula, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
res.status(404).json({msg: "El cliente no existe"});
return
        }
        cliente.nombres=nombres;
        cliente.apellidos=apellidos;
        cliente.cedula=cedula;
        cliente.correo=correo;
        cliente.telefono=telefono;
        cliente.direccion=direccion;

        cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new:true});
        res.json(cliente);
    }catch (error){
console.log(error)
res.status(500).send('Hubo un error al actualizar el cliente');
    }
}
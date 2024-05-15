const Proveedor = require('../models/Proveedor');
const Producto = require('../models/Proveedor');

exports.agregarProveedores = async(req, res) => {

    try {
        let proveedores = new Proveedores(req.body)
        await proveedores.save();
        res.send(proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un proveedor')
    }
}

exports.mostrarProveedores = async(req, res) => {

    try {
        let proveedores= await Proveedores.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los proveedores')
    }
}

exports.mostrarUnProveedor= async(req, res) => {

    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: "El proveedor no se encuentra con este ID"});
        }
        res.send(proveedor);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar un proveedor en la web')
    }
}

exports.eliminarProveedores= async(req, res) => {
    try{
        let proveedores = await Proveedores.findById(req.params.id);
        if(!proveedores){
            res.status(404).json({msg: "El proveedor no existe"});
            return
        }
        await Proveedores.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El proveedor fue eliminado"});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar un proveedor en la base de datos")
    }
}

exports.modificarProveedor = async(req, res) => {
    try{
        const {nombre, nit, correo, telefono, direccion} = req.body
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
res.status(404).json({msg: "El proveedor no existe"});
return
        }
        proveedor.nombre=nombre;
        proveedor.nit=nit;
        proveedor.correo=correo;
        proveedor.telefono=telefono;
        proveedor.direccion=direccion;

        proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id}, proveedor, {new:true});
        res.json(proveedor);
    }catch (error){
console.log(error)
res.status(500).send('Hubo un error al actualizar el provedor');
    }
}
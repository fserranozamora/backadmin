const Producto = require('../models/Producto');

exports.agregarProductos = async(req, res) => {

    try {
        let productos = new Producto(req.body)
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un producto')
    }
}

exports.mostrarProductos = async(req, res) => {

    try {
        let productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los productos')
    }
}

exports.mostrarUnProducto = async(req, res) => {

    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).json({msg: "El producto no se encuentra con este ID"});
        }
        res.send(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar un producto en la web')
    }
}

exports.eliminarProductos = async(req, res) => {
    try{
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).json({msg: "El producto no existe"});
            return
        }
        await Producto.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El producto fue eliminado"});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar un producto en la base de datos")
    }
}

exports.modificarProducto = async(req, res) => {
    try{
        const {nombre, unidades, precio_unitario, precio_total} = req.body
        let producto = await Producto.findById(req.params.id);
        if(!producto){
res.status(404).json({msg: "El cliente no existe"});
return
        }
        producto.nombre_producto=nombre;
        producto.unidades=unidades;
        producto.precio_unitario=precio_unitario;
        producto.precio_total=precio_total;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new:true});
        res.json(producto);
    }catch (error){
console.log(error)
res.status(500).send('Hubo un error al actualizar el producto');
    }
}
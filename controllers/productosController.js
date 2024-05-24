// modelo de datos para exportar
const Producto = require('../models/Producto');

/// funcion agregar productos
exports.agregarProductos = async (req, res) => {

    try {
        let producto
        producto = new Producto(req.body)
        await producto.save();
        res.json(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto')
    }
}


// Funcion para buscar los productos si están en la base de datos
exports.mostrarProductos = async(req,res) => {
    try{
        const productos = await Producto.find();
        res.json({productos})

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar productos');
    }
}

// mostrar un solo productos

exports.mostrarUnProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).send({ msg: "No se encuentra el cliente con ese ID" });
            return
        }
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un producto');
    }
}

//  funcion para eliminar producto

exports.eliminarProductos = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ msg: "el producto no existe" });
            return
        }
        await Producto.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El producto fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al elimina un producto en la BD');
    }
}


// Funcion para actualizar los datos de un cliente

exports.modificarProducto = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!Producto) {
            return res.status(404).send({msn:'El producto no existe'});

        }

        res.json({ msg: "El cliente fue modificado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar el producto');
    }
}




//esta funcion es para actualizar los datos de un producto

exports.actualizarCliente = async(req, res) => {
    try {
        const {nombre_producto, unidades, precio_unitario, precio_total} = req.body
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: 'El producto no existe'});
            return
        }
            producto.nombre_producto = nombre_producto;
            producto.unidades = unidades;
            producto.precio_unitario = precio_unitario;
            producto.precio_total = precio_total;
            

            producto =await Producto.findOneAndUpdate({_id: req.params.id}, producto,{new:true});
            res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar un producto');
    }

}
const express = require ('express');
const router = express.Router();
const ProductosController = require ('../controllers/productosController');


router.post('/',ProductosController.agregarProductos);
router.get('/',ProductosController.mostrarProductos);
router.get('/:id',ProductosController.mostrarUnProducto);
router.delete('/:id',ProductosController.eliminarProductos);
router.put('/:id',ProductosController.modificarProducto);
//router.put('/:id',ProductosController.actualizarProducto);
//router.patch('/:id', ProductosController.modificarProducto);


module.exports = router;
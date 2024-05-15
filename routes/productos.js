const express = require ('express');
const router = express.Router();
const ProductoController = require ('../controllers/productoController');

router.post('/', ProductoController.agregarProductos);
router.get('/', ProductoController.mostrarProductos);
router.get('/:id', ProductoController.mostrarUnProducto);
router.delete('/:id', ProductoController.eliminarProductos);
router.put('/:id', ProductoController.modificarProducto);

module.exports = router;
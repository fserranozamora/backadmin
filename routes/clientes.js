const express = require ('express');
const router = express.Router();
const ClientesController = require ('../controllers/clientesController');


router.post('/',ClientesController.agregarClientes);
router.get('/',ClientesController.mostrarClientes);
router.get('/:id',ClientesController.mostrarUnCliente);
router.delete('/:id',ClientesController.eliminarClientes);
//router.put('/:id',ClientesController.modificarClientes);
//router.patch('/:id',ClientesController.modificarClientes);
router.put("/:id",ClientesController.actualizarCliente);


module.exports = router;

const express = require ('express');
const router = express.Router();
const ClienteController = require ('../controllers/clientesController');


router.post('/',ClienteController.agregarClientes);
router.get('/',ClienteController.mostrarClientes);
router.get('/:id',ClienteController.mostrarUnCliente);
router.delete('/:id',ClienteController.eliminarClientes);
router.put('/:id',ClienteController.modificarCliente);
//router.put('/:id',ClienteController.actualizarCliente);
//router.patch('/:id', ClienteController.modificarCliente);


module.exports = router;
const express = require ("express");
const router = express.Router();
const {check} = require ("express-validator");
const usuariosController = require ('../controllers/usuariosController');

router.post(
    "/", [
        check("nombre", "El nombre debe ser obligarotio").not().isEmpty(),
        check("email", "Digite un email válido").isEmail(),
        check("password", "La contraseña debe tener 8 carácteres").isLength({
            min: 8,
        }),
    ],
    usuariosController.crearUsuario
    );
    
    module.exports = router;
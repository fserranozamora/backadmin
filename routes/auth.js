const express = require ("express");
const router = express.Router();
const { check } = require ("express-validator");
const authController = require ('../controllers/authController');
const auth = require ('../middleware/auth');

router.post(
    "/", [
        check("email", "Digite un email válido").isEmail(),
        check("password", "La contraseña debe tener 8 carácteres").isLength({
            min: 8,
        }),
    ],
    authController.autenticarusuario
    );
    
    router.get("/", auth, authController.usuarioAutenticado);
    
    module.exports = router;
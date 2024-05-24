const express = require( "express");
const router = express.Router();
const { check } = require ("express-validator");
const authController = require ("../controllers/authController");
const auth = require ("../middleware/auth");

//autenticar el usuario ---// api/auth

router.post(
    "/", [ 
        check("email", "Digite un correo electrónico válido").isEmail(),
        check("password", "La contraseña debe tener minimo 8 caracteres").isLength({
            min: 8,
        }),  
    ],
authController.autenticarusuario
);

router.get("/",auth , authController.autenticarusuario);


module.exports = router;
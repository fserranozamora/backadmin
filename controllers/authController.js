const Usuario = require("../models/Usuario");
const bcrypyjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarusuario = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { email, password } = req.body;

    try {
        let usuario = await usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "El ususrio no está registrado" });
        }
        const passCorrecto = await bcrypyjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({ msg: "La contraseña es incorrecta" });
        }

        const payload = {
            usuario: { id: usuario.id },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 43200,
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log("Hubo un error");
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}

exports.usuarioAutenticado = async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});
    } catch (error) {
        res.status(400).json({msg: "Hubo un error"});
    }
}
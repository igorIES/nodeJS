"use strict";

import {check, validationResult } from 'express-validator';

export const validacion = [
    // validar nombre del cliente
    check("nameCliente").exists().notEmpty().isLength({min:5, max:40}).withMessage('El nombre del cliente no debe estar vacio, debe tener entre 5 y 40 caracteres'),
    check("emailCliente").exists().notEmpty().isEmail().withMessage('El email del cliente no debe estar vacio, debe tener formato de email'),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9, max:9}).isNumeric().withMessage('El telefono del cliente no debe estar vacio, debe tener 9 numeros'),
    check("empresaCliente").exists().notEmpty().matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,49}/).withMessage('La empresa del cliente no debe estar vacio, debe empezar por maýscula y contener entre 5 y 50 caracteres'),
    (req, res, next)=>{
        const errors = validationResult(req); // array tantas filas coomo campos valide
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() // devolver mensaje
            })
        } else { // todo correcto
            next(); // sigue la ejecución del siguiente middleware
        }
    }
]
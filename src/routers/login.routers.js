"use strict";

import {Router} from 'express';
import conexion from '../mysql_conector.js';

const router = Router();

router.get("/login", async (req, res) => {
    // res.send('Obteniendo login');
    const [result] = await conexion.query("SELECT 1+1 as result");
    res.json(result[0]);
})

export default router; // exportamos
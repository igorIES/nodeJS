"use strict";

// instalar paquete express  (npm i express)
/**
 * El paquete express es el framework de bakend mas popular de node
 * Proporciona un comnjunto de herramientas para aplicaciones web, peticiones y respuestas http
 * enrutamiento y middleware para construir y desplegar aplicaciones a gran escala
 */

// configurar un servidor express
import express from 'express';
import routerCliente from "./routers/clientes.routers.js";
import routerLogin from "./routers/login.routers.js";
import { PORT } from './config.js';
import cors from 'cors';

const app = express();  // creado objeto con la instancia express

// configurar puerto
// const PORT = 3000;

app.use(cors());

// middleware
app.use(express.json());

app.use(routerLogin);
app.use(routerCliente);
// responde a los endpoints. Representa una accion de la API

// controlar si se pasa una ruta en la url
app.use((req, res) => {
    res.status(404).json({
        "mensaje": "endpoint no encontrado"
    })
})

app.listen(PORT, () => {
    console.log('escuchando solicitud');
})
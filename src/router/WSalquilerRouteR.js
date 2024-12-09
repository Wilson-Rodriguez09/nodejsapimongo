import { Router } from "express";
import { validarToken } from "../controller/WSautenticacionController.js";
import { actualizarAlquiler, buscarAlquiler, eliminarAlquiler, listarAlquiler, registrarAlquiler } from "../controller/WSalquilerController.js";

const ruta =Router()

ruta.get("/alquiler",validarToken,listarAlquiler)
ruta.get("/articulo/:id_articulo",buscarAlquiler)
ruta.post("/articulo",registrarAlquiler)
ruta.put("/articulo/:id_articulos",actualizarAlquiler);
ruta.delete("/articulo/:id_articulos", eliminarAlquiler);



export default ruta
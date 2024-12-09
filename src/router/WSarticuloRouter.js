import { Router } from "express";
import { validarToken } from "../controller/WSautenticacionController.js";
import { actualizarArticulo, buscarArticulo, eliminarArticulo, listarArticulos, registrarArticulo } from "../controller/WSarticulosController.js";

const ruta =Router()

ruta.get("/articulo",validarToken,listarArticulos)
ruta.get("/articulo/:id_articulo",buscarArticulo)
ruta.post("/articulo",registrarArticulo)
ruta.put("/articulo/:id_articulo",actualizarArticulo);
ruta.delete("/articulo/:id_articulo", eliminarArticulo);



export default ruta
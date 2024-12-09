import { Router } from "express";
import {validarToken} from '../controller/WSautenticacionController.js'
import { actualizarIntereses, buscarIntereses, eliminarIntereses, listarIntereses, registrarIntereses } from "../controller/WSinteresesController.js";

const ruta =Router()

ruta.get("/interes",validarToken,listarIntereses)
ruta.get("/interes/:id_interes",buscarIntereses)
ruta.post("/interes",registrarIntereses)
ruta.put("/interes/:id_interes",actualizarIntereses);
ruta.delete("/interes/:id_interes", eliminarIntereses);



export default ruta
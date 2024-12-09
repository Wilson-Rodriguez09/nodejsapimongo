import { Router } from "express";
import { validarUsuario} from '../controller/WSautenticacionController.js'


const ruta = Router()
ruta.post("/login",validarUsuario)

export default ruta

import { Router } from "express";
import { validarToken } from "../controller/WSautenticacionController.js";
import { actualizarClientes, buscarClientes, eliminarClientes, listarClientes, registrarClientes} from "../controller/WSclientesController.js";

const ruta =Router()

ruta.get("/cliente",validarToken,listarClientes)
ruta.get("/cliente/:id_cliente",buscarClientes)
ruta.post("/cliente",registrarClientes)
ruta.put("/cliente/:id_cliente",actualizarClientes);
ruta.delete("/cliente/:id_cliente", eliminarClientes);



export default ruta
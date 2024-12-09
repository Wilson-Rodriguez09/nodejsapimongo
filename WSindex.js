import express from "express"
import bodyParser from "body-parser"
import conexionMongoDB from "./src/database/WSconexionMongoDB.js";
import articulos from "./src/router/WSarticuloRouter.js";
import alquiler from "./src/router/WSalquilerRouteR.js";
import clientes from "./src/router/WSclientesRouter.js";
import interes from "./src/router/WSinteresesRouter.js";
import login from "./src/router/WSautenticacionRoute.js";


const app = express();

conexionMongoDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use(clientes)
app.use(articulos)
app.use(alquiler)
app.use(interes)
app.use(login)


app.listen(3000,()=>{
    console.log("Servidor abierto en el puerto 3000")
})


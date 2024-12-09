import ModeloClientes from '../models/WSclientes.js' 
import jwt from "jsonwebtoken";

export const validarUsuario = async (req, resp) => {
    try {
        const { identificacion } = req.body;
        if (!identificacion) {
            return resp.status(400).json({ "message": "La identificación es requerida" });
        }
        const cliente = await ModeloClientes.findOne({ identificacion });
        if (!cliente) {
            return resp.status(404).json({ "message": "Cliente no encontrado" });
        }
        const token = jwt.sign(
            {
                user: {
                    identificacion: cliente.identificacion,
                    nombres: cliente.nombres,
                },
            },
            process.env.AUTH_SECRET,
            { expiresIn: process.env.AUTH_EXPIRES } 
        );
        return resp.status(200).json({
            "message": "Token generado exitosamente",
            cliente: {
                identificacion: cliente.identificacion,
                nombres: cliente.nombres,
            },
            token,
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        return resp.status(500).json({ 'message': 'Error al generar el token' });
    }
};

export const validarToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }
        jwt.verify(token, process.env.AUTH_SECRET, (error, decoded) => {
            if (error) {
                return res.status(403).json({ message: "Token inválido o expirado" });
            }
            req.user = decoded.user;
            next();
        });
    } catch (error) {
        console.error('Error al validar el token:', error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};
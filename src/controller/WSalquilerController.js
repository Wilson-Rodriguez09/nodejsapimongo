import Alquiler from '../models/WSalquiler.js'

export const registrarAlquiler = async (req, res) => {
    try {
        const { valor, fecha, meses, descripcion, intereses, cliente, articulo } = req.body;
        const nuevoAlquiler = new Alquiler({
            valor,
            fecha,
            meses,
            descripcion,
            intereses,
            cliente,
            articulo,
        })
        const alquilerGuardado = await nuevoAlquiler.save();
        if (alquilerGuardado) {
            return res.status(200).json({ 'message' : 'Alquiler registrado exitosamente' })
        } else {
            return res.status(404).json({ 'message' : 'El Alquiler no se pudo registrar.' })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'message': 'Error en el servidor.' })
    }
};

export const listarAlquiler= async (req, res) => {
    try {
        const alquiler = await Alquiler.find()
        if(alquiler){
            return res.status(200).json({alquiler});
        }else{
            return res.status(404).json({ message: 'No se encontraron Alquileres.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const actualizarAlquiler= async (req, res) =>{
    try {
        const { id } = req.params;
        const { valor, fecha, meses, descripcion, intereses, cliente, articulo }= req.body;
        const alquilerActualizado = await Alquiler.findByIdAndUpdate(id, { valor, fecha, meses, descripcion, intereses, cliente, articulo }, {new: true});
        if(alquilerActualizado){
            return res.status(200).json({ alquilerActualizado });
        }else{
            return res.status(404).json({ message: 'No se encontró el Alquiler.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const eliminarAlquiler= async (req, res) =>{
    try {
        const { id } = req.params;
        const alquilerEilminado = await Alquiler.findByIdAndDelete(id);
        if(alquilerEilminado){
            return res.status(200).json({ message: 'Alquiler eliminado exitosamente.' });
        }else{
            return res.status(404).json({ message: 'No se encontró el alquiler.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const buscarAlquiler= async (req, res) =>{
    try {
        const { id } = req.params;
        const alquileres = await Alquiler.find({ _id: id });
        if(alquileres){
            return res.status(200).json({alquileres});
        }else{
            return res.status(404).json({ message: 'No se encontraron alquileres.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
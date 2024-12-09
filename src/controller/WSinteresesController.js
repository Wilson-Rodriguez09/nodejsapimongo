import Intereses from '../models/WSintereses.js'

export const registrarIntereses= async (req, res) => {
    try {
        const { mes , fecha, valor, alquiler } = req.body;
        const nuevoInteres = new Intereses({
            mes,
            fecha,
            valor,
            alquiler
        })
        const interesGuardado = await nuevoInteres.save();
        if (interesGuardado) {
            return res.status(200).json({ 'message' : 'Interes registrado exitosamente' })
        } else {
            return res.status(404).json({ 'message' : 'El interes no se pudo registrar.' })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'message': 'Error en el servidor.' })
    }
};

export const listarIntereses= async (req, res) => {
    try {
        const intereses = await Intereses.find()
        if(intereses){
            return res.status(200).json({intereses});
        }else{
            return res.status(404).json({ message: 'No se encontraron intereses.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const actualizarIntereses= async (req, res) =>{
    try {
        const { id } = req.params;
        const { mes , fecha, valor, alquiler }= req.body;
        const interesActualizado = await Intereses.findByIdAndUpdate(id, { mes , fecha, valor, alquiler }, {new: true});
        if(interesActualizado){
            return res.status(200).json({ interesActualizado });
        }else{
            return res.status(404).json({ message: 'No se encontró el interes.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const eliminarIntereses= async (req, res) =>{
    try {
        const { id } = req.params;
        const interesEilminado = await Intereses.findByIdAndDelete(id);
        if(interesEilminado){
            return res.status(200).json({ message: 'interes eliminado exitosamente.' });
        }else{
            return res.status(404).json({ message: 'No se encontró el interes.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const buscarIntereses= async (req, res) =>{
    try {
        const { id } = req.params;
        const intereses = await Intereses.find({ _id: id });
        if(intereses){
            return res.status(200).json({intereses});
        }else{
            return res.status(404).json({ message: 'No se encontraron intereses.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
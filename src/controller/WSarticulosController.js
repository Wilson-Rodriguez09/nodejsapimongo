import Articulo from '../models/WSarticulos.js'

export const registrarArticulo = async (req, res) => {
    try {
        const { nombre, tipo } = req.body;
        const nuevoArticulo = new Articulo({
            nombre,
            tipo,
        })
        const articuloGuardado = await nuevoArticulo.save();
        if (articuloGuardado) {
            return res.status(200).json({ 'message' : 'Artículo registrado exitosamente' })
        } else {
            return res.status(404).json({ 'message' : 'El artículo no se pudo registrar.' })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'message': 'Error en el servidor.' })
    }
    
};

export const listarArticulos= async (req, res) => {
    try {
        const articulos = await Articulo.find()
        if(articulos){
            return res.status(200).json({articulos});
        }else{
            return res.status(404).json({ message: 'No se encontraron artículos.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const actualizarArticulo= async (req, res) =>{
    try {
        const { id } = req.params;
        const { nombre, tipo } = req.body;
        const articuloActualizado = await Articulo.findByIdAndUpdate(id, { nombre, tipo }, {new: true});
        if(articuloActualizado){
            return res.status(200).json({ articuloActualizado });
        }else{
            return res.status(404).json({ message: 'No se encontró el artículo.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const eliminarArticulo= async (req, res) =>{
    try {
        const { id } = req.params;
        const articuloEliminado = await Articulo.findByIdAndDelete(id);
        if(articuloEliminado){
            return res.status(200).json({ message: 'Artículo eliminado exitosamente.' });
        }else{
            return res.status(404).json({ message: 'No se encontró el artículo.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const buscarArticulo= async (req, res) =>{
    try {
        const { id } = req.params;
        const articulos = await Articulo.find({ _id: id });
        if(articulos){
            return res.status(200).json({articulos});
        }else{
            return res.status(404).json({ message: 'No se encontraron artículos.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}

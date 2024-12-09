import {mongoose} from 'mongoose'

const ModeloArticulos = new mongoose.Schema({
    nombre: {
    type: String,
    required: true,
    },
    tipo: {
    type: String,
    enum: ['Vehiculo', 'Oro', 'Electrodomestico', 'Maquinaria', 'Herramienta'],
    required: true,
    },
});

const Articulo = mongoose.model('Articulo', ModeloArticulos);
export default Articulo;

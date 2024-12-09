import {mongoose} from 'mongoose'
const { Schema } = mongoose;

const ModeloAlquiler = new mongoose.Schema({
    valor: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    fecha: {
        type: Date,
    },
    meses: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    intereses: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WSclientes.js',    
        required: true
    },
    articulo: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'WSarticulos.js', 
        required: true
    }

});

const Alquiler = mongoose.model('Alquiler', ModeloAlquiler);
export default Alquiler;
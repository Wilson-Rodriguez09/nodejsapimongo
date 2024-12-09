import {mongoose} from 'mongoose'
const { Schema } = mongoose;

const ModeloIntereses = new mongoose.Schema({
    mes: {
        type: Number,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    valor: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    alquiler: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'WSalquiler.js', 
        required: true
    }

});

const Intereses = mongoose.model('Intereses', ModeloIntereses);
export default Intereses;
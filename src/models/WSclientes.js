import {mongoose} from 'mongoose'

const ModeloClientes = new mongoose.Schema({
    identificacion: {
        type: Number,
        required: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    fecha_nac: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },

});

const Clientes = mongoose.model('Clientes', ModeloClientes);
export default Clientes;
import Clientes from '../models/WSclientes.js'

export const registrarClientes = async (req, res) => {
    try {
        const { identificacion, nombres, direccion, telefono, fecha_nac,password } = req.body;
        const nuevoCliente = new Clientes({
            identificacion,
            nombres,
            direccion,
            telefono,
            fecha_nac,
            password,
        })
        const clienteGuardado = await nuevoCliente.save();
        if (clienteGuardado) {
            return res.status(200).json({ 'message' : 'Cliente registrado exitosamente' })
        } else {
            return res.status(404).json({ 'message' : 'El cliente no se pudo registrar.' })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 'message': 'Error en el servidor.' })
    }
};

export const listarClientes= async (req, res) => {
    try {
        const clientes = await Clientes.find()
        if(clientes){
            return res.status(200).json({clientes});
        }else{
            return res.status(404).json({ message: 'No se encontraron clientes.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const actualizarClientes= async (req, res) =>{
    try {
        const { id } = req.params;
        const { identificacion, nombres, direccion, telefono, fecha_nac,password }= req.body;
        const clienteActualizado = await Clientes.findByIdAndUpdate(id, { identificacion, nombres, direccion, telefono, fecha_nac, password }, {new: true});
        if(clienteActualizado){
            return res.status(200).json({ clienteActualizado });
        }else{
            return res.status(404).json({ message: 'No se encontró el cliente.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const eliminarClientes= async (req, res) =>{
    try {
        const { id } = req.params;
        const clienteEilminado = await Clientes.findByIdAndDelete(id);
        if(clienteEilminado){
            return res.status(200).json({ message: 'Cliente eliminado exitosamente.' });
        }else{
            return res.status(404).json({ message: 'No se encontró el Cliente.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};

export const buscarClientes= async (req, res) =>{
    try {
        const { id } = req.params;
        const clientes = await Clientes.find({ _id: id });
        if(clientes){
            return res.status(200).json({clientes});
        }else{
            return res.status(404).json({ message: 'No se encontraron clientes.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
}
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env' });


const conexionMongoDB = async () => {
  try {
    const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    await mongoose.connect(uri);
    console.log('Conectado a la base de datos ');
  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
  }
};

export default conexionMongoDB;

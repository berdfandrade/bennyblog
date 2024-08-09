// src/utils/dbConfig.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';


export const dbConnect = async (): Promise<void> => {
  dotenv.config()
  try {
    const uri = process.env.MONGO_URI || 'http//localhost:27017/blog'
    await mongoose.connect(uri);
    console.log('MongoDB conectado com sucesso');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1); 
  }
};

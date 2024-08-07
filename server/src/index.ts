// src/index.ts

import express, {Request, Response }from 'express';

import { dbConfig } from './config/dbConfig';

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());

app.get('/', (req : Request, res : Response) => {
    res.status(200).send({message : 'AJSDIAJSIDJ'})
})

// Conecta ao banco de dados
dbConfig().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

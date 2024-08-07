import express, {Request, Response }from 'express';
import { routes } from './routes';
import { dbConfig } from './config/dbConfig';

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
routes(app)

// Conecta ao banco de dados
dbConfig().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

export default app
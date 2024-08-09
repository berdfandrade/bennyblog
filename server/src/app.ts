import express, {Request, Response }from 'express';
import { routes } from './routes';
import { dbConnect } from './config/dbConfig';

const app = express();


if (process.env.NODE_ENV !== 'test') {
  dbConnect();
}

app.use(express.json());
routes(app)


export default app
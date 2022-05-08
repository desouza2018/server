import express from 'express';
import cors from 'cors';
import { routes } from './routes';


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log('http running on port 3333');
});

/**
 * Em ambiente de produção, deploy.
 * 
 * app.use(cors({
 *   origin: 'http://localhost:3000'   
 * }));
 */


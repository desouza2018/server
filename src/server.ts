import express from 'express';
import { routes } from './routes';


const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log('http running on port 3333');
});

//22:38 tempo corrido no video
/**GET, POST, PATCH, DELET
 * 
 * GET - Buscar informações
 * POST - Cadastrar informações
 * PUT - Atualizar informações
 * PATCH - Atualizar uma nformação única de uma entidade
 * DELET - Deletar uma informação
 */



import express from 'express';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

const port = process.env.PORT || 3335;

app.listen(port, () => {
  console.log('Servidor Iniciado na porta 3333!');
});

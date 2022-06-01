import 'dotenv/config'

import usuarioController from './controller/usuarioController.js'
import consultaController from './controller/consultaController.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//config dos endpoints
server.use(usuarioController);
server.use(consultaController);

server.listen(process.env.PORT, () => console.log(`conectada na porta ${process.env.PORT}`)); 
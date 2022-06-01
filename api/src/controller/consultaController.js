import { criarConsulta } from '../repository/consultaRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/agendamento', async (req, resp) => {
    try{
        const novaConsulta = req.body;

        const consulta = await criarConsulta(novaConsulta);



    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})







export default server;
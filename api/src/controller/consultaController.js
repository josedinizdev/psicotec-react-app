import { alterarConsulta, consultarPorNome, consultarTodos, criarConsulta, removerConsulta, consultarProximos, consultarParaHoje, consultarPendentes, consultarPorNomeHoje } from '../repository/consultaRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/agendamento', async (req, resp) => {
    try{
        const novaConsulta = req.body; 
        if(!novaConsulta.paciente)
            throw new Error ('Nome do paciente obrigatório!');
        if(!novaConsulta.administrador)
            throw new Error ('Número do administrador obrigatório!');
        if(!novaConsulta.nascimento)
            throw new Error ('Data de nascimento do paciente obrigatório!');
        if(!novaConsulta.hora)
            throw new Error ('Hora da consulta obrigatório!');
        if(!novaConsulta.genero)    
            throw new Error ('Genero do paciente é obrigatório!');
        if(!novaConsulta.consultar)
            throw new Error ('Data da consulta obrigatório');
        const consulta = await criarConsulta(novaConsulta);
        resp.send(consulta);
    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/consulta/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const resposta = await removerConsulta(id);
        if (resposta != 1)
            throw new Error('Consulta não pode ser removida')
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({ 
            erro: err.message
        })
    }
})

server.put ('/consulta/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const agendamento = req.body;

        if(!agendamento.paciente)
            throw new Error ('Nome do paciente obrigatório!');
        if(!agendamento.nascimento)
            throw new Error ('Data de nascimento do paciente obrigatório!');
        if(!agendamento.hora)
            throw new Error ('Hora da consulta obrigatório!');
        if(!agendamento.genero)
            throw new Error ('Genero do paciente é obrigatório!');
        if(!agendamento.consultar)
            throw new Error ('Data da consulta obrigatório');
            
        const resposta = await alterarConsulta(id, agendamento);
        if (resposta != 1)
            throw new Error('Consulta não pode ser alterado')
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/consulta', async (req, resp) => {
    try{
        const resposta = await consultarTodos();
        resp.send(resposta);
    }catch(err){
        resp.status(400).send({
            erro:err.message
        });
    } 
})

server.get('/consulta/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await consultarPorNome(nome);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })        
    }
})

server.get('/consulta/busca/futuro', async (req, resp) => {
    try{
        const resposta = await consultarProximos();
        resp.send(resposta);
    } catch(err){
        console.log(err)
        resp.status(404).send({erro: err})
    }
})

server.get('/consulta/busca/presente', async (req, resp) => {
    try{
        const resposta = await consultarParaHoje();
        resp.send(resposta);
    } catch(err){
        console.log(err)
        resp.status(404).send({erro: err})
    }
})

server.get('/consulta/busca/presente/:nome', async (req, resp) => {
    try {
        const { nome } = req.params;
        const resposta = await consultarPorNomeHoje(nome);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })        
    }
})

server.get('/consulta/busca/pendentes', async (req, resp) => {
    try{
        const resposta = await consultarPendentes();
        resp.send(resposta);
    } catch(err){
        console.log(err)
        resp.status(404).send({erro: err})
    }
})

export default server;
import { login, exibirUsuarios, exibirPerfil } from '../repository/usuarioRepository.js'
import { Router  } from "express";

const server = Router ();

server.post('/usuario/login', async (req, resp) =>{
    try {
        const { logar, senha } = req.body;

        const resposta = await login(logar, senha);
        if(!resposta) {
            throw new Error('Credenciais inválidas');
        }
        resp.send(resposta)
    } catch(err){
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario', async(req, resp) => {
    try{
        const resposta = await exibirUsuarios();
        resp.send(resposta)
    } catch{
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/usuario/perfil', async(req, resp) => {
    try{
        const { id } = req.query;
        const resposta = await exibirPerfil(id);
        if(!resposta || resposta.img == null)
            throw new Error('Sem foto de perfil para o id')
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;
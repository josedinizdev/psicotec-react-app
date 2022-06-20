import { login, exibirUsuarios, exibirPerfil, alterarImagem, pesquisarPerfil } from '../repository/usuarioRepository.js'
import { Router  } from "express";
import multer from 'multer';

const server = Router ();
const upload = multer({ dest: 'storage/perfil' })

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

server.put('/usuario/:id/perfil', upload.single('perfil'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        if (!imagem)
            throw new Error('Nenhuma imagem foi anexada')

        if (!id)
            throw new Error('Algo inesperado ocorreu, tente novamente mais tarde')

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não foi enviada')

        resp.status(204).send();
    } catch (err) {
        console.log(err)
        resp.status(400).send({erro:err.message})
    }
});

server.get('/usuario/perfil', async (req, resp) => {
    try {
        const { id } = req.query;
        const resposta = await pesquisarPerfil(id);
        if (resposta != 1)
            throw new Error('A imagem não foi enviada')

        resp.status(204).send();
    } catch (err) {
    }
});

export default server;
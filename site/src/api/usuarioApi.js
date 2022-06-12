import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function login(logar, senha){
    const r = await api.post('/usuario/login', {
            logar: logar,
            senha: senha
        });

    return r.data;
} 

export async function consultarFotoDePerfil(usuario){
    const resposta = await api.get(`/usuario/perfil?id=${usuario}`)
    return resposta.data
}
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

export async function enviarFotoDePerfil(id, imagem) {
    const formData = new formData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/`)
}


export async function inserirImagemConsulta(id, imagem){
        const formData = new FormData();
        formData.append('perfil', imagem);

        const resposta = await api.put(`/consulta/${id}/perfil`, formData, {
            headers: {
                "content-type": "multipart/form-data"
            },
        });
        return resposta.status;
}
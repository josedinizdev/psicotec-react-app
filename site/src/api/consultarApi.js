import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function listarTodasConsultas() {
    const resposta = await api.get('/consulta')
    return resposta.data;
}

export async function BuscarConsultarPorNome() {
    const resposta = await api.get('/consulta/busca?nome={nome} ')
    return resposta.data;
}

export async function consultarProximos() {
    const resposta = await api.get('/consulta/busca/futuro')
    return resposta.data;
}
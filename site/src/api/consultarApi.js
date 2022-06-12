import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function listarTodasConsultas() {
    const resposta = await api.get('/consulta')
    return resposta.data;
}

export async function buscarConsultasPorNome(nome) {
    const resposta = await api.get(`/consulta/busca?nome=${nome} `)
    return resposta.data;
}

export async function consultarProximos() {
    const resposta = await api.get('/consulta/busca/futuro')
    return resposta.data;
}

export async function buscarPresente(){
    const resposta = await api.get('/consulta/busca/presente')
    return resposta.data;
}

export async function buscarPorNomeProximos(nome){
    const resposta = await api.get(`/consulta/busca/futuro/filtro?nome=${nome}`)
    return resposta.data;
}

export async function buscarPendentes(){
    const resposta = await api.get('/consulta/busca/presente')
    return resposta.data
}

export async function cadastrar(paciente, administrador, nascimento, hora, genero, consultar, pai, mae, descricao, conclusao){
    const resposta = await api.post('/agendamento', {
        paciente: paciente,
        administrador: administrador,
        nascimento: nascimento,
        hora: hora,
        genero: genero,
        consultar: consultar,
        pai: pai,
        mae: mae,
        descricao: descricao,
        conclusao: conclusao
    })
    return resposta.data
}
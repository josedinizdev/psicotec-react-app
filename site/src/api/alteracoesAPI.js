import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function removerConsulta(id) {
    const resposta =  await api.delete(`/consulta/${id}`);
    return resposta.status;
}
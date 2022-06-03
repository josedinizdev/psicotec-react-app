import { Router } from 'express'
import { enviar } from '../repository/mailRepository.js'

const server = Router()

server.post('/enviarEmail', async (req, resp) => {
    try{
        const email = req.body
        const response = await enviar(email)

        if(!response)
            throw new Error('Algo deu errado, tente novamente')

        resp.send(response)
    } catch(err){
        console.log(err)
        resp.status(404).send({error:err.message})
    }
})

export default server
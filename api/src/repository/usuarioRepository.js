import { con } from './connection.js'


export async function login(logar, senha){
    const comando =
    `select ID_ADMINISTRADOR        id,
    DS_LOGIN                        nome,
    DS_SENHA                        senha
       from TB_ADMINISTRADOR
     where DS_LOGIN                 =  ?
       and DS_SENHA                 =  ?`


    const [linhas] = await con.query(comando, [logar, senha])
    return linhas[0];
}
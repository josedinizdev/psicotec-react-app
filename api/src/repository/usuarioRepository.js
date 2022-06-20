import { con } from './connection.js'

export async function login(logar, senha){
    const comando = `
        SELECT ID_ADMINISTRADOR         id,
               DS_LOGIN                 nome,
               DS_SENHA                 senha
          from TB_ADMINISTRADOR
         where DS_LOGIN                 =  ?
           and DS_SENHA                 =  ?
    `
    const [linhas] = await con.query(comando, [logar, senha])
    return linhas[0];
}

export async function exibirUsuarios(){
    const comando = `
        SELECT ID_ADMINISTRADOR        id,
               DS_LOGIN                nome,
               DS_SENHA                senha
          from TB_ADMINISTRADOR
    `
    const [linhas] = await con.query(comando)
    return linhas;
}

export async function exibirPerfil(id){
    const comando = `
      SELECT IMG_PERFIL               img
        from TB_ADMINISTRADOR
       where ID_ADMINISTRADOR = ?
    `
    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}

export async function alterarImagem(imagem, id){
  const comando = `
    update tb_administrador
        set img_perfil = ?
    where id_administrador =?
  `;
  const [resposta] = await con.query(comando, [imagem, id]);
  return resposta.affectedRows;
}


export async function pesquisarPerfil(id) {
  const comando = `
      SELECT img_perfil    perfil
        FROM tb_usuario
       WHERE id_usuario    = ?;
  `;
  
  const [linhas] = await con.query(comando, [id]);
  return linhas[0];
}
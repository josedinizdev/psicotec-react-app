import { con } from './connection.js'


export async function criarConsulta(agendamento){
  const comando=
  `
  INSERT INTO TB_CONSULTA (id_administrador, nm_paciente, nm_pai, nm_mae, dt_nascimento, hr_hora, dt_consultar, ds_genero, ds_descricao, ds_conclusao)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `
  const [resposta] = await con.query(comando, [agendamento.administrador, agendamento.paciente, agendamento.pai, agendamento.mae, agendamento.nascimento, agendamento.hora, agendamento.consultar, agendamento.genero, agendamento.descricao, agendamento.conclusao])
  agendamento.id = resposta.insertId;

  return agendamento;
}

export async function removerConsulta(id){
  const comando= 
  `
  DELETE FROM tb_consulta
    WHERE id_consulta = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}


export async function alterarConsulta(id, agendamento) {

  const comando = 
  
  `UPDATE tb_consulta 
  SET NM_PACIENTE             =?, 
      NM_PAI                  =?, 
      NM_MAE                  =?, 
      DT_NASCIMENTO           =?, 
      HR_HORA                 =?, 
      DT_CONSULTAR            =?, 
      DS_GENERO               =?, 
      DS_DESCRICAO            =?,  
      DS_CONCLUSAO            =?
    WHERE id_consulta         =?` 

  const [resposta] = await con.query(comando, [agendamento.paciente, agendamento.pai, agendamento.mae, agendamento.nascimento, agendamento.hora, agendamento.consultar, agendamento.genero, agendamento.descricao, agendamento.conclusao, id]);
  
  return resposta.affectedRows;
}
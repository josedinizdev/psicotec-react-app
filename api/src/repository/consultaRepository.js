import { con } from './connection.js'


export async function criarConsulta(agendamento){
  const comando=
  `
  INSERT INTO TB_CONSULTA (id_administrador, nm_paciente, nm_pai, nm_mae, dt_nascimento, hr_hora, dt_consulta, ds_genero, ds_descricao, ds_conclusao)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `
  const [resposta] = await con.query(comando, [agendamento.administrador, agendamento.paciente, agendamento.pai, agendamento.mae, agendamento.nascimento, agendamento.hora, agendamento.consulta, agendamento.genero, agendamento.descricao, agendamento.conclusao])
  agendamento.id = resposta.insertId;

  return agendamento;
}

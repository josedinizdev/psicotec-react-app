import { con } from './connection.js'


export async function criarConsulta(agendamento){
  const comando=
  `
  INSERT INTO TB_CONSULTA (id_administrador, nm_paciente, nm_pai, nm_mae, dt_nascimento, hr_hora, dt_consulta, ds_genero, ds_descricao, ds_conclusao)
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
      dt_consulta             =?,
      DS_GENERO               =?, 
      DS_DESCRICAO            =?,  
      DS_CONCLUSAO            =?
    WHERE id_consulta         =?` 

  const [resposta] = await con.query(comando, [agendamento.paciente, agendamento.pai, agendamento.mae, agendamento.nascimento, agendamento.hora, agendamento.consultar, agendamento.genero, agendamento.descricao, agendamento.conclusao, id]);
  
  return resposta.affectedRows;
}

export async function consultarTodos(){
  const comando = 
  `SELECT     
  id_consulta   id,       
  NM_PACIENTE		paciente,
  HR_HORA				time,
  DATE_FORMAT(DT_CONSULTA, "%Y/%m/%d")       date,
  DS_CONCLUSAO  conclusao
  FROM tb_consulta`;

  const [linhas]= await con.query(comando);
  return linhas;
}

export async function consultarPorNome(nome){
  const comando = `
      SELECT 
             id_consulta          id, 
             NM_PACIENTE		  paciente,
             HR_HORA				  time,
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
             DS_CONCLUSAO     conclusao
        FROM tb_consulta
       WHERE nm_paciente like  ?
   `;
  const [linhas]= await con.query(comando, [`%${nome}%`]);
  return linhas;
}

export async function consultarPorId(id){
  const comando = `
      SELECT id_administrador    id, 
             nm_paciente         nome, 
             nm_pai              pai, 
             nm_mae              mae, 
             DATE_FORMAT(DT_NASCIMENTO, "%d/%m/%Y")       nasc, 
             hr_hora             hr, 
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       dtconc, 
             ds_genero           genero,
             ds_descricao        descricao,
             ds_conclusao        conc
        FROM tb_consulta
       WHERE id_consulta = ?
   `;
  const [linhas]= await con.query(comando, [id]);
  return linhas[0];
}

export async function consultarPorNomeHoje(nome){
  const comando = `
      SELECT 
             id_consulta      id, 
             NM_PACIENTE		  paciente,
             HR_HORA				  time,
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
             DS_CONCLUSAO     conclusao
        FROM tb_consulta
       WHERE nm_paciente like  ?
         AND DT_CONSULTA >= current_date()
   `;
  const [linhas]= await con.query(comando, [`%${nome}%`]);
  return linhas;
}

{/* date_format(dt_nascimento, '%d/%m/%Y'), '%Y-%m-%d') */}

export async function consultarProximos(){
    const command = `
SELECT  
              id_consulta    id, 
               NM_PACIENTE		paciente,
               DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
               HR_HORA	      time,
               DS_CONCLUSAO     conclusao
          FROM tb_consulta
         WHERE DT_CONSULTA >= current_date()`
    const [linhas] = await con.query(command) 
    return linhas
} 

export async function consultarParaHoje(){
  const command = `
      SELECT NM_PACIENTE		paciente,
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
             HR_HORA	      time
        FROM tb_consulta
       WHERE DT_CONSULTA = current_date();`
  const [linhas] = await con.query(command) 
  return linhas
} 

export async function consultarPendentes(){
  const command = `
      SELECT NM_PACIENTE		paciente,
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
             HR_HORA	      time,
             DS_CONCLUSAO   conclusao
        FROM tb_consulta
       WHERE DT_CONSULTA < current_date()
         AND DS_CONCLUSAO = "";`
  const [linhas] = await con.query(command) 
  return linhas.length;
}


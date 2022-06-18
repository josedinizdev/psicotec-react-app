use infoapsicotec;

-- Cadastro inicial -- -> para cadastrar um adm
INSERT INTO TB_ADMINISTRADOR (NM_USUARIO, DS_SENHA, DS_LOGIN, DS_EMAIL, DT_NASCIMENTO)
       VALUES ('Junior da Silva', '1234', 'junior', 'junior123@gmail.com', '2000-01-01');

-- Efetuar login -- -> Finalizado.

select ID_USUARIO      id,
DS_LOGIN                nome,
DS_SENHA                senha
    from TB_ADMINISTRADOR
        where DS_LOGIN = 'junior123@gmail.com'
        and DS_SENHA   =  '1234';  

-- Criar agendamento/nova consulta -- Finalizado.

INSERT INTO TB_CONSULTA (ID_ADMINISTRADOR, NM_PACIENTE, NM_PAI, NM_MAE, DT_NASCIMENTO, HR_HORA, DT_CONSULTA, DS_GENERO, DS_DESCRICAO, DS_CONCLUSAO)
      VALUES('1', "Joana Silva", "Juscelino Silva", "Juliana Silva", "1998-07-05", "10:00", "2022-08-02", "feminino", "situação complexa..", "instavel");

-- Deletar Agendamento -- Finalizado.

DELETE FROM TB_CONSULTA
    WHERE id_consulta = 1;

-- Editar Agendamento -- Finalizado.

UPDATE tb_consulta 

  SET NM_PACIENTE             =?, 
      NM_PAI                  =?, 
      NM_MAE                  =?, 
      DT_NASCIMENTO           =?, 
      HR_HORA                 =?, 
      DT_CONSULTA            =?, 
      DS_GENERO               =?, 
      DS_DESCRICAO            =?,  
      DS_CONCLUSAO            =?
    WHERE id_consulta         =?;

-- Consultar todos -- Finalizado.

SELECT id_consulta    id,             
  NM_PACIENTE		paciente,
  NM_PAI				pai,
  NM_MAE				mae,
  DT_NASCIMENTO		date,
  HR_HORA				time,
  DT_CONSULTA		date,
  DS_GENERO			genero,
  DS_DESCRICAO	descricao,
  DS_CONCLUSAO	conclusao,
  FROM tb_consulta;

  -- Consultar por nome presente -- Finalizado.

  SELECT id_consulta    id,             
  NM_PACIENTE		    paciente,
  NM_PAI			    	pai,
  NM_MAE			    	mae,
  DT_NASCIMENTO		  date,
  HR_HORA				    time,
  DT_CONSULTA	  	date,
  DS_GENERO			    genero,
  DS_DESCRICAO      descricao,
  DS_CONCLUSAO	    conclusao,
  FROM tb_consulta
  WHERE nm_paciente like;

  SELECT NM_PACIENTE		paciente,
             DATE_FORMAT(DT_CONSULTA, "%d/%m/%Y")       date,
             HR_HORA	      time,
             DS_CONCLUSAO   conclusao
        FROM tb_consulta
       WHERE DT_CONSULTA < current_date();
use infoaprojetoIntegradorDB;


-- Cadastro inicial -- -> para cadastrar um adm
INSERT INTO TB_ADMINISTRADOR (NM_USUARIO, DS_SENHA, DS_LOGIN, DS_EMAIL, IMG_PERFIL, DT_NASCIMENTO)
       VALUES ('Junior da Silva', '1234', 'junior', 'junior123@gmail.com', '2000-01-01');


-- Efetuar login -- -> Já está feito

select ID_USUARIO      id,
DS_LOGIN                nome,
DS_SENHA                senha
    from TB_ADMINISTRADOR
        where DS_LOGIN = 'junior123@gmail.com'
        and DS_SENHA   =  '1234';  

-- Criar agendamento/nova consulta -- -> em andamento

INSERT INTO TB_CONSULTA (ID_ADMINISTRADOR, NM_PACIENTE, NM_PAI, NM_MAE, DT_NASCIMENTO, HR_HORA, DT_CONSULTA, DS_GENERO, DS_DESCRICAO, DS_CONCLUSAO)
        VALUES('1', 'Joana Silva', 'Juscelino Silva', 'Juliana Silva', '1998-07-05', '10:00', '03-06-2022','feminino', 'situação complexa...', 'instável');
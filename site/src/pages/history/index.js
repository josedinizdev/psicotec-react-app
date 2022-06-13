import './index.scss'
import '../../common/common.scss'
import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import storage from 'local-storage'
import { confirmAlert } from 'react-confirm-alert'
import { toast, ToastContainer } from 'react-toastify'
import lupa from '../../images/lupa.png'

import { abreviar } from '../../services/services.js'
import { listarTodasConsultas, buscarPorId, buscarConsultasPorNome, cadastrar, editar} from '../../api/consultarApi.js'
import { removerConsulta } from '../../api/alteracoesAPI.js'


import logo from '../../images/logo.png';   

export default function Index(){

    const [consulta, setConsulta] = useState ([]);

    const navigate = useNavigate();
    const ref = useRef();

    const [admId, setAdmId] = useState(0)
    const [popUp, setPopUp] = useState(false);
    const [edtPopUp, setEdtPopUp] = useState(false);
    const [filtro, setFiltro] = useState('');

    //criar
    const [cPac, setCPac] = useState('')
    const [cDt, setCDt] = useState('')
    const [cMae, setCMae] = useState('')
    const [cNasc, setCNasc] = useState('')
    const [cPai, setCPai] = useState('')
    const [cSexo, setCSexo] = useState()
    const [cHr, setCHr] = useState('')
    const [cDetal, setCDetal] = useState('')
    const [cConc, setCConc] = useState('')

    //editar
    const [nEdit, setNEdit] = useState(0)
    const [nPac, setNPac] = useState('')
    const [nDt, setNDt] = useState('')
    const [nMae, setNMae] = useState('')
    const [nNasc, setNNasc] = useState('')
    const [nPai, setNPai] = useState('')
    const [nSexo, setNSexo] = useState('')
    const [nHr, setNHr] = useState('')
    const [nDetal, setNDetal] = useState('')
    const [nConc, setNConc] = useState('')

    async function criarConsulta(){
        try{
            const resposta = await cadastrar(cPac, admId, cNasc, cHr, cSexo, cDt, cPai, cMae, cDetal, cConc)
            setPopUp(!popUp)
            if(!resposta)
                toast('Cadastro não foi feito')
            else
                toast('Agendamento criado')
        } catch(err){
            toast(err.message)
        }
    }

    async function editarConsulta(){
        try{
            const resposta = await editar(nEdit, nPac, nNasc, nHr, nSexo, nDt, nPai, nMae, nDetal, nConc)
            setEdtPopUp(!edtPopUp)
            if(!resposta)
                toast('Modificação não foi feita')
            else
                toast('Agendamento editado')
        } catch(err){
            toast(err.message)
        }
    }
    
    async function consultaRemover(id, nome){
        confirmAlert({
        title: 'Remover Consulta',
        message: `Deseja remover a consulta ${nome}`,
        buttons: [
            {
              label: 'Sim',  
              onClick: async () => {  
                
                const resposta = await removerConsulta(id, nome);
                if (filtro === '')
                   carregarTodasConsultas();
                else
                   filtrar();
                toast (' 🗑️ Consulta Removida');
               }

            },
            
            {
                label: 'Não'
            }
        ]
    })
    }

    const togglePopUp = () => {
        setPopUp(!popUp)
    }
    
    const toggleEdtPopUp = () => {
        setEdtPopUp(!edtPopUp)
    }

    async function filtrar(){
        const resp = await buscarConsultasPorNome(filtro)
        setConsulta(resp);
    }

    async function getEdit(id){
        const resp = await buscarPorId(id)
        setNPac(resp.nome)
        setNDt(resp.dtconc)
        setNMae(resp.mae)
        setNNasc(resp.nasc)
        setNPai(resp.pai)
        setNSexo(resp.genero)
        setNHr(resp.hr)
        setNDetal(resp.descricao)
        setNConc(resp.conc)
    }

    function editarAgendamento(){
        return(
        <div className="popUp wh-full container-column">
            <div className="wh-full container-column al-center jc-center">
                <div className="popUp-box">
                    <div className="w-full container jc-end">
                        <button className="close-popUp" type="button" onClick={toggleEdtPopUp}>x</button>
                    </div>
                    <form className="container-column w-full">
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome do paciente*</label>
                                <input value={nPac} onChange={e => setNPac(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Data do agendamento*</label>
                                <input type='date' value={nDt} onChange={e => setNDt(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome da mãe</label>
                                <input value={nMae} onChange={e => setNMae(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Data de nascimento*</label>
                                <input type='date' value={nNasc} onChange={e => setNNasc(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome do pai</label>
                                <input value={nPai} onChange={e => setNPai(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Sexo*</label>
                                <input value={nSexo} onChange={e => setNSexo(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Horário*</label>
                                <input type='time' value={nHr} onChange={e => setNHr(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="container-column w-full">
                                <label>Detalhes do paciente</label>
                                <textarea value={nDetal} onChange={e => setNDetal(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="container-column w-full">
                                <label>Conclusão do atendimento</label>
                                <textarea value={nConc} onChange={e => setNConc(e.target.value)}></textarea>
                            </div>
                        </div>
                    </form>
                    <button className="common-button" type="button" onClick={editarConsulta}>Editar agendamento</button>
                </div>
            </div>
        </div>
        )
    }

    function criarAgendamento(){
        return(
        <div className="popUp wh-full container-column">
            <div className="wh-full container-column al-center jc-center">
                <div className="popUp-box">
                    <div className="w-full container jc-end">
                        <button className="close-popUp" type="button" onClick={togglePopUp}>x</button>
                    </div>
                    <form className="container-column w-full">
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome do paciente*</label>
                                <input value={cPac} onChange={e => setCPac(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Data do agendamento*</label>
                                <input type='date' value={cDt} onChange={e => setCDt(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome da mãe</label>
                                <input value={cMae} onChange={e => setCMae(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Data de nascimento*</label>
                                <input type='date' value={cNasc} onChange={e => setCNasc(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full space-between">
                            <div className="container-column">
                                <label>Nome do pai</label>
                                <input value={cPai} onChange={e => setCPai(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Sexo*</label>
                                <input value={cSexo} onChange={e => setCSexo(e.target.value)}/>
                            </div>
                            <div className="container-column">
                                <label>Horário*</label>
                                <input type='time' value={cHr} onChange={e => setCHr(e.target.value)}/>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="container-column w-full">
                                <label>Detalhes do paciente</label>
                                <textarea value={cDetal} onChange={e => setCDetal(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="container w-full">
                            <div className="container-column w-full">
                                <label>Conclusão do atendimento</label>
                                <textarea value={cConc} onChange={e => setCConc(e.target.value)}></textarea>
                            </div>
                        </div>
                    </form>
                    <button className="common-button" type="button" onClick={criarConsulta}>Concluir agendamento</button>
                </div>
            </div>
        </div>
        )
    }

    function sairClick(){

        storage.remove('usuario-logado');
        navigate('/');
    
    }
    useEffect(()=> {
        if  (!storage ('usuario-logado')){
            navigate('/login');
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setAdmId(usuarioLogado.id);
        }
    }, {});

    async function carregarTodasConsultas(){
        const resp = await listarTodasConsultas();
        setConsulta(resp); 

    }

    useEffect(() => {
        carregarTodasConsultas();

    }, [])



    return(
        <div className='history-page'>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                <title>Histórico | PsicoTEC</title>
            </Helmet>
            {popUp && (criarAgendamento())}
            {edtPopUp &&(editarAgendamento())}
            <div className="container wh-full">
                <aside className="container-column">
                    <h2>Área do administrador</h2>
                    <nav>
                        <ul>
                            <li className='animacao-1'><Link className='animacao-1' to='/'>Página Inicial</Link></li>
                            <li className='animacao-1'><Link className='animacao-1' to='/admin'>Próximos Agendamentos</Link></li>
                        </ul>
                    </nav>
                    <Link to='/login' onClick={sairClick}>Desconectar</Link>
                    <Link to='/admin'>
                        <svg width="2.4rem" height="2.4rem" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0%" x2="100%" y2="0%" stroke="#979797"/>
                            <line y1="50%" x2="100%" y2="50%" stroke="white"/>
                            <line y1="100%" x2="100%" y2="100%" stroke="#979797"/>
                        </svg> 
                    </Link>
                </aside>
                <div className="container-column w-full">
                    <main className="w-full container-column">
                        <section className="main-table container-column w-full">
                            <div className="title-next container space-between al-center">
                                <h2 >Histórico de Agendamentos</h2>
                                <div className='pesquisa-box'>
                                    <input className="main-button common-button" placeholder="Pesquisar por nome "  value={filtro} onChange={e => setFiltro(e.target.value)} />
                                    <button className='pesquisa'  onClick={filtrar}><img src={lupa} /></button>
                                </div>
                            </div>
                            <div className="next-schedules-card container-column w-full">
                                <table className="w-full">
                                    <tbody>
                                    {consulta.map(item => 
                                            <tr>
                                            <td>{item.paciente}</td>
                                            <div>
                                                <td>
                                                <svg onClick={_ => {
                                                            setNEdit(item.id);
                                                            getEdit(item.id);
                                                            toggleEdtPopUp()
                                                        }} width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                            <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                            <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/> 
                                                        </svg>                                            
                                                        {!item.conclusao &&(
                                                            <svg onClick={_ => {
                                                                setNEdit(item.id)
                                                                getEdit(item.id)
                                                                toggleEdtPopUp()
                                                            }} width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                            </svg>
                                                        )}
                                                        {item.conclusao &&(
                                                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                            <path d="M1 2.98628C1.26848 3.27906 1.5449 3.5666 1.78963 3.88327C1.79498 3.89019 1.87144 4.05555 1.90854 3.98051C1.98928 3.81719 2.04376 3.62656 2.1128 3.45827C2.28978 3.02691 2.47915 2.59831 2.70935 2.19636C2.93762 1.79777 3.21334 1.41041 3.59248 1.16716C3.71291 1.08989 3.85527 1 4 1" stroke="#00FF19" stroke-linecap="round"/>
                                                            </svg>                                                                                                       
                                                        )}
                                                        <svg onClick={() => consultaRemover(item.id, item.paciente)} width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                            <line x1="0.353553" y1="0.646447" x2="4.35355" y2="4.64645" stroke="#FF0303"/>
                                                            <line x1="0.646447" y1="4.64645" x2="4.64645" y2="0.646447" stroke="#FF0303"/>
                                                        </svg>
                                                </td>
                                                <td>{item.date.substr(0, 10)}</td>
                                                <td>{item.time.substr(0, 5)}</td>
                                            </div>
                                        </tr> 
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="container w-full jc-end">
                                <button className="common-button main-button">+ Adicionar novo</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
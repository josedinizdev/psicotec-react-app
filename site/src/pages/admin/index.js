import './index.scss'
import '../../common/common.scss'
import React, { useEffect, useState } from "react"
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

import logo from '../../images/logo.png';
import profile_pic from '../../images/profile-picture.jfif';

export default function Index(){
    const [popUp, setPopUp] = useState(false);
    const [usuario, setUsuario] = useState('-');

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    const navigate = useNavigate();

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
        setUsuario(usuarioLogado.nome);
    }
}, {});
    
    
    return(
        <div className='admin-page'>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                <title>Administrador | PsicoTEC</title>
            </Helmet>
            <div className="container wh-full">
                {popUp && (
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
                                            <input/>
                                        </div>
                                        <div className="container-column">
                                            <label>Data do agendamento*</label>
                                            <input/>
                                        </div>
                                    </div>
                                    <div className="container w-full space-between">
                                        <div className="container-column">
                                            <label>Nome da mãe</label>
                                            <input/>
                                        </div>
                                        <div className="container-column">
                                            <label>Data de nascimento*</label>
                                            <input/>
                                        </div>
                                    </div>
                                    <div className="container w-full space-between">
                                        <div className="container-column">
                                            <label>Nome do pai</label>
                                            <input/>
                                        </div>
                                        <div className="container-column">
                                            <label>Sexo*</label>
                                            <input/>
                                        </div>
                                        <div className="container-column">
                                            <label>Horário*</label>
                                            <input/>
                                        </div>
                                    </div>
                                    <div className="container w-full">
                                        <div className="container-column w-full">
                                            <label>Detalhes do paciente</label>
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                    <div className="container w-full">
                                        <div className="container-column w-full">
                                            <label>Conclusão do atendimento</label>
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                </form>
                                <button className="common-button" type="button" onClick={togglePopUp}>Concluir agendamento</button>
                            </div>
                        </div>
                    </div>
                )}
                <aside className="container-column">
                    <h2>Área do administrador</h2>
                    <nav>
                        <ul>
                            <li><Link to="/">Página Inicial</Link></li>
                            <li><Link to="/history">Histórico de agendamentos</Link></li>
                        </ul>
                    </nav>
                    <Link to="/" onClick={sairClick}>Desconectar</Link>
                    <Link to="/history">
                        <svg width="2.4rem" height="2.4rem" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0%" x2="100%" y2="0%" stroke="#979797"/>
                            <line y1="50%" x2="100%" y2="50%" stroke="white"/>
                            <line y1="100%" x2="100%" y2="100%" stroke="#979797"/>
                        </svg> 
                    </Link>
                </aside>
                <div className="container-column w-full">
                    <header className="container w-full">
                        <div>
                            <img src={profile_pic} alt="" />
                        </div>    
                        <h1>Bem vindo(a) {usuario}</h1>
                    </header>
                    <main className="w-full container-column">
                        <section className="important container space-between w-full main-table">
                            <div>
                                <h2>Para hoje</h2>
                                <ul>
                                    <li>João P. - 08:40</li>
                                    <li>Kevin L. - 09:20</li>
                                    <li>David S. - 10:40</li>
                                    <li>Marcelo S. - 11:20</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Pendentes</h2>
                                <ul>
                                    <li>Adicionar conclusão (8)</li>
                                </ul>
                            </div>
                        </section>
                        <section className="main-table container-column w-full">
                            <div className="title-next container space-between al-center">
                                <h2>Próximos agendamentos</h2>
                                <input className="main-button common-button" placeholder="Pesquisar por nome"></input>
                            </div>
                            <div className="next-schedules-card container-column w-full">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td>José Diogo Caetano Diniz</td>
                                            <div>
                                                <td>
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                        <path d="M2.03477 3.71425L0.992758 4.04084L1.18314 3.15569L2.12078 2.02704L2.12084 2.02709L2.12255 2.02478L2.69789 1.2451L3.54092 1.81239L2.03477 3.71425Z" stroke="black" stroke-width="0.1"/>
                                                        <path d="M2.74557 1.166L3.27139 0.435584L4.10366 1.0347L3.57783 1.76512L2.74557 1.166Z" stroke="black" stroke-width="0.1"/>
                                                    </svg>                                            
                                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.1" y="0.1" width="4.8" height="4.8" rx="1.4" stroke="black" stroke-width="0.2"/>
                                                    </svg>                                            
                                                </td>
                                                <td>27/04/2004</td>
                                                <td>03:05</td>
                                            </div>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="next-before container w-full jc-center">
                                <div className="container space-between">
                                    <button className="common-button main-button">Anter.</button>
                                    <button className="common-button main-button">Próx.</button>
                                </div>
                            </div>
                            <div className="container w-full jc-end">
                                <button onClick={togglePopUp} className="common-button main-button" type="button">+ Adicionar novo</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
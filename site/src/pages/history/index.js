import './index.scss'
import '../../common/common.scss'
import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import storage from 'local-storage'


import logo from '../../images/logo.png';   

export default function Index(){

    const navigate = useNavigate();
    const ref = useRef();

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
        }
    }, {});




    return(
        <div className='history-page'>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                <title>Histórico | PsicoTEC</title>
            </Helmet>
            <div className="container wh-full">
                <aside className="container-column">
                    <h2>Área do administrador</h2>
                    <nav>
                        <ul>
                            <li><Link to='/'>Página Inicial</Link></li>
                            <li><Link to='/admin'>Próximos Agendamentos</Link></li>
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
                                <button className="common-button main-button">+ Adicionar novo</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
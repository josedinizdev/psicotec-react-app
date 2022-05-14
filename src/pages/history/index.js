import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'

export default function Index(){
    return(
        <div className='history-page'>
            <div class="container wh-full">
                <aside class="container-column">
                    <h2>Área do administrador</h2>
                    <nav>
                        <ul>
                            <li><Link to='/admin'>Página Inicial</Link></li>
                            <li><Link to='/history'>Histórico de agendamentos</Link></li>
                        </ul>
                    </nav>
                    <Link to='/'>Voltar</Link>
                    <Link to='/admin'>
                        <svg width="2.4rem" height="2.4rem" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0%" x2="100%" y2="0%" stroke="#979797"/>
                            <line y1="50%" x2="100%" y2="50%" stroke="white"/>
                            <line y1="100%" x2="100%" y2="100%" stroke="#979797"/>
                        </svg> 
                    </Link>
                </aside>
                <div class="container-column w-full">
                    <main class="w-full container-column">
                        <section class="main-table container-column w-full">
                            <div class="title-next container space-between al-center">
                                <h2>Próximos agendamentos</h2>
                                <input class="main-button common-button" placeholder="Pesquisar por nome"></input>
                            </div>
                            <div class="next-schedules-card container-column w-full">
                                <table class="w-full">
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
                            <div class="next-before container w-full jc-center">
                                <div class="container space-between">
                                    <button class="common-button main-button">Anter.</button>
                                    <button class="common-button main-button">Próx.</button>
                                </div>
                            </div>
                            <div class="container w-full jc-end">
                                <button class="common-button main-button">+ Adicionar novo</button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
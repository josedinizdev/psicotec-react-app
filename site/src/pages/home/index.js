import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import logo from '../../images/logo.png';
import st_sideimage from '../../images/main-1st-sideimage.jpg';
import fourth_sideimage from '../../images/main-4th-sideimage.webp';

export default function Index(){
    return(
    
        <div id='home' className='home-page'>
            <Helmet>
                
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                <title>Página Inicial | PsicoTEC</title>
            </Helmet>
            <header>
                <section className="container w-full max-width-visibility space-between">
                    <div className="header-title container zi-2">
                        <h1>
                            <span className="ptc-orange">Psico</span><span className="ptc-blue">TEC</span> Sempre em busca do seu melhor
                        </h1>
                    </div>
                    <div className="container-column header-side-ll space-between">
                        <div className="header-login container zi-2 space-between al-center">
                            <Link to='/login'>login</Link>
                            <Link to='/'>
                                <svg width="2.4rem" height="2.4rem" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0%" x2="100%" y2="0%" stroke="#001AFF"/>
                                    <line y1="50%" x2="100%" y2="50%" stroke="#FFFFFF"/>
                                    <line y1="100%" x2="100%" y2="100%" stroke="#FFAA05"/>
                                </svg>     
                            </Link>               
                        </div>
                        <div className="logo-svg container zi-2">
                            <Link className="logo-link" to="/">
                                <img src={logo} alt='PsicoTEC logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="header-background zi-1 wh-full">
                        <div className="header-background-color wh-full"></div>
                    </div>
                </section>
            </header>
            <main className="container-column">
                <section className="main-importance-of container max-width-visibility space-between">
                    <div className="container">
                        <img src={st_sideimage} alt='' />
                    </div>
                    <div className="container-column">
                        <h2 className="ptc-orange">
                            Importância da Psicologia na sua vida
                        </h2>
                        <p>
                            A psicologia, por meio de estudos, é 
                            responsável pelo entendimento do comportamento
                            das pessoas, pela resolução de problemas, 
                            pelo controle emocional e é um meio importante 
                            para buscar melhorar a vida, todavia, fazer com 
                            que uma consulta com um psicólogo seja importante 
                            na vida das pessoas
                        </p>
                        <div className="container w-full">
                            <a href='#avalie'><button className="common-button">Entre em contato</button></a>
                        </div>
                    </div>
                </section>
                <section className="main-services w-full container">
                    <div className="max-width-visibility w-full container-column">
                        <div className="w-full">
                            <h2>Serviços</h2>
                        </div>
                        <div className="main-services-cards w-full container wrap space-between">
                            <div>
                                <div className="ms-st-card"></div>
                                <div>
                                    <h3>Cognitivo-Comportamental</h3>
                                </div>
                            </div>
                            <div>
                                <div className="ms-nd-card"></div>
                                    <div>
                                        <h3>Terapia de Casal</h3>
                                    </div>
                            </div>
                            <div>
                                <div className="ms-rd-card"></div>
                                <div>
                                    <h3>Depressão e Ansiedade</h3>
                                </div>
                            </div>
                            <div>
                                <div className="ms-4th-card"></div>
                                <div>
                                    <h3>Terapia Individual</h3>
                                </div>
                            </div>
                            <div>
                                <div className="ms-5th-card"></div>
                                <div>
                                    <h3>Estresse e Medo</h3>
                                </div>
                            </div>
                            <div>
                                <div className="ms-6th-card"></div>
                                <div>
                                    <h3>Fobia e Insegurança</h3>
                                </div>
                            </div>
                            <div>
                                <div className="ms-7th-card"></div>
                                <div>
                                    <h3>Terapia Infantil</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-history container max-width-visibility space-between">
                    <div className="container">
                        <img src={fourth_sideimage} alt="" />                  
                    </div>
                    <div className="container-column">
                        <h2 className="ptc-orange">
                            História da <span className="ptc-orange">Psico</span><span className="ptc-blue">TEC</span>
                        </h2>
                        <p>
                            A Psicotec, foi idealizada e fundada em 2002.
                        </p>
                        <p>
                            Desde então temos como missão solucionar os problemas 
                            das pessoas por meio da psicologia, trazendo conforto, 
                            segurança e qualidade em nossos serviços.
                        </p>
                    </div>
                </section >
                <section className="main-contacts-and-form container-column al-center w-full">
                    <div  id="avalie" className="max-width-visibility w-full zi-2 container space-between">
                        <div>
                            <h2>Contatos</h2>
                            <p>(+55) 11 98806 7221</p>
                            <p>(+55) 11 5687 8876</p>
                            <p>adminJose098_@psicotec.org.br</p>
                        </div>
                        <div>
                            <h2 >Avalie o site</h2>
                            <form action="">
                                <input className="common-button df-button-input" type="text" placeholder="Digite aqui seu nome" />
                                <textarea className="common-button df-button-input" placeholder="Digite aqui sua opinião sobre o site"></textarea>
                            </form>
                            <div className="w-full">
                                <button className="common-button">Enviar Avaliação</button>
                            </div>
                        </div>
                    </div>
                    <div className="main-caf-background-color zi-1 wh-full"></div>
                </section>
                <section className="who-are-we pd-2-4 w-full container-column al-center">
                    <div className="max-width-visibility space-between container wh-full">
                        <div className="waw-image-6th"></div>
                        <div className="container-column">
                            <h2>Quem somos?</h2>
                            <p>
                                Somos uma empresa com mais de 20 anos na área da psicologia, responsável pelo atendimento de pessoas
                                das mais diversas idades, com objetivo de proporcionar um atendimento excepcional, visando a sintonia
                                entre cliente e psicólogo para uma consulta agradável
                            </p>
                        </div>
                    </div>
                </section>
                <div className="pd-2-4 w-full container-column al-center">
                    <section className="conf-and-partners container max-width-visibility w-full space-between">
                        <div>
                            <h2>Confiabilidiade</h2>
                            <p>
                                Na Psicotec, proporcionamos um ambiente seguro, 
                                confortável e único para que o seu atendimento 
                                seja excepcional
                            </p>
                            <p>
                                Com total sigilo, apenas você e o psicólogo
                                tem acesso as informações tratadas
                            </p>
                            <p>
                                Não há gravação das sessões, respeitando a 
                                privacidade do cliente
                            </p>
                        </div>
                        <div>
                            <h2>Nossos parceiros</h2>
                            <p>Nutricionista - Laura Santos</p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="container-column al-center w-full">
                <div className="container w-full h-full max-width-visibility space-between">
                    <div className="container h-full al-center">
                        <h2><a href='#home'><span className="ptc-orange">Psico</span><span className="ptc-blue">TEC</span></a> sempre em busca do seu melhor</h2>
                    </div>
                    <div className="container-column space-between h-full">
                        <div className="logo-svg">
                            <Link className="logo-link" to='/'>
                              <a href="#home"> <img src={logo} alt="" /> </a> 
                            </Link>
                        </div>
                        <div>
                            <p>adminJose098_@psicotec.org.br</p>
                            <p>(+55) 11 98806 7221</p>
                            <p>(+55) 11 5687 8876</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
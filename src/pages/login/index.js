import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png';

export default function Index(){
    return(
        <div className='login-page'>
            <main>
                <div className="login-card zi-2 container-column space-between">
                    <div className="logo-svg">
                        <Link className="logo-link" to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <form className="container-column wh-full" action="">
                        <div className="container-column w-full">
                            <label for="">Usuário</label>
                            <input className="common-button w-full" type="text" placeholder="ex.: rafael9823" />
                        </div>
                        <div className="container-column w-full">
                            <label for="">Senha</label>
                            <input className="common-button w-full" type="text" placeholder="ex.: 1234c%ys" />
                        </div>
                    </form>
                    <div className="container-column al-center w-full">
                        <Link to='/admin' className="common-button">Entrar</Link>
                    </div>
                    </div>
                    <div className="login-background zi-1">
                        <div className="login-background-image wh-full">                              
                    </div>
                    <div className="login-background-color wh-full"></div>
                </div>
            </main>
        </div>
    )
}
import './index.scss'
import '../../common/common.scss'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png';

export default function Index(){
    return(
        <div className='login-page'>
            <main>
                <div class="login-card zi-2 container-column space-between">
                    <div class="logo-svg">
                        <Link class="logo-link" to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <form class="container-column wh-full" action="">
                        <div class="container-column w-full">
                            <label for="">Usuário</label>
                            <input class="common-button w-full" type="text" placeholder="ex.: rafael9823" />
                        </div>
                        <div class="container-column w-full">
                            <label for="">Senha</label>
                            <input class="common-button w-full" type="text" placeholder="ex.: 1234c%ys" />
                        </div>
                    </form>
                    <div class="container-column al-center w-full">
                        <Link to='/admin' class="common-button">Entrar</Link>
                    </div>
                    </div>
                    <div class="login-background zi-1">
                        <div class="login-background-image wh-full">                              
                    </div>
                    <div class="login-background-color wh-full"></div>
                </div>
            </main>
        </div>
    )
}
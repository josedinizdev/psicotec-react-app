import { login } from '../../api/usuarioApi'
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

import { Link } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import './index.scss'
import '../../common/common.scss'
import Helmet from 'react-helmet'
import logo from '../../images/logo.png';

export default function Index(){
    const [logar, setLogar] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
   


    const navigate =  useNavigate();
    const ref = useRef();
    

    useEffect(() => {
        if (storage('usuario-logado')){
            navigate('/admin');
        }
    }, {} )

    async function entrarClick(){   
            ref.current.continuousStart();
            setCarregando(true);

        try{
            const r = await login(logar, senha)
            console.log(r); 
            storage('usuario-logado', r);
           

            setTimeout(() => {
                navigate('/admin');
            }, 3000)
            
        }

          catch(err)  {
              ref.current.complete(); 
              setCarregando(false);
              if (err.response.status === 401){
                  setErro(err.response.data.erro)
              }


        }
    }



    return(
        <div className='login-page'>
            <LoadingBar color='#4E569C' ref={ref} />
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href={logo} type="image/x-icon" />
                <title>Login | PsicoTEC</title>
            </Helmet>
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
                            <input className="common-button w-full" type="text" placeholder="ex.: rafael9823" value={logar} onChange={e => setLogar(e.target.value)}/>
                        </div>
                        <div className="container-column w-full">
                            <label for="">Senha</label>
                            <input className="common-button w-full" type="password" placeholder="ex.: 1234c%ys" value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </form>
                    <div className="container-column al-center w-full">
                        <button  className="common-button btn-login " onClick={entrarClick} disabled={carregando} >Entrar</button>
                    </div>
                    <div className='login-invalido container-column al-center w-full'>
                       {erro}

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
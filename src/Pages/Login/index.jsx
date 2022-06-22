import './styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import Cadastro from '../Cadastro'


const user = {
    login: 'Aluno',
    senha: '123'
}

const Login = (props) => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    const handleEmail = (e) => {
        e.preventDefault();
        
        if(login === user.login && senha === user.senha) {
            localStorage.setItem('login', login);
            localStorage.setItem('senha', senha);
            // alert("Usuário validado")
            navigate('/home')
        }else {
            alert("Usuário ou senha inválido! Tente novamente.")
        }

    }


    return (
                   
            <main className="container-fluid">
                <div className='row'>
                    <div className= "col-md-8">
                        <img className='img-fluid' src="./telalogin.jpg" alt='Imagem de venda online'/>
                    </div>
                    <div className="col-md-4">
                        <h3>Acesso do funcionário!</h3>
                        <div className="login">
                            <div className="Auth-form-container">
                                <form className="Auth-form">
                                    <div className="Auth-form-content">
                                        <h2 className="Auth-form-title"></h2>
                                        <div className="form-group">
                                            <label>Login</label>
                                                <input
                                                type="text"
                                                placeholder="Entre com o seu email"
                                                value={login}
                                                onChange={e => setLogin(e.target.value)}
                                                />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Senha</label>
                                            <input
                                                type="password"
                                                placeholder="Entre com sua senha"
                                                value={senha}
                                                onChange={e => setSenha(e.target.value)}/>
                                        </div>
                                        <p><a href="#">Esqueci minha senha</a></p>
                                        <p><a href="../Cadastro">Ainda não tem cadastro?</a></p>
                                        <div className="d-grid gap-2 mt-3">
                                            <button type="submit" className="btn btn-primary" onClick={handleEmail}>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>        
    )
}



export default Login;

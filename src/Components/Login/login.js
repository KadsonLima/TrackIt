import styled from "styled-components";
import React,{ useState, useContext } from "react";
import Logo from '../../assets/logo.png';
import { FormContext } from '../../Context/FormContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";

function Login() {
    const { habitos, setHabitos, form, setForm } = useContext(FormContext);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [cadastr, setCadastr] = useState(true);


    function cadastro(e) {
        setCadastr({
            ...cadastr,
            [e.target.name]: e.target.value
        });
    }


    const entraConta =
        (<Inputs onSubmit={(e) => logar(e)}>
            <input name="email" disabled={loading}  onChange={(e) => { cadastro(e) }}  placeholder="email" />
            <input name="password"  disabled={loading}  onChange={(e) => { cadastro(e) }} placeholder="senha" />
            {loading?<button disabled={loading} type="submit"><ThreeDots color="white" /></button> : <button type="submit">Entrar </button>}
            <Link to="/cadastro" style={{ textDecoration: 'none' }}><span>Não tem uma conta? Cadastre-se!</span></Link>

        </Inputs>)



    function logar(event) {
        const login = {
            email: cadastr.email,
            password: cadastr.password
        }
        event.preventDefault();
        setLoading(true)
        setTimeout(()=>{
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login)
            .then(e => {
                setForm(e.data)
                navigate('/habitos');
            }).catch(e => {
                alert("deu erro", e)
            })
            setLoading(false)
        },3000)
       
    }


    return (
        <Tela>
            <img src={Logo} alt={Logo}></img>
            {entraConta}
        </Tela>
    )
}




export default Login;


const Inputs = styled.form`

    display:flex;
    flex-direction:column;
    margin: 36px 36px;
    align-items:center;
    input{
        width:303px;
        height:45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom:6px;
    }
    button{
        height:45px;
        width:310px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        cursor:pointer;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span{
        margin-top:25px;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        cursor:pointer;
        color: #52B6FF;
    }

`

const Tela = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    img{
        margin:40px 0;
    }
`



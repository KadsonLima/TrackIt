import styled from "styled-components";
import { useState, useContext } from "react";
import Logo from '../../assets/logo.png';
import { FormContext } from '../../Context/FormContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function Login() {
    const { habitos, setHabitos } = useContext(FormContext);

    const navigate = useNavigate();

    const [checkLogin, setCheckLogin] = useState(true);
    const [cadastr, setCadastr] = useState(true);


    function cadastro(e) {
        setCadastr({
            ...cadastr,
            [e.target.name]: e.target.value
        });
    }




    function cadastrar(event) {
        const cadastro = {
            email: (cadastr.email),
            name: cadastr.name,
            image: cadastr.image,
            password: cadastr.password
        }
        event.preventDefault();
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
            .then(e => {
                console.log("foi", e.data);
                setCadastr({ form: e.data });
            }).catch(e => {
                console.log("deu erro", e, cadastro)
            })
    }

    



    const cadastraConta = (
        <Inputs onSubmit={(e) => cadastrar(e)}>
            <input name="email" placeholder="email" onChange={(e) => { cadastro(e) }} />
            <input name="password" type="password" placeholder="senha" onChange={(e) => { cadastro(e) }} />
            <input name="name" placeholder="name" onChange={(e) => { cadastro(e) }} />
            <input name="image" placeholder="foto" onChange={(e) => { cadastro(e) }} />
            <button type="submit">Cadastrar</button>
            <Link to='/' style={{ textDecoration: 'none'}}>Já tem uma conta? Faça login!</Link>
        </Inputs>
    )

    return (
        <Tela>
            <img src={Logo} alt={Logo}></img>
            {cadastraConta}
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



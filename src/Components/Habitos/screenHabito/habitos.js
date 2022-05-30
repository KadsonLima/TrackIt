import react, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FormContext } from '../../../Context/FormContext';
import HabCreate from './components/habitoCreate';
import axios from "axios";
import WriteHabit from '../screenHabito/components/writeHabito';

function Home() {

    const { form, setForm, habitos, setHabitos } = useContext(FormContext);
    const [create, setCreate] = react.useState(false);

    useEffect(() => {
        if (localStorage) {
            const strol = localStorage.getItem("form");
            const alou = JSON.parse(strol);
            setForm({ email: alou.email, id: alou.id, name: alou.name, image: alou.image, token: alou.token })
        }
        console.log("token", form.token)

        if (form.token) {

            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
                headers: { "Authorization": `Bearer ${form.token}` }
            }).then(e => {
                setHabitos((e.data));
                console.log("teste")
            })
        }
    }, [form.token, create]);

    const Token = form.token;


    return (
        <>
            <Content >
                <div className="title" back='#00000ff'><span>Meus hábitos</span><button onClick={() => { setCreate(!create) }}>+</button></div>
                {create ? <HabCreate Token={Token} setCreate={setCreate} create={create} /> : ''}
                <WriteHabit/>
            </Content>
        </>
    )

}


export default Home;






const Content = styled.div`
    margin: 70px 0;
    background-color: #E5E5E5;
    width:100%;
    height: 100vh;
    padding: 28px 18px;

    .title{
        background-color: ${(props) => props.back};
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:22.98px;
        color: #126BA5;
        margin-bottom:20px;
        button{
            width:40px;
            height:36px;
            background-color: #52B6FF;
            border-radius: 4.63636px;
            border:none;
            font-size: 24px;
            text-align: center;
            color: #FFFFFF;
        }

        span:last-child{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
        }
    }
`





import react, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FormContext } from '../../Context/FormContext';
import HabCreate from './Functions/habitoCreate';
import axios from "axios";

function Home() {

    const { form, setForm, habitos, setHabitos } = useContext(FormContext);

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
    }, [form.token]);

    const Token = form.token;

    console.log(habitos)
    const [create, setCreate] = react.useState(false);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']



    const writeHabitos = (habitos ? habitos.map((e, index) => {
        return <Habito key={index}>
            <span>{e.name}</span>
            <div className="dias" >
                {dias.map((dia, index) => {
                    return <Dia key={index} contem={(e.days.includes(index))} >{dia}</Dia>
                })}
            </div>
        </Habito>
    }) : nulo)

    return (
        <>
            <Content >
                <div className="title" back='#00000ff'><span>Meus hábitos</span><button onClick={() => { setCreate(!create) }}>+</button></div>
                {create ? <HabCreate Token={Token} setCreate={setCreate} create={create} /> : ''}
                {writeHabitos}
            </Content>
        </>
    )

}


export default Home;



const nulo = (<span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)



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



const Habito = styled.div`
    background-color:white;
    width:100%;
    height:90px;
    padding:15px;
    border-radius: 5px;
    margin-bottom:10px;

    span{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    .dias{
        margin-top:8px;
        display:flex;
    }


`
const Dia = styled.div`

        display:flex;
        justify-content:center;
        align-items:center;
        width:30px;
        height:30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: ${props => !props.contem ? '#DBDBDB' : 'white'};
        background-color: ${props => props.contem ? '#DBDBDB' : 'white'};
        margin-right: 4px;


`

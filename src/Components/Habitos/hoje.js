import react, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FormContext } from '../../Context/FormContext';
import axios from "axios";
import Vector from '../../assets/vector.png';
import dayjs from "dayjs";


function Hoje() {

    const { form, habitos, feito ,setFeito } = useContext(FormContext);

    const [hoje, setHoje] = react.useState(null);
    const [reto, setReto] = react.useState(null);

    console.log("token", form.token)
    useEffect(() => {
        
        if (form.token) {
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
                headers: { "Authorization": `Bearer ${form.token}` }
            }).then(e => {
                setHoje((e.data));
                console.log("foias", e.data)
            }).catch(() => {
                console.log("tomou no cu")
            })
        }
    }, [form.token, setReto]);

    function habitoFeito(habito){
        const config = {
            headers: { "Authorization": `Bearer ${form.token}` }
        }
        console.log(habito)
        if(habito.done){
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+habito.id+'/uncheck', {}, config)   
            .then(e=>{
               
           })
        }else{
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+habito.id+'/check',{}, config)   
                 .then(e=>{
                })
        }
        att()
    }

    function att(){
        let atividades = 0;
        hoje.map(e=>{
            if(e.done){ atividades++}
        })
        console.log(feito)
        setFeito((atividades/hoje.length)*100)
    }

    const writeHabitos = (hoje ? hoje.map((e, index) => {
        return <Habito key={index}>
            <div className="dias" >
                <span>{e.name}</span>
                <div >
                    <span>Sequência atual: {e.currentSequence} dias</span>
                    <span>Seu recorde: {e.currentSequence} dias</span>
                </div>
            </div>
            <Buttao back={e.done} onClick={()=>{habitoFeito(e)}}><img src={Vector}/></Buttao>
        </Habito>
    }) : nulo);

    return (
        <>
            <Content >
                <div className="title">{ }</div>
                {writeHabitos}
            </Content>
        </>
    )

}


export default Hoje;



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
    height:94px;
    padding:13px;
    border-radius: 5px;
    margin-bottom:10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    
    .dias{
        margin-top:8px;
        display:flex;
        flex-direction: column;
        div{
            display: flex;
            flex-direction: column;
            span{
                font-size: 12.976px;
                line-height: 16px;
                color: #666666;
            }
        }
    }


`
const Buttao = styled.button`

    width: 64px;
    height: 64px;
    background: ${props=>props.back? 'green':'#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    img{

    }

`

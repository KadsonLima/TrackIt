import react, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FormContext } from '../../../Context/FormContext';
import axios from "axios";
import Vector from '../../../assets/vector.png';


function Hoje() {

    const { form, feito , setFeito} = useContext(FormContext);

    const [hoje, setHoje] = react.useState(null);
    const [tarefa, setTarefa] = react.useState([]);


    const date = new Date();
    const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    useEffect(() => {
        
        if (form.token) {
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
                headers: { "Authorization": `Bearer ${form.token}` }
            }).then(e => {
                setHoje((e.data));
                console.log("foias", hoje)
            }).catch(() => {
                console.log("tomou no cu")
            })
        }
        
    }, [feito, form.token]);

    
  
    function habitoFeito(habito){
        const config = {
            headers: { "Authorization": `Bearer ${form.token}` }
        }
        if(habito.done){
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+habito.id+'/uncheck', {}, config)   
            .then(e=>{
                console.log(tarefa)

           })
        }else{
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+habito.id+'/check',{}, config)   
                 .then(e=>{

                })
        }
    }

    console.log("hoje", (feito).toFixed(2))
    
    const writeHabitos = (hoje ? hoje.map((e, index) => {
        if(e.done){
            setFeito(feito+1/hoje.length)
        }

        return <Habito key={index}>
            <div className="dias" >
                <span>{e.name}</span>
                <div >
                    <span>Sequência atual: {e.currentSequence} dias</span>
                    <span>Seu recorde: {e.currentSequence} dias</span>
                </div>
            </div>
            <Buttao back={e.done}  onClick={()=>{habitoFeito(e)}}><img alt={Vector} src={Vector}/></Buttao>
        </Habito>
    }) : nulo);

    const porcenta = (feito === 0)?(
        <span>Nenhum hábito concluído ainda</span>
    ):(<span style={{color:'rgb(143, 197, 73)'}}>{feito.toFixed(0)}% dos hábitos concluídos</span>)


    return (
        <>
            <Content >
                <div className="title">
                    <span>{dayName[date.getDay()]}, {('0' + date.getDate()).slice(-2)}/{('0' + date.getMonth()).slice(-2)}</span>
                    {porcenta}
                </div>
                {writeHabitos}
            </Content>
        </>
    )


    
}


export default Hoje;



const nulo = (<span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)



const Content = styled.div`
    margin-top: 70px;
    margin-bottom: 110px;
    background-color: #E5E5E5;
    width:100%;
    height: 100vh;
    padding: 28px 18px;

    .title{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        
        margin-bottom:20px;
        span:first-child{
            font-size:22.98px;
            color: #126BA5;
        }
        span:last-child{
            font-size: 17.976px;
            line-height: 22px;
            color: #BABABA;
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
    background: ${props=>props.back? '#8FC549':'#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    img{

    }

`

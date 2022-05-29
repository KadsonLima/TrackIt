import axios from "axios";
import styled from 'styled-components';
import react from "react";

export default function habitoCreate({ Token, setCreate, create}) {
    
    const [habform, setHabForm] = react.useState({dia:'', days:''});

function cadasHabito(event) {
    

    const config = {
        headers: {
            "Authorization": `Bearer ${Token}`
        }
    }

    let body = {
        name: habform.dia,
        days: habform.days

    }
    event.preventDefault();
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        .then(e => {
            console.log("foi", e.data);
        }).catch(e => {
            console.log("deu erro", e)
        })
}

    function diasForma(e) {
        
        if(habform.days.includes(e)){
            setHabForm({ ...habform, days: habform.days.filter(x => e !== x) })
        }else{
            setHabForm({ ...habform, days: [...habform.days, e] })
        }
        

            /*if (habform['days'].includes(parseInt(e.target.name))) {
                
            }
            */
        
        
    }
    console.log(habform)

    return (<Habito>
        <form onSubmit={(e) => { cadasHabito(e) }}>
            <input name="dia" onChange={(e) => { setHabForm({ ...habform, [e.target.name]: e.target.value }) }} />
            <div className="dias">
                <Dia name="0" type="checkbox" checar={habform.days.includes(0)} onClick={(e) => { diasForma(0) }}>D</Dia>
                <Dia name="1" type="checkbox" checar={habform.days.includes(1)} onClick={(e) => { diasForma(1) }}>S</Dia>
                <Dia name="2" type="checkbox" checar={habform.days.includes(2)} onClick={(e) => { diasForma(2) }}>T</Dia>
                <Dia name="3" type="checkbox" checar={habform.days.includes(3)} onClick={(e) => { diasForma(3) }}>Q</Dia>
                <Dia name="4" type="checkbox" checar={habform.days.includes(4)} onClick={(e) => { diasForma(4) }}>Q</Dia>
                <Dia name="5" type="checkbox" checar={habform.days.includes(5)} onClick={(e) => { diasForma(5) }}>S</Dia>
                <Dia name="6" type="checkbox" checar={habform.days.includes(6)} onClick={(e) => { diasForma(6) }}>S</Dia>
            </div>
            <div className="buttons">
                <div onClick={() => { setCreate(!create) }}>Cancelar</div>
                <button type="submit">Salvar</button>
            </div>
        </form>
    </Habito>)
}

const Habito = styled.div`
    width:100%;
    height:180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding:18px;
    margin-bottom:30px;


    form{
        display:flex;
        flex-direction:column;
        input[name="dia"]{
            width:100%;
            height:45px;
            border: 2px solid #D5D5D5;
            border-radius: 5px;
            padding:10px;
            font-size:20px;
        }
        .dias{
            margin-top:8px;
            display:flex;
        }
        .buttons{
            display:flex;
            margin-top:29px;
            margin-left:160px;
            div{
                display:flex;
                justify-content:center;
                align-items:center;
            }

            div:first-child{
                width: 69px;
                height:35px;
                font-size: 16px;
                text-align: center;
                margin-right:30px;
                color: #52B6FF;
                cursor:pointer;

            }
            button{
                width: 69px;
                height:35px;
                font-size: 16px;
                text-align: center;
                background-color:#52B6FF;
                color: white;
                border-radius: 4.63636px;
                cursor:pointer;
                border:none;
            }
        }
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
        color: ${props => !props.checar ? '#DBDBDB' : 'white'};
        background-color: ${props => props.checar ? '#DBDBDB' : 'white'};
        margin-right: 4px;
        cursor: pointer;


`
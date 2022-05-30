import Days from "./Days";
import react, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FormContext } from '../../../../Context/FormContext';
import Lixeira from '../../../../assets/lixeira.png';
import axios from "axios";





export default function Write(){

    const { form, setForm, habitos, setHabitos } = useContext(FormContext);
    
    const nulo = (<span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)

    function deletHab(habito){
        console.log(habito)
        axios.delete('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+habito.id, {
                headers: { "Authorization": `Bearer ${form.token}` }
            }).then(e => {

            })
    }
    
    return (habitos ? habitos.map((element, index) => {
        return <Habito key={index}>
            <span>{element.name}</span>
            <img src={Lixeira} onClick={()=>{deletHab(element)}}/>
            <Days Diad={element}/>
        </Habito>
    }) : nulo)


}


const Habito = styled.div`
    background-color:white;
    width:100%;
    height:90px;
    padding:15px;
    border-radius: 5px;
    margin-bottom:10px;
    position: relative;
    img{
        position: absolute;
        right: 18px;
        cursor: pointer;
    }
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
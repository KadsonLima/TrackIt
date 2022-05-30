import styled from "styled-components";

export default function Days({Diad}){
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (<div className="dias" >
                {dias.map((dia, index) => {
                    return <Dia key={index} contem={(Diad.days.includes(index))} >{dia}</Dia>
                })}
            </div>)
}

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

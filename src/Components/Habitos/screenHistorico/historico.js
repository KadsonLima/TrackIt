import styled from "styled-components";


function Historico() {

    return (
        <>
            <Content >
                <div className="title">
                    <span>Histórico</span>
                    <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
                </div>
            </Content>
        </>
    )


    
}


export default Historico;



const nulo = (<span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>)



const Content = styled.div`
    margin: 70px 0;
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


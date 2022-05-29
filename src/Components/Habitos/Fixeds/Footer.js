import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext} from "react";
import { FormContext } from '../../../Context/FormContext';



function Footer() {

    const { feito, setFeito } = useContext(FormContext);

    const percentage = feito;


    return (
        <>
        
        <Bottom>
            <Link style={{ textDecoration: 'none', color:'#52B6FF' }} to='/habitos'>Hábitos</Link>
            <div className="barraProgresso" style={{ width: 90, height: 90, marginBottom: 40 }}>
               <Link to='/hoje'> <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                /></Link>
            </div>
            <Link style={{ textDecoration: 'none', color:'#52B6FF' }} to='/historico'>Históricos</Link>
            
        </Bottom>
        </>
    )

}


export default Footer;


const Bottom = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:70px;
    background: #FFFFFF;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 18px;
    div{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;


    }
`
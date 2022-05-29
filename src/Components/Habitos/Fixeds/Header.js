import styled from "styled-components";
import { useContext, useState , useEffect} from "react";
import { FormContext } from '../../../Context/FormContext';



function Header(){

    const aba = useContext(FormContext);
    const [image, setImage] = useState(null)

    useEffect(()=>{

        if (localStorage) {
            const strol = localStorage.getItem("form");
            const alou = JSON.parse(strol);
            setImage(alou.image)
        }


    })
    

    const imagem = (aba.form.image)? (aba.form.image) : image;
    return (

        <Cabecalho>
            <span>TrackIt</span>
            <img src={imagem} alt={imagem} width={51} height={51}  />
        </Cabecalho>
    )

}


export default Header;


const Cabecalho = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: 'Playball';
    padding:10px 18px;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    display:flex;
    justify-content:space-between;


    img{
        background-color:black;
        border-radius:50px;
    }
`
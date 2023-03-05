import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Header(){

    return(
    <ContainerHeader>
        <img src={logo} alt="Logo"/>
        <Title>ZapRecall</Title>
    </ContainerHeader>
    )
          
}

const Title = styled.span`
    font-family: 'Righteous', cursive;
    color: white;
    font-size: 36px;  
`

const img = styled.img`
    width: 52px;
    height: 60px;

`
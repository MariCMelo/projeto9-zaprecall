import styled from "styled-components";

export default function Results({counter}){
    return(

    <Results>{counter}/8</Results>
    )
    
}

const Results = styled.div`
width: 375px;
height: 70px;
background-color: white;
color:#333333;
font-family: 'Recursive', sans-serif;
font-size: 18px;
font-weight: 400;
display: flex;
justify-content:center ;
align-items: center;
margin-top: auto;
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
`
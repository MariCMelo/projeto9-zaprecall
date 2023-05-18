import seta_play from "../assets/seta_play.png"
import styled from "styled-components"


export default function () {
    return (
        <>
            <CloseFlashcardContainer>
                <p>Pergunta 1</p>
                <img src= {seta_play} alt="Icone de play" />
            </CloseFlashcardContainer>

            <OpenFlashcardContainer>
                
                <ButtonsContainer>
                    <button>1</button>
                    <button>5</button>
                    <button>1</button>

                </ButtonsContainer>
            </OpenFlashcardContainer>

        </>

    )
}

const CloseFlashcardContainer = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        p{
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #333333;
            

        }
`
const OpenFlashcardContainer = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
        img{
            position: absolute;
            bottom: 10px;
            right: 10px;
}
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
    }

`
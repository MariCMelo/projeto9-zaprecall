import play from "../assets/seta_play.png"
import turn from "../assets/seta_virar.png"
import styled from "styled-components"
import deck from "./Deck"
import { useState } from "react"

export default function ({ card, index }) {
    const [start, setStart] = useState(false)
    const [turned, setTurned] = useState(false)
    const [answered, setAnswered] = useState(false)

    function openDeck() {
        setStart(true)
        console.log("X")
    }

    function showAnswer() {
        setTurned(true)
    }
    
    function answeredQuestion() {
        setStart(false)
        setAnswered(true)
    }

    return (
        <>
            {!start ? (
                <CloseFlashcardContainer>
                    <p>Pergunta {index + 1}</p>
                    <img onClick={openDeck} src={play} alt="Icone de play" />
                </CloseFlashcardContainer>

            ) : (

                <OpenFlashcardContainer>

                    {!turned ? (

                        <>
                            <p>{card.question}</p>
                            <img onClick={showAnswer} src={turn} alt="Seta que vira o flashcard" />
                        </>

                    ) : (

                        <>
                            {card.answer}
                            <ButtonsContainer>
                                <button onClick={answeredQuestion}>Não Lembrei</button>
                                <button onClick={answeredQuestion}>Quase não Lembrei</button>
                                <button onClick={answeredQuestion}>Zap!</button>
                            </ButtonsContainer>
                        </>
                    )}
                </OpenFlashcardContainer>
            )}
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
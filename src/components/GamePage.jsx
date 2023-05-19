import logo from "../assets/logo.png"
import styled from "styled-components"
import Flashcards from "./Flashcards"
import Results from "./Results"
import deck from "./Deck"
import { useState } from "react"

export default function GamePage() {
    const [result, setResult] = useState(0);
    
    return (
        <GamePageContainer>
            <HeaderContainer>
                <img src={logo} alt="Logo ZapRecall" />
                <h1>ZapRecall</h1>
            </HeaderContainer>

            {deck.map((card, index) =>
                <Flashcards
                    key={card.question}
                    card={card}
                    index={index}
                    setResult={setResult}
                />

            )}

            <Results
                totalCards={deck.length}
                result={result}
                
            />
        </GamePageContainer>
    )
}

const GamePageContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    `

const HeaderContainer = styled.div`
display: flex;
align-items: center;
margin: 40px 0 20px 0;
    img {
        width: 52px;   
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;    
    }
`
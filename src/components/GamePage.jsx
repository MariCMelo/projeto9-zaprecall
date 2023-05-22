import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Flashcards from "./Flashcards";
import Results from "./Results";
import deck from "./Deck";

export default function GamePage() {
  const [result, setResult] = useState(0);

  return (
    <GamePageContainer>
      <HeaderContainer>
        <LogoImage src={logo} alt="Logo ZapRecall" />
        <h1>ZapRecall</h1>
      </HeaderContainer>

      {deck.map((card, index) => (
        <Flashcards
          key={card.question}
          card={card}
          index={index}
          setResult={setResult}
        />
      ))}

      <Results totalCards={deck.length} result={result} />
    </GamePageContainer>
  );
}

const GamePageContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-bottom: 200px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;

  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

const LogoImage = styled.img`
  width: 52px;
`;
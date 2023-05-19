import play from "../assets/seta_play.png"
import redBtn from "../assets/icone_erro.png"
import yellowBtn from "../assets/icone_quase.png"
import greenBtn from "../assets/icone_certo.png"
import turn from "../assets/seta_virar.png"
import styled from "styled-components"
import { useState } from "react"

export default function ({ card, index, setResult}) {
    const [start, setStart] = useState(false)
    const [turned, setTurned] = useState(false)
    const [color, setColor] = useState("#333333")
    const [addDash, setAddDash] = useState(false)
    const [finish, setFinish] = useState(false)
    const [btn, setBtn] = useState(play)

  function openDeck() {
    setStart(true);
  }



    function openDeck() {
        setStart(true)
    }

    function showAnswer() {
        if (!turned) {
            setTurned(true);
            setStart(true);
          }
        }

    function pressedRed() {
        if (finish) return
        setColor("#FF3030");
        setAddDash(true);
        setStart(false);
        setBtn(redBtn);
      }
    
      function pressedYellow() {
        if (finish) return
        setColor("#FF922E");
        setAddDash(true);
        setStart(false);
        setBtn(yellowBtn); 
      }
    
      function pressedGreen() {
        if (finish) return
        setColor("#2FBE34");
        setAddDash(true);
        setStart(false);
        setBtn(greenBtn);
      }


    return (
        <>
            {!start ? (
                <CloseFlashcardContainer
                 data-test="flashcard"
                 color={color}
                 addDash={addDash}
                 >
                    <p data-test="flashcard-text">Pergunta {index + 1}</p>
                    <img data-test="play-btn" onClick={openDeck} src={btn} alt="Icone de play" />
                </CloseFlashcardContainer>

            ) : (

                <OpenFlashcardContainer>

                    {!turned ? (

                        <>
                            <p data-test="flashcard-text">{card.question}</p>
                            <img data-test="turn-btn" onClick={showAnswer} src={turn} alt="Seta que vira o flashcard" />
                        </>

                    ) : (

                        <>
                            <p data-test="flashcard-text">{card.answer}</p>
                            <ButtonsContainer>
                            <RedButton 
              className="RedButton"    
              data-test = "no-btn"
              onClick={pressedRed}
              >Não lembrei</RedButton>

              <YellowButton  
              className="YellowButton"        
              data-test = "partial-btn"    
              onClick={pressedYellow}
              >Quase não lembrei</YellowButton>

              <GreenButton 
              className="GreenButton"  
              data-test = "zap-btn"          
              onClick={pressedGreen}
              >Zap!</GreenButton>
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
            color: ${props => props.color};
            text-decoration: ${props => (props.addDash ? 'line-through' : 'none')};
            

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
`

const RedButton = styled.button`
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
        background-color: #FF3030;
        border-radius: 5px; 
        padding:5px;
        border: transparent;
    ` 

const YellowButton = styled.button`
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
        background-color: #FF922E;
        border-radius: 5px; 
        padding:5px;
        border: transparent;
    ` 

const GreenButton = styled.button`
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
        background-color: #2FBE34;
        border-radius: 5px; 
        padding:5px;
        border: transparent;
    ` 

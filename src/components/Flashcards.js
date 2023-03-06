import { useState } from 'react';


import icone_certo from "./components/assets/icone_certo.png";
import icone_erro from "./components/assets/icone_erro.png";
import icone_quase from "./components/assets/icone_quase.png";
import seta_play from "./components/assets/seta_play.png";
import seta_virar from "./components/assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png"
import icone_quase from "../assets/icone_quase.png"
import icone_erro from "../assets/icone_erro.png"


export default function Flashcards(c){
    
    const [color, setColor] = useState("");
    // const [textDecoration, setTextDecoration] = useState ("");
    const [icon, setIcon] = useState ("");
    const [openCard, setOpenCard] = useState(false);
    const [closeCard, setCloseCard] = useState(true);
    const [noClick, setNoClick] = useState(false);
    const [partialClick, setPartialClick] = useState(false);
    const [zapClick, setZapClick] = useState(false);
    const [dataTestIcon, setDataTestIcon ] = useState("play-btn");
    const [turnClick, setTurnClick] = useState();


    function start(){
      setOpenCard(true);
      setCloseCard(false);
    }

    function noClick(){
      setColor("red")
      setIcon(icone_erro)
      setDataTestIcon()
      setNoClick(true)
      setTurn(false)
      setTurnClick(false)
    }

    function partialClick(){
      setColor("yellow")
      setIcon(icone_quase)
      setDataTestIcon()
      setPartialClick(true)
      setTurn(false)
      setTurnClick(false)
    }

    function zapClick(){
      setColor("green")
      setIcon(icone_certo)
      setDataTestIcon("zap-icon")
      setZapClick(true)
      setTurn(false)
      setTurnClick(false)
    }
}
    return(
      <>

      <ContainerFlashcards data-test="flashcard">
        turnClick={turnClick}
        zapClick= {zapClick}
        partialClicl={partialClicl}
        wrongClick={wrongClick}
        color= {color}
        iconImg= {iconImg}

        <FlashcardQuestion>
          <span data-test="flashcard-text"> Pergunta {i} </span>
          <img
          data-test="play-btn"
          src={iconImg} 
          onClick={()=>start}
          />
        </FlashcardQuestion>

        <ContainerQuestion>
        <span>
        {question}
        </span>
        <img
          src={turnCardImg}
          alt="Seta para virar a carta"
          data-test="turn-btn"
          onClick={() => turnCard()}
        />
        </ContainerQuestion>   

        <ContainerAnswer data-test="flashcard">
          <span>
            {answer}
          </span>

          <div ContainerButtons>
              <RedButton 
              className="RedButton"    
              data-test = "no-btn"
              onClick={()=>setNo()}
              >Não lembrei</RedButton>

              <YellowButton  
              className="YellowButton"        
              data-test = "partial-btn"    
              onClick={()=>setPartial()}
              >Quase</YellowButton>

              <GreenButton 
              className="GreenButton"  
              data-test = "zap-btn"          
              onClick={()=>setZap()}
              >Zap!</GreenButton>

          </div>
        </ContainerAnswer>
        
        </ContainerFlashcards>
      </> 
    )


const ContainerFlashcards = styled.div `
    width: 300px;
    height: 131px;
    box-sizing: border-box;
    padding:15px ;
    border-radius: 5px;
    color: #333333;
    background-color:  #FFFFD5;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
` 

const ContainerButtons = styled.div `
display: flex;
  justify-content:space-between ;
  margin-top: auto;
` 

const RedButton = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    color: red;
    background-color: rebeccapurple;
    border: none;
    ` 

const YellowButton = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    color: yellow;
    background-color: rebeccapurple;
    border: none;
    ` 

const GreenButton = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    color: green;
    background-color: rebeccapurple;
    border: none;
    ` 
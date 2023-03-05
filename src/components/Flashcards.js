import { useState } from 'react';

import icone_certo from "./components/assets/icone_certo.png";
import icone_erro from "./components/assets/icone_erro.png";
import icone_quase from "./components/assets/icone_quase.png";
import seta_play from "./components/assets/seta_play.png";
import seta_virar from "./components/assets/seta_virar.png";



const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]




export default function Flashcards(){
    
    const [color, setColor] = useState('black');
  
    const handleRedClick = () => {
      setColor('red');
    };
  
    const handleYellowClick = () => {
      setColor('yellow');
    };
  
    const handleGreenClick = () => {
      setColor('green');
    };

    
    return(
        <div ContainerFlashcards className='card-pergunta'>
            cards[props.selectedQuestion]
        <div className='container-button'>

        <div ContainerButtons>
            <RedButton onClick={handleRedClick}>Não lembrei</RedButton>
            <YellowButton onClick={handleYellowClick}>Quase</YellowButton>
            <GreenButton onClick={handleGreenClick}>Zap!</GreenButton>
        </div ContainerButtons >

        </div>
        </div ContainerFlashcards >
    )

}





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
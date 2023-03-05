import icone_certo from "../assets/icone_certo.png"
import icone_quase from "../assets/icone_quase.png"
import icone_erro from "../assets/icone_erro.png"

const icon = [icone_certo, icone_quase, icone_erro]

export default function Deck(){
    return(
    <button onClick={selectQuestion}> 
        <div>"Pergunta"[]</div>
        <div>
            <img src={icon[SelectedOption]}alt="Botão Selecionado"/>
        </div>
    </button>
    )
}

const Deck = styled.button`
width: 300px;
height: 65px;
margin-bottom: 25px;
box-sizing: border-box;
padding: 15px;
display: flex;
align-items: center;
color: #333333;
background-color: white;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 700;
font-size: 16px;
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
`
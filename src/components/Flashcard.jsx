import { styled } from 'styled-components';
import playCard from '../assets/seta_play.png'
import turnCard from '../assets/seta_virar.png'
import zapIcon from '../assets/icone_certo.png'
import almostIcon from '../assets/icone_quase.png'
import forgotIcon from '../assets/icone_erro.png'

export default function Flashcard({ card, cards, turnQuestion, setTurnQuestion, turnAnswer, setTurnAnswer }) {

    function showAnswer(card){
        setTurnAnswer([...turnAnswer, card])
        let newArray = turnQuestion
        newArray.splice(turnQuestion.indexOf(card), 1)
        setTurnQuestion(newArray)
    }

    function answerOptions (){
        
    }

    if (turnQuestion.includes(card)) {
        return (
            <>
                <FlashcardQuestion>
                    <h1>{card.question}</h1>
                    <img src={turnCard} onClick={()=>showAnswer(card)}/>
                </FlashcardQuestion>
            </>
        )
    } else if (turnAnswer.includes(card)) {
        return (
            <FlashcardAnswer>
                <h1>{card.answer} </h1>
                <ContainerButtons>
                    <ForgotButton>Não lembrei</ForgotButton>
                    <AlmostButton>Quase não lembrei</AlmostButton>
                    <ZapButton>Zap!</ZapButton>
                </ContainerButtons>
            </FlashcardAnswer>
        )
    } else {
        return (
            <FlashcardDefault>
                <h1>Pergunta {cards.indexOf(card) + 1}</h1>
                <img src={playCard} onClick={()=>setTurnQuestion([...turnQuestion, card])}/>
            </FlashcardDefault>
        )
    }
}

function verifyResultColor(result) {
    switch (result) {
        case 'zap':
            return '#2FBE34';
            break;
        case 'almost':
            return '#FF922E';
            break;
        case "forgot":
            return '#FF3030';
            break;
        default:
            return '#333333';
    }
}

const FlashcardDefault = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 300px;
    height: 60px;
    padding: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: ${props => verifyResultColor(props.zapOrNot)};
        text-decoration: ${props => !props.zapOrNot ? 'none' : 'line-through'};
    }
    img{
        width: 20px;
        height: auto;
    }
`;

const FlashcardQuestion = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    width: 300px;
    height: 130px;
    background-color: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    img{
        position: relative;
        bottom: 12px;
        left:254px;
        width: 30px;
        height: auto;
    }
    h1{
        margin: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }
`;

const FlashcardAnswer = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    background-color: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    h1{
        margin: 16px;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }
`;

const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
`;

const Buttons = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    color: #FFF;
    text-align: center;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    border: none;
`;

const ForgotButton = styled(Buttons)`
    background-color: #FF3030;
`;

const AlmostButton = styled(Buttons)`
    background-color: #FF922E;
`;

const ZapButton = styled(Buttons)`
    background-color: #2FBE34;
`;
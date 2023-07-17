import { styled } from 'styled-components';
import turnCard from '../assets/seta_virar.png'
import { useState } from 'react';
import { ZAP, ALMOST, FORGOT, DEFAULT} from '../constants/colors'
import IconQuestion from './IconQuestion';

export default function Flashcard({ card, cards, setCounter, counter }) {

    const [ turnQuestion, setTurnQuestion ] = useState(false);
    const [ turnAnswer, setTurnAnswer ] = useState(false);
    const [ status, setStatus ] = useState('default');

    function showQuestion () {
        if(status === 'default'){
            setTurnQuestion(true);
        }
    }

    function showAnswer() {
        setTurnAnswer(true);
        setTurnQuestion(false);
    }

    function answerOptions(resp){
        setStatus(resp);
        setTurnAnswer(false);
        setCounter(counter + 1);
    }

    if (!turnQuestion) {
        if (turnAnswer) {
            return (
                <FlashcardAnswer data-test="flashcard">
                    <h1 data-test="flashcard-text">{card.answer} </h1>
                    <ContainerButtons>
                        <Buttons color={FORGOT} onClick={() => answerOptions('forgot')} data-test="no-btn">Não lembrei</Buttons>
                        <Buttons color={ALMOST} onClick={() => answerOptions('almost')} data-test="partial-btn">Quase não lembrei</Buttons>
                        <Buttons color={ZAP} onClick={() => answerOptions('zap')} data-test="zap-btn">Zap!</Buttons>
                    </ContainerButtons>
                </FlashcardAnswer>
            )
        } else {
            return (
                <>
                    <FlashcardDefault status={status} data-test="flashcard">
                        <h1 data-test="flashcard-text">Pergunta {cards.indexOf(card) + 1}</h1>
                        <IconQuestion status={status} showQuestion={showQuestion}/>
                    </FlashcardDefault>
                </>
            )
        }
    } else {
        return (
            <FlashcardQuestion data-test="flashcard">
                <h1 data-test="flashcard-text">{card.question}</h1>
                <img src={turnCard} onClick={() => showAnswer(card)} data-test="turn-btn"/>
            </FlashcardQuestion>
        )
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
        color: ${props => {            
            switch (props.status){
                case 'zap':  
                    return ZAP;
                case 'almost': 
                    return ALMOST;
                case 'forgot': 
                    return FORGOT;
                default : 
                    return DEFAULT;
            }
        }};
        text-decoration: ${props => props.status === 'default' ? 'none' : 'line-through'};
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
    background-color: ${props => props.color}
`;
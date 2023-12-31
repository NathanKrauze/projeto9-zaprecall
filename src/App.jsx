import { useState } from 'react';
import { styled } from 'styled-components';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import Flashcards from './components/Flashcards';
import cards from './constants/cards';

export default function App() {

  const [ counter, setCounter] = useState(0);

  return (
    <>
      <ContentContainer>
        <ContainerLogo>
          <img src={logo} />
          <h1>ZapRecall</h1>
        </ContainerLogo>
        <Flashcards cards={cards} setCounter={setCounter} counter={counter}/>
        <Footer cardsNumber={cards.length} counter={counter}/>
      </ContentContainer>
    </>
  )

}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #FB6B6B;
  margin-bottom: 70px;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 46px;
  img{
    width:52px;
    height:60px;
  }
  h1{
    margin-left: 20px;
    color: #FFFFFF;
    font-family: 'Righteous', sans-serif;
    font-weight: 400;
    font-size: 36px;
  }
`;
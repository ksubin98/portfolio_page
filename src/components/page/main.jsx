import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import About from './about';

const Container = styled.div`

`

const Title = styled.h1`
  font-size: 2em;
  margin-top: 3.5em;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`
const Title2 = styled.h1`
  font-size: 2em;
  color: #9023AD;
`
const Title3 = styled.h1`
  font-size: 2em;
  margin-top: 3rem;
  margin-bottom: 2rem;
`

const WordContainer = styled.div`
  border-style: solid;
  width: 50%;
  margin: auto;
`
const MenuList = styled.ul`
  display: flex;
  padding-left: 4.5px;
  align-items: center;
  justify-content: center;
  list-style: none;
`
const MenuWord= styled.li`
  padding: 12px 16px;
  text-decoration: underline;
  font-family: "CookieRun-Regular";
  cursor: pointer;
  color: #0C1059;
  :hover {
    color: #BF9E80;
  }
`
const Main = () => {
  const history = useHistory();
  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);

  const txt = "마케팅하는";

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(word + txt[count]);
      setCount(count + 1);
    }, 100);
    if(count === txt.length) {
      clearInterval(interval);
    }
    return() => clearInterval(interval);
  })

  const goToAbout = () => {
    history.push('/About');
  }

  const goToProject = () => {
    history.push('/Project');
  }

  const goToContact = () => {
    history.push('/Contact');
  }

  return(
  <Container>
    <Title>안녕하세요.</Title>
    <WordContainer>
      <Title2>{word}</Title2>
    </WordContainer>
    <Title3>프론트엔드 개발자 권수빈입니다.</Title3>

    <MenuList>
        <MenuWord>#Home</MenuWord>
        <MenuWord onClick={goToAbout}>#About</MenuWord>
        <MenuWord onClick={goToProject}>#Project</MenuWord>
        <MenuWord onClick={goToContact}>#Contact</MenuWord>
      </MenuList>
  </Container>
  )
}

export default Main;


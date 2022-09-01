import React from 'react';
import Navbar from '../element/navbar';
import styled from 'styled-components';
import {SiGithub, SiNaver} from 'react-icons/si';
import {ImBlogger2} from 'react-icons/im';

const TitleBox = styled.div`
  margin-top: 3em;
  .Title {
    text-align: center;
    font-size: 40px;
  }
`

const SnsContainer = styled.div`
  margin-top: 3em;
  margin-left: 13em;
  width:70%;

  .SnsText {
    font-size: 35px;
  }
`

const SnsList = styled.li`
  list-style: none;
  border-style: solid;
  width: 40%;
  margin-left: 19.5rem;
  
  .SnsBtn {
    font-size: 60px;
    margin: 3rem 1rem 3rem 1rem;

    :hover {
      cursor: pointer;
      background-color: #fce4ec;
      border-radius: 4px;
      }
  }
`

const EmailContainer = styled.div`
  margin-left: 13.5em;
  width:70%;
  height: 40%;

  .EmailText{
    font-size: 35px;
  }
`
const EmailBox = styled.div`
  border-style: solid;
  width: 40%;
  margin-left: 19.5rem;

  .Email {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    color: #790e8b;
  }
`

const Contact = (props) => {
  
  return(
    <>
    <Navbar />
    <TitleBox>
      <h2 className='Title'>🙋‍♀️많은 연락주세요🙋‍♀️</h2>
    </TitleBox>
    <SnsContainer>
      <h3 className='SnsText'>SNS</h3>
      <SnsList>
        <SiGithub className='SnsBtn'onClick={()=> window.open('https://github.com/ksubin98', '_blank')}/>
        <ImBlogger2 className='SnsBtn' color='#ff5722'onClick={()=> window.open('https://su-ing.tistory.com/', '_blank')}/>
        <SiNaver className='SnsBtn' color='#4caf50'onClick={()=> window.open('https://blog.naver.com/0525year', '_blank')}/>
      </SnsList>
    </SnsContainer>
    <EmailContainer>
      <h3 className='EmailText'>Email</h3>
      <EmailBox>
        <p className='Email'>subin.k1229@gmail.com</p>
      </EmailBox>
    </EmailContainer>
    </>
  )
}

export default Contact;
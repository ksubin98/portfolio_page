import React from 'react';
import styled from 'styled-components';
import {BiRightArrow} from 'react-icons/bi';
import {ImHtmlFive} from 'react-icons/im';
import {SiCss3, SiJavascript, SiReact, SiArduino, SiGit, SiGithub, SiNotion, SiSlack} from 'react-icons/si';
import profilePhoto from '../../img/profile.jpg';
import Navbar from '../element/navbar';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const AboutMeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  width: 70%;
  margin-top: 3rem;
`

const PhotoContainer = styled.div`
  width: 300px;
  height: 300px; 
  border-radius: 60%;
  overflow: hidden;
  margin: auto;
`
const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const AboutMeBox = styled.div`
  text-align: initial;
  border-style: solid;
  border-radius: 5px;
  .AboutTitle {
    margin-left: -2.5em;
    text-align: center;
  }
` 
const SkillContainer = styled.div`
  display: inline-inline;
  align-items: center;
  justify-items: center;
  align-content: space-around;
  margin-top: 3rem;
  width: 80%;
  height: 300px;
`
const SkillTitle = styled.h2`
  margin-left: 10em;
`

const SkillBox = styled.div`
  display: block;
  margin-left: 20em;
  
  .icon {
    font-size: 110px;
    margin-bottom: 3rem;
    margin-right: 2rem;
  }
` 

const About = (props) => {

  return (
    <Container>
      <Navbar />
      <AboutMeContainer>
      <PhotoContainer>
        <PhotoImg
          src={profilePhoto} 
        />
      </PhotoContainer>
        <AboutMeBox>
          <h2 className='AboutTitle'>About Me</h2>
          <span><BiRightArrow /> 제가 만드는 서비스들로 더 나은 내일이 되기를 바라는 개발자 권수빈입니다.</span>
          {/*css로 간격 띄우기*/}
          <p><BiRightArrow /> 새로운 것을 배우고, 다양하게 사용해보려 합니다.</p>
          <p><BiRightArrow /> 사람들과의 소통을 중요시 생각하며, 자유롭게 피드백을 주고받으며 같이 성장하려 합니다.</p>
          <p><BiRightArrow /> 도전적인 성격으로 많은 어려움을 두려워하지 않고 즐기려고 합니다.</p>
        </AboutMeBox>
      </AboutMeContainer>
      <SkillContainer>
        <SkillTitle>Skills</SkillTitle>
        <SkillBox>
            <ImHtmlFive className='icon' color='#ff5722'/>
            <SiCss3 className='icon' color='#1976d2'/> 
            <SiJavascript className='icon' color='#ffb300'/>
            <SiReact className='icon' color='#42a5f5'/>
            <SiArduino className='icon' color='#26a69a'/> 
            <SiGit className='icon' color='#e57373' /> 
            <SiGithub className='icon'/>
            <SiNotion className='icon'/> 
            <SiSlack className='icon' color='#aed581'/>
        </SkillBox>
      </SkillContainer>
    </Container>
  )
}

export default About;
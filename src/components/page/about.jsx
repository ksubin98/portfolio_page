import React from 'react';
import styled from 'styled-components';
import {BiRightArrow} from 'react-icons/bi';
import {MdOutlineSubdirectoryArrowRight} from 'react-icons/md';
import {ImHtmlFive} from 'react-icons/im';
import {SiCss3, SiJavascript, SiReact, SiArduino, SiGit, SiGithub, SiNotion, SiSlack} from 'react-icons/si';
import profilePhoto from '../../img/profile.jpg';

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
  .AboutTitle {
    margin-left: -2.5em;
    text-align: center;
  }
` 
const SkillContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  margin-top: 5rem;
  width: 70%;
`

const SkillBox = styled.div`
  text-align: initial;
  margin-left: 35%;

.SkillTitle {
  margin-left: -3em;
  text-align: center;
}

` 

const About = (props) => {

  return (
    <>
      <AboutMeContainer>
      <PhotoContainer>
        <PhotoImg
          src={profilePhoto} 
        />
      </PhotoContainer>
        <AboutMeBox>
          <h2 className='AboutTitle'>About Me</h2>
          <span><BiRightArrow /> 제가 만드는 기능들로 더 나은 내일이 되기를 바라는 개발자 권수빈입니다.</span>
          <p><BiRightArrow /> 제가 추구하고 제공하는 서비스들로 더 나은 삶이 되기를 바라는 마케터 권수빈입니다.</p>
          {/*css로 간격 띄우기*/}
          <p><BiRightArrow /> 새로운 것을 배우고, 다양하게 사용해보려 합니다.</p>
          <p><BiRightArrow /> 사람들과의 소통을 중요시 생각하며, 자유롭게 피드백을 주고받으며 같이 성장하려 합니다.</p>
          <p><BiRightArrow /> 도전적인 성격으로 많은 어려움을 두려워하지 않고 즐기려고 합니다.</p>
        </AboutMeBox>
      </AboutMeContainer>
      <SkillContainer>
        <SkillBox>
          <h2 className='SkillTitle'>Skills</h2>
          {/* 각 스킬에 맞는 이미지 첨부하여 디자인 하기 */}
            <span className='SkillIcon'><ImHtmlFive/> <SiCss3/> <SiJavascript/> <SiReact/> </span>
            <p><SiArduino/> <SiGit/> <SiGithub/></p>
            <p><SiNotion/> <SiSlack/></p>
        </SkillBox>
      </SkillContainer>
    </>
  )
}

export default About;
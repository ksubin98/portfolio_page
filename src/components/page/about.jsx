import React from 'react';
import profilePhoto from '../../img/profile.jpg';

const About = (props) => {

  return (
    <>
      <img 
        src={profilePhoto} 
        width= "300px"
      />
      <h2>About Me</h2>
      <span>제가 만드는 기능들로 더 나은 내일이 되기를 바라는 개발자 권수빈입니다.</span>
      <p>제가 추구하고 제공하는 아이디어들로 더 나은 삶이 되기를 바라는 마케터 권수빈입니다.</p>
      {/*css로 간격 띄우기*/}
      <p>새로운 것을 배우고, 다양하게 사용해보려 합니다.</p>
      <p>사람들과의 소통을 중요시 생각하며, 자유롭게 피드백을 주고받으며 같이 성장하려 합니다.</p>
      <p>도전적인 성격으로 많은 어려움을 두려워하지 않고 즐기려고 합니다.</p>

      <h2>Univer</h2>
        <span>순천향대학교 사물인터넷학과 전공</span>
        <p>경영학과 복수 전공</p>
      <h2>Skills</h2>
      {/* 각 스킬에 맞는 이미지 첨부하여 디자인 하기 */}
        <span>HTML CSS Javascript React Zustand</span>
        <p>Arduino Git </p>
    </>
  )
}

export default About;
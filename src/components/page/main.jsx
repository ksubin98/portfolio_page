import React from 'react';
import styled from 'styled-components';
import About from './about';

const Main = (props) => {


  return(
  <>
  <nav>
    <li>
      <button>Home</button>
      <button>About</button>
      <button>Project</button>
      <button>Contact</button>
    </li>
  </nav>
  <h1>안녕하세요.</h1>
  <h2>마케팅하는 프론트엔드 개발자 권수빈입니다.</h2>
  </>
  )
}

export default Main;



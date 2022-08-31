import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  margin: 0;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 12px;
`

const NavLogo = styled.h2`
  color: white;
  font-size: 24px;
`
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;

  .menuName {
    font-size: 15px;
    margin-right: 3rem;
    text-decoration: none;
    color: white;
    :hover{
      background-color: #d49466;
      border-radius: 4px;
      cursor: grab;
    }
  }
`

const Navbar = (props) => {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
  }

  const goToAbout = () => {
    history.push('./About');
  }

  const goToProject = () => {
    history.push('/Project');
  }

  const goToContact = () => {
    history.push('/Contact');
  }
  
  return(
    <Container>
      <MenuContainer>
        <NavLogo>Subin's Portfolio</NavLogo>
        <MenuList>
          <li className='menuName' onClick={goToHome}>Home</li>
          <li className='menuName'>About Me</li>
          <li className='menuName' onClick={goToProject}>Project</li>
          <li className='menuName' onClick={goToContact}>Contact</li>
      </MenuList>
      </MenuContainer>
      
    </Container>
  );
}

export default Navbar;
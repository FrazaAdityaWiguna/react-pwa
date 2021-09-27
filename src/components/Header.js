import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto '>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users'>Users</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

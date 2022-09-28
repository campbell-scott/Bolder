import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import Bolder from '../assets/Bolder3.png'

import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const NavBar = () => {
    return (
        <Navbar id='header' bg="dark" expand="lg">
        <Container>
          <img className='marca' src={Bolder} alt='bolder'></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navegacion">
              <Button className='col-12'>Inicio</Button>
              <DropdownButton className='col-12' as={ButtonGroup} title="Productos" id="bg-nested-dropdown">
                <Dropdown.Item className='separador' eventKey="1">Remeras</Dropdown.Item>
                <Dropdown.Item className='separador' eventKey="2">Buzos</Dropdown.Item>
                <Dropdown.Item eventKey="3">Pantalones</Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar
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
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar id='header' expand="lg">
        <Container>
          <img className='marca' src={Bolder} alt='bolder'></img>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navegacion">
              <Button className='col-12'>Inicio</Button>
              <DropdownButton className='col-12' as={ButtonGroup} title="Productos" id="bg-nested-dropdown">
                <div className='displayFlex'>
                  <NavLink to={'/category/remeras'} className={({isActive}) => isActive ? 'categoriasActive separador' : 'categorias separador'}>Remeras</NavLink>
                  <NavLink to={'/category/buzos'} className={({isActive}) => isActive ? 'categoriasActive separador' : 'categorias separador'}>Buzos</NavLink>
                  <NavLink to={'/category/accesorios'} className={({isActive}) => isActive ? 'categoriasActive' : 'categorias'}>Accesorios</NavLink>
                </div>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar
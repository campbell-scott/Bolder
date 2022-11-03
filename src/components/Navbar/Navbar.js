import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import Bolder from '../assets/Bolder3.png'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { NavLink } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase';

const NavBar = () => {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return {id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])

  return (
      <Navbar id='header' expand="lg">
      <Container>
      <img className='marca' src={Bolder} alt='bolder'></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navegacion">
            <NavLink className='col-12' to={'/'}><Button>Inicio</Button></NavLink>
            <DropdownButton className='col-12' as={ButtonGroup} title="Productos" id="bg-nested-dropdown">
              <div className='displayFlex'>
                { categories.map(cat => (
                  <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'categoriasActive separador' : 'categorias separador'}>{cat.label}</NavLink>
                )) }
              </div>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
        <NavLink to={'/cart'} style={{color: 'white', textDecoration: 'none'}}><CartWidget/></NavLink>
      </Container>
    </Navbar>
  )
}

export default NavBar


// 
// <NavLink to={'/category/buzos'} className={({isActive}) => isActive ? 'categoriasActive separador' : 'categorias separador'}>Buzos</NavLink>
// <NavLink to={'/category/accesorios'} className={({isActive}) => isActive ? 'categoriasActive' : 'categorias'}>Accesorios</NavLink>
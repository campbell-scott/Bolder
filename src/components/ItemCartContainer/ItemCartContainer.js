import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import './ItemCartContainer.css'

const ItemCartContainer = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='contenedor'>
                <p className='noElementos'>No hay elementos en el carrito</p>
                <Link to={'/'} className='verProductos' >Ver Productos</Link>
            </div>
        )
    }

    return(
        <div className='contenedor'>
            {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
            <div className='total'>
                <p>Total (sin envío): </p>
                <p>$ {totalPrice}</p>
            </div>
            <div className='direcc'>
                <button className='navegaCF' onClick={() => clearCart()}>Limpiar carrito</button>
                <Link className='navegaCF' to={'/checkout'}>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default ItemCartContainer
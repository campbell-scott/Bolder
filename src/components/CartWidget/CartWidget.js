import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className='contcarrito'>
            <button className='carrito'></button>
            <p className='contador'>{totalQuantity}</p>
        </div>
    )
}

export default CartWidget
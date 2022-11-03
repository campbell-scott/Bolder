import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './ItemCart.css'

const ItemCart = ({ id, name, img, price, quantity, size }) => {
    const { removeItem } = useContext(CartContext)
    
    return(
        <div className='flexcart'>
            <div className='flexibox'>
                <img src={img} alt={name}/>
                <div className='info'>
                    <div className='flexibox'>
                        <h1>{name}</h1>
                        <p style={{margin:'0 0 0 5px', alignself: 'center'}}>({size})</p>
                    </div>
                    <p>$ {price}</p>
                    <p>Cant: {quantity}</p>
                </div>
            </div>
            <div className='info2'>
                <button onClick={() => removeItem(id)}></button>
                <p>Subtotal: $ {quantity*price}</p>
            </div>
        </div>
    )
}

export default ItemCart
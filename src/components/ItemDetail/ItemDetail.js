import './ItemDetail.css'
import Counter from '../ItemCount/Counter'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, price, img, description, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const [ size, setSize ] = useState('S')

    const handleOnAdd = (quantity) => {
        if ( quantity > stock  ) {
            setNotification('error', '¡Uy! No tenemos más stock de este producto para agregarlo al carrito')
        } else {
            const productToAdd = {
                id, name, img, price, quantity, size
            }
            addItem(productToAdd)
            setNotification('success', 'Se agrego al carrito')
        }
    }
    
    return(
        <div className='dFlex'>
            <div className='contImg'>
                <img className='imgProduc' src={img} alt={name}/>
            </div>
            <div className='flexi'>
                <h1 className='tituloProduc'>{name}</h1>
                <p className='precioProduc'>$ {price}</p>
                <select className='talleProduc' value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value={'S'}>S</option>
                    <option value={'M'}>M</option>
                    <option value={'L'}>L</option>
                    <option value={'XL'}>XL</option>
                </select>
                <h3>{description}</h3>
                {!isInCart(id)
                    ? <Counter stock={stock} onAdd={handleOnAdd}/>
                    : <div className='final'>
                        <Link to={'/'} className='finalizar'>Seguir comprando</Link>
                        <Link to={'/cart'} className='finalizar'>Ir al carrito</Link>
                    </div> 
                }
            </div>
        </div>
    )
}

export default ItemDetail

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
        const productToAdd = {
            id, name, img, price, quantity, size
        }
        addItem(productToAdd)
        setNotification('success', 'Se agrego al carrito')
    }
    
    return(
        <div className='dFlex'>
            <div className='col-12 col-md-8 pl-md-3 pr-md-3'>
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
                    : <Link to={'/cart'} className='finalizar'>Carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail

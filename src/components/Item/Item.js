import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, img, name, price}) => {
    return(
        <div className='flexProducto'>
            <img className='fotoProducto' src= {img} alt= {name}/>
            <h1 className='nombreProducto'>{name}</h1>
            <p className='precioProducto'>${price}</p>
            <Link className='detalle' to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
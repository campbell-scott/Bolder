import './ItemDetail.css'
import Counter from '../ItemCount/Counter'

const ItemDetail = ({ prod }) => {
    const handleOnAdd = () => {
        console.log('Se agrego al carrito')
    }
    console.log(prod.img)

    return(
        <div className='dFlex'>
            <div className='col-12 col-md-8 pl-md-3 pr-md-3'>
                <img className='imgProduc' src={prod.img} alt={prod.name}/>
            </div>
            <div className='flexi'>
                <h1 className='tituloProduc'>{prod.name}</h1>
                <p className='precioProduc'>$ {prod.price}</p>
                <select className='talleProduc'>
                    <option value={'S'} defaultValue>S</option>
                    <option value={'M'}>M</option>
                    <option value={'L'}>L</option>
                    <option value={'XL'}>XL</option>
                </select>
                <Counter stock={prod.stock} onAdd={handleOnAdd}/>
                <h3>{prod.description}</h3>
            </div>
        </div>
    )
}

export default ItemDetail

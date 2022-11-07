import './ItemHome.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import banner from '../assets/banner1.png'

const ItemHome = () => {

    return(
        <div>
            <img src={banner} className='banner' alt='banner'/>
            <ItemListContainer />
        </div>
    )
}

export default ItemHome
import './ItemListContainer.css'
import { getProductByCategory, getProducts } from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]) 
    
    if(loading) {
        return <Spinner animation="border" variant="dark" />
    }

    return(
        <div className='margen'>
            <h1 className='bienvenida'>Lista de productos</h1>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer
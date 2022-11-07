import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase';
import { NotificationContext } from '../../notification/NotificationService'
import { useContext } from 'react';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection( db, 'products' ), where('category', '==', categoryId)) : collection(db, 'products')
       
        getDocs(collectionRef).then(response => {
            
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                
                return { id: doc.id, ...data }
            })
            
            setProducts(productsAdapted)

        }).catch(error => {
            setNotification('error', 'Hubo un error con el servidor, Por favor intentelo denuevo mas tarde')
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]) 
    
    if(loading) {
        return(
            <div style={{margin: '3%'}}>
                <Spinner animation="border" variant="dark" />
            </div>
        )
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
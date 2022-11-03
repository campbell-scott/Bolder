import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from "react-router-dom";
import './ItemDetailContainer.css'
import Atras from '../assets/atras.png'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase';

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    const navegate = useNavigate()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }

            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    })

    if(loading) {
        return(
            <div style={{margin: '3%'}}>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    return(
        <div>
            <button className="back" onClick={() => navegate(-1)}><img src={Atras} alt= 'atras'/></button>
            <ItemDetail {...product} /> 
        </div>
    )
}

export default ItemDetailsContainer
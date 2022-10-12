import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    })

    if(loading) {
        return <Spinner animation="border" variant="dark" />
    }

    return(
        <div>
            <ItemDetail prod={product} /> 
        </div>
    )
}

export default ItemDetailsContainer
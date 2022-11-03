import { useState } from "react"
import './Counter.css'

const Counter = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1)
    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity +1)
        }
    }
    const substract = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }
    return(
        <div className="flexRow">
            <div className="borde">
                <button className="botonResta" onClick={substract}></button>
                <input className="cantCarrito" type={'number'} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                <button className="botonSuma" onClick={add}></button>
            </div>
            <button className="aCarrito" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter
import { useState } from "react"
import './Counter.css'

const Counter = ({stock},{onAdd}) => {
    const [count, setCount] = useState(0)
    const add = () => {
        if (count < stock) {
            setCount(count +1)
        }
    }
    const substract = () => {
        if (count > 0) {
            setCount(count -1)
        }
    }
    return(
        <div className="flexRow">
            <div className="borde">
                <button className="botonResta" onClick={substract}></button>
                <input className="cantCarrito" type={'number'} value={count} onChange={(e) => setCount(e.target.value)}/>
                <button className="botonSuma" onClick={add}></button>
            </div>
            <button className="aCarrito" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Counter
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from '../../services/firebase/index'
import './Checkout.css'
import CheckoutCart from "../CheckoutCart/CheckoutCart"
import { NotificationContext } from '../../notification/NotificationService'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import Spinner from 'react-bootstrap/Spinner';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ emailConfirmation, setEmailConfirmation ] = useState('')
    const { setNotification } = useContext(NotificationContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const createOrder = async () => {
        if ( email === '' && name === '' && phone === '' ) {
            setNotification('error', 'Complete todos los campos del formulario')
        } else if ( email !== emailConfirmation ) {
            setNotification('error', 'La confirmacion del E-mail es incorrecta')
        } else {
            setLoading(true)
            try {
                const objOrder = {
                    buyer: { name: name, phone: email, mail: phone}, items: cart, total: totalPrice
                }
                const batch = writeBatch(db)

                const outOfStock = []

                const ids = cart.map(prod => prod.id)

                const productsRef = collection(db, 'products')
        
                const productsAdded = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

                const { docs } = productsAdded

                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock

                    const productCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productCart?.quantity

                    if ( stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
                
                if ( outOfStock.length === 0) {
                    await batch.commit()

                    const orderRef = collection(db, 'orders')

                    const orderAdded = await addDoc(orderRef, objOrder)

                    setLoading(false)

                    clearCart()

                    Swal.fire({
                        title: 'Gracias por su compra!',
                        html: `Pronto nos pondremos en contacto con usted. El id de su orden es: ${orderAdded.id}`,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })
                    
                    navigate('/')
                } else {
                    setLoading(false)
                    setNotification('error', 'ups... nos quedamos sin stock de algun producto')
                }
            } catch (error) {
                setLoading(false)
                setNotification('error', 'Tenemos problemas con el servidor, intentelo mas tarde')
            }
        }
    }
    if (loading) {
        return (
            <div style={{margin: '3%'}}>
                <Spinner animation="border" variant="dark" />
            </div>
        )
    }
    
    return(
        <div className="formFlex">
            <div className="formContainer">
                <p className="formTitle">Datos de contacto</p>
                <input className="form" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="form" type="tel" placeholder="Telefono"value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input className="form" type="email" placeholder="E-Mail"value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="form" type="email" placeholder="Confirme su E-Mail"value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)}/>
                <button className="formButton" onClick={createOrder}>Continuar</button>
            </div>
            <div className="checkCart">
                {cart.map(prod => <CheckoutCart key={prod.id} {...prod} />)}
                <div className="checkTotal">
                    <p>Total (sin envío): </p>
                    <p>$ {totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout
import { useState, useEffect, createContext, useContext } from "react"
import { NotificationContext } from '../notification/NotificationService'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]) 
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
      const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => { accu += prod.quantity })
        return accu
      }
    
      const priceTotal = () => {
        let accu = 0
        cart.forEach(prod => { accu += prod.quantity * prod.price })
        return accu
      }
      
      const totalQty = getQuantity()
      setTotalQuantity(totalQty)
      const tPrice = priceTotal()
      setTotalPrice(tPrice)
    }, [cart])

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
      } else {
        setNotification('error', 'Ya esta en el carrito')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const clearCart = () => {
      setCart([])
    }
  
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, isInCart, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

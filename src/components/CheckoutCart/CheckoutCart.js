import './CheckoutCart.css'

const CheckoutCart = ({ name, img, price, quantity, size }) => {
    return(
        <div className='checkoutCart'>
            <div className='checkFlex'>
                <img src={img} alt={name}/>
                <div style={{display: 'flex', flexdriecction: 'row' }}>
                    <p>{name}</p>
                    <p>({size})</p>
                </div>
                <p>x $ {quantity*price}</p>
            </div>
        </div>
    )
}

export default CheckoutCart
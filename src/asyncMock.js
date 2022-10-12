const products = [
    {id: '1', name: 'Bold', price: 5600, category: 'remeras', img: '/img/remera1.png', description: 'remera negra', stock: 35},
    {id: '2', name: 'Regular', price: 11500, category: 'buzos', img: '/img/buzo.png', description: 'buzo negro', stock: 30},
    {id: '3', name: 'Condensed', price: 6000, category: 'remeras', img: '/img/remera2.png', description: 'remera blanca', stock: 22}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
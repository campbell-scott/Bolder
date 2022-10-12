import Item from "../Item/Item"

const ItemList = ({ products }) => {

    return(
        <div style={{display: 'flex', flexdirecction: 'row', justifyContent: 'space-around'}}>
           {products.map(prod => <Item id={prod.id} key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
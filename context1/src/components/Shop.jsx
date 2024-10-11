import React, { useContext } from 'react'
import { cartcontext } from '../context/Cart'


function Shop(props) {

    const cart = useContext(cartcontext)
console.log(cart);

  return (
    <div>
        <h1> Item: </h1>
        <h2>{props.name}</h2>
        <h5>price: ${props.price} </h5>
        <button onClick={()=> cart.setitem([...cart.item,{name: props.name,price: props.price}])}>Add to cart</button>
    </div>
  )
}

export default Shop
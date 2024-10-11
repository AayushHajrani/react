import React, { useContext } from 'react'
import { cartcontext } from '../context/Cart'

function MainCart() {
    const cart = useContext(cartcontext)

    const total = cart.item.reduce((a,b)=> a+b.price,0)
  return (
    <div>
        <h1>Cart</h1>
        {cart && cart.item.map((item)=>{
            <li>{item.name} - ${item.price} </li>
        })}

        <h5>Total bill: ${total} </h5>
    </div>
  )
}

export default MainCart
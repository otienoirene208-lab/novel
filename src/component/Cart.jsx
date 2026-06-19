import React, { useState } from 'react'

const Cart = () => {
    const[cart,setCart]=useState([]);
  return (
    <div>
      <h1>Novel store</h1>
      <button onClick={()=> setCart([...Cart,])}>Add to cart</button>
    </div>
  )
}

export default Cart

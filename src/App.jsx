import React, { useState } from 'react'
import ShoppingCart from './component/ShoppingCart'
import { useDispatch } from 'react-redux'
import { AddToCart } from './redux/Actions'


export default function App() {
  const dispatch = useDispatch()
  const [products , setProducts]=useState([{id:0 , name:"Iphone"} , {id:1,name:'PC'}])
  return (
    <div>
      {products.map(e=>(
        <div key={e.id}>
          {e.name}
          <button onClick={()=>dispatch(AddToCart(e))}>Add to cart</button>
          
        </div>
      ))}
      <ShoppingCart  />
    </div>
  )
}
// [ {} ]
// affichage produits 
// actions 
//



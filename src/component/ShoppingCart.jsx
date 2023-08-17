import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { RemoveCart } from '../redux/Actions'
export default function ShoppingCart() {
    const data=useSelector(state=>state.ShoppingCart);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Shopping cart: </h1>
       {data.map(e=>
        <div key={e.id}>
            {e.name}
            <button onClick={()=>dispatch(RemoveCart(e.id))}>remove from cart</button>
        </div>)}
    </div>
  )
}

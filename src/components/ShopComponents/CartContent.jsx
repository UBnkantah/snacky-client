import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {BsArrowLeft} from "react-icons/bs"
import CartItems from './CartItems'

const CartContent = () => {
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className='cart-container'>
            {cart.cartItems.length === 0 ? (
                <div>
                    <p>Your Cart is Currently Empty</p>
                    <Link to="/shop">
                        <BsArrowLeft />
                        <span>
                            Start Shopping
                        </span>
                    </Link>
                </div>
            ): (
                <div className='my-5'>
                    <div className='titles row'>
                        <span className='col-md-2'></span>
                        <h6 className='col-md-2'>Product</h6>
                        <h6 className='product-title col-md-2'>Product Name</h6>
                        <h6 className='price col-md-2'>Price</h6>
                        <h6 className='Quantity col-md-2'>Quantity</h6>
                        <h6 className='sub-total col-md-2'>Sub Total</h6>
                    </div>
                    <div className='cart-items'>
                        {cart.cartItems?.map(cartItem => {
                            return(
                                <CartItems key={cartItem.id} products={cartItem} />
                            )
                        })}
                    </div>
                    <div className='row'>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'>
                            <h3>Cart Total</h3>
                            <h4>Total: </h4>
                            <button className='btn btn-success'>Proceed to CheckOut</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartContent

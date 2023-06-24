import {FaTimes} from "react-icons/fa"
import { addToCart, removeFromCart, decreaseCart, getTotals, clearCart } from "../../contents/CartSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CartItems = ({products}) => {
    const cart = useSelector(state => state.cart)
    const {name, image, price, cartQuantity} = products;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleAddToCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

  return (
    <div className='cartItems row'>
        <div className="col-md-2">
            <FaTimes color="red" />
        </div>
        <div className="col-md-2">
            <span></span>
            <span>
                <img src={image} alt="img" className="w-100"/>
            </span>
        </div>
        <div className="col-md-2">
            <span></span>
            <span>{name}</span>
        </div>
        <div className="col-md-2">
            <span></span>
            <span>{price}</span>
        </div>
        <div className="col-md-2">
            <span></span>
            <div>
                <button>-</button>
                <span>{cartQuantity}</span>
                <button
                >+</button>
            </div>
        </div>
        <div className="col-md-2">
            <span></span>
            <span>${price * cartQuantity}</span>
        </div>
    </div>
  )
}

export default CartItems
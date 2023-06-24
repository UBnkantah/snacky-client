import "../../styles/Shop.styles.css"
import { useDispatch } from "react-redux"
import { addToCart } from "../../contents/CartSlice"
import { useNavigate } from "react-router-dom"

const ShopItem = ({product}) => {
    const {name, image, price} = product

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
      navigate("/cart")
    }

  return (
    <div className='shop-item-container'>
        <img src={image} alt="" />
      <h3 className="text-center">{name}</h3>
      <p className="text-center">Grilled chicken, tomatos, sausage and mushroom sauce</p>
      <h2 className="text-center">${price}</h2>
      <button className="btn btn-danger w-100" onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </div>
  )
}

export default ShopItem

import "../../styles/Shop.styles.css"

const ShopItem = ({product}) => {
    const {name, image, price} = product
  return (
    <div className='shop-item-container'>
        <img src={image} alt="" />
      <h3 className="text-center">{name}</h3>
      <p className="text-center">Grilled chicken, tomatos, sausage and mushroom sauce</p>
      <h2 className="text-center">${price}</h2>
      <button className="btn btn-danger w-100">Add To Cart</button>
    </div>
  )
}

export default ShopItem

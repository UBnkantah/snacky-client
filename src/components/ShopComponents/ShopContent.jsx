import { useGetAllProductsQuery } from "../../contents/ProductsApi";
import ShopItem from "./ShopItem";

const ShopContent = () => {
    const {data, isLoading, error} = useGetAllProductsQuery()

  return (
    <div className="container">
        <h2 className="text-center">SHOP</h2>
      {isLoading 
        ? 
        (<>Loading...</>) 
        : error ? 
        (<>An Error Occured..</>) : (
        <div className="shop-item-wrap-container">
            {data.map((item) => {
                return (
                    <ShopItem key={item.id} product={item}/>
                )
            })}
        </div>
        )}
    </div>
  )
}

export default ShopContent

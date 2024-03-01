import React, { ReactElement, memo } from "react"
import { Products } from "./products"
import { displayPrice } from "./utils/display-price";

export interface IProductListProps {
  products: Products;
  onAddToCart: (productId: string) => void;
}

export const ProductsList = memo(({products, onAddToCart}: IProductListProps): ReactElement => {
  return (
    <>
    <div style={{marginTop: 20, marginBottom: 5}}>Available Products</div>
      {Array.from(products).map(([id, product]) => {
        return (<div key={id}>{product.name} {displayPrice(product.price)} <button onClick={() => onAddToCart(id)}>Add to Cart</button></div>)
      })}
    </>
  )
});
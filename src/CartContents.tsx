import React, { ReactElement } from "react"
import { Products } from "./products"
import { Cart } from "./cart";
import { displayPrice } from "./utils/display-price";

export interface ICartContentsProps {
  cart: Cart;
  products: Products;
  onRemoveProduct: (productId: string) => void 
}

export const CartContents = ({cart, products, onRemoveProduct}: ICartContentsProps): ReactElement => {
  return (
    <>
      <div style={{marginTop: 20, marginBottom: 5}}>Cart Contents</div>
      {Object.entries(cart).map(([productId, qty]) => {
        const product = products.get(productId);
        if (product) {
          const itemTotal = (qty * product.price);
          return (<div key={productId}>{qty} X {product?.name} {displayPrice(itemTotal)} <button onClick={()=> onRemoveProduct(productId)}>Remove</button></div>)
        } else {
          return (<div key={productId}>Product '{productId}' no longer available <button onClick={()=> onRemoveProduct(productId)}>Remove</button></div>)
        }
      })}
    </>
  )
}
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
      {Object.keys(cart).map((productId) => {
        const qty = cart[productId];
        const product = products.get(productId);
        const itemTotal = (qty * product?.price!);
        return (<div key={productId}>{qty} X {product?.name} {displayPrice(itemTotal)} <button onClick={()=> onRemoveProduct(productId)}>Remove</button></div>)
      })}
    </>
  )
}
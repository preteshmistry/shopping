import { Cart } from "./cart";
import { Products } from "./products";
import { displayPrice } from "./utils/display-price";

export interface ICartTotalProps {
  cart: Cart;
  products: Products;
}

export const CartTotal = ({cart, products}: ICartTotalProps) => {
  const total = Object.keys(cart).reduce((currentTotal, productId) => { 
    return currentTotal + (products.get(productId)?.price! * cart[productId]) 
  }, 0);

  return (
    <div style={{marginTop: 20, marginBottom: 5}}> Cart Total: {displayPrice(total)}</div>
  )
}
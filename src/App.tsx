import React, { useCallback, useState } from 'react';
import './App.css';
import { ProductsList } from './ProductsList';
import { products } from './products';
import { Cart } from './cart';
import { CartContents } from './CartContents';
import { CartTotal } from './CartTotal';

function App() {

  const [cart, setCart] = useState<Cart>({});

  const onAddToCart = useCallback((productId: string) => {
    console.log('add to cart', productId);
    setCart(prevCart => {
      if(prevCart[productId]) {
        const newQty = prevCart[productId] + 1;
        return {...prevCart, [productId]: newQty }
      } else {
        return {...prevCart, [productId]: 1 }
      }
    });
  }, []);

  const onRemoveProduct = (productId: string) => {
    console.log("removing item from cart", productId);
    setCart(prevCart => {
      const newCart = {...prevCart};
      delete newCart[productId];
      return newCart;
    })
  }

  return (
    <div className="App">
      <ProductsList products={products} onAddToCart={onAddToCart}/>
      <CartContents cart={cart} products={products} onRemoveProduct={onRemoveProduct}/>
      <CartTotal cart={cart} products={products}/>
    </div>
  );
}

export default App;

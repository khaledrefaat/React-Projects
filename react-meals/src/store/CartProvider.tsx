import { ReactNode, useEffect, useState } from 'react';
import { CartItem } from '../types';
import CartContext from './cart-context';

interface CartProviderInterface {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderInterface> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);

  const addItem = (item: CartItem, count?: number) => {
    const existingItemIndex = items.findIndex(i => i.id === item.id);

    if (existingItemIndex > -1) {
      const newItems = [...items];
      newItems[existingItemIndex].count =
        newItems[existingItemIndex].count + (count || 1);

      return setItems(newItems);
    }
    setItems(items => [...items, { ...item, count: count || 1 }]);
  };

  const removeItem = (id: string) => {
    const existingItemIndex = items.findIndex(item => item.id === id);

    if (items[existingItemIndex].count === 1) {
      const filteredItems = items.filter(item => item.id !== id);
      return setItems(filteredItems);
    }
    const newItems = [...items];
    newItems[existingItemIndex].count = newItems[existingItemIndex]?.count - 1;
    setItems(newItems);
  };

  useEffect(() => {
    let total = 0;
    let count = 0;

    items.forEach(item => {
      total = total + item.count * item.price;

      count = count + item.count;
    });
    setTotalAmount(total);
    setCount(count);
  }, [items]);

  const cartContext = {
    items,
    totalAmount: Math.round(totalAmount),
    addItem,
    removeItem,
    count: count,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

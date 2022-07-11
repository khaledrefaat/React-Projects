import { createContext } from 'react';
import { CartItem } from '../types';

interface CartContextInterface {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem, count?: number) => void;
  removeItem: (id: string) => void;
  count: number;
  order: () => void;
}

const cartContext = createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  count: 0,
  order: () => {},
});

export default cartContext;

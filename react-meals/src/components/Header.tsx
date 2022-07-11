import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import cartContext from '../store/cart-context';

interface HeaderProps {
  showModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ showModal }) => {
  const CartContext = useContext(cartContext);

  return (
    <header className="py-5 bg-primary">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold capitalize text-white cursor-pointer selection:bg-transparent">
            react meals
          </div>
          <div
            className="flex items-center py-2 px-8 rounded-3xl bg-secondary cursor-pointer"
            onClick={showModal}
          >
            <ShoppingCartIcon className="h-6 fill-white" />
            <p className="text-white ml-2 text-xl font-medium capitalize selection:bg-transparent">
              your cart
            </p>
            <p className="px-4 bg-primary rounded-full text-white text-xl font-semibold font-mono ml-3">
              {CartContext.count}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

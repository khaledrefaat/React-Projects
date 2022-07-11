import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import cartContext from '../store/cart-context';

interface ModalItemProps {
  title: string;
  price: number;
  count: number;
  id: string;
}

const ModalItem: React.FC<ModalItemProps> = ({ title, price, count, id }) => {
  const CartContext = useContext(cartContext);

  const removeOrder = () => CartContext.removeItem(id);

  const addOrder = () => CartContext.addItem({ title, price, count, id });

  return (
    <div className="flex justify-between items-center mb-5 border-primary border-b-2 pb-3">
      <div>
        <h4 className="text-2xl font-bold capitalize">{title}</h4>
        <div className="flex mt-2 items-center text-lg text-primary font-bold">
          <p>${price}</p>
          <p className="ml-10 text-lg font-bold border-2 py-.5 px-2 rounded-lg">
            x {count}
          </p>
        </div>
      </div>

      <div>
        <button
          className="border-2 py-2 px-5 rounded-lg font-black text-2xl text-primary"
          onClick={removeOrder}
        >
          <MinusIcon className="h-4" />
        </button>
        <button
          className="border-2 py-2 px-5 rounded-lg font-black text-2xl text-primary ml-3"
          onClick={addOrder}
        >
          <PlusIcon className="h-4" />
        </button>
      </div>
    </div>
  );
};

export default ModalItem;

import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';

interface OrderItemProps {
  title: string;
  description: string;
  price: number;
  id: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  title,
  description,
  price,
  id,
}) => {
  const [orderAmount, setOrderAmount] = useState(1);

  const cartContext = useContext(CartContext);

  const addOrder = () =>
    cartContext.addItem({ title, price, id, count: 1 }, orderAmount);

  return (
    <div className="flex justify-between order-item pb-3">
      <div>
        <h3 className="font-bold text-lg capitalize">{title}</h3>
        <p className="text-gray-700 font-medium text-sm capitalize">
          {description}
        </p>
        <p className="text-lg text-primary font-bold">${price}</p>
      </div>
      <div className="flex flex-col">
        <div className="font-bold flex items-center">
          Amount
          <input
            type="number"
            className="font-medium border w-10 ml-2 text-left rounded-md outline-none "
            value={orderAmount}
            onChange={e => setOrderAmount(+e.target.value)}
          />
        </div>
        <button
          className="py-1 rounded-3xl bg-primary text-white mt-2"
          onClick={addOrder}
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default OrderItem;

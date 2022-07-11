import OrderItem from './OrderItem';
import { nanoid } from 'nanoid';

const OrderList = () => {
  return (
    <div className="mx-auto w-2/3 bg-white shadow-xl mt-24 p-5 rounded-xl">
      <OrderItem
        title="sushi"
        description="finest fish and veggies"
        price={22.99}
        id={nanoid()}
      />
      <OrderItem
        title="Schnitzel"
        description="Aa german specialty!"
        price={16.5}
        id={nanoid()}
      />
      <OrderItem
        title="barbecue burger"
        description="american, raw, meaty"
        price={12.99}
        id={nanoid()}
      />
      <OrderItem
        title="green bowl"
        description="healthy..and green"
        price={13.75}
        id={nanoid()}
      />
    </div>
  );
};

export default OrderList;

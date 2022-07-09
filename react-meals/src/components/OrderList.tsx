import OrderItem from './OrderItem';

const OrderList = () => {
  return (
    <div className="mx-auto w-2/3 bg-white shadow-xl mt-24 p-5 rounded-xl">
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};

export default OrderList;

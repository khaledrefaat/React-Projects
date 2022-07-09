const OrderItem = () => {
  return (
    <div className="flex justify-between order-item pb-3">
      <div>
        <h3 className="font-bold text-lg capitalize">sushi</h3>
        <p className="text-gray-700 font-medium text-sm capitalize">
          finest fish and veggies
        </p>
        <p className="text-lg text-primary font-bold">$22.99</p>
      </div>
      <div className="flex flex-col">
        <div className="font-bold flex items-center">
          Amount
          <span className="font-medium border py-.5 px-4 ml-2 text-left rounded-md">
            1
          </span>
        </div>
        <button className="py-1 rounded-3xl bg-primary text-white mt-2">
          + Add
        </button>
      </div>
    </div>
  );
};

export default OrderItem;

import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const ModalItem = () => {
  return (
    <div className="flex justify-between items-center mb-5 border-primary border-b-2 pb-3">
      <div>
        <h4 className="text-2xl font-bold capitalize">sushi</h4>
        <div className="flex mt-2 items-center text-lg text-primary font-bold">
          <p>$22.25</p>
          <p className="ml-10 text-lg font-bold border-2 py-.5 px-2 rounded-lg">
            x 1
          </p>
        </div>
      </div>

      <div>
        <button className="border-2 py-2 px-5 rounded-lg font-black text-2xl text-primary">
          <MinusIcon className="h-4" />
        </button>
        <button className="border-2 py-2 px-5 rounded-lg font-black text-2xl text-primary ml-3 ">
          <PlusIcon className="h-4" />
        </button>
      </div>
    </div>
  );
};

export default ModalItem;

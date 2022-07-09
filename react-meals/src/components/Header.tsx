import { ShoppingCartIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="py-4 bg-blue-500">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold capitalize text-white cursor-pointer selection:bg-transparent">
            react meals
          </div>
          <div className="flex items-center py-2 px-8 rounded-3xl bg-blue-800 cursor-pointer">
            <ShoppingCartIcon className="h-6 fill-white" />
            <p className="text-white ml-2 text-xl font-medium capitalize selection:bg-transparent">
              your cart
            </p>
            <p className="px-4 bg-blue-500 rounded-full text-white text-xl font-semibold font-mono ml-3">
              0
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

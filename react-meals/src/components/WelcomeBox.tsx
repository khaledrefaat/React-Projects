const WelcomeBox = () => {
  return (
    <div className="bg-tertiary max-w-2xl text-white p-5 rounded-lg absolute top-60 left-1/2 transform -translate-x-1/2 text-center">
      <h2 className="capitalize text-3xl font-semibold mb-5 font-serif">
        delicious food, delivered for you
      </h2>
      <p className="font-light">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="font-light">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default WelcomeBox;

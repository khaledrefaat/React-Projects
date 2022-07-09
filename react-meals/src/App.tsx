import Header from './components/Header';
import OrderList from './components/OrderList';
import WelcomeBox from './components/WelcomeBox';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <WelcomeBox />
          <OrderList />
        </div>
      </main>
    </>
  );
}

export default App;

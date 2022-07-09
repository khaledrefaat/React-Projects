import Header from './components/Header';
import OrderList from './components/OrderList';
import WelcomeBox from './components/WelcomeBox';

function App() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-zinc-800 pb-10">
        <div className="bg" />
        <div className="container">
          <WelcomeBox />
          <OrderList />
        </div>
      </main>
    </>
  );
}

export default App;

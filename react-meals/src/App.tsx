import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import OrderList from './components/OrderList';
import WelcomeBox from './components/WelcomeBox';

function App() {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);

  const makeModalVisible = () => setShowModal(true);

  return (
    <>
      <Header showModal={makeModalVisible} />
      <main className="relative min-h-screen bg-zinc-800 pb-10">
        <div className="bg" />
        <div className="container">
          <WelcomeBox />
          <OrderList />
        </div>
      </main>
      {showModal && <Modal hideModal={hideModal} />}
    </>
  );
}

export default App;

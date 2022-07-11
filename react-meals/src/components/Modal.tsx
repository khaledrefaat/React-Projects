import ReactDom from 'react-dom';
import ModalItem from './ModalItem';

interface ModalProps {
  hideModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ hideModal }) => {
  const makeOrder = () => {
    console.log('Making Order...');
    hideModal();
  };

  return ReactDom.createPortal(
    <div
      className="h-full w-full fixed bg-primary/50 top-0 left-0 right-0 bottom-0 z-50"
      onClick={hideModal}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6 bg-white shadow-lg rounded-xl px-4 py-6"
        onClick={e => e.stopPropagation()}
      >
        <ModalItem />
        <ModalItem />
        <ModalItem />
        <div className="flex justify-between">
          <p className="font-bold text-2xl capitalize">total amount</p>
          <p className="font-black text-2xl">$88.66</p>
        </div>
        <div className="flex mt-3">
          <button
            className="border border-primary rounded-full px-6 py-1 text-xl font-medium text-center ml-auto mr-4"
            onClick={hideModal}
          >
            Close
          </button>
          <button
            className="bg-primary rounded-full text-white px-6 py-1 text-xl font-medium text-center"
            onClick={makeOrder}
          >
            Order
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  );
};
export default Modal;

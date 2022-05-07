import Modal from "react-modal";

interface ModalProps {
  openModal: () => void;
  isOpen: boolean;
  onAfterOpen: () => void;
  onRequestClose: () => void;
}

export function ModalScreen({
  isOpen,

  onAfterOpen,
  onRequestClose,
  openModal,
}: ModalProps) {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
      >
        <h2 ref={"Olá"}>Hello</h2>
        <button onClick={onRequestClose}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

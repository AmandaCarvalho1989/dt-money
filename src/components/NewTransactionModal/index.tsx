import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  onRequestClose,
  isOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <form>
          <input placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input placeholder="Categoria" />
          <button type="button">Submit</button>
        </form>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;

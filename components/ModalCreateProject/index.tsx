import ReactModal from "react-modal";

import {
  Title,
  HeaderModal,
  CloseButton,
  BodyModal,
  EditButton,
  InputDiv,
} from "./styles";

const customStyles = {
  content: {
    height: "18rem",
    width: "40rem",
    borderRadius: "10px",
    backgroundColor: "#484848",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalCreate {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ModalCreateProject({
  isOpen,
  onRequestClose,
}: ModalCreate) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <HeaderModal>
        <Title>
          <span>|</span> Criar novo projeto
        </Title>
        <CloseButton onClick={onRequestClose}>
          <img src="/add.svg" />
        </CloseButton>
      </HeaderModal>
      <BodyModal>
        <InputDiv>
          <input type="text" placeholder="Título do projeto" />
          <input type="text" placeholder="CEP" />
        </InputDiv>
        <InputDiv>
          <input type="text" placeholder="Valor do projeto" />
          <input type="text" placeholder="Prazo de entrega" />
        </InputDiv>
      </BodyModal>
      <EditButton>Criar novo projeto</EditButton>
    </ReactModal>
  );
}

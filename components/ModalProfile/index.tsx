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
    height: "20rem",
    width: "30rem",
    borderRadius: "10px",
    backgroundColor: "#484848",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

interface ModalProfile {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ModalProfile({ isOpen, onRequestClose }: ModalProfile) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <HeaderModal>
        <Title>
          <span>|</span> Perfil do usuário
        </Title>
        <CloseButton onClick={onRequestClose}>
          <img src="/add.svg" />
        </CloseButton>
      </HeaderModal>
      <BodyModal>
        <InputDiv>
          <input type="text" placeholder="Usuário" />
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Senha" />
        </InputDiv>
      </BodyModal>
      <EditButton>Atualizar informações</EditButton>
    </ReactModal>
  );
}

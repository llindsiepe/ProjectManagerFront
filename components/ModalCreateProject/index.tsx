import ReactModal from "react-modal";
import axios from "axios";

import {
  Title,
  HeaderModal,
  CloseButton,
  BodyModal,
  EditButton,
  InputDiv,
} from "./styles";
import { useState } from "react";

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
  const [title, setTitle] = useState();
  const [CEP, setCEP] = useState();
  const [price, setPrice] = useState();
  const [deadline, setDeadline] = useState();

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
          <input
            type="text"
            placeholder="Título do projeto"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="CEP"
            onChange={(e) => {
              setCEP(e.target.value);
            }}
          />
        </InputDiv>
        <InputDiv>
          <input
            type="text"
            placeholder="Valor do projeto"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Prazo de entrega"
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </InputDiv>
      </BodyModal>
      <EditButton
        onClick={() => {
          axios
            .post(
              "http://localhost:8080/project",
              {
                title: title,
                zip_code: CEP,
                cost: price,
                deadline: deadline,
              },
              {
                headers: {
                  username: localStorage.getItem("username"),
                },
              }
            )
            .then((response) => {
              onRequestClose();
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Criar novo projeto
      </EditButton>
    </ReactModal>
  );
}

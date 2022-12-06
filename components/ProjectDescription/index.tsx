import { useState } from "react";
import ReactModal from "react-modal";
import ModalShowMore from "../ModalShowMore";
import { Container, Content, Description, Time, Price, User } from "./styles";

export default function ProjectDescription() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Content>
        <Description>
          <input type="checkbox" />
          <h4>Projeto #001</h4>
        </Description>

        <Time>
          <img src="/timer.svg" />
          <h4>16/04/2022 - 16/05/2022</h4>
        </Time>

        <Price>
          <img src="/moneygroup.svg" />
          <h4>R$9.400,00</h4>
        </Price>

        <User>
          <img src="/user.svg" />
          <h4>llindsiepe</h4>
        </User>

        <button onClick={openModal}>Ver mais</button>

        <ModalShowMore isOpen={modalIsOpen} onRequestClose={closeModal} />
      </Content>
      <hr />
    </Container>
  );
}

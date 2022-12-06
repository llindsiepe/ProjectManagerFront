import { useState } from "react";

import ModalCreateProject from "../ModalCreateProject";
import ModalProfile from "../ModalProfile";

import { Container, Options, CreateProject, Profile } from "./styles";

export default function Header() {
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);

  function openModalCreate() {
    setModalCreateIsOpen(true);
  }

  function closeModalCreate() {
    setModalCreateIsOpen(false);
  }

  const [modalProfileIsOpen, setModalProfileIsOpen] = useState(false);

  function openModalProfile() {
    setModalProfileIsOpen(true);
  }

  function closeModalProfile() {
    setModalProfileIsOpen(false);
  }

  return (
    <Container>
      <img src="/logotipo.svg" />

      <Options>
        <Profile onClick={openModalProfile}>
          <img src="/profile.svg" />
          <h4>Acessar perfil</h4>
        </Profile>

        <CreateProject onClick={openModalCreate}>
          <h4>Criar novo projeto</h4>
        </CreateProject>

        <ModalCreateProject
          isOpen={modalCreateIsOpen}
          onRequestClose={closeModalCreate}
        />

        <ModalProfile
          isOpen={modalProfileIsOpen}
          onRequestClose={closeModalProfile}
        />
      </Options>
    </Container>
  );
}

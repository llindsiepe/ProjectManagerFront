import { useState } from "react";
import ReactModal from "react-modal";
import ModalShowMore from "../ModalShowMore";
import { Container, Content, Description, Time, Price, User } from "./styles";

import axios from "axios";

export default function ProjectDescription({ project }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(id) {
    setIsOpen(true);
    axios
      .get("http://localhost:8080/project", {
        headers: {
          id: id,
        },
      })
      .then((response) => {
        setId(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [id, setId] = useState(0);

  return (
    <Container>
      <Content>
        <Description>
          <input
            type="checkbox"
            onChange={() => {
              axios
                .patch(
                  `http://localhost:8080/projects/${id.id}/done`,
                  {},
                  {
                    headers: {
                      username: localStorage.getItem("username"),
                    },
                  }
                )
                .then((response) => {});
            }}
          />
          <h4>{project.title}</h4>
        </Description>

        <Time>
          <img src="/timer.svg" />
          <h4>{project.deadline}</h4>
        </Time>

        <Price>
          <img src="/moneygroup.svg" />
          <h4>{project.cost}</h4>
        </Price>

        <User>
          <img src="/user.svg" />
          <h4>{project.username}</h4>
        </User>

        <button
          onClick={() => {
            openModal(project.id);
          }}
        >
          Ver mais
        </button>

        <ModalShowMore
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          id={id}
        />
      </Content>
      <hr />
    </Container>
  );
}

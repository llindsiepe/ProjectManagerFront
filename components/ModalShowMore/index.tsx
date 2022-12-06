import { useEffect, useState } from "react";
import ReactModal from "react-modal";

import axios from "axios";

import {
  Status,
  HeaderModal,
  CloseButton,
  BodyModal,
  DescriptionModal,
  Created,
  Information,
  InformationTitle,
  DeleteProject,
  EditButton,
  OptionsModal,
} from "./styles";

const customStyles = {
  content: {
    height: "20rem",
    width: "32rem",
    borderRadius: "10px",
    backgroundColor: "#484848",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

interface Modal {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
}

export default function ModalShowMore({ isOpen, onRequestClose, id }: Modal) {
  const [title, setTitle] = useState();
  const [deadline, setDeadline] = useState();
  const [price, setPrice] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    setTitle(id.title);
    setDeadline(id.deadline);
    setPrice(id.cost);
    setLocation(id.zip_code);
  }, [id]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <HeaderModal>
        <div>
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
                .then((response) => {
                  onRequestClose();
                });
            }}
          />
          <Status>Em processamento</Status>
        </div>
        <CloseButton onClick={onRequestClose}>
          <img src="/add.svg" />
        </CloseButton>
      </HeaderModal>
      <BodyModal>
        <DescriptionModal>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <Created>
            <h5>Criado por</h5>
            <div>
              <img src="/user.svg" />
              <h5>llindsiepe</h5>
            </div>
          </Created>
        </DescriptionModal>

        <Information>
          <InformationTitle>
            <img src="/timer.svg" />
            <h5>Prazo de entrega</h5>
          </InformationTitle>
          <input
            type="text"
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
            value={deadline}
          />
        </Information>

        <Information>
          <InformationTitle>
            <img src="/moneygroup.svg" />
            <h5>Valor do projeto</h5>
          </InformationTitle>
          <input
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </Information>

        <Information>
          <InformationTitle>
            <img src="/location.svg" />
            <h5>Localização</h5>
          </InformationTitle>
          <input
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
          />
        </Information>

        <OptionsModal>
          <DeleteProject
            onClick={() => {
              axios
                .delete(`http://localhost:8080/projects/${id.id}`, {
                  headers: {
                    username: localStorage.getItem("username"),
                  },
                })
                .then((response) => {
                  onRequestClose();
                });
            }}
          >
            <img src="/trash.svg" />
            <button>
              <h4>Deletar projeto</h4>
            </button>
          </DeleteProject>

          <EditButton
            onClick={() => {
              axios
                .put(
                  `http://localhost:8080/projects/${id.id}`,
                  {
                    title: title,
                    zip_code: location,
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
            Atualizar
          </EditButton>
        </OptionsModal>
      </BodyModal>
    </ReactModal>
  );
}

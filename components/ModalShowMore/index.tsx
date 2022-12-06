import ReactModal from "react-modal";
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
    width: "25rem",
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
}

export default function ModalShowMore({ isOpen, onRequestClose }: Modal) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <HeaderModal>
        <div>
          <input type="checkbox" />
          <Status>Em processamento</Status>
        </div>
        <CloseButton onClick={onRequestClose}>
          <img src="/add.svg" />
        </CloseButton>
      </HeaderModal>
      <BodyModal>
        <DescriptionModal>
          <h2>Projeto #001</h2>
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
          <h6>16/04/2022 - 16/05/2022</h6>
        </Information>

        <Information>
          <InformationTitle>
            <img src="/moneygroup.svg" />
            <h5>Valor do projeto</h5>
          </InformationTitle>
          <h6>R$9.400,00</h6>
        </Information>

        <Information>
          <InformationTitle>
            <img src="/location.svg" />
            <h5>Localização</h5>
          </InformationTitle>
          <h6>Curitiba, PR</h6>
        </Information>

        <OptionsModal>
          <DeleteProject>
            <img src="/trash.svg" />
            <button>
              <h4>Deletar projeto</h4>
            </button>
          </DeleteProject>

          <EditButton>Alterar informações</EditButton>
        </OptionsModal>
      </BodyModal>
    </ReactModal>
  );
}

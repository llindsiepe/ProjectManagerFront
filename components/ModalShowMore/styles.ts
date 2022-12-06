import styled from "styled-components";

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    gap: 0.8rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
`;

export const Status = styled.div`
  background: rgba(46, 213, 223, 0.1);
  border: 1px solid #2ed5df;
  border-radius: 4px;

  height: 1.6rem;
  width: 8rem;

  color: var(--blue);
  font-size: 0.6rem;

  align-items: center;
  display: flex;
  justify-content: center;
`;

export const BodyModal = styled.div`
  margin-top: 2rem;
`;

export const Created = styled.div`
  display: flex;
  h5 {
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  gap: 0.8rem;

  div {
    display: flex;
    align-items: flex-start;

    img {
      width: 20%;
      margin-right: 0.3em;
    }
  }
`;

export const DescriptionModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.6rem;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h6 {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const InformationTitle = styled.div`
  display: flex;
  gap: 0.6rem;

  h5 {
    opacity: 0.5;
    font-weight: 300;
  }

  img {
    width: 1.2rem;
  }
`;

export const OptionsModal = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const DeleteProject = styled.div`
  display: flex;
  gap: 0.6rem;

  img {
    width: 1.5rem;
  }

  button {
    background: none;
    border: none;

    h4 {
      text-decoration: underline;
      font-weight: 300;
      font-size: 0.8rem;
      color: #f03e3e;
    }
  }
`;

export const EditButton = styled.button`
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 0.5rem;
  border: none;
  background-color: var(--purple);

  width: 12rem;
  height: 3rem;
  gap: 0.8rem;

  font-weight: 300;
`;

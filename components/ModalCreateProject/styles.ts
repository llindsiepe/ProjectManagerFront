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

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1rem;

  span {
    color: var(--blue);
  }
`;

export const BodyModal = styled.div`
  margin-top: 2rem;
`;

export const EditButton = styled.button`
  text-align: center;

  border-radius: 0.5rem;
  border: none;
  background-color: var(--purple);

  width: 19.3rem;
  height: 3rem;
  gap: 0.8rem;

  font-weight: 300;
`;

export const InputDiv = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;

  input[type="text"] {
    width: 41%;
    padding: 0 1.5rem;
    height: 2.8rem;
    border-radius: 0.5rem;

    border: none;
    background-color: #5e5e5e;

    font-weight: 300;
    font-size: 0.8rem;

    &::placeholder {
      color: var(--text-body);
    }
  }
`;

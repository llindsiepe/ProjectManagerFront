import styled from "styled-components";

export const Container = styled.div`
  margin: 2.5rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.div`
  margin-top: 5rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-weight: 300;

    span {
      color: var(--blue);
      font-weight: 600;
    }
  }
`;

export const Login = styled.div`
  margin-right: 2.5rem;

  h2 {
    font-weight: 300;
    margin-bottom: 2rem;
  }

  input[type="text"] {
    width: 91%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;

    border: none;
    background-color: var(--background-clean);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    height: 4rem;
    border-radius: 0.5rem;
    border: none;

    background-color: var(--purple);

    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h5 {
    font-weight: 300;
    text-align: center;

    span {
      font-weight: 600;
    }
  }
`;

export const OptionsLogin = styled.div`
  margin-top: 2rem;
  display: flex;

  justify-content: space-between;
`;

export const Connected = styled.div`
  display: flex;
  gap: 0.6rem;

  input[type="checkbox"] {
    align-items: center;
  }

  h5 {
    font-weight: 300;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  hr {
    opacity: 0.1;
    border: 0.8px solid #ffffff;
    margin: 1.8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  button {
    color: var(--blue);
    text-decoration: underline;
    background: none;
    border: none;
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 1rem;

  input {
    width: 1.6rem;
  }

  h4 {
    font-weight: 500;
  }
`;

export const Time = styled.div`
  display: flex;
  gap: 1rem;

  h4 {
    font-weight: 300;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 1rem;

  h4 {
    font-weight: 300;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 1rem;

  h4 {
    font-weight: 300;
  }
`;

// >>>>>>

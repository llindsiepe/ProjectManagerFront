import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
  background-color: var(--background-header);
  display: flex;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  img {
    width: 18%;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;
`;

export const Profile = styled.button`
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border: 1px solid #646464;
  border-radius: 0.5rem;
  background: none;

  width: 12rem;
  height: 3rem;
  gap: 0.8rem;

  img {
    width: 10%;
  }
`;

export const CreateProject = styled.button`
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 0.5rem;
  border: none;
  background-color: var(--purple);

  width: 12rem;
  height: 3rem;
  gap: 0.8rem;
`;

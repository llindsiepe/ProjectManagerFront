import Header from "../../components/Header";
import ProjectDescription from "../../components/ProjectDescription";
import { Container } from "../styles/ProjectsHome";

export default function ProjectsHome() {
  return (
    <Container>
      <Header />

      <h3>
        Olá, <span>llindsiepe.</span>
        <br />
        Bem vindo novamente, confira seus projetos
      </h3>

      <ProjectDescription />
      <ProjectDescription />
      <ProjectDescription />
    </Container>
  );
}

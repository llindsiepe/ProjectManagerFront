import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProjectDescription from "../../components/ProjectDescription";
import { Container } from "../styles/ProjectsHome";

import axios from "axios";

export default function ProjectsHome() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/projects", {
        headers: {
          username: localStorage.getItem("username"),
        },
      })
      .then((response) => {
        setProjects(response.data);
        setName(localStorage.getItem("username"));
      });
  }, []);

  return (
    <Container>
      <Header />

      <h3>
        Olá, <span>{name}</span>
        <br />
        Bem vindo novamente, confira seus projetos
      </h3>

      {projects.map((project) => (
        <ProjectDescription project={project} />
      ))}
    </Container>
  );
}

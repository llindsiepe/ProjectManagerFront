import { Container, Content, Banner, Register } from "../styles/Register";

import axios from "axios";

import { useRouter } from "next/router";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  return (
    <Container>
      <img src="/logotipo.svg" />
      <Content>
        <Banner>
          <h2>
            Organize seus projetos & prazos
            <br />
            em<span> um único lugar.</span>
          </h2>
          <img src="/prototype.svg" />
        </Banner>
        <Register>
          <h2>Crie sua conta </h2>
          <input
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            onClick={() => {
              axios
                .post("http://localhost:8080/users", {
                  username: username,
                  name: name,
                  password: password,
                })
                .then((response) => {
                  localStorage.setItem("username", response.data.username);
                  router.push({ pathname: "/projectsHome" });
                });
            }}
          >
            <h3>Cadastre-se</h3>
          </button>

          <h5>
            Possui uma conta?{" "}
            <span>
              <Link href="/">Entre agora</Link>
            </span>
          </h5>
        </Register>
      </Content>
    </Container>
  );
}

import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

import Link from "next/link";

import {
  Container,
  Banner,
  Login,
  Connected,
  OptionsLogin,
  Content,
} from "../styles/Home";

export default function Home() {
  const [username, setUsername] = useState();
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
        <Login>
          <h2>Acesse sua conta</h2>
          <input
            type="text"
            placeholder="Usuário"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {/* <OptionsLogin>
            <Connected>
              <input type="checkbox" />
              <h5>Mantenha-me conectado</h5>
            </Connected>
            <h5>Esqueci minha senha</h5>
          </OptionsLogin> */}

          <button
            type="submit"
            onClick={() => {
              axios
                .post("http://localhost:8080/sessions", {
                  username: username,
                  password: password,
                })
                .then((response) => {
                  localStorage.setItem("username", response.data.username);
                  router.push({ pathname: "/projectsHome" });
                });
            }}
          >
            <h3>Entrar</h3>
          </button>

          <h5>
            Ainda não possui conta?{" "}
            <span>
              <Link href="/register">Cadastre-se agora</Link>
            </span>
          </h5>
        </Login>
      </Content>
    </Container>
  );
}

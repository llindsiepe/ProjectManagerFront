import {
  Container,
  Banner,
  Login,
  Connected,
  OptionsLogin,
  Content,
} from "../styles/Home";

export default function Home() {
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
          <input type="text" placeholder="Usuário" />
          <input type="text" placeholder="Senha" />

          {/* <OptionsLogin>
            <Connected>
              <input type="checkbox" />
              <h5>Mantenha-me conectado</h5>
            </Connected>
            <h5>Esqueci minha senha</h5>
          </OptionsLogin> */}

          <button type="submit">
            <h3>Entrar</h3>
          </button>

          <h5>
            Ainda não possui conta? <span>Cadastre-se agora</span>
          </h5>
        </Login>
      </Content>
    </Container>
  );
}

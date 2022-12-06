import { Container, Content, Banner, Register } from "../styles/Register";

export default function RegisterPage() {
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
          <input type="text" placeholder="Usuário" />
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Senha" />

          <button type="submit">
            <h3>Cadastre-se</h3>
          </button>

          <h5>
            Possui uma conta? <span>Entre agora</span>
          </h5>
        </Register>
      </Content>
    </Container>
  );
}

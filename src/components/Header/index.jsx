import { Container, Row, Wrapper, Menu, MenuRight, Input, BuscarInputContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";
// import banner from "../../assets/banner.png";

const Header = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const cadastro = () => {
    navigate("/cadastro");
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          <BuscarInputContainer>
            <Input placeholder={"Buscar"} />
          </BuscarInputContainer>
          <Menu href="#">Live Code</Menu>
          <Menu href="#">Global</Menu>
        </Row>
        <Row>
          <MenuRight href="/">Home</MenuRight>
          <Button title="Entrar" onClick={login} />
          <Button title="Cadastrar" onClick={cadastro} />
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };

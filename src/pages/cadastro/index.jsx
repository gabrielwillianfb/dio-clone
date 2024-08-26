import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  TextoBranco,
  TextoVerde,
  Column2,
  Wrapper,
} from "./styles";

const schema = yup.object().shape({
  nome: yup.string().min(3, "No minimo 3 digitos").required("Nome obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  senha: yup.string().min(5, "No minimo 5 digitos").required("Senha obrigatória"),
});

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const { data } = await api.post("/users", formData);
      if (data) {
        navigate("/feed");
      } else {
        alert("Erro ao cadastrar");
      }
    } catch (e) {
      console.log("Error: ", errors);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
            mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Nome completo"
                leftIcon={<MdAccountCircle />}
                name="nome"
                control={control}
                errorMessage={errors.nome?.message}
              />
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                errorMessage={errors.email?.message}
              />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                errorMessage={errors.senha?.message}
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Column2>
              <TextoBranco>
                Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as Políticas
                de Privacidade e os Termos de Uso da DIO.
              </TextoBranco>
              <TextoBranco>
                Já tenho conta.
                <TextoVerde>Fazer login</TextoVerde>
              </TextoBranco>
            </Column2>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };

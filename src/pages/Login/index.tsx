import { useContext } from "react";
import { useState } from "react"; // Add useState import
import {
  BntEntrar,
  BntTrocarSenha,
  Container,
  ContainerButtons,
  ContainerBy,
  Content,
  Frame187,
  Frame201,
  Image,
  Input,
  Title,
  TitleBy,
  TitleEmpresa,
  TitleEntrar,
  TitleForms,
  TitleTrocarSenha,
} from "./styles";
import Logo from "../../assets/LogoPP.png";
import { InputArea } from "../../components/Input";
import { useForm, Controller } from "react-hook-form"; // Remove FormState import
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Login = {
  username: string;
  password: string;
};

export function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state to track form submission

  const { setToken } = useContext(AuthContext); // Access the AuthContext

  const onSubmit = async (data: Login) => {
    setIsSubmitting(true); // Set the form to submitting state

    try {
      const res = await api.post("/login", data);
      const token = res.data["token"];
      // Armazenar o token no sessionStorage
      sessionStorage.setItem("token", token);
      setToken(token); // Atualizar o token usando o Context
      // Redirecionar para a rota /home após o login
      navigate("/home");
    } catch (error) {
      console.log("error ao fazer login", error);
    } finally {
      setIsSubmitting(false); // Reset the form submission state
    }
  };

  // HandleSubmit pressionando a tecla enter
  const handleFormSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitting) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Frame201>
          <Frame187>
            <Title>Bem-vindo ao</Title>
            <Image alt="logo" src={Logo} />
          </Frame187>
          <Content>
            <Input>
              <TitleForms>Login</TitleForms>
              <Controller
                control={control}
                name="username"
                rules={{ required: "Informe o usuário" }}
                render={({ field: { onChange, value } }) => (
                  <InputArea
                    type="text"
                    placeholder="Username"
                    value={value}
                    onChange={onChange}
                    style={{ width: "17.5rem" }}
                  />
                )}
              />
            </Input>
            <Input>
              <TitleForms>Senha</TitleForms>
              <Controller
                control={control}
                name="password"
                rules={{ required: "Informe a senha" }}
                render={({ field: { onChange, value } }) => (
                  <InputArea
                    type="password"
                    placeholder="Senha"
                    value={value}
                    onChange={onChange}
                    style={{ width: "17.5rem" }}
                  />
                )}
              />
            </Input>
            <ContainerButtons>
              <BntEntrar type="submit" onClick={handleSubmit(onSubmit)}>
                {/* Disable the button while submitting */}
                <TitleEntrar>Entrar</TitleEntrar>
              </BntEntrar>
              <BntTrocarSenha>
                <TitleTrocarSenha>Esqueci minha senha</TitleTrocarSenha>
              </BntTrocarSenha>
            </ContainerButtons>
          </Content>
          <ContainerBy>
            <TitleBy>By</TitleBy>
            <TitleEmpresa>MiraTec</TitleEmpresa>
          </ContainerBy>
        </Frame201>
      </form>
    </Container>
  );
}

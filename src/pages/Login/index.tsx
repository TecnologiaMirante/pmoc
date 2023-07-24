import { useContext } from "react";
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
import { useForm, Controller, FormState } from "react-hook-form";
import api from "../../api/api";
import AuthContext from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";


type Login = {
  username:string;
  password:string;
};

export function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({});

  const { setToken } = useContext(AuthContext); // Access the AuthContext

  const onSubmit = async (data: Login) => {
    try {
      const res = await api.post('/login', data);
      const token = res.data['token'];
      // Armazenar o token no sessionStorage
      sessionStorage.setItem('token', token);
      setToken(token); // Atualizar o token usando o Context
      // Redirecionar para a rota /home após o login
      navigate("/home");
    } catch (error) {
      console.log("error ao fazer login", error);
    }
  };



  return (
    <Container>
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
            <BntEntrar onClick={handleSubmit(onSubmit)}>
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
    </Container>
  );
}

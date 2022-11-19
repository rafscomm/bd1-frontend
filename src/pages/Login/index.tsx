import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FuncionarioInterface } from '../../interfaces/FuncionarioInterface';
import { login } from '../../services/login';
import { Button, Container, Input } from './styles';

export function Login(): JSX.Element {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const onLogin = async (): Promise<void> => {
    if (cpf !== '' && senha !== '') {
      await login(cpf, senha).then((response) => {
        sessionStorage.setItem('user', JSON.stringify(response.data));
      });
      navigate('/home');
    }
  };

  return (
    <Container>
      <img src="./assets/car.jpeg" alt="" />
      <div className="login-container">
        <Input type="text" placeholder="CPF" onChange={(e): void => setCpf(e.target.value)} />
        <Input type="password" placeholder="Senha" onChange={(e): void => setSenha(e.target.value)} />
        <div className="button-container">
          <Button onClick={onLogin}>Entrar</Button>
        </div>
      </div>
    </Container>
  );
}

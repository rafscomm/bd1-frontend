import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FuncionarioInterface } from '../../interfaces/FuncionarioInterface';
import { PageContainer } from '../../styles/PageContainer';
import { Main } from './styles';

export function Home(): JSX.Element {
  const userInfo: any = sessionStorage.getItem('user');
  const user: object = JSON.parse(userInfo);
  console.log(user);
  const data: Date = new Date();

  return (
    <PageContainer>
      <Sidebar />
      <Main>
        <h1>Seja Bem Vindo, {user.nome} </h1>
        <h3> Ultimo Login : {data.toLocaleString()}</h3>
      </Main>
    </PageContainer>
  );
}

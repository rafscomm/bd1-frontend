import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FuncionarioInterface } from '../../interfaces/FuncionarioInterface';
import { PageContainer } from '../../styles/PageContainer';

export function Home(): JSX.Element {
  const userInfo: any = sessionStorage.getItem('user');
  const user: object = JSON.parse(userInfo);
  console.log(user);
  const data: Date = new Date();

  return (
    <PageContainer>
      <Sidebar />
      <h1>Seja Bem Vindo, {user.nome} </h1>
      <h3>{data.toLocaleString()}</h3>
    </PageContainer>
  );
}

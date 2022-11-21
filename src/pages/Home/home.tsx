import { Sidebar } from '../../components/Sidebar/Sidebar';
import { FuncionarioInterface } from '../../interfaces/FuncionarioInterface';
import { PageContainer } from '../../styles/PageContainer';

export function Home(): JSX.Element {
  return (
    <PageContainer>
      <Sidebar />
      <h1>Seja Bem Vindo</h1>
    </PageContainer>
  );
}

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';

export function Caixa(): JSX.Element {
  return (
    <PageContainer>
      <Sidebar />
      <h1>Caixa</h1>
    </PageContainer>
  );
}

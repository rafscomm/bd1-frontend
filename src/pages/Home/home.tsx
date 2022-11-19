import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';

export function Home(): JSX.Element {
  return (
    <PageContainer>
      <Sidebar />
      <h1>Home</h1>
    </PageContainer>
  );
}

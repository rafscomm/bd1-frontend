import { Sidebar } from '../../components/Sidebar/Sidebar';
import { HeaderContainer } from '../../styles/HeaderContainer';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from '../../styles/TableContainer';

export function Clientes(): JSX.Element {
  return (
    <PageContainer>
      <Sidebar />
      <HeaderContainer>
        <h1>Clientes</h1>
        <TableContainer>
          
        </TableContainer>
      </HeaderContainer>
    </PageContainer>
  );
}

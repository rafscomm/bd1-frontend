import { useEffect } from 'react';

import { HeaderTable } from '../../components/HeaderTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { getCaixas } from '../../services/caixas';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';

export function Caixa(): JSX.Element {
  useEffect(() => {
    const getPagamentos = async () => {
      await getCaixas().then((response) => console.log(response.data));
    };
    getPagamentos();
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <HeaderTable title={`Caixa $${1}`}>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

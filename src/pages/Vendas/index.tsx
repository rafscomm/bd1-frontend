import { useEffect, useState } from 'react';

import { HeaderTable } from '../../components/HeaderTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { VendasInterface } from '../../interfaces/VendasInterface';
import { getVendas } from '../../services/vendas';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';

export function Vendas(): JSX.Element {
  const [vendas, setVendas] = useState<VendasInterface[]>([]);

  useEffect(() => {
    const vendasAPI = async () => {
      await getVendas().then((response) => {
        setVendas(response.data);
        console.log(response.data);
      });
    };
    vendasAPI();
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <HeaderTable title="Vendas">
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            {vendas.map((venda) => (
              <tbody>
                <tr>
                  <th>{venda.numero}</th>
                  <th>{venda.nome_cliente}</th>
                  <th>{venda.valor}</th>
                  <th>{venda.status}</th>
                </tr>
              </tbody>
            ))}
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

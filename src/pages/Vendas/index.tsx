import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';
import { HeaderTable } from '../../components/HeaderTable';
import { VendasInterface } from '../../interfaces/VendasInterface';
import { getVendas } from '../../services/vendas';

export function Vendas(): JSX.Element {
  const [vendas, setVendas] = useState<VendasInterface[]>([]);

  useEffect(() => {
    const vendasAPI = async () => {
      await getVendas().then((response) => setVendas(response.data));
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
              </tr>
            </thead>
            {vendas.map((venda) => (
              <tbody>
                <tr>
                  <th>{venda.numero}</th>
                  <th>{venda.nome_cliente}</th>
                  <th>{venda.valor}</th>
                </tr>
              </tbody>
            ))}
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

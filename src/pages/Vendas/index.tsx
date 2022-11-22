import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';
import { HeaderContainer, TableContainer } from './styles';
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
      <HeaderContainer>
        <h1>Vendas realizadas</h1>
        <TableContainer>
          <table>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Valor</th>
            </tr>
            <tr>
              {vendas.map((venda) => (
                <>
                  <th>{venda.numero}</th>
                  <th>{venda.nome_cliente}</th>
                  <th>{venda.valor}</th>
                </>
              ))}
            </tr>
          </table>
        </TableContainer>
      </HeaderContainer>
    </PageContainer>
  );
}

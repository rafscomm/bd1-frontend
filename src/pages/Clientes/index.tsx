import { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';
import { PessoaFisica, PessoaJuridica } from '../../interfaces/ClienteInterface';
import { getClientes } from '../../services/clientes';
import { HeaderTable } from '../../components/HeaderTable';

export function Clientes(): JSX.Element {
  const [clientes, setClientes] = useState<PessoaFisica[]>([]);

  useEffect(() => {
    const showClientes = async () => {
      await getClientes().then((response) => setClientes(response.data));
    };
    showClientes();
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <HeaderTable title="Clientes">
        <TableContainer>
          <table>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF/CNPJ</th>
            </tr>
            <tr>
              {clientes.map((cliente) => (
                <>
                  <th>{cliente.idCliente}</th>
                  <th>{cliente.nome}</th>
                  <th>{cliente.cpf}</th>
                </>
              ))}
            </tr>
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

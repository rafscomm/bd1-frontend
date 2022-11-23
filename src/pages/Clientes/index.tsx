import { useEffect, useState } from 'react';

import { HeaderTable } from '../../components/HeaderTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PessoaFisica, PessoaJuridica } from '../../interfaces/ClienteInterface';
import { getClientes } from '../../services/clientes';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';

export function Clientes(): JSX.Element {
  const [clientes, setClientes] = useState<PessoaFisica[]>([]);

  useEffect(() => {
    const showClientes = async () => {
      await getClientes().then((response) => {
        setClientes(response.data);
        console.log(response.data);
      });
    };
    showClientes();
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <HeaderTable title="Clientes">
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>CPF</th>
                <th>Nome</th>
                <th>Contato</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.cpf}>
                  <>
                    <th>{cliente.cpf}</th>
                    <th>{cliente.nome}</th>
                    <th>{cliente.contato}</th>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

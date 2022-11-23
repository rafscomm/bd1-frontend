import { useEffect, useState } from 'react';
import { HeaderTable } from '../../components/HeaderTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';
import { Fornecedor } from '../../interfaces/FornecedorInterface';
import { TableContainer } from './styles';
import { getFornecedores } from '../../services/fornecedores';

export function Fornecedores(): JSX.Element {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    const showFornecedores = async () => {
      await getFornecedores().then((response) => setFornecedores(response.data));
    };
    showFornecedores();
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <HeaderTable title="Fornecedores">
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Empresa</th>
              </tr>
            </thead>
            {fornecedores.map((fornecedor) => (
              <tbody>
                <tr>
                  <td>{fornecedor.idEmpresa}</td>
                  <td>{fornecedor.nomeFantasia}</td>
                  <td>{fornecedor.cnpj}</td>
                  <td>{fornecedor.empresa}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

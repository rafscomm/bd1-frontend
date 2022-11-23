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
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Empresa</th>
            </tr>
            <tr>
              {fornecedores.map((fornecedor) => (
                <>
                  <th>{fornecedor.idEmpresa}</th>
                  <th>{fornecedor.nomeFantasia}</th>
                  <th>{fornecedor.cnpj}</th>
                  <th>{fornecedor.empresa}</th>
                </>
              ))}
            </tr>
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

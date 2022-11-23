import { useEffect, useState } from 'react';

import { HeaderTable } from '../../components/HeaderTable';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Fornecedor } from '../../interfaces/FornecedorInterface';
import { getFornecedores } from '../../services/fornecedores';
import { PageContainer } from '../../styles/PageContainer';
import { TableContainer } from './styles';

export function Fornecedores(): JSX.Element {
  const [fornecedores, setFornecedores] = useState<any[]>([]);

  useEffect(() => {
    const showFornecedores = async () => {
      await getFornecedores().then((response) => {
        setFornecedores(response.data);
        console.log(response.data);
      });
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
              </tr>
            </thead>
            <tbody>
              {fornecedores.map((fornecedor) => (
                <tr key={fornecedor.cnpj}>
                  <td>{fornecedor.idEmpresa}</td>
                  <td>{fornecedor.nome_fantasia}</td>
                  <td>{fornecedor.cnpj}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </HeaderTable>
    </PageContainer>
  );
}

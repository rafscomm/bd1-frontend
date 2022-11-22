import { useEffect, useState } from 'react';

import { Categories } from '../../components/Categories';
import { ProductCard } from '../../components/ProductCard';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ProdutoInterface } from '../../interfaces/ProdutoInterface';
import { getProdutos } from '../../services/produtos';
import { PageContainer } from '../../styles/PageContainer';
import { Container, ProductList } from './styles';

// const produtos = [
//   {
//     id: 1,
//     name: 'Lamborghini Rede 2021',
//     price: 100000,
//   },
//   {
//     id: 2,
//     name: 'Lamborghini Rede 2021',
//     price: 100000,
//   },
//   {
//     id: 3,
//     name: 'Lamborghini Rede 2021',
//     price: 100000,
//   },
//   {
//     id: 4,
//     name: 'Lamborghini Rede 2021',
//     price: 100000,
//   },
//   {
//     id: 5,
//     name: 'Lamborghini Rede 2021',
//     price: 100000,
//   },
// ];

export function Produtos(): JSX.Element {
  const [produtos, setProdutos] = useState<ProdutoInterface[]>([]);
  useEffect(() => {
    const produtosAPI = async () => {
      await getProdutos().then((response) => setProdutos(response.data));
    };
    produtosAPI();
  }, []);
  return (
    <PageContainer>
      <Sidebar />
      <Container>
        <div className="menu">
          <Categories title="Popular" clicked={true} />
          <Categories title="SUVs" />
          <Categories title="SUVs" />
          <Categories title="SUVs" />
        </div>
        <div className="Separator" />
        <ProductList>
          {produtos.map((produto) => {
            return <ProductCard produto={produto} key={produto.id} />;
          })}
        </ProductList>
      </Container>
    </PageContainer>
  );
}

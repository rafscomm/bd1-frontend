import { Categories } from '../../components/Categories';
import { ProductCard } from '../../components/ProductCard';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { PageContainer } from '../../styles/PageContainer';
import { Container, ProductList } from './styles';

const produtos = [
  {
    id: 1,
    name: 'Lamborghini Rede 2021',
    price: 100000,
  },
  {
    id: 2,
    name: 'Lamborghini Rede 2021',
    price: 100000,
  },
  {
    id: 3,
    name: 'Lamborghini Rede 2021',
    price: 100000,
  },
  {
    id: 4,
    name: 'Lamborghini Rede 2021',
    price: 100000,
  },
  {
    id: 5,
    name: 'Lamborghini Rede 2021',
    price: 100000,
  },
];

export function Produtos(): JSX.Element {
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
          <ProductCard produtos={produtos} />
          <ProductCard produtos={produtos} />
          <ProductCard produtos={produtos} />
          <ProductCard produtos={produtos} />
          <ProductCard produtos={produtos} />
          <ProductCard produtos={produtos} />

          {/* <ProductCard produtos={produtos} />   */}
        </ProductList>
      </Container>
    </PageContainer>
  );
}

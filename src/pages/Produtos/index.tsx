import { useEffect, useState } from 'react';

import { Categories } from '../../components/Categories';
import { ProductCard } from '../../components/ProductCard';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ProdutoInterface } from '../../interfaces/ProdutoInterface';
import { getProdutos, sendProdutos } from '../../services/produtos';
import { PageContainer } from '../../styles/PageContainer';
import { Container, ProductList } from './styles';
import { AddButtom } from '../../components/AddButtom';
import { Modal } from '../../components/Modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  useEffect(() => {
    const produtosAPI = async () => {
      await getProdutos().then((response) => setProdutos(response.data));
    };
    produtosAPI();
  }, []);
  const handleOpenModal = (): void => {
    setModalIsOpen(true);
  };
  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const onEnvie = async (): Promise<any> => {
    const data = { nome: name, marca: marca, modelo: modelo, price: Number(price), imageURL: image };
    await sendProdutos(data).then((response) => console.log(response.data));
  };

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
            return <ProductCard handleOpen={handleOpenModal} produto={produto} key={produto.id} />;
          })}
        </ProductList>
        {modalIsOpen && (
          <Modal onClose={handleCloseModal} onEnvie={onEnvie}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
            <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Imagem" value={image} onChange={(e) => setImage(e.target.value)} />
          </Modal>
        )}
      </Container>
      <AddButtom handleOpen={handleOpenModal} />
    </PageContainer>
  );
}

import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

import { ProdutoInterface } from '../../interfaces/ProdutoInterface';
import { DeleteButtom } from '../DeleteButtom';
import { Modal } from '../Modal';
import { Button, ProductCardStyled } from './styles';

interface ProductCardProps {
  produto: ProdutoInterface;
}

export function ProductCard({ produto }: ProductCardProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ProductCardStyled>
      <div>
        <img src={produto.imageURL} alt="" />

        <div className="" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <div style={{ display: 'flex' }}>
            <h1 style={{ color: '#FFC75F', fontSize: 20 }}>$</h1>
            <h3>{produto.price}</h3>
          </div>
          <AiFillInfoCircle
            style={{ color: '808080', marginRight: 10, fontSize: 20 }}
            onClick={(): void => setModalIsOpen(true)}
          />
        </div>
        <p>{produto.nome}</p>
      </div>
      <DeleteButtom />
      <Button>Comprar</Button>
      {modalIsOpen && (
        <Modal onClose={(): void => setModalIsOpen(false)}>
          <p>Nome:</p>
          <p>Marca:</p>
          <p>Modelo:</p>
        </Modal>
      )}
    </ProductCardStyled>
  );
}

// function ModalProduct(): JSX.Element {
//   return (

//   );
// }

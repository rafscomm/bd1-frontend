import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

import { Modal } from '../Modal';
import { Button, ProductCardStyled } from './styles';

interface ProductCardProps {
  produtos: any[];
}

export function ProductCard({ produtos }: ProductCardProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <ProductCardStyled key={produtos[1].id}>
        <div>
          <img src="./assets/carro.jpg" alt="" />
          <div className="" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ display: 'flex' }}>
              <h1 style={{ color: '#FFC75F', fontSize: 20 }}>$</h1>
              <h3>{produtos[1].price}</h3>
            </div>
            <AiFillInfoCircle
              style={{ color: '808080', marginRight: 10, fontSize: 20 }}
              onClick={(): void => setModalIsOpen(true)}
            />
          </div>
          <p>{produtos[1].name}</p>
        </div>
        <Button>Comprar</Button>
      </ProductCardStyled>
      {modalIsOpen && (
        <Modal onClose={(): void => setModalIsOpen(false)}>
          <p>Nome:</p>
          <p>Marca:</p>
          <p>Modelo:</p>
        </Modal>
      )}
    </>
  );
}

// function ModalProduct(): JSX.Element {
//   return (

//   );
// }

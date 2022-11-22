import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

import { ProdutoInterface } from '../../interfaces/ProdutoInterface';
import { DeleteButtom } from '../DeleteButtom';
import { Modal } from '../Modal';
import { Button, ProductCardStyled } from './styles';

interface ProductCardProps {
  produto: ProdutoInterface;
  handleOpen: () => void;
}

export function ProductCard({ produto, handleOpen }: ProductCardProps): JSX.Element {
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
          <AiFillInfoCircle style={{ color: '808080', marginRight: 10, fontSize: 20 }} onClick={handleOpen} />
        </div>
        <p>{produto.nome}</p>
      </div>
      <DeleteButtom />
      <Button>Comprar</Button>
    </ProductCardStyled>
  );
}

// function ModalProduct(): JSX.Element {
//   return (

//   );
// }

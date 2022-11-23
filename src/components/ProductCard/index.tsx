import { useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

import { ProdutoInterface } from '../../interfaces/ProdutoInterface';
import { deleteProdutos } from '../../services/produtos';
import { DeleteButtom } from '../DeleteButtom';
import { Modal } from '../Modal';
import { Button, ProductCardStyled } from './styles';

interface ProductCardProps {
  produto: ProdutoInterface;
  id: number;
}

export function ProductCard({ produto, id }: ProductCardProps): JSX.Element {
  const deleteProduto = async (id: number) => {
    await deleteProdutos(id).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <ProductCardStyled>
      <div>
        <img src={produto.imageURL} alt="" />

        <div className="" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <div style={{ display: 'flex' }}>
            <h1 style={{ color: '#FFC75F', fontSize: 20 }}>$</h1>
            <h3>{produto.price}</h3>
          </div>
        </div>
        <p>{produto.nome}</p>
      </div>
      <DeleteButtom onClick={() => deleteProduto(id)} />
      <Button>Comprar</Button>
    </ProductCardStyled>
  );
}

// function ModalProduct(): JSX.Element {
//   return (

//   );
// }

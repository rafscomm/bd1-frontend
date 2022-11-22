export interface PagamentoInterface {
  id: number;
  valor_pagamento: number;
  tipo: string;
  idCliente: number;
  idCaixa: number;
}

export interface PessoaFisica {
  idFuncion: number;
  cpf: string;
  nome: string;
  endereco: string;
  contato: string;
  idCliente: number;
}
export interface PessoaJuridica {
  idFuncion: number;
  cnpj: string;
  nome_fantasia: string;
  endereco: string;
  razao_social: string;
  idCliente: number;
}

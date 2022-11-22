export interface ClienteInterface {
  id: number;
  idFuncion: number;
}
export interface PessoaFisica {
  cpf: string;
  nome: string;
  endereco: string;
  contato: string;
  idCliente: number;
}
export interface PessoaJuridica {
  cnpj: string;
  nome_fantasia: string;
  endereco: string;
  razao_social: string;
  idCliente: number;
}

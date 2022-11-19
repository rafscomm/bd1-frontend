import { ReactNode } from 'react';
import { FaBars, FaCar, FaCartArrowDown, FaCashRegister, FaDollyFlatbed, FaTh, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { Div, DivMain, Main, TopSection } from './styles';

interface SideBarProps {
  children: ReactNode;
}

export function SideBar({ children }: SideBarProps): JSX.Element {
  const sideItens = [
    {
      path: '/',
      name: 'Home',
      icon: <FaTh />,
    },
    {
      path: '/produtos',
      name: 'Produtos',
      icon: <FaCar />,
    },
    {
      path: '/venda',
      name: 'Vendas',
      icon: <FaCartArrowDown />,
    },
    {
      path: '/clientes',
      name: 'Clientes',
      icon: <FaUser />,
    },
    {
      path: '/fornecedores',
      name: 'Fornecedores',
      icon: <FaDollyFlatbed />,
    },
    {
      path: '/caixa',
      name: 'Caixa',
      icon: <FaCashRegister />,
    },
  ];

  return (
    <DivMain>
      <Div>
        <TopSection>
          <div className="bars">
            <FaBars />
          </div>
          <img src="../../assets/marquinhos.png" alt="Logo marca" />
        </TopSection>
        {sideItens.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </Div>
      <Main>{children}</Main>
    </DivMain>
  );
}

import { FaBars, FaCar, FaCartArrowDown, FaCashRegister, FaDollyFlatbed, FaTh, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { SidebarContainer, TopSection } from './styles';

export function Sidebar(): JSX.Element {
  const sideItens = [
    {
      path: '/home',
      name: 'Home',
      icon: <FaTh />,
    },
    {
      path: '/produtos',
      name: 'Produtos',
      icon: <FaCar />,
    },
    {
      path: '/vendas',
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
    <SidebarContainer>
      <TopSection>
        <div className="bars">
          <FaBars />
        </div>
        <img src="./assets/logo.png" alt="Logo marca" style={{ width: '50px' }} />
      </TopSection>
      <>
        {sideItens.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </>
    </SidebarContainer>
  );
}

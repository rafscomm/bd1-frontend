import { Div, DivMain,Main, TopSection } from "./styles";
import {FaBars, FaCar, FaCartArrowDown, FaCashRegister, FaDollyFlatbed, FaTh, FaUser} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface NavBarProps{
  children: ReactNode
}

function NavBar({children}:NavBarProps){
  const sideItens = [
    {
     path: '/',
     name: "Home",
     icon: <FaTh/>
    },
    {
     path: '/produtos',
     name: "Produtos",
     icon: <FaCar/>

    },
    {
      path: '/venda',
      name: "Vendas",
      icon: <FaCartArrowDown/>
    },
    {
      path: "/clientes",
      name: "Clientes",
      icon: <FaUser />
    },
    {
      path:"/fornecedores",
      name: "Fornecedores",
      icon: <FaDollyFlatbed />
    },
    {
      path: "/caixa",
      name: "Caixa",
      icon: <FaCashRegister />
    }
]
  return(
    <DivMain>
      <Div>
        <TopSection>
          <h1>Na Cars</h1>
          <div className="bars">
            <FaBars/>
          </div>
        </TopSection>
        {sideItens.map((item,index)=>(
            <NavLink to={item.path} key = {index} className= "link" activeClassName = "active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </Div>
      <Main>{children}</Main>
    </DivMain>
 )

}

export default NavBar;
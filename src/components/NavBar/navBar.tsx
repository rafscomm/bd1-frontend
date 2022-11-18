import { Li, Nav } from "./styles";
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
    <div className="main">
      <div className="sidebar">
        <div className="top-section">
          <h1>Na Cars</h1>
          <div className="bars">
            <FaBars/>
          </div>
        </div>
        {sideItens.map((item,index)=>(
            <NavLink to={item.path} key = {index} className= "link" activeClassName = "active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
 )

}

export default NavBar;
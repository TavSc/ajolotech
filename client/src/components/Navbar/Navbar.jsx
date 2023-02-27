import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="wrapper">
          <div className='left'>
            <div className='searchcontainer'>
              <input className='in' placeholder="Buscar" />
              <SearchIcon/>
            </div>
          </div>
          <div className="center">
            <div className="logo">AJOLOTECH</div>
          </div>
          <div className="right">
            <div className="menuitem">Registrarse</div>
            <div className="menuitem">Iniciar Sesion</div>
            <Link>
              <div className="menuitem">
                <ShoppingCartIcon/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
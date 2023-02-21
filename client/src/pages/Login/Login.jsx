import React from 'react'
import { Link } from "react-router-dom"
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>Iniciar Sesion</div>
          <form>
            <input className='in' type="text" placeholder='nombre de usuario'/>
            <input className='in' type="password"  placeholder='contraseña'/>
            <button className='btn'>Ingresar</button>
            <Link className='agreement'>No recuerda su contraseña?</Link>
            <Link className='agreement'>Crear una cuenta</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
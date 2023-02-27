import React from 'react'
import "../Login/Login.scss"

const Register = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='wrapper'>
          <div classname="title">Registrarse</div>
          <form action="POST">
            <input classname="in" type="name" placeholder="Nombre (s)"/>
            <br />
            <input classname="in" type="name" placeholder="Apellido Paterno"/>
            <br />
            <input classname="in" type="name" placeholder="Apellido Materno"/>
            <br />
            <input classname="in" type="email" placeholder="Correo electrónico"/>
            <br />
            <input classname="in" type="password" placeholder="Contraseña"/>
            <br />
            <input classname="in" type="password" placeholder="Confirmar Contraseña"/>
            <br />
            <input classname="in" type="name" placeholder="Nombre de Usuario"/>
            <br />
            <button classname="agreement">Registrarse</button>
        </form>
       </div>
      </div>
    </div>
  )
}

export default Register
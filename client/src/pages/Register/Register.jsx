import React from 'react'
import "./Register.scss"

const Register = () => {
  return (
    <div className='register'>
        <form action="">
            <label htmlFor="">Nombre (s): </label>
            <input type="name"/>
            <br />
            <label htmlFor="">Apellido Paterno: </label>
            <input type="name"/>
            <br />
            <label htmlFor="">Apellido Materno: </label>
            <input type="name"/>
            <br />
            <label htmlFor="">Correo electrónico: </label>
            <input type="email"/>
            <br />
            <label htmlFor="">Contraseña:  </label>
            <input type="password"/>
            <br />
            <label htmlFor="">Confirmar Contraseña: </label>
            <input type="password"/>
            <br />
            <label htmlFor="">Nombre de Usuario: </label>
            <input type="name"/>
            <br />
            <button>Registrarse</button>
        </form>
    </div>
  )
}

export default Register
import React, { useContext } from 'react'
import { login } from '../services/user'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/login'
import { TokenContext } from '../context/token'

const Login = () => {
  const { token, setToken } = useContext(TokenContext)
  const { setLogin } = useContext(LoginContext)
  const navigation = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const response = await login(data)
      const { token } = response.data
      setLogin(true)
      setToken(token)
      window.localStorage.setItem('token', JSON.stringify(token))
      navigation('/admin/createphoto')
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <form className='form-put' onSubmit={handleLogin}>
      <div>
        <label htmlFor='nombre-usuario'>nombre de usuario</label>
        <input required minLength={8} maxLength={20} id='nombre-usuario' name='username' type='text' />
      </div>
      <div>
        <label htmlFor='contraseña'>contraseña</label>
        <input required minLength={8} maxLength={20} id='contraseña' name='password' type='password' />
      </div>
      <div>
        <button type='submit'>
          login
        </button>

      </div>

    </form>
  )
}

export default Login

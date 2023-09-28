import React, { useContext } from 'react'
import { login } from '../services/user'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/login'
import { TokenContext } from '../context/token'
import Button from './Buttons'
import '../css/app.css'
import { URLContext } from '../context/url'
const Login = () => {
  const { setToken } = useContext(TokenContext)
  const { setLogin } = useContext(LoginContext)
  const { URL } = useContext(URLContext)
  const navigation = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const response = await login(data, URL)
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
    <form className='form-put mt-5 login ' onSubmit={handleLogin}>
      <div>
        <label htmlFor='nombre-usuario'>Username</label>
        <input required minLength={8} maxLength={20} id='nombre-usuario' name='username' type='text' />
      </div>
      <div>
        <label htmlFor='contraseña'>Password</label>
        <input required minLength={8} maxLength={20} id='contraseña' name='password' type='password' />
      </div>
      <div className='mt-3 d-flex justify-content-center'>
        <Button typeButton='submit' paddingButton='0.5em 1em'>
          Login
        </Button>

      </div>

    </form>
  )
}

export default Login

import React, { useContext } from 'react'
import { login, logout } from '../services/user'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/login'

const Login = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE2NmU3MTJkYmU2YTg4MGFhYzBkNCIsInJvbGUiOiJhZG1pbmJpb2xvZ2ljdGhleWxoYXJkIiwiaWF0IjoxNjkzODQwNjAzLCJleHAiOjE2OTM4ODM4MDN9.L4lF5atEc2tBY-ncykzAvPaFHKZEhgPuWyVX2uat0SQ'
  const { setLogin } = useContext(LoginContext)
  const navigation = useNavigate()
  const handleLogout = (e) => {
    logout(token).then(res => alert('ha cerrado la sesion correctamente')).catch(error => alert(error.response.data.msg))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    login(data).then((res) => { setLogin(true); navigation('/admin/createphoto') }).catch(error => alert(error.response.data.msg))
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
        <button type='button' onClick={handleLogout}>logout</button>
      </div>

    </form>
  )
}

export default Login

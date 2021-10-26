import MyButton from 'components/UI/button/MyButton'
import MyInput from 'components/UI/input/MyInput'
import { AuthContext } from 'context'
import React, { useContext } from 'react'


const Login = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Sing in</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder='Username'/>
        <MyInput type="password" placeholder='Password'/>
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}

export default Login

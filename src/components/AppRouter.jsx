import { AuthContext } from 'context'
import PostIdPage from 'pages/PostIdPage'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useContext } from 'react/cjs/react.development'
import { privateRoutes, publicRoutes} from 'router/routes'
import About from '../pages/About'
import Error from '../pages/Error'
import Posts from '../pages/Posts'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }
  return (
    isAuth
    ? <Switch>
        {privateRoutes.map(route => 
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to='/posts'/>
      </Switch>
    : <Switch>
        {publicRoutes.map(route => 
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        )}
        <Redirect to='/login'/>
      </Switch>
  )
}

export default AppRouter
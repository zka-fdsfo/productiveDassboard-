import { Routes, Route } from 'react-router-dom'
import { RouterProvider } from "react-router";
import Login from './auth/pages/Login'
import Register from './auth/pages/Register'
import Home from './auth/pages/Home'
import AuthContext from './auth/auth.context'

import { router } from './app.routes'

const App = () => {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
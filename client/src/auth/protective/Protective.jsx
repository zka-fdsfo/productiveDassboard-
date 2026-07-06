import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../auth.context'


export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

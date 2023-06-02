import React, { useContext } from 'react'
import Contexto from '../context/contexto'
import { Navigate } from 'react-router-dom'

const RutasPublicas = ({children}) => {
    const{estado} = useContext(Contexto)
  return (!estado)
  ? children
  : <Navigate to = "/home"/>
}

export default RutasPublicas
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './components/Context/UserAuthContext';


export default function ProctedRoute({childern}) {
  const {user} = useUserAuth();
  if(!user){
    return <Navigate to="/" />
  }
  return childern;
}


import React from 'react'
import { Button } from '@mui/material'
import { useUserAuth } from '../Context/UserAuthContext';

export default function Dashboard() {

  const {user, logOut} = useUserAuth();
  console.log(user)

  const handleLogout = () => {
    try{
       logOut();
      console.log("logout");
    } catch (err){
      console.log(err.message)
    }
  }

  return (
    <>
        <h4>Hello World</h4>
        <p>This is a dashbord</p>
        <Button variant='contained' onClick={handleLogout}>
          Logout
        </Button>
    </>
  )
}

import React from 'react'
import { useMsal } from '@azure/msal-react'
import { Button } from '@mui/material';
const Login = () => {
    const {instance,accounts}=useMsal();
    const handleLogin=()=>{
        instance.loginPopup().then(()=>{
            console.log(accounts[0])
        })
    }
  return (
    <Button onClick={()=>handleLogin()}>Login</Button>
  )
}

export default Login
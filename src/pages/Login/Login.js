import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const fbProvider = new FacebookAuthProvider()

export default function Login() {

  const handleFbLogin = () => {
    signInWithPopup(fbProvider)
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleFbLogin}>Sign in with Facebook</Button>
    </Stack>
  )
}

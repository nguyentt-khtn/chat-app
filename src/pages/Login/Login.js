import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/userSlice';

const fbProvider = new FacebookAuthProvider()

export default function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleFbLogin = () => {
    signInWithPopup(auth, fbProvider)
  }

  auth.onAuthStateChanged(async(user) => {
    // console.log({ user })
    if (user) {
      const action = loginUser(user)
      await dispatch(action)
      navigate('/')
    }
  })

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleFbLogin}>Sign in with Facebook</Button>
    </Stack>
  )
}


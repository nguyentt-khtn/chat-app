import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../app/userSlice";

const fbProvider = new FacebookAuthProvider();

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFbLogin = () => {
    signInWithPopup(auth, fbProvider);
  };
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const { displayName, uid, photoURL, email } = user;
      const userInfo = {
        uid,
        displayName,
        email,
        photoURL,
      };
      // await dispatch(loginUser(userInfo));
      await localStorage.setItem('USER',JSON.stringify(userInfo))
      navigate("/chatroom");
    }
  });
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleFbLogin}>
        Sign in with Facebook
      </Button>
    </Stack>
  );
}

import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUserIntoDb } from "../../firebase/services";

export default function Login() {
  const dispatch = useDispatch();
  const fbProvider = new FacebookAuthProvider();

  const navigate = useNavigate();

  const handleFbLogin = async () => {
    const { _tokenResponse, user } = await signInWithPopup(auth, fbProvider);
    if (_tokenResponse?.isNewUser) {
      addNewUserIntoDb('userList', {
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        photoURL: user.photoURL,
        providerId: _tokenResponse.providerId
      })
    }
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
      await localStorage.setItem('USER', JSON.stringify(userInfo))
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

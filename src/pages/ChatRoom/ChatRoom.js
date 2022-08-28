import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { collection, doc, onSnapshot, query } from "firebase/firestore";

export default function ChatRoom(props) {

  React.useEffect(() => {
    const q = query(collection(db, "userList"));
    console.log(q)
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

    });
    return () => {
      unsubscribe()
    }
  }, [])
  const navigate = useNavigate();
  const { uid, email, photoURL, displayName } = JSON.parse(
    localStorage.getItem("USER")
  );
  const renderListUser = (number) => {
    const userList = [];
    for (let i = 0; i < number; i++) {
      userList.push(
        <Stack key={i} direction="row" spacing={2} mt={1}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            asdkjasd
          </Typography>
        </Stack>
      );
    }
    return userList;
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, maxHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={2} p={2} sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          {/*Start User Information */}
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Stack direction="row" spacing={2}>
              <Avatar alt={displayName} src={photoURL} />
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {email}
              </Typography>
            </Stack>
            <Button
              sx={{ float: "right" }}
              variant="outlined"
              color="error"
              onClick={handleLogout}
            >
              <Logout />
            </Button>
          </Stack>
          {/*End User Information */}

          <hr />

          {/* Start List User Contact */}
          <Box mt={5}>
            <Stack sx={{ overflowY: "auto" }}>{renderListUser(30)}</Stack>
          </Box>

          {/* End List User Contact */}
        </Grid>
        <Grid item xs={10}>
          xs=4
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import ChatMessages from "../../components/ChatMessages";

export default function ChatRoom(props) {
  const [userList, setUserList] = React.useState(null);
  React.useEffect(() => {
    const q = query(collection(db, "userList"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setUserList(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const navigate = useNavigate();
  const thisUser = JSON.parse(localStorage.getItem("USER"));
  const { uid, email, photoURL, displayName } = thisUser;
  const renderListUser = () => {
    if (userList === null) {
      return;
    }
    const userListItem = userList.map((user) => {
      return (
        <Stack key={user.id} direction="row" spacing={2} mt={1}>
          <Avatar alt={user.displayName} src={user.photoURL} />
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            {user.displayName}
          </Typography>
        </Stack>
      );
    });
    return userListItem;
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container>
        <Grid item xs={2} p={2} sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          {/*Start User Information */}
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Stack direction="row" spacing={2}>
              <Avatar alt={displayName} src={photoURL} />
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {displayName}
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
            <Stack sx={{ overflowY: "auto" }}>{renderListUser(10)}</Stack>
          </Box>
          {/* End List User Contact */}
        </Grid>
        <Grid item xs={10} sx={{ height: "100%" }}>
          <ChatMessages thisUser={thisUser} />
        </Grid>
      </Grid>
    </Box>
  );
}

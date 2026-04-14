import { useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import UserCard from "./UserCard";

import {
  Container,
  Typography,
  Box,
  Grid,
  Paper
} from "@mui/material";

import { Button } from '@mui/material'

import RefreshIcon from '@mui/icons-material/Refresh';
import Loader from "./MaterialUIComponents/LoadingSpinner";

const UserList = () => {
  const { loadUsers, refreshUsers, removeUser, users, loading, refreshing } = useUsers();

  useEffect(() => {
    loadUsers();
  }, []);

  const RemoveThePersistedUser = (id: string) => {
    removeUser(id);
  };

  const RefreshThePersistedUsers = () => {
    refreshUsers();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      
    
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Typography variant="h4"  gutterBottom sx={{fontWeight:"300"}}>
          Users Dashboard
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Total Users: {users.length}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            loading={refreshing}
            onClick={RefreshThePersistedUsers}
            startIcon={<RefreshIcon />}
          >
            Refresh Users
          </Button>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid container rowSpacing={1} columnSpacing={{xs: 12, sm: 6, md: 4, lg: 3}} key={user.id}>
            <UserCard
              id={user.id}
              name={user.name}
              picture={user.picture}
              RemoveThePersistedUser={RemoveThePersistedUser}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;













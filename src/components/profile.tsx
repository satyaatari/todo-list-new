import React from 'react';
import {  Typography, Box, Container, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './header';



const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    
  return (
    <>
    
    <Header/>
    <Container maxWidth="md">
      
      {/* Profile Section */}
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar alt={user?.name} sx={{ width: 100, height: 100, mb: 2 }} />
        <Typography variant="h5">{user?.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{user?.email}</Typography>
        
      </Box>
    </Container>
    </>
  );
};

export default Profile;

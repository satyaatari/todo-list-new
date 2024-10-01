import React from 'react';
import { Typography, Box, Container, Avatar, Card, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './header';
import { logout } from '../store/slices/authSlice';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        
        <Card sx={{ p: 4, boxShadow: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Avatar
              alt={user?.name}
              sx={{ width: 120, height: 120, mb: 3, bgcolor: 'primary.main', fontSize: '3rem' }}
            >
              {user?.name ? user.name.charAt(0) : 'U'}
            </Avatar>

            
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              {user?.name || 'Guest User'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user?.email || 'No email provided'}
            </Typography>

            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              
              <Button variant="contained" color="warning" size="large" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Profile;

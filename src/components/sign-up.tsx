import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { login } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from "../store";
import { toast } from 'react-toastify';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleLogin = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    } else if(!validateName(name)) {
      setNameError('Please enter a valid name (alphabets only).');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      dispatch(login({ name, email }));
      toast.success("Signup successful! Welcome!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/addTodo');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Welcome Header */}
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#1976d2',
            }}
          >
            Welcome!
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            sx={{ textAlign: 'center', color: '#555' }}
          >
            Please Sign Up to continue
          </Typography>

          <Box sx={{ mt: 3, width: '100%' }}>
            
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              error={!!nameError}
              helperText={nameError}
            />

            
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              error={!!emailError} 
              helperText={emailError} 
            />

            
            <Button
              type="submit"
              onClick={handleLogin}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, padding: '10px 0', fontSize: '16px' }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
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
      setNameError('Name is required');
      isValid = false;
    } else if(!validateName(name)) {
      setNameError('Please enter valid name');
      isValid = false;
    }else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      dispatch(login({ name, email }));
      toast.success("Signup successful! Welcome!", {
        position: "top-right",
        autoClose: 3000, // Automatically close after 3 seconds
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box sx={{ mt: 3 }}>
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
          <Button type="submit" onClick={handleLogin} fullWidth variant="contained" sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

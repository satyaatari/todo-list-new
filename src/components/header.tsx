import React, { useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../store/slices/authSlice";
import { RootState } from "../store";


const Header: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    if (!user) {
      dispatch(logout());
      navigate('/');
    }
  }, [user, navigate, dispatch]);

  if (!user) {
    return null;
  }

  const handleAddTodo = () => {
    if (location.pathname === '/addTodo') {
      // Optional: You can add logic if you want to do something when on the addTodo page
    } else {
      navigate("/addTodo"); // Navigate to Add Todo page
    }
  };

  const handleProfileNavigation = () => {
    navigate("/profile"); // Navigate to Profile page
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* App Title */}
        <Typography variant="h6" component="div">
          To Do App
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Add Todo or Profile Button */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={location.pathname === '/addTodo' ? handleProfileNavigation : handleAddTodo}
          >
            {location.pathname === '/addTodo' ? "Profile" : "Add Todo"}
          </Button>

          {/* User Avatar */}
          <IconButton onClick={location.pathname === '/profile' ? handleLogout : handleProfileNavigation}>
            <Avatar alt="User Avatar" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

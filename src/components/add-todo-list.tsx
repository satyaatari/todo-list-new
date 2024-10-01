import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { addTodo } from "../store/slices/todoSlice";
import { AppDispatch, RootState } from "../store";
import TodoList from "./todo-list"; 
import Header from "./header";

const AddTodoForm: React.FC = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState('');
  
 
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  
  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError('Please enter value.');
      isValid = false;
    } else if(!validateName(name)) {
      setNameError('Please enter valid data');
      isValid = false;
    } else if (name.length > 500) {
      setNameError('To Do cannot exceed 500 characters.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (name.trim() && user?.email && isValid) {
      dispatch(addTodo({ name, userId: user.email }));
      setName("");
    }
  };

  return (
    <>
    <Header></Header>
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            To Do List
          </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="To Do Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter To Do"
            fullWidth
            error={!!nameError}
            helperText={nameError}
          />
          <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
            Add To Do
          </Button>
        </Box>
      

      {/* TodoList component */}
      <TodoList />
    </Box>
    </Box>
    </Container>
    </>
  );
};

export default AddTodoForm;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AppDispatch, RootState } from "../store";
import { removeTodo, toggleTodo } from "../store/slices/todoSlice";

const TodoList: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const loggedInUserId = user?.email; 
    const todos = useSelector((state: RootState) => 
        state.todo.todos.filter(todo => todo.userId === loggedInUserId)
      );
  
  const dispatch = useDispatch<AppDispatch>();


  const today = new Date().toISOString().split("T")[0];


  return (
    
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {todos.map((todo) => (
        <Paper key={todo.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{todo.name}</Typography>
              
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    todo.completedDates.includes(today) ? "success" : "primary"
                  }
                  onClick={() =>
                    dispatch(toggleTodo({ id: todo.id, date: today }))
                  }
                  startIcon={<CheckCircleIcon />}
                >
                  {todo.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  startIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
          
        </Paper>
      ))}
    </Box>
  );
};

export default TodoList;

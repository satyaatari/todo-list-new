import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AppDispatch, RootState } from "../store";
import { removeTodo, toggleTodo } from "../store/slices/todoSlice";

const TodoList: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const loggedInUserId = user?.email;
  const todos = useSelector((state: RootState) =>
    state.todo.todos.filter((todo) => todo.userId === loggedInUserId)
  );
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<{ name: string } | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const handleOpenDialog = (todo: { name: string }) => {
    setSelectedTodo(todo);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedTodo(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
      {todos.map((todo, index) => (
        <Paper key={todo.id} elevation={2} sx={{ p: 2 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            {/* Serial Number */}
            <Typography variant="h6" sx={{ minWidth: "40px" }}>
              {index + 1}.
            </Typography>

            
            <Typography
              variant="h6"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "100%", sm: "300px" },
                cursor: "pointer",
              }}
              onClick={() => handleOpenDialog(todo)}
            >
              {todo.name}
            </Typography>

            
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Button
                variant="outlined"
                color={todo.completedDates.includes(today) ? "success" : "primary"}
                onClick={() => dispatch(toggleTodo({ id: todo.id, date: today }))}
                startIcon={<CheckCircleIcon />}
              >
                {todo.completedDates.includes(today) ? "Completed" : "Mark Complete"}
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
          </Stack>
        </Paper>
      ))}

      {/* Dialog for showing full task details */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
          <Typography variant="h6">{selectedTodo?.name}</Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleCloseDialog}>
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TodoList;

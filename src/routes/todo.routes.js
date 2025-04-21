import express from 'express';
import {
  addTodo,
  getTodoById,
  getAllTodos,
  updateTodoById,
  deleteTodoById,
  deleteAllTodos,
} from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/', addTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodoById);
router.delete('/:id', deleteTodoById);
router.delete('/', deleteAllTodos);

export default router;

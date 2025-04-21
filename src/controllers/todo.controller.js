import prisma from '../prisma/client.js';

// Add a new todo
export const addTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.userId;

  try {
    const todo = await prisma.todo.create({
      data: { title, userId },
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

// Get a single todo by ID
export const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({ where: { id: Number(id) } });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching todo' });
  }
};

// Get all todos for the logged-in user
export const getAllTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: { userId: req.userId },
    });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
};

// Update a todo by ID
export const updateTodoById = async (req, res) => {
  const { id } = req.params;

  try {
    const existingTodo = await prisma.todo.findUnique({
      where: { id: Number(id) },
    });

    if (!existingTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const updatedTodo = await prisma.todo.update({
      where: { id: Number(id) },
      data: { completed: !existingTodo.completed },
    });

    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

// Delete a single todo
export const deleteTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({ where: { id: Number(id) } });
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};

// Delete all todos for current user
export const deleteAllTodos = async (req, res) => {
  try {
    await prisma.todo.deleteMany({
      where: { userId: req.userId },
    });
    res.json({ message: 'All todos deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todos' });
  }
};

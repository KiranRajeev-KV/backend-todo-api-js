# Backend Todo API (Node.js + Express + Prisma + PostgreSQL)

A simple authenticated TODO app backend built with **Node.js**, **Express**, **PostgreSQL**, **Prisma**, and **JWT**. Includes complete CRUD functionality and user authentication.

## Features

- User Signup and Signin (JWT-based authentication)
- Add, Get, Update, and Delete TODOs
- Secure routes with authentication middleware
- Request collection included (Bruno format)

---

## 📁 Project Structure

```
.
├── bruno/                  # API request collection (Bruno)
│   └── *.bru               # Bruno HTTP request definitions
├── prisma/
│   └── schema.prisma       # Prisma schema
├── src/
│   ├── controllers/        # Route logic for user and todos
│   ├── middlewares/        # JWT auth middleware
│   ├── prisma/             # Prisma client setup
│   ├── routes/             # Express routes
│   └── server.js           # Entry point
├── .env.example            # Sample environment variables
├── .gitignore
└── package.json
```

---

## 🛠 Tech Stack

- **Node.js** & **Express** — Backend server
- **Prisma ORM** — DB access with PostgreSQL
- **PostgreSQL** — Relational database
- **JWT** — Authentication
- **bcrypt** — Password hashing
- **Bruno** — API testing

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/KiranRajeev-KV/backend-todo-api-js.git
cd backend-todo-api-js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file based on `.env.example`:

```
DATABASE_URL=postgresql://your_user:your_pass@localhost:5432/your_db
JWT_SECRET=your_super_secret
```

### 4. Setup database

```bash
npx prisma migrate dev --name init
```

### 5. Start the server

```bash
npm run dev
```

The server will start on `http://localhost:8080` (or as configured).

---

## 🔐 API Authentication

All `/api/todos` routes are protected with a `Bearer` token (JWT).  
After signing in, include the token in headers:

```
Authorization: Bearer <your_token_here>
```

---

## 📬 API Endpoints

### 👤 User

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| POST   | `/api/user/signup` | Register new user   |
| POST   | `/api/user/signin` | Login and get token |

### ✅ Todos (auth required)

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/todos/`        | Add new TODO              |
| GET    | `/api/todos/`        | Get all TODOs             |
| GET    | `/api/todos/:id`     | Get TODO by ID            |
| PUT    | `/api/todos/:id`     | Toggle completion status  |
| DELETE | `/api/todos/:id`     | Delete TODO by ID         |
| DELETE | `/api/todos/`        | Delete all TODOs by user  |

---

## 🧪 Bruno Requests

Use the Bruno app to test APIs (`./bruno` directory).  
Install Bruno from [bruno.io](https://www.usebruno.com/), then open the folder to use predefined requests.

---

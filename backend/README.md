# Live Polling System - Backend

Backend service for the real-time live polling application.

---

# Tech Stack

- Node.js
- Express.js
- Socket.IO
- Express Session
- CORS

---

# Features

- Real-time vote updates using Socket.IO
- Session-based voting restriction
- Admin login support
- Poll analytics API
- REST APIs
- Modular architecture

---

# Project Structure

backend/
│
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── data/
│ ├── socket/
│ └── server.js
│
├── package.json
└── .env

---

# Installation

## Clone Repository

```bash
git clone <repo-url>
```

## Navigate to backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in root:

```env
PORT=3000
SESSION_SECRET=poll-secret
```

---

# Run Development Server

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Get Poll Data

```http
GET /api/poll
```

Response:

```json
{
  "success": true,
  "totalVotes": 10,
  "nominees": []
}
```

---

## Submit Vote

```http
POST /api/vote
```

Body:

```json
{
  "nomineeId": 1
}
```

---

## Admin Login

```http
POST /api/admin/login
```

Body:

```json
{
  "email": "admin@poll.com",
  "password": "admin123"
}
```

---

# Socket Events

## voteUpdated

Triggered whenever a new vote is submitted.

Frontend listens to:

```js
socket.on("voteUpdated");
```

---

# One Vote Per Session

The application prevents duplicate voting using:

- express-session
- session tracking

Example:

```js
req.session.voted = true;
```

---

# Seeder Logic

Default nominees are seeded from:

```bash
src/data/nominees.js
```

---

# Scripts

## Start Development

```bash
npm run dev
```

## Start Production

```bash
npm start
```

---

# Docker Support (Optional)

## Build Docker Image

```bash
docker build -t polling-backend .
```

## Run Container

```bash
docker run -p 3000:3000 polling-backend
```

---

# Author

Developed by Divesh

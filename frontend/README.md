# Live Polling System - Frontend

Frontend application for the real-time live polling system.

---

# Tech Stack

- React.js
- Vite
- Tailwind CSS
- Axios
- Socket.IO Client
- Recharts

---

# Features

- Real-time live vote updates
- Responsive modern UI
- Admin analytics dashboard
- Interactive charts
- Session-based voting flow
- Live vote tracking

---

# Project Structure

frontend/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── socket/
│ ├── App.jsx
│ └── main.jsx
│
├── package.json
└── vite.config.js

---

# Installation

## Clone Repository

```bash
git clone <repo-url>
```

## Navigate to frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:5173
```

---

# Frontend Pages

## Voting Page

Route:

```bash
/
```

Features:

- View nominees
- Submit vote
- One vote per session

---

## Admin Dashboard

Route:

```bash
/admin
```

Features:

- Total vote count
- Candidate-wise vote count
- Real-time updates
- Pie chart analytics

---

# Socket Integration

Socket connection:

```js
socket.on("voteUpdated");
```

The admin dashboard updates automatically whenever a user votes.

---

# API Configuration

Base API:

```js
http://localhost:3000/api
```

Update in:

```bash
src/services/api.js
```

---

# UI Features

- Dark modern dashboard
- Responsive design
- Glassmorphism cards
- Animated transitions
- Interactive charts

---

# Tailwind Setup

Install Tailwind:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Add in:

```css
@import "tailwindcss";
```

---

# Scripts

## Start Development

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

---

# Docker Support (Optional)

## Build Docker Image

```bash
docker build -t polling-frontend .
```

## Run Container

```bash
docker run -p 5173:5173 polling-frontend
```

---

# Author

Developed by Divesh

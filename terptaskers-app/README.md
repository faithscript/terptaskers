# Terp Taskers

A platform connecting College Park residents with UMD students for everyday tasks.

## Description

Terp Taskers is a web application that allows local residents to post everyday tasks and UMD students to claim and complete them. This MVP includes:

- Post a task with details (title, description, category, date/time, price)
- Browse and filter available tasks
- Claim tasks using a UMD email
- Simple, clean UI with UMD-inspired design

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- LocalStorage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm

### Installation

1. Clone the repository
2. Navigate to the project directory

```bash
cd terptaskers-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Features

- **Home Page**: Introduction to the platform with links to post or view tasks
- **Post Task**: Form to create a new task with various fields
- **Task Board**: View all tasks with filtering options (all, claimed, unclaimed)
- **Responsive Design**: Works on mobile and desktop devices

## Data Storage

All data is stored in the browser's LocalStorage under the key 'tasks'.

## Future Enhancements

- User authentication
- Task search functionality
- Categories filtering
- Rating system for task completion
- Payment integration

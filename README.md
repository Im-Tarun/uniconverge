# User Management Dashboard

A simple **React.js web application** built to demonstrate key front-end development concepts like **component-based architecture**, **state and props management**, **API integration**, **routing**, and **responsive UI design**.

---

## Overview

The **User Management Dashboard** allows users to:
- Fetch and view a list of users from a public API  
- Search users by name or email  
- View detailed information for each user  
- Add a new user locally (no backend required)

It’s a lightweight dashboard that simulates a real-world user management system.

---

## Features

### Home Page
- Displays a list of users fetched from the API  
- Search bar to filter users by **name or email**  
- Responsive card layout for clean UI  
- Click on a user card to view details  

### User Details Page
- Fetches detailed user information from API using user ID  
- Displays all major details (name, email, phone, company, website, address)  
- Includes a **Back** button to return to the home page  

### Add User Page
- Form with fields for **Name, Email, Phone, and Company**  
- Input validation  
- Adds new user locally using `localStorage`  
- Immediately updates the Home page with the newly added user  

---

## API Used

**Base URL:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Endpoints:
- `GET /users` → Fetch all users  
- `GET /users/:id` → Fetch a single user by ID  

No POST request needed — added users are stored locally.

---

## UI & Design

- Built using **Tailwind CSS** for modern responsive design  
- Works seamlessly across desktop and mobile devices  
- Clean, minimal layout with proper spacing  
- Includes loading and empty states  

---

## Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Frontend** | React 18+, Functional Components, Hooks |
| **Routing** | React Router v6 |
| **HTTP Client** | Axios |
| **Styling** | Tailwind CSS |
| **Data Storage** | LocalStorage (for added users) |

---

## Setup Instructions

### Clone the repository
```bash
git clone https://github.com/Im-Tarun/uniconverge.git
cd uniconverge
```

## Development 
```
npm install
npm run dev
```

## Production
```
npm run build
npm run preview
```
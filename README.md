<p align="center">
<img width="1000" height="500" alt="image" src="https://github.com/user-attachments/assets/8d495a75-a234-40b1-8210-384accf6eadd" />
</p>

# CommunityHub - React Advanced Project (Week 9)

## 📌 Overview
CommunityHub is a multi-page React application built with Vite and React Router. It demonstrates modern frontend development concepts including routing, API integration, reusable components, and state management.

The project simulates a simple community platform where users can browse posts, view details, and interact with content.

---

## 🚀 Live Demo
https://iyf-s10-week-09-solfegesam.vercel.app

---

## 🎯 Key Features

### 🧭 Routing (React Router)
- Multi-page navigation system
- Home, Posts, Post Details, About pages
- Dynamic routing for individual posts (`/posts/:id`)
- Layout-based routing with shared navigation

### 🌐 API Integration
- Fetch posts from JSONPlaceholder API
- Asynchronous data handling with `useEffect`
- Error handling for failed requests
- Loading states during data fetch

### ⚛️ React Concepts Used
- Functional components
- Hooks (`useState`, `useEffect`)
- Custom hooks (where applicable)
- Component composition
- Props drilling and state lifting

### 💡 User Features
- View list of posts
- Read individual post details
- Like posts (local state)
- Create posts (local state simulation)
- Basic search/filter functionality

---

## 🧱 Tech Stack
- React (Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS (custom theme system)

---

## 📁 Project Structure
```

src/
├── components/
│   ├── Layout/
│   ├── Post/
│   └── shared/
├── pages/
│   ├── Home.jsx
│   ├── Posts.jsx
│   ├── PostDetail.jsx
│   └── About.jsx
├── styles/
│   └── theme.css
├── App.jsx
└── main.jsx

````

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/Solfegesam/iyf-s10-week-09-Solfegesam.git

# Enter project folder
cd iyf-s10-week-09-Solfegesam

# Install dependencies
npm install

# Run development server
npm run dev
````

---

## 🧠 How It Works

1. App loads and initializes React Router
2. Home page renders as landing view
3. Posts page fetches data from API
4. Clicking a post opens dynamic route view
5. User interactions update local component state

---

## 📚 Learning Outcomes

This project demonstrates understanding of:

* React component architecture
* Client-side routing
* API-driven UI development
* State management with hooks
* Reusable UI structure
* Frontend deployment workflow (GitHub + Vercel)

---

## 🚀 Deployment

Deployed using Vercel with continuous integration from GitHub.

Every push to `main` triggers an automatic deployment.

---

## 👨‍💻 Author

Solfegesam

````



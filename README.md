

# CommunityHub - React Advanced Project

## Overview
CommunityHub is a React-based multi-page application built using React Router. It demonstrates advanced React concepts including hooks, data fetching, state management, and component design.

---

## Features

- Multi-page routing (React Router)
- Fetch posts from API (JSONPlaceholder)
- Create new posts (local state + persistence)
- Search and filter posts
- Like system per post
- Loading and error handling
- Persistent local storage for created posts
- Reusable components architecture

---

## Tech Stack

- React (Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS (inline + modular structure)

---

## Project Structure

src/
├── components/
│ ├── Layout/
│ ├── Post/
│ └── shared/
├── hooks/
├── pages/
├── services/
├── styles/

---

## Key Concepts Demonstrated

- useEffect for data fetching
- Custom hooks (usePosts)
- Controlled components (forms)
- Component reusability
- API abstraction layer
- Local storage persistence
- State lifting and management

---

## How to Run

```bash
npm install
npm run dev
````

---

## Author

Solfegesam

```

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 71d600d (Initialize Vite React app with CommunityHub features)

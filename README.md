<a href="https://antwi-lynq.vercel.app" target="_blank">
    <img src="public/Screenshot.png" alt="Project Banner">
</a>

# Lynq — Next-Gen Social Media Platform

A modern, high-performance social media application built with Next.js App Router, Postgres, Prisma, and Clerk.
Lynq focuses on speed, clean UI, smart caching, seamless authentication, and a developer-friendly architecture that scales.

This project demonstrates production-level patterns including server components, server actions, optimistic updates, and secure file handling.


##🚀 Tech Stack

Next.js 15+ (App Router)

React Server Components

TypeScript

PostgreSQL

Prisma ORM

Clerk Authentication

UploadThing for File Uploads

Tailwind CSS + Shadcn UI

Vercel Deployment

## ✨ Core Features

### 🔐 Authentication & Authorization

Secure login and signup via Clerk

Protect sensitive routes using middleware

Session-based access for feeds, profiles, and interactions

### 📱 Social Features

Create and share posts

Upload images (UploadThing)

Comment & interact with posts

Follow users & manage connections

Personalized feeds


### ⚡ Performance & UX

Optimistic UI updates for instant feedback

Server Actions for safe, server-only mutations

Smart caching with revalidation strategies

Shallow, partial, & dynamic rendering


### ⚙️ Developer Experience

Organised file structure using App Router conventions

Modular components (Client + Server)

Reusable loading and error boundaries (loading.tsx, error.tsx, not-found.tsx)

API routes built with Route Handlers

Full TypeScript safety across backend & frontend

<br />

## 📦 Getting Started

### Prerequisites
- Node.js >= 20
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/lync.git
# Navigate to the project folder
cd lync
```
```bash
# Install dependencies
npm install
# or
yarn install
```
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=
```

```bash
# Run the development server
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to view the project.

<br />

🌐 Live Demo

Check out the live deployment: 
[Lynq](https://antwi-lync.vercel.app)

<br />

```txt
📁 Project Structure
src/
 ├─ app/
 │   ├─ (public)/
 │   ├─ (auth)/
 │   ├─ api/
 │   │   └─ posts/
 │   │       └─ route.ts
 │   ├─ dashboard/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   ├─ loading.tsx
 │   ├─ error.tsx
 │   └─ not-found.tsx
 ├─ components/
 │   ├─ ui/
 │   └─ shared/
 ├─ lib/
 ├─ server/
 │   ├─ actions/
 │   └─ db.ts
 └─ styles/
```

<br />

📝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Make your changes

Submit a pull request

Please ensure code is clean, modular, and follows the existing structure.

<br />

👨‍💻 Author

Robert Antwi – Software engineer
[GitHub](https://github.com/antwirobert/) 
[LinkedIn](https://www.linkedin.com/in/robert-antwi-a0aab9277/)

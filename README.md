![Demo App](/public/screenshot-for-readme.png)

# Lynq — Next-Gen Social Media Platform

A modern, high-performance social media application built with Next.js App Router, Postgres, Prisma, and Clerk.
Lynq focuses on speed, clean UI, smart caching, seamless authentication, and a developer-friendly architecture that scales.

This project demonstrates production-level patterns including server components, server actions, optimistic updates, and secure file handling.

---

## 🚀 Tech Stack

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


## 📦 Getting Started

### Prerequisites
- Node.js >= 20
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/lynq.git

# Navigate to the project folder
cd tripcontrol

# Install dependencies
npm install
# or
yarn install


# Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=
```

# Run the app
npm run dev
# or
yarn dev

Visit http://localhost:3000


📝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Make your changes

Submit a pull request

Please ensure code is clean, modular, and follows the existing structure.


👨‍💻 Author

Robert Antwi – Software engineer
GitHub LinkedIn

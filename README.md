# Next.js Dashboard Assignment

## Author
Your Name Here

## Overview
A modern, responsive dashboard built with Next.js, Tailwind CSS, and NextAuth.js (Google OAuth). Features protected routes, a personalized greeting, and a visually appealing pizza orders display. Built as part of a Frontend AI Engineer assignment.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth.js (Google OAuth)
- **Deployment:** Vercel

## Features
- Google OAuth sign-in/sign-out
- Protected dashboard and pizza orders pages
- Responsive, modern UI with clean navigation
- Mock pizza orders displayed as cards with status badges
- Loading and error states handled gracefully

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Google OAuth Credentials
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create/select a project
- Enable the **Google People API**
- Configure the OAuth consent screen
- Create OAuth credentials (Web application)
- Add these redirect URIs:
  - `http://localhost:3000/api/auth/callback/google` (for local dev)
  - `https://your-vercel-app-url.vercel.app/api/auth/callback/google` (for production)
- Copy your **Client ID** and **Client Secret**

### 4. Configure Environment Variables
Create a `.env.local` file in the project root:
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-randomly-generated-secret
```
- Generate `NEXTAUTH_SECRET` with:
  ```sh
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- **Never commit your `.env.local` file!**

### 5. Run Locally
```sh
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 6. Deploy
- Push your code to GitHub
- Import your repo on [Vercel](https://vercel.com/)
- Set the same environment variables in Vercel dashboard (with `NEXTAUTH_URL` set to your deployed URL)
- Deploy!

## Assumptions & Challenges
- No backend database; pizza orders are hardcoded in the app
- Only Google OAuth is implemented for authentication
- Protected routes use a client-side session check for simplicity
- TypeScript is used for type safety and maintainability

## Third-Party Libraries
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)

## How to Improve with TypeScript
- All data models (e.g., pizza order) are typed for safety
- Components and hooks use TypeScript interfaces and types for better DX

## License
MIT

# Next.js Dashboard Assignment

## 🚀 Live Demo
[https://nextjs-dashboard-eta-bice-46.vercel.app/](https://nextjs-dashboard-eta-bice-46.vercel.app/)

## Overview
A modern, responsive dashboard built with Next.js, Tailwind CSS, and NextAuth.js (Google OAuth). Features protected routes, a personalized greeting, and a visually appealing pizza orders display. **Pizza orders are mock data and not persisted.**

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- NextAuth.js (Google OAuth)
- Deployed on Vercel

## Features
- Google OAuth authentication
- Protected dashboard and pizza orders pages
- Responsive, modern UI
- Mock pizza orders with status badges
- Graceful loading and error states

## Getting Started

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Set Up Google OAuth**
   - Create OAuth credentials in [Google Cloud Console](https://console.cloud.google.com/)
   - Add redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://<your-vercel-project>.vercel.app/api/auth/callback/google`
   - Copy your **Client ID** and **Client Secret**
4. **Configure Environment Variables**
   Create a `.env.local` file:
   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-randomly-generated-secret
   ```
   - Generate `NEXTAUTH_SECRET`:
     ```sh
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```
5. **Run Locally**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## Deployment
- Push to GitHub
- Import repo on [Vercel](https://vercel.com/)
- Set environment variables in Vercel (set `NEXTAUTH_URL` to `https://<your-vercel-project>.vercel.app`)
- Deploy!

## Notes
- No backend database; pizza orders are hardcoded
- Only Google OAuth is implemented
- TypeScript used for type safety

## License
MIT

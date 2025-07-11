"use client"
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";
import { motion } from "framer-motion";

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedPage>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center justify-center min-h-[60vh] text-center mx-4 sm:mx-auto bg-gradient-to-br from-slate-900/60 via-blue-900/60 to-blue-600/60 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden"
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#dots)" />
          </svg>
        </div>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-bold z-10"
        >
          Hello,
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 bg-gradient-to-r from-white via-blue-500 to-purple-500 text-transparent bg-clip-text z-10"
        >
          {session?.user?.name}!
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white-600 text-xl mt-4 z-10"
        >
          Welcome to your dashboard
        </motion.p>
      </motion.div>
    </ProtectedPage>
  );
}

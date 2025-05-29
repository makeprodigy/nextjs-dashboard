"use client"
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedPage>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center mx-4 sm:mx-auto">
        <span className="text-lg text-white">Hello,</span>
        <span className="text-3xl font-extrabold text-white mt-1">{session?.user?.name}!</span>
        <p className="text-white-600 text-lg mt-4">Welcome to your dashboard</p>
      </div>
    </ProtectedPage>
  );
}

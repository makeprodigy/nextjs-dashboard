"use client";
import { useSession } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";

export default function Home() {
  const { data: session } = useSession();

  return (
    <ProtectedPage>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Hello, {session?.user?.name}!</h1>
        <p className="text-gray-600 text-lg">Welcome to your dashboard.</p>
      </div>
    </ProtectedPage>
  );
}

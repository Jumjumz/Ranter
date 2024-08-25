"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 ">
          <h1 className=" font-mono text-3xl">You Are Logged In.</h1>
          <Link
            href="/"
            className=" w-44 h-16 rounded-2xl bg-red-500 font-sans text-xl flex items-center justify-center"
            onClick={() => {
              signOut(), redirect("/");
            }}
          >
            Log Out
          </Link>
        </div>
      </>
    );
  }
}

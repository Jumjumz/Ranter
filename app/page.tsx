import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=" flex flex-col flex-wrap justify-center">
        <Link
          href="/UserAuth"
          className=" w-44 h-16 rounded-2xl bg-green-500 font-sans text-xl flex items-center justify-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

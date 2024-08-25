import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Userpage() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  } else if (session) {
    redirect("/HomePage");
  }
}

import { getUserRole } from "../auth/actions/getUser";
import { redirect } from "next/navigation";

export default async function Boss() {
  const userRole = await getUserRole()
  if (userRole === "BOSS"){
    return (
      <div className="p-5 h-dvh">
        Hello Boss!
      </div>
    );
  } else {
    redirect("/auth/signin")
  }
}

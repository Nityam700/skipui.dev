import { Button } from "@/ui/Button";
import Link from "next/link";
import { getUserRole } from "../auth/actions/getUser";
import { redirect } from "next/navigation";

export default async function Boss() {
  const userRole = await getUserRole()
  if (userRole === "BOSS"){
    return (
      <div>
        <p>Boss page is under active development</p>
        <p>Only Users with Boss role can access this page</p>
        <Link href={"/"}>
          {" "}
          <Button type={"button"} style={""}>
            Return Home
          </Button>
        </Link>
      </div>
    );
  } else {
    redirect("/auth/signin")
  }
}

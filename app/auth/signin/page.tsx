import { Button } from "@/ui/Button";
import Image from "next/image";
import {
  authGithub,
  authGoogle,
  authSignOut,
} from "@/app/auth/actions/authAction";
import { auth } from "@/app/auth/actions/auth";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  return (
    <div className="flex justify-center items-center h-dvh gap-4 flex-col">
      {!session && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center">Sign In to Skipui.dev</h1>
          <form action={authGithub}>
            <Button
              type={"submit"}
              style={"flex gap-3 w-96 justify-center items-center"}
            >
              <Image
                src={"/icons/github.svg"}
                alt="Github"
                height={40}
                width={40}
              />
              Continue with Github
            </Button>
          </form>
          <form action={authGoogle}>
            <Button
              type={"submit"}
              style={"flex gap-3 w-96 justify-center items-center"}
            >
              <Image
                src={"/icons/google.svg"}
                alt="Github"
                height={40}
                width={40}
              />
              Continue with Google
            </Button>
          </form>
          <Link href={"/"} className=" text-center">
            Back
          </Link>
        </div>
      )}
      {session && (
        <form action={authSignOut}>
          <Button
            type={"submit"}
            style={"flex gap-3 w-96 justify-center items-center"}
          >
            <Image
              src={"/icons/logout.svg"}
              alt="Logout"
              height={40}
              width={40}
            />
            Logout
          </Button>
        </form>
      )}
      {session?.user?.name}
    </div>
  );
}

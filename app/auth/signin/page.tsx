import { Button } from "@/ui/Button";
import Image from "next/image";
import { authGithub, authGoogle, authSignOut } from "@/app/auth/actions/authAction";
import { auth } from "@/app/auth/actions/auth";

export default async function page() {
    const session = await auth();
    console.log(session);
    
  return (
    <div className="flex justify-center items-center h-dvh gap-4 flex-col">
        <h1>Sign In to Skipui.dev</h1>
        <form action={authGithub}>
            <Button type={"submit"} style={"flex gap-3 w-96 justify-center items-center"}><Image src={'/icons/github.svg'} alt="Github" height={40} width={40}/>Continue with Github</Button>
        </form>
        <form action={authGoogle}>
            <Button type={"submit"} style={"flex gap-3 w-96 justify-center items-center"}><Image src={'/icons/google.svg'} alt="Github" height={40} width={40}/>Continue with Google</Button>
        </form>
        <form action={authSignOut}>
        <Button type={"submit"} style={"flex gap-3 w-96 justify-center items-center"}><Image src={'/icons/logout.svg'} alt="Logout" height={40} width={40}/>Logout</Button>
        </form>
        {session?.user?.name}
    </div>
  )
}

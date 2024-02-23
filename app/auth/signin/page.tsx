import { Button } from "@/ui/Button";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-center items-center h-dvh gap-4 flex-col">
        <h1>Sign In to Skipui.dev</h1>
        <form>
            <Button type={"submit"} style={"flex gap-3 w-96 justify-center items-center"}><Image src={'/icons/github.svg'} alt="Github" height={40} width={40}/>Continue with Github</Button>
        </form>
        <form>
            <Button type={"submit"} style={"flex gap-3 w-96 justify-center items-center"}><Image src={'/icons/google.svg'} alt="Github" height={40} width={40}/>Continue with Google</Button>
        </form>
    </div>
  )
}

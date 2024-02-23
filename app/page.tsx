import { Button } from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-dvh flex-col gap-4">
      <p>The app is under active development</p>
      <p>Currently working on :</p>
      <Link href={'/auth/signin'}>
      <Button type={"submit"} style={"w-[400px]"}>Auth Page</Button>
      </Link>
      <Link href={'/boss'}>
      <Button type={"submit"} style={"w-[400px]"}>Boss Page</Button>
      </Link>
    </main>
  );
}

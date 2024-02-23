import { Button } from "@/ui/Button";
import Link from "next/link";

export default function Boss() {
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
}

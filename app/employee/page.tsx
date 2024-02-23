import { Button } from "@/ui/Button";
import Link from "next/link";

export default function Employee() {
  return (
    <div>
      <p>Employee page is under active development</p>
      <p>Only Users with employes role can access this page</p>
      <Link href={"/"}>
        {" "}
        <Button type={"button"} style={""}>
          Return Home
        </Button>
      </Link>
    </div>
  );
}

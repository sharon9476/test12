import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton />
      <div className="space-x-4">
        <Button asChild>
          <Link href={"/sign-up"}>Sign Up</Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
      </div>
    </div>
  );
}

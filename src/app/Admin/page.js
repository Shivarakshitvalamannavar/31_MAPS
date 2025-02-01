"use client";  // Required for using hooks in Next.js App Router
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
export default function Home() {
  const router=useRouter();
  return (
    <div >
      <p>This is the admin page mate lol </p>
      <Button text={"Verify"} onClick={()=>router.push("/Signup")}/>
    </div>
  );
}

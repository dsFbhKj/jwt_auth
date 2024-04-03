import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>Welcome, click to <strong><Link href={'/login'}>Login</Link></strong></h1>
    </>
  );
}
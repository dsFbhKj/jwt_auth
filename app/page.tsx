import Link from "next/link";
import { redirect } from "next/navigation";
import {getSession} from './lib'
import './styles/Home.module.css';

export default async function Home() {
  const session = await getSession();
  let user = session?.user
  if(!user){redirect('/login')}
  return (
    <section>
      <h1>Welcome To The Site</h1>
      <Link href={"/profile"}><strong>View Profile</strong></Link>
    </section>
  )
}
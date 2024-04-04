import Link from "next/link";
import { redirect } from "next/navigation";
import {getSession} from './lib'

export default async function Home() {
  const session = await getSession();
  let user = session?.user
  if(!user){redirect('/login')}
  return (
    <section>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://live.staticflickr.com/7459/27982766805_688d862360_c.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome To The Site</h1>
        <p className="mb-5">Through this site I integrated user authentication functionality using if statements and environmental variables to ensure secure access to user profiles.Enhance the user experience by providing intuitive navigation between pages.</p>
        <button className="btn btn-primary"><Link href={"/profile"}><strong>View Profile</strong></Link></button>
      </div>
    </div>
  </div>
    </section>
  )
}
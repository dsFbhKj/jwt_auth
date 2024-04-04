import { redirect } from "next/navigation";
import {getSession, logout} from '../lib'
import '../styles/Main.module.css';

export default async function Profile() {
  const session = await getSession();
  let user = session?.user
//   console.log(session)
  console.log(user)
  if(!user){redirect('/')}
  return (
    <section>
      <h1>Hello {user.name}</h1>
      <h3>User Information</h3>
      <div>
        <h4>Email: {user.email}</h4>
      </div>
      <form action={async (formdata)=>{
        'use server'
        await logout()
        redirect('/')
      }}>
        
        <button type="submit">Logout</button>
      </form>
      {/* <pre>{JSON.stringify(session,null,2)}</pre>
      <pre>{user.name `1`}</pre> */}
    </section>
  )
}
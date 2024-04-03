import { redirect } from "next/navigation";
import {getSession, logout} from '../lib'

export default async function Profile() {
  const session = await getSession();
  let user = session?.user
//   console.log(session)
  console.log(user)
  return (
    <section>
      <h1>Hello User</h1>
      <form action={async (formdata)=>{
        'use server'
        await logout()
        redirect('/')
      }}>
        
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session,null,2)}</pre>
      <pre>{user.name `1`}</pre>
    </section>
  )
}
import { redirect } from "next/navigation";
import {getSession, login, logout} from '../lib'

export default async function Login() {
  const session = await getSession();
  return (
    <section>
      <form action={async (formdata)=>{
        'use server'
        await login(formdata)
        let user = session?.user
        if({user}){
          redirect('/')
        }else{
          alert('Login failed')
        }
      }}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Login </button>
      </form>

      <form action={async (formdata)=>{
        'use server'
        await logout()
        redirect('/login')
      }}>
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session,null,2)}</pre>
    </section>
  );
}
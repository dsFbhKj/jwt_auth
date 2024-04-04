import { redirect } from "next/navigation";
import {getSession, login} from '../lib'
import '../styles/Login.module.css';

export default async function Login() {
  const session = await getSession();
  return (
    <section>
      <form action={async (formdata)=>{
        'use server'
        await login(formdata)
        let user = session?.user
        if(user){
          redirect('/')
        }else {console.log('Login failed')}
      }}>
        <input type="email" name="email" id="email" autoComplete="email"/>
        <input type="password" name="password" id="password" autoComplete="password"/>
        <button type="submit">Login </button>
      </form>

      {/* <pre>{JSON.stringify(session,null,2)}</pre> */}
    </section>
  );
}
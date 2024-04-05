import { redirect } from "next/navigation";
import {getSession, logout} from '../lib';
import Image from 'next/image'
import profile from '../../public/profile.png'

export default async function Profile() {
  const session = await getSession();
  let user = session?.user
//   console.log(session)
  console.log(user)
  if(!user){redirect('/')}
  return (
    <section>
      <div className="card card-side bg-base-100 shadow-xl">
      <figure><Image src={profile} width={50}
      height={50} alt="User"/></figure>
      <div className="card-body">
        <h2 className="card-title">Hello {user.name}</h2>
        <h5>User Information</h5>
        <h4>Email: {user.email}</h4>
        <div className="card-actions justify-end">
          <form action={async (formdata)=>{
            'use server'
            await logout()
            redirect('/')
          }}>
          <button className="btn btn-primary">Logout</button>

          </form>
        </div>
      </div>
    </div>
    </section>
  )
}
// Import the script file
import React from 'react';
import { redirect } from "next/navigation";
import { getSession, login } from '../lib';
import Info from "./components/Info";

export default async function Login() {
  const session = await getSession();
  return (
    <section>
      <form action={async (formdata) => {
        'use server'
        await login(formdata)
        let user = session?.user
        if (user) {
          redirect('/')
        } else {
          console.log('Login failed')
        }
      }}>
        <Info />
      </form>
    </section>
  );
}
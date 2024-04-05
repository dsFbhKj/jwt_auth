// Import the script file
import React from 'react';
import { redirect } from "next/navigation";
import { getSession, login } from '../lib';
import Info from "./components/Info";

export default async function Login() {
  const session = await getSession();
  const handleForm = async (formdata: FormData) => {
  'use server';
  await login(formdata);
  const user = session?.user;
  if (user) {
    redirect('/');
  } else {
    console.log('Login failed');
  }
};
  return (
    <section className='flex justify-center'>
      <form action={handleForm}>
        <Info />
      </form>
    </section>
  );
}
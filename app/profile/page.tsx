import {getSession} from '../lib'

export default async function Profile() {
  const session = await getSession();
  return (
    <section>
      {/* <h1>Welcome{user}</h1> */}
      <h1>Hello ___</h1>
      <pre>{JSON.stringify(session,null,2)}</pre>
    </section>
  );
}
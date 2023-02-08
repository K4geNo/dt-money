import Head from 'next/head'
import { signOut } from 'next-auth/react'

export default function App() {
    return (
        <>
            <Head>
                <title>App | DT Money</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="A simple project to manage your money"
                />
            </Head>

            <h1>Login</h1>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    )
}

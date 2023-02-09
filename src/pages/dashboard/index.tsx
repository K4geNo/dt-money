import { getSession, signOut } from 'next-auth/react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'

export default function Dashboard() {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}

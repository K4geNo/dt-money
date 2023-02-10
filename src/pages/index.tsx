import { getSession, signIn } from 'next-auth/react'

import { GetServerSideProps } from 'next'
import { GithubLogo } from 'phosphor-react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/Logo.svg'

export default function SignIn() {
    async function handleSignIn() {
        await signIn('github')
    }

    return (
        <>
            <Head>
                <title>Sign in | DT Money</title>
            </Head>

            <div className="flex h-screen w-full flex-col items-center justify-center">
                <div className="flex h-full max-h-[25rem] w-full max-w-sm flex-col items-center justify-center gap-10 rounded-lg bg-zinc-900">
                    <Image
                        src={logoImg}
                        alt="Logo"
                        className="border-spacing-y-16 border-b border-zinc-500"
                    />

                    <p className="max-w-xs text-center">
                        Faça login com seu Github para começar a usar o sistema
                    </p>

                    <button
                        className="flex items-center gap-3 rounded bg-zinc-700 py-3 px-4 font-bold transition-colors hover:bg-zinc-800"
                        onClick={handleSignIn}
                    >
                        <GithubLogo size={24} />
                        Login com Github
                    </button>

                    <p className="max-w-xs text-center text-xs leading-5 text-zinc-500">
                        Este é um projeto open source, você pode ver o código
                        fonte no{' '}
                        <Link
                            href="https://github.com/K4geNo/dt-money"
                            target="_blank"
                            passHref
                            className=" text-zinc-500 underline transition-colors hover:text-zinc-400"
                        >
                            Github
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req })

    if (session)
        return {
            redirect: {
                destination: '/transactions',
                permanent: false,
            },
        }

    return {
        props: {},
    }
}

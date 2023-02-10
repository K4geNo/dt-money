import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Summary } from '@/components/Summary'
import { getSession } from 'next-auth/react'

type price = 'income' | 'outcome'

export default function Transactions() {
    const price: price = 'income'

    return (
        <>
            <Head>
                <title>Transactions | DT Money</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="A simple project to manage your money"
                />
            </Head>

            <div className="flex flex-col">
                <Summary />

                <div className="mx-auto mt-16 mb-0 w-full">
                    <table className="mt-6 w-full border-separate border-spacing-x-0 border-spacing-y-2">
                        <tbody>
                            <tr>
                                <td width="50%" className="transaction-td">
                                    Desenvolvimento de site
                                </td>
                                <td className="transaction-td">
                                    <span
                                        className={
                                            price === 'income'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }
                                    >
                                        R$ 12.000,00
                                    </span>
                                </td>
                                <td className="transaction-td">Venda</td>
                                <td className="transaction-td">13/04/2022</td>
                            </tr>
                            <tr>
                                <td width="50%" className="transaction-td">
                                    Hambúrguer
                                </td>
                                <td className="transaction-td">
                                    <span
                                        className={
                                            price !== 'income'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }
                                    >
                                        - R$ 59,00
                                    </span>
                                </td>
                                <td className="transaction-td">Alimentação</td>
                                <td className="transaction-td">13/04/2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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

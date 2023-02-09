import * as Separator from '@radix-ui/react-separator'

import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import { useSession } from 'next-auth/react'

export function Header() {
    const { data } = useSession()

    return (
        <header className="h-56 w-full bg-zinc-900 pt-10">
            <div className="mx-auto flex w-full max-w-6xl justify-between">
                <Image src={logo} alt="" />

                <div className="flex items-center">
                    <button className="rounded-md bg-green-700 py-3 px-5 font-bold transition-colors hover:bg-green-600">
                        Nova transação
                    </button>

                    <Separator.Root
                        className="mx-8 h-8 w-px bg-white"
                        orientation="vertical"
                        decorative
                    />

                    <div className="flex items-center gap-3 ">
                        <p>{data?.user?.name}</p>
                        <Image
                            src={data?.user?.image}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

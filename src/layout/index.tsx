import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    const { asPath } = useRouter()

    return (
        <main className="flex h-screen w-screen bg-[#202024] text-white">
            <div className="flex w-full flex-col items-center">
                {asPath !== '/' && <Header />}
                <div className="mx-auto flex w-full max-w-6xl flex-col">
                    {children}
                </div>
            </div>
        </main>
    )
}

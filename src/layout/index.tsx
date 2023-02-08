interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    return (
        <main className="flex h-screen w-screen bg-zinc-800 text-white">
            <div className="flex w-screen flex-col">{children}</div>
        </main>
    )
}

import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
    return (
        <form className="flex gap-4">
            <input
                type="text"
                className="flex-1 rounded-lg bg-zinc-900 p-4 text-zinc-300 outline-none transition-all placeholder:text-zinc-500 focus:outline-green-500"
                placeholder="Busque por transações"
            />

            <button
                className="flex items-center gap-3 rounded-lg border border-green-500 bg-transparent p-4 font-bold text-green-500 transition-all hover:border-green-700 hover:bg-green-700 hover:text-white"
                type="submit"
            >
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </form>
    )
}

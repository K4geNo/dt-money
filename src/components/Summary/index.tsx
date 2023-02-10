import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
    return (
        <div className="-mt-20 grid w-full grid-cols-3 gap-8">
            <div className="rounded-lg bg-[#323238] py-6 px-8 shadow-md">
                <header className="flex w-full items-center justify-between">
                    <span className="text-[#C4C4CC]">Entradas</span>

                    <ArrowCircleUp size={32} className="text-green-500" />
                </header>

                <strong className="mt-3 block text-[2rem] font-bold">
                    R$ 17.400,00
                </strong>
            </div>

            <div className="rounded-lg bg-[#323238] py-6 px-8 shadow-md">
                <div className="flex w-full items-center justify-between pb-3">
                    <span className="text-[#C4C4CC]">Saídas</span>

                    <ArrowCircleDown size={32} className="text-red-500" />
                </div>

                <strong className="text-[2rem] font-bold text-red-500">
                    - R$ 1.259,00
                </strong>
            </div>

            <div className="rounded-lg bg-green-700 py-6 px-8 shadow-md">
                <div className="flex w-full items-center justify-between pb-3">
                    <span className="text-[#C4C4CC]">Total</span>

                    <CurrencyDollar size={32} className="text-white" />
                </div>

                <strong className="text-[2rem] font-bold">R$ 16.141,00</strong>
            </div>
        </div>
    )
}

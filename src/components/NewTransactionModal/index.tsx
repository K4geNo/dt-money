import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import clsx from 'clsx'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black bg-opacity-50" />

            <Dialog.Content className="fixed top-2/4 left-2/4 min-w-[32rem] -translate-x-2/4 -translate-y-2/4 rounded-lg bg-[#202024] py-10 px-12">
                <Dialog.Title className="text-2xl font-bold text-white">
                    Nova transação
                </Dialog.Title>

                <form className="mt-8 flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        className={clsx(
                            'rounded-lg bg-[#121214] p-4 text-zinc-300 outline-none transition-all',
                            'placeholder:text-zinc-500 focus:outline-green-500'
                        )}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        className={clsx(
                            'rounded-lg bg-[#121214] p-4 text-zinc-300 outline-none transition-all',
                            'placeholder:text-zinc-500 focus:outline-green-500'
                        )}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        className={clsx(
                            'rounded-lg bg-[#121214] p-4 text-zinc-300 outline-none transition-all',
                            'placeholder:text-zinc-500 focus:outline-green-500'
                        )}
                    />

                    <RadioGroup.Root className="mt-2 grid grid-cols-2 gap-4">
                        <RadioGroup.Item
                            value="income"
                            className={clsx(
                                'flex items-center justify-center gap-2 rounded-lg bg-[#29292E] p-4 text-zinc-300',
                                'radix-state-checked:bg-green-700 radix-state-checked:text-white radix-state-unchecked:hover:bg-[#323238]'
                            )}
                        >
                            <ArrowCircleUp size={24} className="text-white" />
                            Entrada
                        </RadioGroup.Item>

                        <RadioGroup.Item
                            value="outcome"
                            className={clsx(
                                'flex items-center justify-center gap-2 rounded-lg bg-[#29292E] p-4 text-zinc-300',
                                'radix-state-checked:bg-red-700 radix-state-checked:text-white radix-state-unchecked:hover:bg-[#323238]'
                            )}
                        >
                            <ArrowCircleDown size={24} className="text-white" />
                            Saída
                        </RadioGroup.Item>
                    </RadioGroup.Root>

                    <button
                        type="submit"
                        className="mt-6 h-[3.625rem] rounded-lg border-0 bg-green-700 py-0 px-5 font-bold text-white transition-all hover:bg-green-600"
                    >
                        Cadastrar
                    </button>
                </form>

                <Dialog.Close className="absolute top-6 right-6 leading-none text-zinc-500">
                    <X size={24} />
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    )
}

import React from "react"


export default function App() {
  return (
        <main className="bg-slate-900 h-screen">
            <header className="flex items-center justify-between p-10">
                <h1 className="text-3xl">Lucas Capella</h1>
                <nav>
                    <ul className="flex items-center gap-10 pr-10">
                        <li>
                            <a href="#" className="relative text-zinc-200 hover:text-blue-400 after:w-0 after:h-0.5 after:bg-blue-400 after:absolute after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:ease-in">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="relative text-zinc-200 hover:text-blue-400 after:w-0 after:h-0.5 after:bg-blue-400 after:absolute after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:ease-in">Experiência</a>
                        </li>
                        <li>
                            <a href="#" className="relative text-zinc-200 hover:text-blue-400 after:w-0 after:h-0.5 after:bg-blue-400 after:absolute after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:ease-in">Projetos</a>
                        </li>
                        <li>
                            <a href="#" className="relative text-zinc-200 hover:text-blue-400 after:w-0 after:h-0.5 after:bg-blue-400 after:absolute after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:ease-in">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}
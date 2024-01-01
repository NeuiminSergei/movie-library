'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="py-2 bg-neutral-800">
      <div className="container mx-auto px-5">
        <nav className="flex gap-10">
          <Link href={"/"} className="hover:text-emerald-400 ease-in-out duration-200">Главная</Link>
          <Link href={"/1"} className="hover:text-emerald-400 ease-in-out duration-200">Список фильмов</Link>
          <Link href={"/favorites"} className="hover:text-emerald-400 ease-in-out duration-200">Избранное</Link>
        </nav>
      </div>
    </header>
  )
}
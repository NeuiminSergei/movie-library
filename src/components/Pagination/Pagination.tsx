'use client'

import films from "@/store/films"
import { observer } from "mobx-react-lite"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default observer(function Pagination() {
  const totalPages = films.pages
  const pageArr: number[] = []
  for (let i = 0; i < totalPages; i++) {
    pageArr.push(i + 1)
  }
  const pathname = usePathname()
  return (
    <div className="flex gap-2 justify-center col-auto sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5">
      {pageArr.map(page =>
        <Link href={`/${page}`}
          className={`border w-7 h-8 flex justify-center items-center ${pathname === `/${page}` ? 'text-emerald-400 border-emerald-400' : ' border-slate-50'} `}
          key={page}>
          {page}
        </Link>
      )}
    </div>
  )
})
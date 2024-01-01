'use client'

import { IFilm } from "@/types/IFilm";
import Link from "next/link";

export default function FilmCard({ nameRu, nameEn, nameOriginal, posterUrlPreview, year, ratingKinopoisk, kinopoiskId }: IFilm) {

  let title
  if (nameRu) {
    title = nameRu
  } else if (nameEn) {
    title = nameEn
  } else {
    title = nameOriginal
  }

  return (
    <Link href={`/film/${kinopoiskId}`} className="flex flex-col bg-neutral-800 p-8 rounded-md hover:bg-neutral-700 ease-in-out duration-300 items-center">
      <img className="w-52 h-80 mb-2 self-center" src={posterUrlPreview} alt="" />
      <div className="w-52 md:max-w-full">
        <p className="text-lg truncate">{title}</p>
        <div className="flex justify-between">
          <span>{year}</span>
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" /></svg>
            <span>{ratingKinopoisk}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
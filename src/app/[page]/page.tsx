'use client'

import FilmCard from "@/components/FilmCard/FilmCard"
import Pagination from "@/components/Pagination/Pagination"
import films from "@/store/films"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"

interface Props {
  params: {
    page: number
  }
}

export default observer(function Page({ params: { page } }: Props) {
  useEffect(() => {
    films.fetchFilms(page)
  }, [])
  return (
    <section className="py-16">
      {
        films.isLoading
          ? <div className="container mx-auto flex justify-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
          : <div className="container mx-auto px-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <h1 className="text-3xl font-bold col-auto sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5">На данной странице отображены фильмы, отсортированные по рейтингу</h1>
            {films.films.map(film => <FilmCard
              kinopoiskId={film.kinopoiskId}
              nameRu={film.nameRu}
              nameEn={film.nameEn}
              nameOriginal={film.nameOriginal}
              posterUrl={film.posterUrl}
              posterUrlPreview={film.posterUrlPreview}
              year={film.year}
              type={film.type}
              ratingKinopoisk={film.ratingKinopoisk}
              genres={film.genres}
              countries={film.countries}
              shortDescription={film.shortDescription}
              favorites={false}
              key={film.kinopoiskId}
            />)}
            <Pagination />
          </div>
      }
    </section>
  )
})
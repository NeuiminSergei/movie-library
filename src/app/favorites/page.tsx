'use client'

import FilmCard from "@/components/FilmCard/FilmCard";
import films from "@/store/films";

export default function Favorites() {

  return (
    <section className="py-16">
      {
        films.isLoading
          ? <div className="container mx-auto flex justify-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
          : <div className="container mx-auto px-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <h1 className="text-3xl font-bold col-auto sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5">Избранное</h1>
            {films.favoritesFilms.map(film => <FilmCard
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
              key={`${film.kinopoiskId + 1}`}
            />)}
          </div>
      }
    </section>
  )
}
'use client'

import films from "@/store/films"
import { IFilm } from "@/types/IFilm"
import axios from "axios"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"

interface Props {
  params: {
    kinopoiskid: string
  }
}

export default observer(function Film({ params: { kinopoiskid } }: Props) {
  const [data, setData] = useState<IFilm>()
  const [isFavorite, setIsFavorites] = useState<boolean>(false)

  async function fetchFilm() {
    const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskid}`, {
      headers: {
        'X-API-KEY': 'ef06d017-50f9-40ce-a979-346cef9789e3',
        'Content-Type': 'application/json',
      },
    })
    const film = films.checkFavorites(response.data.kinopoiskId)
    if (film) {
      setIsFavorites(true)
    }
    setData(response.data)
  }

  function addFavorites() {
    if (data) {
      films.setFavoritesFilm(data)
      setIsFavorites(true)
    }
  }

  function removeFavorites() {
    if (data) {
      films.removeFavorites(data.kinopoiskId)
      setIsFavorites(false)
    }
  }

  useEffect(() => {
    fetchFilm()
  }, [])

  let title

  if (data?.nameRu) {
    title = data.nameRu
  } else if (data?.nameEn) {
    title = data.nameEn
  } else {
    title = data?.nameOriginal
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        {
          films.isLoading
            ? <div className="container mx-auto flex justify-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
            : <div className="flex gap-16 flex-col sm:flex-row">
              {data &&
                <>
                  <div>
                    <img className="h-80 w-52 mb-5" src={data.posterUrl} alt="" />
                    {
                      isFavorite
                        ? <button onClick={() => removeFavorites()} className="border border-red-900 text-red-900 flex justify-center w-full px-4 py-2 ease-in-out duration-300 hover:bg-red-900 hover:text-black">Удалить из избранного</button>
                        : <button onClick={() => addFavorites()} className="border border-slate-50 flex justify-center w-full px-4 py-2 ease-in-out duration-300 hover:bg-slate-50 hover:text-black">Добавить в избранное</button>
                    }
                  </div>
                  <div>
                    <h1 className="text-6xl mb-5">{title}</h1>
                    <p className="text-2xl mb-2">О фильме:</p>
                    <p>Год производства: {data.year}</p>
                    {data.countries.map(country => <p key={data.kinopoiskId}>Страна:{country.country}</p>)}
                    {data.genres.map(genre => <p key={data.kinopoiskId}>Жанр: {genre.genre}</p>)}
                    {
                      data.shortDescription &&
                      <p>Описание: {data.shortDescription}</p>
                    }
                  </div>
                </>
              }
            </div>
        }
      </div>
    </section>
  )
})
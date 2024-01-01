import { IFilm } from "@/types/IFilm"
import axios from "axios"
import { makeAutoObservable } from "mobx"

class Films {
  films = <IFilm[]>[]
  favoritesFilms = <IFilm[]>[]
  pages: number = 0
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setLoading() {
    this.isLoading = !this.isLoading
  }

  async fetchFilms(page: number) {
    this.setLoading()
    const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      headers: {
        'X-API-KEY': 'ef06d017-50f9-40ce-a979-346cef9789e3',
        'Content-Type': 'application/json',
      },
      params: {
        page: page
      }
    })
    this.films = response.data.items
    this.pages = response.data.totalPages
    this.setLoading()
  }

  setFavoritesFilm(film: IFilm) {
    film.favorites = true
    this.favoritesFilms = [...this.favoritesFilms, film]
  }

  checkFavorites(kinopoiskId: number) {
    return this.favoritesFilms.find(film => film.kinopoiskId === kinopoiskId)
  }

  removeFavorites(kinopoiskId: number) {
    this.favoritesFilms = this.favoritesFilms.filter(film => film.kinopoiskId !== kinopoiskId)
  }
}

export default new Films()
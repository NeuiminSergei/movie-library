export interface IFilm {
  kinopoiskId: number
  nameRu: string
  nameEn: string
  nameOriginal: string
  posterUrl: string
  posterUrlPreview: string
  year: number
  type: string
  ratingKinopoisk: number
  shortDescription: string
  favorites: boolean
  genres: [
    {
      genre: string
    }
  ]
  countries: [
    {
      country: string
    }
  ]
}
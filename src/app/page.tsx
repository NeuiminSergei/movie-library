'use client'

export default function Home() {

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <p className="text-2xl font-bold mb-2">Стек: Next js, TypeScript, MobX, Axios, Tailwind</p>
        <p className="text-xl mb-10">Проект находится в разработке.</p>
        <p className="text-xl mb-4">В настоящее время реализован функционал:</p>
        <p>Постраничный вывод фильмов, в качестве API было использованно неофициальное <a target="_blank" className="text-emerald-400" href="https://kinopoiskapiunofficial.tech/">API кинопоиска</a></p>
        <p>Детальная страница для каждого фильма</p>
        <p>Возможность добавить/удалить фильм из избранного</p>
      </div>
    </section>
  )
}

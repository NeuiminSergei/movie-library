import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'movie library',
  description: 'Movie tracking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className='bg-neutral-900 text-slate-50'>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

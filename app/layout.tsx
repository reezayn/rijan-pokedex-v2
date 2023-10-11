import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ultra Pokedex',
  description:
    'The most modern and unique pokedex you can find on the Internet. Has all your favorite pokemons and their stats. Browse through all your favorite pokemons in this ultra pokedex. Made with love by yours truly, Rijan Shrestha.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-[#0e0e0e]">{children}</div>
      </body>
    </html>
  )
}

import Image from 'next/image'
import Link from 'next/link'

import ClientSideRoute from '@/components/ClientSideRoute'
import PaginationControls from '@/components/PaginationControls'
import PokeCard from '@/components/PokeCard'

import { BsSearch } from 'react-icons/bs'

import Logo from '@/public/logo.png'
import OldLogo from '@/public/oldLogo.png'

export default async function PokemonPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const res = await fetch(
    `https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json`,
    { cache: 'force-cache' }
  )
  const data = await res.json()

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '9'

  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...

  const entries = data.slice(start, end)

  return (
    <>
      <div className="h-28 bg-transparent flex items-center justify-between">
        <div>
          <Link href="/pokemon" className="absolute my-5 mx-10 top-0 left-0">
            <Image
              src={Logo}
              alt="Rijans Pokedex"
              className="z-[99] h-20 w-20"
            />
          </Link>
        </div>
        {/* <div>
          <Image
            src={OldLogo}
            alt="Rijans Pokedex"
            className="z-[99] h-20 w-96 ml-20 hidden xl:flex"
          />
        </div> */}
        <div>
          <Link
            href="#"
            className="h-28 w-28 text-2xl flex items-center justify-center"
          >
            <BsSearch />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-32">
          {entries.map((pokemon: Pokemon, index: number) => (
            <ClientSideRoute
              key={pokemon.name.english}
              route={`/pokemon/${pokemon.id}`}
            >
              <PokeCard pokemon={pokemon} />
            </ClientSideRoute>
          ))}
        </div>
        <PaginationControls
          hasNextPage={end < data.length}
          hasPrevPage={start > 0}
        />
      </div>
    </>
  )
}

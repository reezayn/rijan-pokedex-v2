import Layout from '@/components/Layout'
import PokemonStatsSection from '@/components/PokemonStatsSection'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/logo.png'
import { emoji } from '@/constants'

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 604800 // Revalidates this page every 'x' seconds where x is the value after equals to sign

export async function generateStaticParams() {
  const res = await fetch(
    `https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json`
  )
  const data = await res.json()
  const slugRoutes = data.map((pokemon: Pokemon, index: number) =>
    pokemon.id.toString()
  )
  return slugRoutes.map((slug: string) => ({ slug }))
}

const PokemonPage = async ({ params: { slug } }: Props) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/reezayn/pokemon-data.json/master/pokedex.json`,
    { cache: 'force-cache' }
  )
  const data = await res.json()
  return (
    <div className="flex flex-col h-screen items-center justify-center text-white">
      <Link
        href="/pokemon"
        className="absolute m-3 lg:my-5 lg:mx-10 top-0 left-0"
      >
        <Image
          src={Logo}
          alt="Rijans Pokedex"
          className="z-[99] h-14 w-14 xl:h-20 xl:w-20"
        />
      </Link>
      {data.map((pokemon: Pokemon, index: number) => {
        if (
          parseInt(slug) === index + 1 ||
          slug.toUpperCase() === pokemon.name.english.toUpperCase()
        ) {
          const type = pokemon.type[0].toLowerCase() as PokemonType
          const type2 = pokemon?.type[1]?.toLowerCase() as PokemonType

          return (
            <div key={index} className="w-full">
              <Layout title={pokemon.name.english} type={type}>
                <div className="min-h-screen flex flex-col items-center justify-center lg:flex-row w-full">
                  <div className="relative flex w-full lg:w-[40%] justify-center z-10 pl-10 ">
                    <div className="absolute text-[123px] mt-16 xl:mt-0 xl:text-[234px] z-10 text-gray-600 text-opacity-20 leading-none font-black pointer-events-none">
                      #{pokemon.id}
                    </div>
                    <Image
                      className="z-20 h-60 w-60 sm:h-80 sm:w-80 mt-56 xl:hover:scale-125 duration-500"
                      src={pokemon.image.hires}
                      alt={pokemon.name.english}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 mt-0 md:mt-5">
                    <div id="nameAndHeightWeight" className="flex flex-col">
                      <div className="flex flex-row">
                        <div className="text-5xl sm:text-7xl md:text-9xl mx-2 flex items-center justify-center">
                          {emoji[type]}
                        </div>
                        <div className="flex flex-col mx-3">
                          <h5 className="text-base font-bold text-gray-200">
                            {type.toUpperCase()} {' | '} {type2?.toUpperCase()}
                          </h5>
                          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 ">
                            {pokemon.name.english}
                          </h1>
                          <h1 className="text-4xl font-extrabold text-gray-100">
                            {pokemon.name.japanese}
                          </h1>
                        </div>
                      </div>
                      <div className="px-6 mt-3 text-gray-200">
                        {pokemon.description}
                      </div>
                      <div className="px-6 text-gray-100 flex flex-row">
                        <div className="w-1/2 font-bold text-lg">
                          <p className="mr-1">Species </p>
                          <p className="mr-1">Height </p>
                          <p className="mr-1">Weight </p>
                          <p className="mr-1">Ability </p>
                        </div>
                        <div className="w-1/2 text-lg text-right">
                          <p>{pokemon.species}</p>
                          <p>{pokemon.profile.height}</p>
                          <p>{pokemon.profile.weight}</p>
                          <p>{pokemon.profile.ability[0][0]}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      id="Stats"
                      className={
                        'base' in pokemon === false
                          ? 'hidden'
                          : 'flex flex-col md:flex-row text-white font-bold'
                      }
                    >
                      <div className="w-1/4 flex md:justify-center md:items-center font-bold text-4xl text-gray-100 mx-5 md:mx-0 my-5">
                        Stats
                      </div>
                      <div className="w-full md:w-3/4 flex flex-col px-10 md:px-0 pb-14 md:pb-0">
                        <PokemonStatsSection pokemon={pokemon} />
                      </div>
                    </div>
                  </div>
                </div>
              </Layout>
            </div>
          )
        }
      })}
    </div>
  )
}

export default PokemonPage

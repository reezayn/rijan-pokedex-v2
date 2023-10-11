import { colorArr } from '@/constants'
import Image from 'next/image'

const PokeCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const type = pokemon.type[0].toLowerCase() as PokemonType
  const color = colorArr[type]
  const lightColorIndex: string = type.toString() + '-light'
  const colorLight = colorArr[lightColorIndex as PokemonType]
  return (
    <div
      key={pokemon.name.english}
      className="rounded-2xl h-[20rem] w-[21rem] relative flex flex-col items-center justify-center shadow-2xl group"
      style={{
        backgroundImage: `linear-gradient(${colorLight}, ${color}, ${color}, ${color}, ${color})`,
        // boxShadow: `2px 4px 5px ${colorLight}`,
      }}
    >
      <div className="w-full flex items-center justify-center absolute top-[-100px]">
        <Image
          src={pokemon.image.hires}
          alt={pokemon.name.english}
          height={300}
          width={300}
          className="group-hover:scale-110 duration-500"
        />
      </div>
      <div className="absolute flex flex-col bottom-0 w-full px-9 py-3">
        <h1 className="text-2xl font-semibold text-gray-300 text-left">
          {'#' + pokemon.id}
        </h1>
        <h1 className="text-4xl font-semibold text-gray-100 text-left mb-1">
          {pokemon.name.english}
        </h1>
        <div className="flex items-center gap-x-3">
          {pokemon.type.map((type) => (
            <p
              key={type}
              className="text-xl font-medium text-gray-200"
              //   style={{ color: `${colorLight}` }}
            >
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokeCard

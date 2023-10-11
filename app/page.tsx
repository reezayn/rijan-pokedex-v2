import Link from 'next/link'

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center text-center overflow-x-hidden">
      <h1 className="text-4xl">Home Page is under construction</h1>
      <h1 className="text-2xl my-4">Rest of the site works just fine</h1>
      <h1 className="text-2xl my-4">Check out Pokemons here</h1>
      <h1 className="text-6xl my-4">↓</h1>
      <Link href="/pokemon" className="border rounded-md p-4 m-4 text-xl">
        Explore Pokemons
      </Link>
      <h1 className="text-3xl mt-5 underline">Tip</h1>
      <h1 className="text-xl my-2">
        You can manually type Pokemon Name or ID in the URL to view any pokemon
      </h1>
      <h1 className="text-lg my-2">
        For eg:{' '}
        <Link
          href="https://ultrapokedex.vercel.app/pokemon/pikachu"
          className="text-green-500 underline"
        >
          ultrapokedex.vercel.app/pokemon/pikachu
        </Link>{' '}
        will take you to Pikachu Page
      </h1>
    </div>
  )
}

export default Home

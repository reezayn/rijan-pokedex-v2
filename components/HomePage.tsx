import ClientSideRoute from '@/components/ClientSideRoute'

interface IPropsType {
  data: Pokemon[]
}

const HomePage = (props: IPropsType) => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        {props.data.map((pokemon: Pokemon, index: number) => (
          <ClientSideRoute key={index} route={`/pokemon/${index + 1}`}>
            <div className="border rounded-md p-3 m-3">
              {pokemon.name.english}
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </>
  )
}

export default HomePage

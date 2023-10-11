const PokemonStatsSection = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <>
      {'base' in pokemon === false
        ? console.log('no base or stat')
        : Object.keys(pokemon.base).map((stat: string, index: number) => {
            let statPercentFactor = 0
            let statColor
            switch (stat) {
              case 'HP':
                statPercentFactor = 2.55
                statColor = '#da4343'
                break
              case 'Attack':
                statPercentFactor = 1.81
                statColor = '#f38d45'
                break
              case 'Defense':
                statPercentFactor = 2.3
                statColor = '#f3d14a'
                break
              case 'Sp. Attack':
                statPercentFactor = 1.73
                statColor = '#547fe4'
                break
              case 'Sp. Defense':
                statPercentFactor = 2.3
                statColor = '#84df57'
                break
              case 'Speed':
                statPercentFactor = 2.0
                statColor = '#f75887'
                break
            }
            const statAs = stat as keyof typeof pokemon.base
            return (
              <div key={index} className="w-full px-1 lg:px-6 flex flex-col">
                <div className="flex justify-between">
                  <span>{stat.toUpperCase()}</span>
                  <span>{pokemon.base[statAs]}</span>
                </div>

                <div className="w-full h-8 rounded-lg bg-transparent flex">
                  <div
                    className="h-8 rounded-lg"
                    style={{
                      backgroundColor: statColor,
                      width:
                        parseInt(pokemon.base[statAs].toString()) *
                        statPercentFactor,
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
    </>
  )
}

export default PokemonStatsSection

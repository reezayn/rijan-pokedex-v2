import { colorArr } from '@/constants'
import Head from 'next/head'
import React from 'react'

const Layout = ({
  title,
  type,
  children,
}: {
  title: string
  type: string
  children: React.ReactNode
}) => {
  const typeAs = type as PokemonType
  const color = colorArr[typeAs]

  const lightColorIndex: string = typeAs.toString() + '-light'
  const colorLight = colorArr[lightColorIndex as PokemonType]
  // const colorLight = colorArr[`${typeAs}` + '-light']        // this was prev code

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="Ultra Pokedex" content="By Rijan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: `linear-gradient(${color}, ${color}, ${colorLight})`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout

type Pokemon = {
  id: number
  name: {
    english: string
    japanese: string
    chinese: string
    french: string
  }
  type: string[]
  base: {
    HP: number
    Attack: number
    Defense: number
    'Sp. Attack': number
    'Sp. Defense': number
    Speed: number
  }
  species: string
  description: string
  evolution: {
    next: [string, string][]
  }
  profile: {
    height: string
    weight: string
    egg: string[]
    ability: [string, string][]
    gender: string
  }
  image: {
    sprite: string
    thumbnail: string
    hires: string
  }
}

type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy'

type BaseType =
  | 'HP'
  | 'Attack'
  | 'Defense'
  | 'Sp. Attack'
  | 'Sp. Defense'
  | 'Speed'

type ColorArray = {
  normal: string
  fire: string
  water: string
  electric: string
  grass: string
  ice: string
  fighting: string
  poison: string
  ground: string
  flying: string
  psychic: string
  bug: string
  rock: string
  ghost: string
  dragon: string
  dark: string
  steel: string
  fairy: string

  'normal-light': string
  'fire-light': string
  'water-light': string
  'electric-light': string
  'grass-light': string
  'ice-light': string
  'fighting-light': string
  'poison-light': string
  'ground-light': string
  'flying-light': string
  'psychic-light': string
  'bug-light': string
  'rock-light': string
  'ghost-light': string
  'dragon-light': string
  'dark-light': string
  'steel-light': string
  'fairy-light': string
}

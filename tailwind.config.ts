import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'poke-red': '#EF5350',
        'poke-blue': '#2A75BB',
        'poke-yellow': '#FECA1B',

        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#003dff',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#af00ff',
        dark: '#705746',
        steel: '#7a7aff',
        fairy: '#D685AD',

        'normal-light': '#E2DF20',
        'fire-light': '#FF2F00',
        'water-light': '#00EAFF',
        'electric-light': '#f5ff00',
        'grass-light': '#c2ff00',
        'ice-light': '#00ffef',
        'fighting-light': '#ffa91d',
        'poison-light': '#651dff',
        'ground-light': '#e8ff00',
        'flying-light': '#A98FF3',
        'psychic-light': '#ff00db',
        'bug-light': '#e1ff00',
        'rock-light': '#ffd500',
        'ghost-light': '#7000ff',
        'dragon-light': '#6F35FC',
        'dark-light': '#ff6700',
        'steel-light': '#0023ff',
        'fairy-light': '#ff007e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

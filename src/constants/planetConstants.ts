export const planetNames = [
  'mercure',
  'venus',
  'terre',
  'mars',
  'jupiter',
  'saturne',
  'uranus',
  'neptune',
] as const

export type PlanetNames = typeof planetNames[number]

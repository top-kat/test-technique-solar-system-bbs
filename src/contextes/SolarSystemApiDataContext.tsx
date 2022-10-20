import React, { useContext, useState, useEffect, createContext, PropsWithChildren } from 'react'
import axios from 'axios'

import { api } from '../configuration'

const APIContext = createContext({ data: [] as PlanetDatas, isLoading: true })

export function APIContextProvider({ children }: PropsWithChildren<any>) {
  // Initialize state
  const [data, setData] = useState([] as PlanetDatas)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch data
  useEffect(() => {
    console.log('EFFeECT')
    const url = api.SOLAR_SYSTEM_INFO_API
    axios
      .get(url)
      .then(function (response) {
        console.log('RRRresponse')
        console.log(response)
        setData(response.data.bodies)
        setIsLoading(false)
        console.log(response.data.bodies)
      })
      .catch((error) => console.log(error))
  }, [])

  return <APIContext.Provider value={{ data, isLoading }}>{children}</APIContext.Provider>
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useSolarSystemAPI() {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}

export type MoonRef = {
  moon: string
  rel: string // api url
}
export type PlanetRef = {
  planet: string
  rel: string // api url
}

export type PlanetData = {
  id: string
  name: string
  englishName: string
  isPlanet: boolean
  moons: null | MoonRef[]
  semimajorAxis: number
  perihelion: number
  aphelion: number
  eccentricity: number
  inclination: number
  mass: {
    massValue: number
    massExponent: number
  }
  vol: {
    volValue: number
    volExponent: number
  }
  density: number
  gravity: number
  escape: number
  meanRadius: number
  equaRadius: number
  polarRadius: number
  flattening: number
  dimension: string
  sideralOrbit: number
  sideralRotation: number
  aroundPlanet: PlanetRef
  discoveredBy: string
  discoveryDate: string
  alternativeName: string
  axialTilt: number
  avgTemp: number
  mainAnomaly: number
  argPeriapsis: number
  longAscNode: number
  bodyType: MoonRef
  rel: string
}
export type PlanetDatas = PlanetData[]

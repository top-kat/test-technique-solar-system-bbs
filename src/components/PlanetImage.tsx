import React from 'react'

import { PlanetNames } from '../constants/planetConstants'
import { PlanetData } from '../contextes/SolarSystemApiDataContext'

const imageUrlPerName: { [name in PlanetNames]: string } = {
  mercure: `https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg`,
  venus: `https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg`,
  terre: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/280px-The_Blue_Marble_%28remastered%29.jpg`,
  mars: `https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg`,
  jupiter: `https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg`,
  saturne: `https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg`,
  uranus: `https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg`,
  neptune: `https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg`,
}

export type PlanetImageProps = {
  planetData: PlanetData
}

export default function PlanetImage({
  planetData,
  ...otherProps
}: PlanetImageProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const planetId: PlanetNames | string = planetData.id
  const imgUrl = planetId in imageUrlPerName ? imageUrlPerName[planetId as PlanetNames] : ''
  return (
    <div
      {...otherProps}
      style={{
        width: '100%',
        aspectRatio: '1',
        backgroundColor: '#000000',
        display: 'flex',
        ...(otherProps.style || {}),
      }}
    >
      <img src={imgUrl} alt={planetData.name} style={{ objectFit: 'contain', width: '100%' }} />
    </div>
  )
}

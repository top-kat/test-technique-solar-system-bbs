import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { PlanetData } from '../../contextes/SolarSystemApiDataContext'
import PlanetImage from '../PlanetImage'

export type PlanetImageProps = {
  planetData: PlanetData
}

export default function PlanetCard({ planetData }: PlanetImageProps) {
  return (
    <Link to={`/planet/${planetData.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }} onClick={() => true}>
        <CardMedia>
          <PlanetImage planetData={planetData} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {planetData.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>More infos</Button>
        </CardActions>
      </Card>
    </Link>
  )
}

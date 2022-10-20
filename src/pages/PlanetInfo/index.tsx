import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Box from '@mui/material/Box'
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  useTheme,
} from '@mui/material'
import { RouteComponentProps, Link } from 'react-router-dom'

import Icon from '../../components/Icon/index'
import { Icons } from '../../components/Icon/types'
import { PlanetNames } from '../../constants/planetConstants'
import PlanetImage from '../../components/PlanetImage'
import { useSolarSystemAPI, PlanetData } from '../../contextes/SolarSystemApiDataContext'

const PlanetInfoPage = (props: RouteComponentProps) => {
  const { t } = useTranslation()
  const { isLoading, data } = useSolarSystemAPI()
  const theme = useTheme()

  if (isLoading) return <div>{t('loading')}</div>

  const { planetId } = props.match.params as { planetId: PlanetNames }

  const planet = (data.find((planetData) => planetData.id === planetId) as any) as PlanetData

  const tableData = {
    semimajorAxis: `${planet.semimajorAxis}km`,
    perihelion: `${planet.perihelion}km`,
    aphelion: `${planet.aphelion}km`,
    eccentricity: `${planet.eccentricity}`,
    inclination: `${planet.inclination}°`,
    mass: `${planet.mass.massValue}*10p${planet.mass.massExponent}`,
    density: `${planet.density}kg/m3`,
    gravity: `${planet.gravity}m/s2`,
    vol: `${planet.vol.volValue}*10p${planet.vol.volExponent}`,
  }

  return (
    <Box p={4}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('solarSystemTitle')}</title>
        <meta name="og:title" property="og:title" content={planet?.name}></meta>
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Icon
            icon={Icons.chevronLeft}
            color={theme.palette.text.primary}
            style={{ height: 30 }}
          />
        </Link>
        <h1 style={{ textAlign: 'center', flex: '1' }}>{planet?.name}</h1>
      </div>

      <PlanetImage
        planetData={planet}
        style={{ maxWidth: 400, margin: 'auto', marginBottom: 24 }}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {Object.entries(tableData).map(([propName, strDescription]) => (
              <TableRow key={propName}>
                <TableCell component="th" scope="row">
                  {t(propName as any)}
                </TableCell>
                <TableCell align="right">{strDescription}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <pre>{JSON.stringify(planet, null, 2)}</pre> */}
    </Box>
  )
}

export default PlanetInfoPage

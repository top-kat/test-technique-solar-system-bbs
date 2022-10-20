import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, OutlinedInput, InputAdornment, useTheme } from '@mui/material'

import Icon from '../Icon'
import { Icons } from '../Icon/types'
import { planetNames } from '../../constants/planetConstants'
import { useSolarSystemAPI } from '../../contextes/SolarSystemApiDataContext'

import PlanetCard from './PlanetCard'

const PlanetList = () => {
  const { t } = useTranslation()
  const { isLoading, data } = useSolarSystemAPI()
  const theme = useTheme()

  const [filter, setFilter] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase())
  }

  const onlyPlanets = data.filter(
    (planetData) => planetNames.includes(planetData.id as any) && planetData.id.startsWith(filter)
  )

  const gridItems = onlyPlanets.map((planetData) => (
    <Grid key={planetData.id} item xs={6} md={4} xl={3}>
      <PlanetCard planetData={planetData} />
    </Grid>
  ))

  return isLoading ? (
    <div>{t('loading')}</div>
  ) : (
    <Box>
      <OutlinedInput
        sx={{ mb: 8 }}
        id="outlined-adornment-weight"
        value={filter}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <Icon icon={Icons.search2} style={{ height: 30 }} color={theme.palette.grey[600]} />
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <Grid container spacing={2}>
        {gridItems}
      </Grid>
    </Box>
  )
}

export default memo(PlanetList)

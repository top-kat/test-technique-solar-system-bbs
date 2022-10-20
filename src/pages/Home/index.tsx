import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import PlanetList from '../../components/PlanetList'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Box p={4}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('solarSystemTitle')}</title>
        <meta name="og:title" property="og:title" content={t('solarSystemTitle')}></meta>
        <meta name="description" content={t('solarSystemDescriptionShort')}></meta>
      </Helmet>

      <Typography variant="h1" mb={8}>
        {t('solarSystemTitle')}
      </Typography>
      <Grid container spacing={2} mb={12}>
        <Grid item xs={12} md={8}>
          <Typography sx={{ my: 4 }}>
            <Trans i18nKey={'solarSystemDescription'} />
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img
            style={{ width: '100%' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Solar_sys.jpg/1280px-Solar_sys.jpg"
            alt={t('solarSystemImageDescription')}
          />
          <Typography variant={'smallStrong'}> {t('solarSystemImageDescription')}</Typography>
        </Grid>
      </Grid>
      <PlanetList />
    </Box>
  )
}

export default HomePage

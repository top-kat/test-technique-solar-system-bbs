import React from 'react'
import { Story } from '@storybook/react'
import { RouteComponentProps } from 'react-router-dom'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetInfoPage from '.'

export default defaultExport({
  title: 'Components/PlanetInfoPage',
  component: PlanetInfoPage,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

// SIMPLE
export const Simple: Story<RouteComponentProps> = (props: RouteComponentProps) => (
  <PlanetInfoPage {...props} />
)

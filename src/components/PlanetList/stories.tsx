import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetList from '.'

export default defaultExport({
  title: 'Components/PlanetList',
  component: PlanetList,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

// SIMPLE
export const Simple: Story = () => <PlanetList />

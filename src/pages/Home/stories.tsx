import React from 'react'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import HomePage from '.'

export default defaultExport({
  title: 'Components/HomePage',
  component: HomePage,
  viewport: null,
  containerStyle: { padding: '3rem' },
})

// SIMPLE
export const Simple: Story = () => <HomePage />

import React from 'react'
import { Layout } from 'react-feather'

import HomePage from '../pages/Home'
import PlanetInfo from '../pages/PlanetInfo'

import { routesPath } from './index'

const guestRoutes = {}

export const guestLayoutRoutes = [guestRoutes]

const registerRoutes = {}

export const registerLayoutRoutes = [registerRoutes]

const authRoutes = {}

export const authLayoutRoutes = [authRoutes]

const publicRoutes = {
  id: 'Public',
  path: '',
  icon: <Layout />,
  component: null,
  children: [
    {
      path: routesPath.home,
      name: 'Home',
      component: HomePage,
    },
    {
      path: routesPath.planet,
      name: 'Planet',
      component: PlanetInfo,
    },
  ],
}

export const publicLayoutRoutes = [publicRoutes]

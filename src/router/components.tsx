import { lazy } from 'react'

export const Home = lazy(() => import('@/views/home'))
export const Film = lazy(() => import('@/views/film'))
export const Teleplay = lazy(() => import('@/views/teleplay'))
export const Cartoon = lazy(() => import('@/views/cartoon'))
export const Main = lazy(() => import('@/views/main'))
export const Play = lazy(() => import('@/views/play'))
export const NotFound = lazy(() => import('@/views/not-found'))

import { Navigate, RouteObject } from 'react-router-dom'
import {
  Cartoon,
  Film,
  Home,
  Main,
  NotFound,
  Teleplay,
  Play,
} from './components'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />,
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'film',
        element: <Film />,
      },
      {
        path: 'teleplay',
        element: <Teleplay />,
      },
      {
        path: 'cartoon',
        element: <Cartoon />,
      },
    ],
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes

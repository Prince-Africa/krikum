import { StrictMode, type FC } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Outlet,
  ScrollRestoration,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import VerifyEmailPage from './pages/VerifyEmailPage'
import DownloadPage from './pages/DownloadPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import PrivacyPage from './pages/PrivacyPage'

const RootLayout: FC = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: 'verify-email', element: <VerifyEmailPage /> },
      { path: 'download', element: <DownloadPage /> },
      { path: 'terms', element: <TermsAndConditionsPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: '*', element: <DownloadPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

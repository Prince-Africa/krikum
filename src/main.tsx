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

const NotFoundPage: FC = () => (
  <div className="w-full min-h-screen px-4 md:px-section-px pt-16 md:pt-24 pb-8 md:pb-section-py relative flex flex-col justify-center items-center bg-background-main overflow-x-hidden">
    <div className="max-w-md w-full text-center">
      <h1 className="text-6xl font-bold text-text-primary-darkbg mb-4">404</h1>
      <p className="text-xl text-text-primary-darkbg mb-8">Page not found</p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
)

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
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

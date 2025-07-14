import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import VerifyEmailPage from './pages/VerifyEmailPage'
import DownloadPage from './pages/DownloadPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage'
import PrivacyPage from './pages/PrivacyPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<DownloadPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)

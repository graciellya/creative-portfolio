import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import MusicPage from './pages/MusicPage'
import PhotographyPage from './pages/PhotographyPage'
import PerformancesPage from './pages/PerformancesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'music':
        return <MusicPage />
      case 'photography':
        return <PhotographyPage />
      case 'performances':
        return <PerformancesPage />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      {renderPage()}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  )
}

export default App

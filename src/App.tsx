import { Route, Routes } from 'react-router-dom'
import CaseStudies from './pages/CaseStudies'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
    </Routes>
  )
}

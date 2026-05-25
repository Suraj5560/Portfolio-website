import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import Services from './pages/Services.jsx'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

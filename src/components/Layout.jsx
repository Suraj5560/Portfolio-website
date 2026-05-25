import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    const el = document.querySelector('.page')
    if (!el) return
    el.classList.remove('enter')
    void el.offsetWidth
    el.classList.add('enter')
  }, [location.pathname])

  return (
    <div className="layout">
      <div className="bg-grid"></div>
      <Navbar />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

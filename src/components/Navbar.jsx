import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/theme.js'

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const homeSection = document.getElementById('home')

    const onScroll = () => {
      if (!homeSection) return

      const homeBottom = homeSection.getBoundingClientRect().bottom

      // hide navbar when home section is out of view
      if (homeBottom <= 0) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <header className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>CMA Durga Prasad</span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger" />
        </button>

        <nav
          className={`nav-links ${open ? 'open' : ''}`}
          role="navigation"
          aria-label="Primary"
        >
          {isHomePage ? (
            <>
              <a href="#home" className="nav-link" onClick={() => setOpen(false)}>
                Home
              </a>
              <a href="#about" className="nav-link" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="#services" className="nav-link" onClick={() => setOpen(false)}>
                Services
              </a>
              <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact
              </a>
            </>
          ) : (
            <>
              <Link to="/#home" className="nav-link" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/#about" className="nav-link" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/#services" className="nav-link" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link to="/#contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </>
          )}

          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀︎' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

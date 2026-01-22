import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/theme.js'

export default function Navbar() {
  const { theme, toggle } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

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

  return (
    <header className={`navbar ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="logo">CMA Durga Prasad</span>
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

          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀︎' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

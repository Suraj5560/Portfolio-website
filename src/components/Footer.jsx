import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">CMA Durga Prasad</div>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>
        <div className="footer-copy">
          © {new Date().getFullYear()} Durga Prasad • Cost Management Accountant
        </div>
      </div>
    </footer>
  )
}

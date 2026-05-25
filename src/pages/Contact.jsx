import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'contact@durga-cma.com',
    link: 'mailto:contact@durga-cma.com'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Hyderabad, India',
    link: 'https://maps.google.com'
  }
]

const socialLinks = [
  { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com' },
  { icon: <FaFacebook />, name: 'Facebook', url: 'https://facebook.com' },
  { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  
  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <section className="contact-page social-redesign">
      <div className="contact-header-social">
        <Reveal>
          <span className="section-badge">Contact Us</span>
          <h1>Let's Connect & <span className="text-gradient">Grow Together</span></h1>
          <p className="subtitle">
            Reach out to discuss your financial needs or connect with us on social media.
          </p>
        </Reveal>
      </div>

      <div className="contact-content-social">
        <div className="contact-form-social">
          <Reveal>
            <div className="form-card-social glass">
              <h2>Send a Message</h2>
              <form onSubmit={onSubmit} className="form-social">
                <div className="form-row-social">
                  <div className="field-social">
                    <input id="name" name="name" required value={form.name} onChange={onChange} placeholder=" " />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="field-social">
                    <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder=" " />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className="field-social">
                  <input id="subject" name="subject" required value={form.subject} onChange={onChange} placeholder=" " />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="field-social">
                  <textarea id="message" name="message" rows="5" required value={form.message} onChange={onChange} placeholder=" " />
                  <label htmlFor="message">How can I help?</label>
                </div>
                <button type="submit" className={`submit-btn-social ${status}`} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        <div className="contact-info-social">
          <Reveal>
            <div className="info-card-social glass">
              <h2>Direct Contact</h2>
              <div className="contact-methods-social">
                {contactMethods.map((method) => (
                  <a href={method.link} key={method.label} className="method-item-social" target="_blank" rel="noopener noreferrer">
                    <span className="item-icon-social">{method.icon}</span>
                    <div className="item-text-social">
                      <span className="item-label-social">{method.label}</span>
                      <span className="item-value-social">{method.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-media-links">
                <h2>Connect with Us</h2>
                <div className="social-icons">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={social.name}
                      className="social-icon-link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="map-section-social">
        <Reveal>
          <div className="map-container-social glass">
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407064!2d78.26795855!3d17.4122998!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '24px' }} 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

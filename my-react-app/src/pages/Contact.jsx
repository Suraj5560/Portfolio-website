import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thank you. This form is a placeholder.')
  }

  return (
    <section className="contact">
      <div className="grid two">
        <Reveal>
          <div className="card glass">
            <h2>Contact Details</h2>
            <ul className="list">
              <li>Email: you@example.com</li>
              <li>Phone: +1 234 567 8900</li>
              <li>WhatsApp: +1 234 567 8900</li>
            </ul>
            <div className="socials">
              <a href="https://linkedin.com" target="_blank" className="btn small">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" className="btn small">Instagram</a>
              <a href="https://twitter.com" target="_blank" className="btn small">Twitter</a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <form className="form neu" onSubmit={onSubmit}>
            <h2>Contact Form</h2>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="Your email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={onChange} placeholder="How can I help?" />
            </div>
            <button className="btn primary" type="submit">Submit</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

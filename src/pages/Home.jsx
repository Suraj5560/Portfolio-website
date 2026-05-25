import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Tabs from '../components/Tabs.jsx'
import { servicesData } from './Services.jsx'
import profile from '../assets/profile.jpg'
import aboutMe from '../assets/about-me.png'
import servicesImg from '../assets/services.png'
import contactImg from '../assets/contact.png'

const achievements = [
  'Reduced manufacturing overhead by 12% through cost analysis',
  'Implemented budgeting framework across 5 business units',
  'Led FP&A quarterly forecasts improving accuracy by 15%',
]

const workingOn = [
  'Building advanced cost models for multi-site operations',
  'Implementing rolling forecasts and scenario planning',
  'Streamlining tax compliance workflows',
]

const testimonials = [
  {
    text: "Durga's cost analysis was a game-changer for our manufacturing unit. We achieved a 12% reduction in overheads within the first quarter.",
    author: "Rajesh Kumar",
    position: "Operations Director, TechFab India"
  },
  {
    text: "The financial models developed for our expansion were incredibly precise. His strategic insights provided the clarity we needed for board approval.",
    author: "Sneha Reddy",
    position: "CFO, Global Logistics Solutions"
  },
  {
    text: "Professional, thorough, and highly knowledgeable. Durga simplified our complex tax compliance issues and optimized our reporting structure.",
    author: "Amit Sharma",
    position: "Founder, Sharma & Co."
  }
]

export default function Home() {
  return (
    <div className="home">
      <section id="home" className="hero-section" aria-labelledby="home-title">
        <div className="hero-container">
          <div className="hero-content">
            <Reveal>
              <div className="hero-badge">Expert Financial Strategy</div>
              <h1 id="home-title" className="hero-title">
                Strategic Cost Management for <span className="text-gradient">Business Excellence</span>
              </h1>
              <p className="hero-subtitle">
                As a Cost Management Accountant (CMA), I empower businesses to optimize operations, 
                reduce waste, and drive sustainable profitability through data-driven financial insights.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn primary">Schedule Consultation</a>
                <a href="#services" className="btn outline">Explore Services</a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-value">10+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">Projects Optimized</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12%</span>
                  <span className="stat-label">Avg. Cost Reduction</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="hero-visual">
            <Reveal>
              <div className="visual-wrapper">
                <div className="visual-blob"></div>
                <div className="visual-blob secondary"></div>
                <div className="photo-frame">
                  <img
                    src={profile}
                    alt="Durga Prasad - CMA Professional"
                    className="hero-img"
                    loading="eager"
                    width="500"
                    height="600"
                  />
                </div>
                <div className="floating-card cost-card">
                  <div className="card-icon">📉</div>
                  <div>
                    <div className="card-title">Cost Efficiency</div>
                    <div className="card-val">+24%</div>
                  </div>
                </div>
                <div className="floating-card profit-card">
                  <div className="card-icon">📈</div>
                  <div>
                    <div className="card-title">Profit Margin</div>
                    <div className="card-val">+18%</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <Reveal>
          <div className="bio">
            <div className='about-content'>
              <img className='about-img' src= {aboutMe} alt="About Me Logo" />
              <h2 id="about-title">About Me</h2>
            </div>
            <p>
              I am a CMA with expertise in cost accounting, FP&A, budgeting, and advisory. I work
              with leadership teams to create financial clarity, reduce waste, and support strategic
              growth.
            </p>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="card about-card">
              <h3>Achievements</h3>
              <ul className="list">
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="about-divider glass" role="separator" aria-orientation="horizontal" />

          <Reveal>
            <div className="card about-card">
              <h3>Currently Working On</h3>
              <ul className="list">
                {workingOn.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="about-actions centered">
          <Link className="btn outline" to="/gallery">Gallery</Link>
        </div>
      </section>

      <section id="services" className="section" aria-labelledby="services-title">
        <Reveal>
          
          <div className="services-card neu">
            <div className='services-content'>
              <img className='services-img' src={servicesImg} />
            <h2 id="services-title">Services</h2>
            </div>
            <Tabs items={servicesData} />
          </div>
        </Reveal>
      </section>

      <section id="testimonials" className="section" aria-labelledby="testimonials-title">
        <div className="container">
          <Reveal>
            <div className="testimonials-header">
              <span className="section-badge">Client Success</span>
              <h2 id="testimonials-title">What My <span className="text-gradient">Clients Say</span></h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card glass">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-footer">
                    <div className="author-info">
                      <span className="author-name">{t.author}</span>
                      <span className="author-pos">{t.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-banner section">
        <Reveal>
          <div className="cta-container glass">
            <div className="cta-content">
              <h2>Ready to Optimize Your Business Finances?</h2>
              <p>Join 50+ successful projects that have transformed their cost management strategies.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn primary">Start Free Consultation</Link>
                <a href="#services" className="btn outline">View Full Services</a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="grid two"> 
          <Reveal>
            
              <div className="card glass">
                <div className='contact-content'>
                  <img className='contact-img' src={contactImg} />
                <h2 id="contact-title">Contact Details</h2>
                </div>
              <ul className="list">
                <li>Email: you@example.com</li>
                <li>Phone: +1 234 567 8900</li>
                <li>WhatsApp: +1 234 567 8900</li>
              </ul>
              <div className="socials">
                <a href="https://linkedin.com" target="_blank" className="btn small" rel="noreferrer">LinkedIn</a>
                <a href="https://instagram.com" target="_blank" className="btn small" rel="noreferrer">Instagram</a>
                <a href="https://twitter.com" target="_blank" className="btn small" rel="noreferrer">Twitter</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form className="form neu" onSubmit={(e) => { e.preventDefault(); alert('Thank you. This form is a placeholder.') }}>
              <h2>Contact Form</h2>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can I help?" />
              </div>
              <button className="btn primary" type="submit">Submit</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

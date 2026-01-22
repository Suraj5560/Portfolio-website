import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Tabs from '../components/Tabs.jsx'
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

const services = [
  {
    label: 'Cost Accounting',
    content:
      'I provide comprehensive cost accounting services to help businesses understand and control their cost structures. This includes product costing, variance analysis, overhead allocation, and cost behavior studies. By identifying inefficiencies and cost drivers, I enable organizations to optimize pricing, improve margins, and enhance overall operational performance through data-driven cost control frameworks.',
  },
  {
    label: 'Financial Planning & Analysis',
    content:
      'My FP&A services focus on delivering strategic insights through budgeting, forecasting, and performance analysis. I develop financial models, dashboards, and KPI frameworks that support executive decision-making. By analyzing trends and scenario outcomes, I help businesses anticipate risks, allocate resources effectively, and achieve sustainable growth aligned with their strategic objectives.',
  },
  {
    label: 'Budgeting & Forecasting',
    content:
      'I assist organizations in creating accurate and flexible budgets and rolling forecasts tailored to their business needs. This includes scenario planning, sensitivity analysis, and cash flow projections. My approach ensures financial plans remain adaptive to changing market conditions while providing clarity and control over future financial performance.',
  },
  {
    label: 'Tax Consulting',
    content:
      'My tax consulting services cover compliance reviews, tax planning, and filing support to ensure regulatory accuracy and efficiency. I help streamline tax processes, minimize liabilities, and maintain compliance with applicable laws. By aligning tax strategies with business goals, I support long-term financial stability and risk mitigation.',
  },
  {
    label: 'Audit Support',
    content:
      'I provide end-to-end audit support, including pre-audit preparation, documentation, reconciliations, and liaison with auditors. My services help ensure a smooth audit process by addressing discrepancies, improving internal controls, and enhancing transparency. This reduces audit risks and strengthens financial credibility.',
  },
  {
    label: 'Business Advisory',
    content:
      'My business advisory services focus on profitability analysis, pricing strategies, cost optimization, and growth planning. I work closely with leadership teams to identify improvement opportunities and develop actionable financial roadmaps. By combining financial insights with strategic thinking, I help businesses drive efficiency, competitiveness, and long-term success.',
  },
]


export default function Home() {
  return (
    <div className="home">
      <section id="home" className="section" aria-labelledby="home-title">
        <div className="grid two hero">
          <Reveal>
            <div className="intro neu">
              <h1 id="home-title" className="greet">Hi, I’m Durga Prasad</h1>
              <h2 className="role">Cost Management Accountant (CMA)</h2>
              <p className="summary">
                Experienced in cost accounting, FP&A, budgeting, tax and audit support. I help
                businesses optimize costs and drive strategic financial decisions.
              </p>
              <div className="actions">
                <a href="#contact" className="btn outline">Contact Me</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="photo glass">
              <img
                src={profile}
                alt="Profile illustration"
                className="profile-img"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <Reveal>
          <div className="bio neu">
            <div className='about-content'>
              <img className='about-img' src= {aboutMe} />
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
            <div className="card glass">
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
            <div className="card glass">
              <h3>Currently Working On</h3>
              <ul className="list">
                {workingOn.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="about-actions">
        <Link className="btn outline" to="/gallery">Gallery</Link>
      </div>

      <section id="services" className="section" aria-labelledby="services-title">
        <Reveal>
          
          <div className="services-card neu">
            <div className='services-content'>
              <img className='services-img' src={servicesImg} />
            <h2 id="services-title">Services</h2>
            </div>
            <Tabs items={services} />
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

import Reveal from '../components/Reveal.jsx'

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

const timeline = [
  { year: '2022–Present', title: 'Senior CMA', detail: 'Advisory for SMEs and startups' },
  { year: '2019–2022', title: 'FP&A Analyst', detail: 'Budgeting and performance tracking' },
  { year: '2016–2019', title: 'Cost Accountant', detail: 'Cost control and variance analysis' },
]

export default function About() {
  return (
    <section className="about">
      <Reveal>
        <div className="bio neu">
          <h2>About Me</h2>
          <p>
            I am a CMA with expertise in cost accounting, FP&A, budgeting, and advisory. I work with
            leadership teams to create financial clarity, reduce waste, and support strategic
            growth.
          </p>
        </div>
      </Reveal>
      <div className="grid two">
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
        <div className="about-divider" />

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
      <Reveal>
        <div className="timeline neu">
          <h3>Career Highlights</h3>
          <div className="timeline-items">
            {timeline.map((t) => (
              <div className="timeline-item" key={t.year + t.title}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-content">
                  <div className="timeline-title">{t.title}</div>
                  <div className="timeline-detail">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

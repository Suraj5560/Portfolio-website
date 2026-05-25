import { useState } from 'react'

export default function Tabs({ items }) {
  const [active, setActive] = useState(0)
  return (
    <div className="tabs">
      <div className="tab-list glass">
        {items.map((t, i) => (
          <button
            key={t.label}
            className={`tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-panel neu">
        <h3 className="tab-title">{items[active].label}</h3>
        <div className="tab-desc">{items[active].content}</div>
      </div>
    </div>
  )
}

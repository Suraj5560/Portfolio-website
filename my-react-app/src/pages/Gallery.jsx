import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import g1 from '../assets/gallery/g1.svg'
import g2 from '../assets/gallery/g2.svg'
import g3 from '../assets/gallery/g3.svg'
import g4 from '../assets/gallery/g4.svg'
import g5 from '../assets/gallery/g5.svg'
import g6 from '../assets/gallery/g6.svg'

const items = [
  { src: g1, caption: 'Cost Analysis Workshop' },
  { src: g2, caption: 'Budget Review Session' },
  { src: g3, caption: 'FP&A Dashboard Overview' },
  { src: g4, caption: 'Audit Preparation Checklist' },
  { src: g5, caption: 'Tax Planning Framework' },
  { src: g6, caption: 'Advisory Roadmap' },
]

export default function Gallery() {
  const pageSize = 6
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(items.length / pageSize)
  const pageItems = useMemo(
    () => items.slice(page * pageSize, page * pageSize + pageSize),
    [page],
  )

  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p className="muted">Highlights and visuals related to achievements.</p>
      </div>
      <Reveal>
        <div className="gallery-grid">
          {pageItems.map((i) => (
            <figure className="gallery-card glass" key={i.caption}>
              <div className="gallery-img-wrap">
                <img
                  src={i.src}
                  alt={i.caption}
                  className="gallery-img"
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="480"
                />
              </div>
              <figcaption className="gallery-caption">{i.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
      <div className="gallery-controls">
        <button
          className="btn outline"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          aria-label="Previous"
        >
          Prev
        </button>
        <span className="gallery-page-indicator">
          {page + 1} / {totalPages}
        </span>
        <button
          className="btn outline"
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page >= totalPages - 1}
          aria-label="Next"
        >
          Next
        </button>
      </div>
      <div className="gallery-back">
        <Link className="btn primary" to="/#about">Back to About</Link>
      </div>
    </section>
  )
}

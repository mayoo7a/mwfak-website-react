export default function StatsSection() {
  return (
    <>
<section className="stats-section">
  <div className="wrap">
    <div className="head-flex reveal">
      <div>
        <span className="eyebrow">Mwafq Academy</span>
        <h2 className="section-title">
          Keep your skills<br/><span className="cyan">sharp.</span>
          
        </h2>
      </div>
    </div>

    <div className="courses">
      <div className="course reveal" data-cursor>
        <span className="course-bracket" aria-hidden="true"></span>
        <div className="course-head">
          <div className="course-mini-icon" aria-hidden="true">
            <span className="svg-ic ic-shield"></span>
          </div>
          <span className="course-tag">First Aid</span>
        </div>
        <div className="course-title">Advanced First Aid (Workplace Edition)</div>
        <div className="course-desc">
          Develop your professional and medical skills through specialised, certified courses.
          
        </div>
        <div className="course-meta">
          <div className="rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            4.8 <span style={{"color":"var(--c-muted)", "fontWeight":"500"}}>(12)</span>
          </div>
          <a href="#" className="course-link">Enroll →</a>
        </div>
      </div>

      <div className="course reveal delay-1" data-cursor>
        <span className="course-bracket" aria-hidden="true"></span>
        <div className="course-head">
          <div className="course-mini-icon" aria-hidden="true">
            <span className="svg-ic ic-heart"></span>
          </div>
          <span className="course-tag">CPR</span>
        </div>
        <div className="course-title">CPR Basics — Lifesaving Essentials</div>
        <div className="course-desc">
          Master the basics of CPR with hands-on, certified training trusted by clinics and businesses.
          
        </div>
        <div className="course-meta">
          <div className="rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            4.8 <span style={{"color":"var(--c-muted)", "fontWeight":"500"}}>(12)</span>
          </div>
          <a href="#" className="course-link">Enroll →</a>
        </div>
      </div>

      <div className="course bundle reveal delay-2" data-cursor>
        <span className="course-bracket" aria-hidden="true"></span>
        <div className="course-head">
          <div className="course-mini-icon" aria-hidden="true">
            <span className="svg-ic ic-cert"></span>
          </div>
          <span className="course-tag">Save 30%</span>
        </div>
        <div className="course-title">Certified Safety Officer Bundle</div>
        <div className="course-desc">
          First Aid, Infection Control, Risk Assessment — full certificate, one bundle.
          
        </div>
        <div className="course-meta">
          <div>
            <span className="price-now">400 SR</span>
            <span className="price-old">600 SR</span>
          </div>
          <a href="#" className="course-link">Get Bundle →</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ STATS content now lives in the (former) academy wrapper ============ */}

    </>
  );
}

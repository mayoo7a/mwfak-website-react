"use client";

export default function BookingSection() {
  return (
    <>
<section className="booking-section reveal" id="booking">
  <span className="booking-mascot" aria-hidden="true"></span>
  <div className="wrap">
    <div className="booking-card">
      <h2 className="booking-title">
        Find your next exam <em>Appointments.<svg className="booking-underline" viewBox="0 0 240 12" preserveAspectRatio="none" aria-hidden="true"><path className="draw-path" d="M2 8 Q 60 1 120 6 T 238 5"/></svg></em>
        
      </h2>
      <form className="booking-grid" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="bk-exam">Exam Type</label>
          <div className="cs-wrap" data-cs>
            <button type="button" id="bk-exam" className="cs-trigger" aria-haspopup="listbox" aria-expanded="false">
              <span className="cs-value cs-placeholder">
                Select exam (Driving, Residency, …)
              </span>
              <svg className="cs-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <ul className="cs-panel" role="listbox" aria-labelledby="bk-exam" hidden>
              <li className="cs-option" role="option" data-value="driving">
                <span className="cs-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span className="cs-label">Driving License Exam</span>
              </li>
              <li className="cs-option" role="option" data-value="residency">
                <span className="cs-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span className="cs-label">Residency Exam</span>
              </li>
              <li className="cs-option" role="option" data-value="municipality">
                <span className="cs-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span className="cs-label">Municipality Exam</span>
              </li>
              <li className="cs-option" role="option" data-value="occupational">
                <span className="cs-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span className="cs-label">Occupational Exam</span>
              </li>
              <li className="cs-option" role="option" data-value="pre-employment">
                <span className="cs-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span className="cs-label">Pre-Employment Basic</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <label htmlFor="bk-loc">City or Center</label>
          <input id="bk-loc" placeholder="City or center name." />
        </div>
        <div>
          <label htmlFor="bk-date">Date</label>
          <div className="cs-wrap dp-wrap" data-dp>
            <button type="button" id="bk-date" className="cs-trigger" aria-haspopup="dialog" aria-expanded="false">
              <span className="cs-value cs-placeholder">DD / MM / YYYY</span>
              <svg className="cs-chevron dp-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </button>
            <div className="dp-panel" role="dialog" hidden>
              <div className="dp-header">
                <button type="button" className="dp-nav dp-prev" aria-label="Previous month">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <span className="dp-month-year"></span>
                <button type="button" className="dp-nav dp-next" aria-label="Next month">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
              <div className="dp-weekdays">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>
              <div className="dp-grid"></div>
            </div>
            <input type="hidden" id="bk-date-value" name="exam-date" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary no-magnet" data-cursor>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Search Appointments
        </button>
      </form>
      <div className="booking-notice">
        <span className="booking-corner" aria-hidden="true"></span>
        <p className="booking-note">
          Please ensure you bring your valid National ID or Residency (Iqama) to the medical center to avoid appointment cancellation
          
        </p>
      </div>
    </div>
  </div>
</section>

{/* ============ APP / SHOWCASE ============ */}

    </>
  );
}

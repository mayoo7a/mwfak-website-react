export default function ShowSection() {
  return (
    <>
<section className="section show-section" id="app">
  <div className="show-pat" aria-hidden="true"></div>
  <div className="wrap">
    <div className="show-grid">
      <div className="show-visual reveal">
        <div className="phones" id="phones">
          <div className="phone-mini left">
            <div className="phone-mini-screen">
              <div className="pm-notch" aria-hidden="true"></div>
              <div className="pm-h">
                <div>
                  <strong>My Reservations</strong>
                  <span>Today · 4 active</span>
                </div>
              </div>
              <div className="pm-card">
                <div className="pm-card-l">In progress</div>
                <div className="pm-card-t">Driving License</div>
              </div>
              <div className="pm-row">
                <div className="ic" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Residency Exam</strong>
                  <span>09:00 AM</span>
                </div>
              </div>
              <div className="pm-row">
                <div className="ic" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                </div>
                <div>
                  <strong>Municipality</strong>
                  <span>Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-mini right">
            <div className="phone-mini-screen">
              <div className="pm-notch" aria-hidden="true"></div>
              <div className="pm-h">
                <div>
                  <strong>Course Progress</strong>
                  <span>CPR Basics</span>
                </div>
              </div>
              <div className="pm-card purple">
                <div className="pm-card-l">52% complete</div>
                <div className="pm-card-t">CPR Basics</div>
              </div>
              <div className="pm-progress" aria-hidden="true"><span></span></div>
              <div className="pm-row">
                <div className="ic" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <strong>Module 1</strong>
                  <span>Completed</span>
                </div>
              </div>
              <div className="pm-row">
                <div className="ic" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <strong>Module 2</strong>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal delay-2">
        <span className="eyebrow">Mwafq APP</span>
        <h2 className="section-title">
          Your medical journey,<br/><span className="ital">in your pocket.</span>
          
        </h2>
        <p className="section-sub">
          Built for everyday Saudi Arabia — book exams, track every status update, and download official reports anywhere, anytime.
          
        </p>
        <div className="feature-list">
          <div className="f-item" data-cursor>
            <div className="check" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <div>
              <strong>Real-time exam tracking</strong>
              <span>Watch every status from &#x201C;Accepted&#x201D; to &#x201C;Completed.&#x201D;</span>
            </div>
          </div>
          <div className="f-item" data-cursor>
            <div className="check" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <div>
              <strong>Reports in your pocket</strong>
              <span>One-tap PDF download the moment your results are ready.</span>
            </div>
          </div>
          <div className="f-item" data-cursor>
            <div className="check" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <div>
              <strong>&#x201C;Fit for Service&#x201D; badge</strong>
              <span>Official certification, delivered to your phone.</span>
            </div>
          </div>
        </div>
        <div style={{"display":"flex", "gap":"14px", "marginTop":"30px", "flexWrap":"wrap"}}>
          <a href="#" className="btn btn-primary" data-cursor>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
            App Store
          </a>
          <a href="#" className="btn btn-line" data-cursor>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zM14.5 12.708l2.302 2.302-11.534 6.541 9.232-8.843zm3.572-2.06l2.857 1.622c.829.471.829 1.668 0 2.139l-2.857 1.622L15.207 13l2.865-2.352zM5.268 2.45l11.534 6.54-2.302 2.301L5.268 2.451z"/></svg>
            Google Play
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ ACADEMY content now lives in the (former) stats wrapper ============ */}

    </>
  );
}

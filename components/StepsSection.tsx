export default function StepsSection() {
  return (
    <>
<section className="section steps-section" id="how">
  <div className="steps-pin">
    <span className="steps-ghost-num g1" aria-hidden="true">01</span>
    <span className="steps-ghost-num g2" aria-hidden="true">02</span>
    <span className="steps-ghost-num g3" aria-hidden="true">03</span>
  <div className="steps-bg">
  <div className="wrap">
    <div className="steps-grid">
      <div className="steps-sticky-wrap">
      <div className="steps-sticky">
        <span className="eyebrow reveal">How it works</span>
        <h2 className="section-title reveal delay-1">
          Three taps<br/><span className="cyan">Done.</span>
          
        </h2>
        <a href="#booking" className="btn btn-primary reveal delay-3" data-cursor style={{"marginTop":"30px"}}>
          Start Booking →
        </a>
      </div>
      </div>{/* /.steps-sticky-wrap */}

      <div className="step-list-viewport">
      <div className="step-list">
        {/* H-4 — added meta strip per step so the sticky pays off */}
        <div className="step-card reveal" data-cursor>
          <div className="step-row">
            <div className="step-num" aria-hidden="true">01</div>
            <div>
              <h3>
                Book your appointment
                
              </h3>
              <p>
                Choose your exam and review the preconditions and requirements.
                
              </p>
              <div className="step-meta">
                <span><b>30s</b> avg booking</span>
                <span><b>100+</b> centres</span>
              </div>
            </div>
          </div>
        </div>
        <div className="step-card reveal delay-1" data-cursor>
          <div className="step-row">
            <div className="step-num" aria-hidden="true">02</div>
            <div>
              <h3>
                Take the exam
                
              </h3>
              <p>
                Head to the medical center at your scheduled time and track your status updates in the app.
                
              </p>
              <div className="step-meta">
                <span><b>9 min</b> avg exam</span>
                <span><b>Live</b> status updates</span>
              </div>
            </div>
          </div>
        </div>
        <div className="step-card reveal delay-2" data-cursor>
          <div className="step-row">
            <div className="step-num" aria-hidden="true">03</div>
            <div>
              <h3>
                Receive the result
                
              </h3>
              <p>
                Download your medical report and check for your "Fit for Service" badge as soon as it's ready.
                
              </p>
              <div className="step-meta">
                <span><b>&lt;3 days</b> avg delivery</span>
                <span><b>PDF</b> on your phone</span>
              </div>
            </div>
          </div>
        </div>

      </div>{/* /.step-list */}
      </div>{/* /.step-list-viewport */}
    </div>{/* /.steps-grid */}
  </div>{/* /.wrap */}
  </div>{/* /.steps-bg */}
  </div>{/* /.steps-pin */}
</section>

{/* ============ BOOKING (standalone showcase, between Steps and Features) ============ */}

    </>
  );
}

export default function B2BSection() {
  return (
    <>
<section className="b2b-section" id="b2b">
  <div className="b2b-pat" aria-hidden="true"></div>
  <div className="wrap">
    <div className="b2b-grid">
      <div className="reveal">
        <span className="eyebrow">Mwafq for Teams</span>
        <h2 className="section-title">
          Your team&#x2019;s medical exams,<br/><span className="ital">one dashboard.</span>
          
        </h2>
        <p className="section-sub" style={{"marginBottom":"30px"}}>
          Book in bulk, track every employee, retrieve every report — all from the Mwafq corporate dashboard. We take care of the logistics so you can take care of your people.
          
        </p>
        <ul className="b2b-points">
          <li>One-click bulk bookings across the entire team</li>
          <li>Add employees manually or sync your HR system</li>
          <li>Pre-employment, residency &amp; municipality — together</li>
          <li>Reports delivered straight to your dashboard</li>
        </ul>
        <div style={{"display":"flex", "gap":"14px", "flexWrap":"wrap"}}>
          <a href="#" className="btn btn-cyan" data-cursor>Open Corporate Account</a>
          <a href="#" className="btn btn-ghost" data-cursor style={{"color":"#fff", "borderColor":"rgba(255,255,255,0.30)"}}>Book a Demo</a>
        </div>
      </div>

      <div className="dash reveal delay-2">
        <div className="dash-tabs">
          <button className="dash-tab active">Overview</button>
          <button className="dash-tab">Employees</button>
          <button className="dash-tab">Reports</button>
        </div>
        <div className="dash-stats">
          <div className="dash-stat">
            <div className="v">248</div>
            <div className="l">Employees</div>
            <div className="bars" aria-hidden="true">
              <span className="b-30"></span><span className="b-55"></span><span className="b-40"></span><span className="b-80"></span><span className="b-60"></span><span className="b-90"></span><span className="b-70"></span>
            </div>
          </div>
          <div className="dash-stat">
            <div className="v">96<span style={{"fontSize":"0.6em"}}>%</span></div>
            <div className="l">Cleared</div>
            <div className="bars" aria-hidden="true">
              <span className="b-80"></span><span className="b-85"></span><span className="b-75"></span><span className="b-90"></span><span className="b-88"></span><span className="b-96"></span><span className="b-95"></span>
            </div>
          </div>
          <div className="dash-stat">
            <div className="v">12</div>
            <div className="l">Pending</div>
            <div className="bars" aria-hidden="true">
              <span className="b-60"></span><span className="b-40"></span><span className="b-50"></span><span className="b-30"></span><span className="b-35"></span><span className="b-50"></span><span className="b-30"></span>
            </div>
          </div>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Ahmad K.</strong>
            <span>Pre-Employment Basic · Riyadh</span>
          </div>
          <span className="pill-st ok">Completed</span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Sara M.</strong>
            <span>Residency Exam · Jeddah</span>
          </div>
          <span className="pill-st prog">In Progress</span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Faisal H.</strong>
            <span>Occupational Exam · Dammam</span>
          </div>
          <span className="pill-st pend">Scheduled</span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Noor A.</strong>
            <span>Municipality Exam · Riyadh</span>
          </div>
          <span className="pill-st ok">Completed</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ TESTIMONIAL ============ */}

    </>
  );
}

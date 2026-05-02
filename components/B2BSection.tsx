export default function B2BSection() {
  return (
    <>
<section className="b2b-section" id="b2b">
  <div className="b2b-pat" aria-hidden="true"></div>
  <div className="wrap">
    <div className="b2b-grid">
      <div className="reveal">
        <span className="eyebrow"><span className="en-only">Mwafq for Teams</span><span className="ar-only">موافق للفِرق</span></span>
        <h2 className="section-title">
          <span className="en-only">Your team&#x2019;s medical exams,<br/><span className="ital">one dashboard.</span></span>
          <span className="ar-only">فحوصات فريقك الطبية،<br/><span className="ital">في لوحة واحدة.</span></span>
        </h2>
        <p className="section-sub" style={{"marginBottom":"30px"}}>
          <span className="en-only">Book in bulk, track every employee, retrieve every report — all from the Mwafq corporate dashboard. We take care of the logistics so you can take care of your people.</span>
          <span className="ar-only">احجز جماعياً، تابع كل موظف، واستلم كل تقرير — من لوحة موافق للشركات. نحن نتولّى التفاصيل لتتفرّغ لرعاية فريقك.</span>
        </p>
        <ul className="b2b-points">
          <li><span className="en-only">One-click bulk bookings across the entire team</span><span className="ar-only">حجز جماعي بنقرة واحدة لجميع الفريق</span></li>
          <li><span className="en-only">Add employees manually or sync your HR system</span><span className="ar-only">أضف الموظفين يدوياً أو زامن نظام الموارد البشرية</span></li>
          <li><span className="en-only">Pre-employment, residency &amp; municipality — together</span><span className="ar-only">ما قبل التوظيف، الإقامة، والبلدية — في مكان واحد</span></li>
          <li><span className="en-only">Reports delivered straight to your dashboard</span><span className="ar-only">تقارير تُسلَّم مباشرة إلى لوحتك</span></li>
        </ul>
        <div style={{"display":"flex", "gap":"14px", "flexWrap":"wrap"}}>
          <a href="#" className="btn btn-cyan" data-cursor><span className="en-only">Open Corporate Account</span><span className="ar-only">افتح حساب شركة</span></a>
          <a href="#" className="btn btn-ghost" data-cursor style={{"color":"#fff", "borderColor":"rgba(255,255,255,0.30)"}}><span className="en-only">Book a Demo</span><span className="ar-only">احجز عرضاً تجريبياً</span></a>
        </div>
      </div>

      <div className="dash reveal delay-2">
        <div className="dash-tabs">
          <button className="dash-tab active"><span className="en-only">Overview</span><span className="ar-only">نظرة عامة</span></button>
          <button className="dash-tab"><span className="en-only">Employees</span><span className="ar-only">الموظفون</span></button>
          <button className="dash-tab"><span className="en-only">Reports</span><span className="ar-only">التقارير</span></button>
        </div>
        <div className="dash-stats">
          <div className="dash-stat">
            <div className="v">248</div>
            <div className="l"><span className="en-only">Employees</span><span className="ar-only">موظف</span></div>
            <div className="bars" aria-hidden="true">
              <span className="b-30"></span><span className="b-55"></span><span className="b-40"></span><span className="b-80"></span><span className="b-60"></span><span className="b-90"></span><span className="b-70"></span>
            </div>
          </div>
          <div className="dash-stat">
            <div className="v">96<span style={{"fontSize":"0.6em"}}>%</span></div>
            <div className="l"><span className="en-only">Cleared</span><span className="ar-only">معتمد</span></div>
            <div className="bars" aria-hidden="true">
              <span className="b-80"></span><span className="b-85"></span><span className="b-75"></span><span className="b-90"></span><span className="b-88"></span><span className="b-96"></span><span className="b-95"></span>
            </div>
          </div>
          <div className="dash-stat">
            <div className="v">12</div>
            <div className="l"><span className="en-only">Pending</span><span className="ar-only">قيد الانتظار</span></div>
            <div className="bars" aria-hidden="true">
              <span className="b-60"></span><span className="b-40"></span><span className="b-50"></span><span className="b-30"></span><span className="b-35"></span><span className="b-50"></span><span className="b-30"></span>
            </div>
          </div>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Ahmad K.</strong>
            <span><span className="en-only">Pre-Employment Basic · Riyadh</span><span className="ar-only">ما قبل التوظيف · الرياض</span></span>
          </div>
          <span className="pill-st ok"><span className="en-only">Completed</span><span className="ar-only">مكتمل</span></span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Sara M.</strong>
            <span><span className="en-only">Residency Exam · Jeddah</span><span className="ar-only">فحص الإقامة · جدة</span></span>
          </div>
          <span className="pill-st prog"><span className="en-only">In Progress</span><span className="ar-only">قيد التنفيذ</span></span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Faisal H.</strong>
            <span><span className="en-only">Occupational Exam · Dammam</span><span className="ar-only">فحص مهني · الدمام</span></span>
          </div>
          <span className="pill-st pend"><span className="en-only">Scheduled</span><span className="ar-only">مجدول</span></span>
        </div>
        <div className="emp">
          <div className="ic" aria-hidden="true"><span className="profile-ic"></span></div>
          <div className="info">
            <strong>Noor A.</strong>
            <span><span className="en-only">Municipality Exam · Riyadh</span><span className="ar-only">فحص البلدية · الرياض</span></span>
          </div>
          <span className="pill-st ok"><span className="en-only">Completed</span><span className="ar-only">مكتمل</span></span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ TESTIMONIAL ============ */}

    </>
  );
}

export default function StatsSection() {
  return (
    <>
<section className="stats-section">
  <div className="wrap">
    <div className="head-flex reveal">
      <div>
        <span className="eyebrow"><span className="en-only">Mwafq Academy</span><span className="ar-only">أكاديمية موافق</span></span>
        <h2 className="section-title">
          <span className="en-only">Keep your skills<br/><span className="cyan">sharp.</span></span>
          <span className="ar-only">حافظ على مهاراتك<br/><span className="cyan">في القمة.</span></span>
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
          <span className="course-tag"><span className="en-only">First Aid</span><span className="ar-only">إسعافات أولية</span></span>
        </div>
        <div className="course-title"><span className="en-only">Advanced First Aid (Workplace Edition)</span><span className="ar-only">الإسعافات الأولية المتقدّمة (نسخة بيئة العمل)</span></div>
        <div className="course-desc">
          <span className="en-only">Develop your professional and medical skills through specialised, certified courses.</span>
          <span className="ar-only">طوّر مهاراتك المهنية والطبية عبر دورات متخصصة ومعتمدة.</span>
        </div>
        <div className="course-meta">
          <div className="rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            4.8 <span style={{"color":"var(--c-muted)", "fontWeight":"500"}}>(12)</span>
          </div>
          <a href="#" className="course-link"><span className="en-only">Enroll</span><span className="ar-only">سجّل</span> →</a>
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
        <div className="course-title"><span className="en-only">CPR Basics — Lifesaving Essentials</span><span className="ar-only">أساسيات الإنعاش القلبي — مهارات إنقاذ الحياة</span></div>
        <div className="course-desc">
          <span className="en-only">Master the basics of CPR with hands-on, certified training trusted by clinics and businesses.</span>
          <span className="ar-only">تمكّن من أساسيات الإنعاش القلبي بتدريب عملي معتمد تثق به العيادات والشركات.</span>
        </div>
        <div className="course-meta">
          <div className="rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            4.8 <span style={{"color":"var(--c-muted)", "fontWeight":"500"}}>(12)</span>
          </div>
          <a href="#" className="course-link"><span className="en-only">Enroll</span><span className="ar-only">سجّل</span> →</a>
        </div>
      </div>

      <div className="course bundle reveal delay-2" data-cursor>
        <span className="course-bracket" aria-hidden="true"></span>
        <div className="course-head">
          <div className="course-mini-icon" aria-hidden="true">
            <span className="svg-ic ic-cert"></span>
          </div>
          <span className="course-tag"><span className="en-only">Save 30%</span><span className="ar-only">وفّر 30%</span></span>
        </div>
        <div className="course-title"><span className="en-only">Certified Safety Officer Bundle</span><span className="ar-only">باقة مسؤول السلامة المعتمد</span></div>
        <div className="course-desc">
          <span className="en-only">First Aid, Infection Control, Risk Assessment — full certificate, one bundle.</span>
          <span className="ar-only">إسعافات أولية، مكافحة العدوى، تقييم المخاطر — شهادة كاملة في باقة واحدة.</span>
        </div>
        <div className="course-meta">
          <div>
            <span className="price-now">400 SR</span>
            <span className="price-old">600 SR</span>
          </div>
          <a href="#" className="course-link"><span className="en-only">Get Bundle</span><span className="ar-only">احصل عليها</span> →</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ STATS content now lives in the (former) academy wrapper ============ */}

    </>
  );
}

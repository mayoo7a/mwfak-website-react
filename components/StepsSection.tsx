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
        <span className="eyebrow reveal"><span className="en-only">How it works</span><span className="ar-only">كيف نعمل</span></span>
        <h2 className="section-title reveal delay-1">
          <span className="en-only">Three taps<br/><span className="cyan">Done.</span></span>
          <span className="ar-only">ثلاث نقرات<br/><span className="cyan">واكتمل.</span></span>
        </h2>
        <a href="#booking" className="btn btn-primary reveal delay-3" data-cursor style={{"marginTop":"30px"}}>
          <span className="en-only">Start Booking →</span><span className="ar-only">ابدأ الحجز →</span>
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
                <span className="en-only">Book your appointment</span>
                <span className="ar-only">احجز موعدك</span>
              </h3>
              <p>
                <span className="en-only">Choose your exam and review the preconditions and requirements.</span>
                <span className="ar-only">اختر الفحص، راجع المتطلبات والشروط، وثبّت موعدك في ثوانٍ.</span>
              </p>
              <div className="step-meta">
                <span><b>30s</b> <span className="en-only">avg booking</span><span className="ar-only">متوسط الحجز</span></span>
                <span><b>100+</b> <span className="en-only">centres</span><span className="ar-only">مراكز</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="step-card reveal delay-1" data-cursor>
          <div className="step-row">
            <div className="step-num" aria-hidden="true">02</div>
            <div>
              <h3>
                <span className="en-only">Take the exam</span>
                <span className="ar-only">أجرِ الفحص</span>
              </h3>
              <p>
                <span className="en-only">Head to the medical center at your scheduled time and track your status updates in the app.</span>
                <span className="ar-only">توجّه إلى المركز الطبي في موعدك، وتابع تحديث الحالة في التطبيق لحظياً.</span>
              </p>
              <div className="step-meta">
                <span><b>9 min</b> <span className="en-only">avg exam</span><span className="ar-only">متوسط الفحص</span></span>
                <span><b>Live</b> <span className="en-only">status updates</span><span className="ar-only">تحديثات مباشرة</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="step-card reveal delay-2" data-cursor>
          <div className="step-row">
            <div className="step-num" aria-hidden="true">03</div>
            <div>
              <h3>
                <span className="en-only">Receive the result</span>
                <span className="ar-only">استلم النتيجة</span>
              </h3>
              <p>
                <span className="en-only">Download your medical report and check for your "Fit for Service" badge as soon as it's ready.</span>
                <span className="ar-only">حمّل تقريرك الطبي، وتحقق من شارة &#x201C;صالح للخدمة&#x201D; فور صدورها.</span>
              </p>
              <div className="step-meta">
                <span><b>&lt;3 days</b> <span className="en-only">avg delivery</span><span className="ar-only">متوسط التسليم</span></span>
                <span><b>PDF</b> <span className="en-only">on your phone</span><span className="ar-only">على هاتفك</span></span>
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

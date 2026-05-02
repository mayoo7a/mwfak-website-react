export default function AcademySection() {
  return (
    <>
<section className="section academy-section" id="academy">
  <div className="wrap">
    <h2 className="stats-title reveal">
      <span className="en-only">Trusted at Scale</span>
      <span className="ar-only">ثقة بالأرقام</span>
    </h2>
    <div className="stats-grid">
      <div className="stat reveal">
        <div className="num mint" data-count="98" data-suffix="%">0</div>
        <div className="lbl"><span className="en-only">On-time delivery</span><span className="ar-only">تسليم في الوقت</span></div>
      </div>
      <div className="stat reveal delay-1">
        <div className="num cyan" data-count="500" data-suffix="+">0</div>
        <div className="lbl"><span className="en-only">Completed Exams</span><span className="ar-only">فحوصات مكتملة</span></div>
      </div>
      <div className="stat reveal delay-2">
        <div className="num purple" data-count="100" data-suffix="+">0</div>
        <div className="lbl"><span className="en-only">Certified clinics &amp; labs</span><span className="ar-only">مركز ومختبر معتمد</span></div>
      </div>
      <div className="stat reveal delay-3">
        <div className="num" data-count="10000" data-suffix="K+">0</div>
        <div className="lbl"><span className="en-only">App users</span><span className="ar-only">مستخدم للتطبيق</span></div>
      </div>
    </div>
  </div>
</section>

{/* ============ B2B (freeform brand gradient) ============ */}

    </>
  );
}

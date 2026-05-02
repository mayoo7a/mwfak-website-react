export default function QuoteSection() {
  return (
    <>
<section className="quote-section">
  <div className="quote-pat" aria-hidden="true"></div>
  <span className="q-corner tl" aria-hidden="true"></span>
  <span className="q-corner br" aria-hidden="true"></span>
  <div className="wrap">
    <div className="quote-wrap reveal">
      <div className="quote-text">
        <span className="en-only">We moved 240 staff through residency screening in a single week. With Mwafq, what used to take a month now takes <em>three days.</em></span>
        <span className="ar-only">أنجزنا فحوصات الإقامة لـ 240 موظفاً في أسبوع واحد. مع موافق، ما كان يستغرق شهراً صار يأخذ <em>ثلاثة أيام.</em></span>
      </div>
      <div className="quote-author">
        <div className="qa-img" aria-hidden="true"><span className="profile-ic"></span></div>
        <div className="qa-info">
          <strong><span className="en-only">Anonymous</span><span className="ar-only">شهادة مجهولة الهوية</span></strong>
          <span><span className="en-only">HR Director · Riyadh logistics company</span><span className="ar-only">مديرة موارد بشرية · شركة لوجستية في الرياض</span></span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA — now a real <section> (M-8) ============ */}

    </>
  );
}

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
        We moved 240 staff through residency screening in a single week. With Mwafq, what used to take a month now takes <em>three days.</em>
        
      </div>
      <div className="quote-author">
        <div className="qa-img" aria-hidden="true"><span className="profile-ic"></span></div>
        <div className="qa-info">
          <strong>Anonymous</strong>
          <span>HR Director · Riyadh logistics company</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============ CTA — now a real <section> (M-8) ============ */}

    </>
  );
}

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-pattern" aria-hidden="true"></div>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tag reveal delay-1">
                <span className="circle-wrapper" aria-hidden="true">
                  <span className="circle c1"><img src="/img1.jpg" alt="" /></span>
                  <span className="circle c2"><img src="/img2.jpg" alt="" /></span>
                  <span className="circle c3"><img src="/img3.jpg" alt="" /></span>
                </span>
                <span className="en-only">Trusted by 500+ healthcare partners across KSA</span>
                <span className="ar-only">يثق بنا أكثر من 500 شريك صحي في المملكة</span>
              </span>
              <h1 className="hero-title">
                <span className="en-only">
                  <span style={{ whiteSpace: "nowrap" }}>
                    <span className="word-reveal"><span>Medical</span></span>
                    <span className="word-reveal delay-1"><span>exams</span></span>
                  </span>
                  <br/>
                  <span className="word-reveal delay-2"><span>made</span></span>
                  <span className="tw-wrap"><span className="tw-stack"><span className="tw-clip tw-clip-1"><span className="tw-text">Easier.</span></span><span className="tw-clip tw-clip-2"><span className="tw-text">Faster.</span></span><span className="tw-clip tw-clip-3"><span className="tw-text">Better.</span></span></span><span className="tw-cursor" aria-hidden="true"></span></span>
                </span>
                <span className="ar-only">
                  <span className="word-reveal"><span>الفحوصات الطبية</span></span><br/>
                  <span className="word-reveal delay-2"><span className="ital">الرسمية،</span></span>
                  <span className="word-reveal delay-3"><span className="cyan">ببساطة.</span></span>
                </span>
              </h1>
              <p className="hero-sub reveal delay-3">
                <span className="en-only">Your premier platform for booking and managing certified medical exams. Book exams for residency, driving license, municipality, and occupational health. Receive your reports<br/>and &ldquo;Fit for Service&rdquo; badge directly on your phone.</span>
                <span className="ar-only">منصة المملكة الموثوقة لحجز وإتمام واعتماد الفحوصات الطبية الرسمية — الإقامة، رخصة القيادة، البلدية، والصحة المهنية. من الحجز حتى شارة "صالح للخدمة"، الكل في تطبيق واحد.</span>
              </p>
              <div className="hero-actions reveal delay-4">
                <a href="#booking" className="btn btn-primary no-magnet" data-cursor>
                  <span className="en-only">Book Your Exam</span><span className="ar-only">احجز فحصك</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#app" className="btn btn-line no-magnet" data-cursor>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>
                  <span className="en-only">Download App</span><span className="ar-only">حمّل التطبيق</span>
                </a>
              </div>
              <div className="hero-stats reveal delay-4">
                <div className="hero-stat">
                  <strong data-count="50000" data-suffix="K+">0</strong>
                  <span className="en-only">Completed Exams</span><span className="ar-only">فحص مكتمل</span>
                </div>
                <div className="hero-stat">
                  <strong><span className="star">★</span><span data-count="4.9" data-decimals="1">0.0</span></strong>
                  <span className="en-only">Avg App Rating</span><span className="ar-only">متوسط تقييم التطبيق</span>
                </div>
                <div className="hero-stat">
                  <strong data-count="500" data-suffix="+">0</strong>
                  <span className="en-only">Corporate Partners</span><span className="ar-only">شريك من الشركات</span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal delay-2">
              <div className="float-card float-1">
                <span className="svg-ic ic-shield" aria-hidden="true"></span>
                <div className="fc-text">
                  <strong><span className="en-only">Fit for Service</span><span className="ar-only">صالح للخدمة</span></strong>
                  <span><span className="en-only">Driving — Approved</span><span className="ar-only">قيادة — معتمد</span></span>
                </div>
              </div>
              <div className="float-card float-2">
                <span className="svg-ic ic-ecg" aria-hidden="true"></span>
                <div className="fc-text">
                  <strong><span className="en-only">Real-time</span><span className="ar-only">لحظي</span></strong>
                  <span><span className="en-only">Updated 2m ago</span><span className="ar-only">تحدّث قبل دقيقتين</span></span>
                </div>
              </div>
              <div className="float-card float-3">
                <span className="svg-ic ic-cal" aria-hidden="true"></span>
                <div className="fc-text">
                  <strong><span className="en-only">Booked</span><span className="ar-only">تم الحجز</span></strong>
                  <span><span className="en-only">Tomorrow · 9:00 AM</span><span className="ar-only">غداً · 9:00 صباحاً</span></span>
                </div>
              </div>

              <div className="phone-frame" id="heroPhone">
                <div className="phone-notch" aria-hidden="true"></div>
                <div className="phone-screen ph-home">
                  <div className="ph-header">
                    <div>
                      <div className="ph-greet"><span className="en-only">Hello,</span><span className="ar-only">مرحباً،</span></div>
                      <div className="ph-name">Ahmad</div>
                    </div>
                    <div className="ph-bell" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                      <span className="ph-bell-dot"></span>
                    </div>
                  </div>

                  <div className="ph-search">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span><span className="en-only">Find your exam</span><span className="ar-only">ابحث عن فحصك</span></span>
                  </div>

                  <div className="ph-sec">
                    <span className="ph-sec-title"><span className="en-only">Services</span><span className="ar-only">الخدمات</span></span>
                    <span className="ph-sec-link"><span className="en-only">See all</span><span className="ar-only">عرض الكل</span></span>
                  </div>

                  <div className="ph-grid">
                    <div className="ph-tile ph-tile--sky">
                      <span className="ph-tile-ic"><span className="svg-ic ic-car" aria-hidden="true"></span></span>
                      <strong><span className="en-only">Driving</span><span className="ar-only">القيادة</span></strong>
                      <span><span className="en-only">License</span><span className="ar-only">رخصة</span></span>
                    </div>
                    <div className="ph-tile ph-tile--purple">
                      <span className="ph-tile-ic"><span className="svg-ic ic-building" aria-hidden="true"></span></span>
                      <strong><span className="en-only">Residency</span><span className="ar-only">الإقامة</span></strong>
                      <span><span className="en-only">Iqama</span><span className="ar-only">إقامة</span></span>
                    </div>
                    <div className="ph-tile ph-tile--mint">
                      <span className="ph-tile-ic"><span className="svg-ic ic-cert" aria-hidden="true"></span></span>
                      <strong><span className="en-only">Municipality</span><span className="ar-only">البلدية</span></strong>
                      <span><span className="en-only">Health Cert.</span><span className="ar-only">شهادة صحية</span></span>
                    </div>
                    <div className="ph-tile ph-tile--peri">
                      <span className="ph-tile-ic"><span className="svg-ic ic-briefcase" aria-hidden="true"></span></span>
                      <strong><span className="en-only">Occupational</span><span className="ar-only">المهنية</span></strong>
                      <span><span className="en-only">Pre-employ.</span><span className="ar-only">ما قبل التوظيف</span></span>
                    </div>
                  </div>

                  <div className="ph-live">
                    <span className="ph-live-dot" aria-hidden="true"></span>
                    <span className="ph-live-tx">
                      <strong>247</strong>
                      <span><span className="en-only">booked today</span><span className="ar-only">حجزوا اليوم</span></span>
                    </span>
                    <span className="ph-live-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          <img className="ticker-logo" src="/Logos/logo01.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo03.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo04.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo05.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo06.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo07.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo08.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo09.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo10.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo11.svg" alt="Partner logo" />
          <img className="ticker-logo" src="/Logos/logo01.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo03.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo04.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo05.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo06.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo07.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo08.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo09.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo10.svg" alt="" aria-hidden="true" />
          <img className="ticker-logo" src="/Logos/logo11.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}

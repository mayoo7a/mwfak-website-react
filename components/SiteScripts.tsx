// @ts-nocheck
/* eslint-disable */
'use client';

import { useEffect } from 'react';

/**
 * SiteScripts — direct port of the vanilla <script> from index16.html
 * wrapped inside a useEffect so it runs after mount.
 *
 * The original code uses document.querySelector* against rendered DOM,
 * which works fine in a client component once the page has hydrated.
 *
 * Light mode only: the original script does NOT wire up the theme button,
 * so no dark-mode logic exists here either.
 */
export default function SiteScripts() {
  useEffect(() => {
    // Avoid re-running if already initialized (StrictMode double-invoke in dev)
    if ((window as any).__mwafakInit) return;
    (window as any).__mwafakInit = true;

    const cleanups: Array<() => void> = [];
    const addWin = (type: string, fn: any, opts?: any) => {
      window.addEventListener(type, fn, opts);
      cleanups.push(() => window.removeEventListener(type, fn, opts));
    };
    const addDoc = (type: string, fn: any, opts?: any) => {
      document.addEventListener(type, fn, opts);
      cleanups.push(() => document.removeEventListener(type, fn, opts));
    };

    // ---- Begin ported script ----
    (() => {
  // ============= Custom cursor =============
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mx=0,my=0, rx=0,ry=0;
  addDoc('mousemove',(e)=>{
    mx=e.clientX; my=e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
  });
  function loopRing(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
     ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(loopRing);
  }
  loopRing();
  document.querySelectorAll('[data-cursor], a, button').forEach(el=>{
    el.addEventListener('mouseenter', ()=> document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', ()=> document.body.classList.remove('cursor-hover'));
  });
  document.querySelectorAll('input, select, textarea').forEach(el=>{
    el.addEventListener('focus', ()=> document.body.classList.add('in-form'));
    el.addEventListener('blur',  ()=> document.body.classList.remove('in-form'));
    el.addEventListener('mouseenter', ()=> document.body.classList.add('in-form'));
    el.addEventListener('mouseleave', ()=> document.body.classList.remove('in-form'));
  });

  // Nav scroll state
  const nav = document.getElementById('nav');
  addWin('scroll', ()=>{
    if(window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Reveal observer (handles .reveal, .reveal-x, .word-reveal, .draw-path)
  const reveals = document.querySelectorAll('.reveal, .reveal-x, .word-reveal, .draw-path');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(r => io.observe(r));
  addWin('load', ()=>{
    setTimeout(()=>{
      document.querySelectorAll('.hero .word-reveal, .hero .reveal').forEach(el=>{
        el.classList.add('in');
      });
    }, 200);
  });

  // Number counters (supports both integers and decimals via data-decimals)
  function fmt(n, suf, decimals){
    if(suf === 'K+'){ return Math.round(n/1000) + 'K+'; }
    if(decimals && decimals > 0){ return n.toFixed(decimals) + (suf || ''); }
    return Math.round(n).toLocaleString() + (suf || '');
  }
  const cIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suf = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const dur = 1800;
        const t0 = performance.now();
        function tick(now){
          const t = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = fmt(target * eased, suf, decimals);
          if(t < 1) requestAnimationFrame(tick);
          else el.textContent = fmt(target, suf, decimals);
        }
        requestAnimationFrame(tick);
        cIO.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(c=> cIO.observe(c));

  // Magnetic buttons (skip .no-magnet)
  document.querySelectorAll('.btn-primary:not(.no-magnet), .btn-cyan:not(.no-magnet), .btn-line:not(.no-magnet), .btn-ghost:not(.no-magnet)').forEach(b=>{
    b.addEventListener('mousemove', (e)=>{
      const r = b.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      b.style.transform = `translate(${x*0.18}px, ${y*0.25}px)`;
    });
    b.addEventListener('mouseleave', ()=>{ b.style.transform = ''; });
  });

  // 3D phone tilt
  const phones = document.getElementById('phones');
  const showVisual = document.querySelector('.show-visual');
  if(phones && showVisual){
    showVisual.addEventListener('mousemove', (e)=>{
      const r = showVisual.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
      phones.style.transform = `translate(-50%,-50%) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    showVisual.addEventListener('mouseleave', ()=>{ phones.style.transform = ''; });
  }

  // Hero phone parallax
  const heroPhone = document.getElementById('heroPhone');
  const heroVisual = document.querySelector('.hero-visual');
  if(heroPhone && heroVisual){
    heroVisual.addEventListener('mousemove', (e)=>{
      const r = heroVisual.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
      heroPhone.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
    heroVisual.addEventListener('mouseleave', ()=>{ heroPhone.style.transform = ''; });
  }

  // Anchor smooth-scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      if(id.length>1 && document.querySelector(id)){
        e.preventDefault();
        const top = document.querySelector(id).offsetTop - 90;
        window.scrollTo({ top, behavior:'smooth' });
      }
    });
  });

  // Nav-link active state — toggles on click
  const navLinkEls = document.querySelectorAll('.nav-links a');
  // Lock window: when set, scrollspy won't overwrite the user's clicked highlight
  let clickLockUntil = 0;
  navLinkEls.forEach(link=>{
    link.addEventListener('click', ()=>{
      navLinkEls.forEach(l=> l.classList.remove('active'));
      link.classList.add('active');
      // Lock for 1.1s so the smooth-scroll can finish without scrollspy overriding
      clickLockUntil = Date.now() + 1100;
    });
  });

  // Scrollspy — auto-highlight nav title whose section is currently in view
  const navTargetMap = {};
  navLinkEls.forEach(link=>{
    const href = link.getAttribute('href');
    if(href && href.startsWith('#') && href.length > 1){
      const target = document.querySelector(href);
      if(target) navTargetMap[href.slice(1)] = link;
    }
  });
  const spyIO = new IntersectionObserver((entries)=>{
    if(Date.now() < clickLockUntil) return; // respect the user's click
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        if(navTargetMap[id]){
          navLinkEls.forEach(l=> l.classList.remove('active'));
          navTargetMap[id].classList.add('active');
        }
      }
    });
  }, {
    rootMargin: '-30% 0px -55% 0px',
    threshold: 0
  });
  Object.keys(navTargetMap).forEach(id=>{
    if(id === 'home') return; // never auto-highlight Home — top of page should be neutral
    const el = document.getElementById(id);
    if(el) spyIO.observe(el);
  });
  // Clear active states near the top — but never clear during the click-lock window,
  // and always preserve Home (so a Home click stays highlighted at the top)
  addWin('scroll', ()=>{
    if(window.scrollY < 120 && Date.now() >= clickLockUntil){
      navLinkEls.forEach(l=>{
        if(l.getAttribute('href') !== '#home') l.classList.remove('active');
      });
    }
  });

  // Language toggle (EN <-> AR)
  const root = document.getElementById('rootHtml');
  document.getElementById('langBtn').addEventListener('click', ()=>{
    const isAr = root.lang === 'ar';
    if(isAr){ root.lang = 'en'; root.removeAttribute('dir'); }
    else    { root.lang = 'ar'; root.setAttribute('dir','rtl'); }
  });

  /* ============================================================
     "How it works" — pin the entire section, scroll the right column.

     The .steps-section is given a tall height by JS so that an inner
     position:sticky element (.steps-pin, height:100vh) stays anchored
     to the viewport top for the duration of that extra height. While
     pinned, the LEFT column stays locked in place, and the right
     column's .step-list is translated upward in lockstep with the
     page scroll — so the cards "scroll" inside .step-list-viewport.
     When card 3 has been reached (= scrolled past the full distance),
     the pin releases and the page resumes its normal vertical scroll.
     ============================================================ */
  (function initStepsPin(){
    const section  = document.querySelector('.steps-section');
    const pin      = document.querySelector('.steps-pin');
    const list     = document.querySelector('.step-list');
    const viewport = document.querySelector('.step-list-viewport');
    if(!section || !pin || !list || !viewport) return;

    // px the cards start BELOW their natural top when the section first pins.
    // The user has to scroll this much before the cards reach their normal
    // starting position; from there the translate continues as before.
    const INITIAL_OFFSET = 200;

    // px of EXTRA scroll runway after the cards have reached their final
    // position. During this stretch the list is frozen at its end position
    // (cards 2 + 3 fully visible) — the pin just holds them on screen so
    // the section "lasts" longer without over-translating past the end.
    const END_HOLD = 500;

    // px to LIFT the cards above the natural "card 3 bottom = box bottom"
    // end position. Larger = card 3 ends higher in the box (its bottom
    // rises above the box bottom; the visible portion of card 1 shrinks).
    const EXTRA_LIFT = 100;

    let vh             = 0;   // viewport height
    let sectionTop     = 0;   // .steps-section's offset from document top
    let scrollDistance = 0;   // how many px the user must scroll while pinned
    let endTranslate   = 0;   // most-negative translate (= -needed) — the cards' end position

    function measure(){
      // Reset to natural state to take clean measurements
      list.style.transform = '';
      section.style.height = '';

      vh = window.innerHeight;

      // The right-column list's natural height vs. the visible window:
      //   listH  = total stack height of all cards (incl. gaps)
      //   boxH   = visible height of .step-list-viewport
      //   needed = how far the list must translate so the BOTTOM of the
      //            last card lines up with the bottom of the viewport box
      //            (= card 3 fully visible at the end), plus EXTRA_LIFT to
      //            push card 3 higher past the box bottom.
      const listH = list.scrollHeight;
      const boxH  = viewport.offsetHeight;
      const needed = Math.max(listH - boxH, 0) + EXTRA_LIFT;

      // Cache the cards' end position (most-negative translate) so update()
      // can clamp the linear motion at this value during the END_HOLD stretch.
      endTranslate = -needed;

      // Total scroll the pin must absorb = INITIAL_OFFSET (start drop) +
      // the natural translate distance + END_HOLD (extra runway where the
      // cards stay frozen at their end position). The pin releases at the
      // bottom of this distance, with cards 2 + 3 fully visible.
      scrollDistance = INITIAL_OFFSET + needed + END_HOLD;

      // Section height = pin height + the scroll distance the pin must absorb
      section.style.height = (vh + scrollDistance) + 'px';

      // Cache the section's document-top so update() can be O(1)
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
    }

    function update(){
      // Disable on mobile (matches CSS media query at 980px)
      if(window.innerWidth <= 980){
        list.style.transform = '';
        return;
      }

      // How far the user has scrolled INTO the section, clamped to the pin's
      // active range. 0 = section just hit viewport top. scrollDistance =
      // the moment card 3 has been reached (and the pin is about to release).
      const scrolled = Math.min(
        Math.max(window.scrollY - sectionTop, 0),
        scrollDistance
      );

      // Translate the right-column list. Starts at +INITIAL_OFFSET (cards
      // sit 200 px below their natural position) and decreases linearly
      // with scroll, but clamped at endTranslate (= -needed) so the list
      // never over-shoots past its end position. During the END_HOLD
      // stretch the translate stays pinned at endTranslate.
      const translate = Math.max(INITIAL_OFFSET - scrolled, endTranslate);
      list.style.transform = `translate3d(0, ${translate}px, 0)`;
    }

    // Throttle with rAF
    let ticking = false;
    function onScroll(){
      if(!ticking){
        ticking = true;
        requestAnimationFrame(()=>{ update(); ticking = false; });
      }
    }

    function onResize(){
      measure();
      update();
    }

    function init(){
      measure();
      update();
    }

    if(document.readyState === 'complete'){
      init();
    } else {
      addWin('load', init);
    }

    addWin('scroll', onScroll, {passive:true});
    addWin('resize', onResize);

    // Re-measure after fonts/images settle so sectionTop is accurate
    setTimeout(()=>{ measure(); update(); }, 800);
  })();

  /* ============================================================
     Custom dropdown (originui/select port) — wires up every
     [data-cs] block so its trigger toggles the panel, options
     can be clicked to select + close, outside-click and Escape
     close the panel, and the trigger label updates to the chosen
     option's text.
     ============================================================ */
  document.querySelectorAll('[data-cs]').forEach(wrap => {
    const trigger = wrap.querySelector('.cs-trigger');
    const panel   = wrap.querySelector('.cs-panel');
    const options = wrap.querySelectorAll('.cs-option');
    const valueEl = wrap.querySelector('.cs-value');

    function openPanel(){
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closePanel(){
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
    function selectOption(opt){
      options.forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      const labelText = opt.querySelector('.cs-label').textContent;
      valueEl.textContent = labelText;
      valueEl.classList.remove('cs-placeholder');
      closePanel();
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (panel.hidden) openPanel(); else closePanel();
    });
    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        selectOption(opt);
      });
    });
    addDoc('click', (e) => {
      if (!wrap.contains(e.target)) closePanel();
    });
    addDoc('keydown', (e) => {
      if (e.key === 'Escape') closePanel();
    });
  });

  /* ============================================================
     Custom date picker — same trigger styling as .cs-trigger; the
     popup renders a full month grid with prev/next nav, today
     highlight, and selected-day highlight. Output is written to
     both the visible trigger label (DD / MM / YYYY) and a hidden
     input (YYYY-MM-DD) for form submission.
     ============================================================ */
  document.querySelectorAll('[data-dp]').forEach(wrap => {
    const trigger      = wrap.querySelector('.cs-trigger');
    const valueEl      = wrap.querySelector('.cs-value');
    const panel        = wrap.querySelector('.dp-panel');
    const monthYearEl  = wrap.querySelector('.dp-month-year');
    const gridEl       = wrap.querySelector('.dp-grid');
    const prevBtn      = wrap.querySelector('.dp-prev');
    const nextBtn      = wrap.querySelector('.dp-next');
    const hidden       = wrap.querySelector('input[type="hidden"]');

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const today = new Date();
    let viewMonth = today.getMonth();
    let viewYear  = today.getFullYear();
    let selected  = null;   // {y, m, d}

    function pad(n){ return String(n).padStart(2,'0'); }

    function render(){
      monthYearEl.textContent = `${monthNames[viewMonth]} ${viewYear}`;
      gridEl.innerHTML = '';
      const firstDay       = new Date(viewYear, viewMonth, 1).getDay();
      const daysInMonth    = new Date(viewYear, viewMonth + 1, 0).getDate();
      const daysInPrev     = new Date(viewYear, viewMonth, 0).getDate();

      // leading days from previous month (greyed)
      for (let i = firstDay - 1; i >= 0; i--){
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'dp-day dp-day-out';
        c.textContent = daysInPrev - i;
        c.disabled = true;
        gridEl.appendChild(c);
      }
      // current month days
      for (let d = 1; d <= daysInMonth; d++){
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'dp-day';
        c.textContent = d;
        // Today is always underlined — independent of whether a date
        // has been selected
        if (viewYear === today.getFullYear() && viewMonth === today.getMonth() && d === today.getDate()){
          c.classList.add('dp-day-today');
        }
        if (selected && viewYear === selected.y && viewMonth === selected.m && d === selected.d){
          c.classList.add('dp-day-selected');
        }
        c.addEventListener('click', () => {
          selected = { y: viewYear, m: viewMonth, d };
          valueEl.textContent = `${pad(d)} / ${pad(viewMonth + 1)} / ${viewYear}`;
          valueEl.classList.remove('cs-placeholder');
          if (hidden) hidden.value = `${viewYear}-${pad(viewMonth+1)}-${pad(d)}`;
          closePanel();
        });
        gridEl.appendChild(c);
      }
      // trailing days from next month to fill the grid (35 or 42 cells)
      const totalSoFar = firstDay + daysInMonth;
      const target     = totalSoFar <= 35 ? 35 : 42;
      const trailing   = target - totalSoFar;
      for (let d = 1; d <= trailing; d++){
        const c = document.createElement('button');
        c.type = 'button';
        c.className = 'dp-day dp-day-out';
        c.textContent = d;
        c.disabled = true;
        gridEl.appendChild(c);
      }
    }

    function openPanel(){
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      render();
    }
    function closePanel(){
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      if (panel.hidden) openPanel(); else closePanel();
    });
    prevBtn.addEventListener('click', e => {
      e.stopPropagation();
      viewMonth--;
      if (viewMonth < 0){ viewMonth = 11; viewYear--; }
      render();
    });
    nextBtn.addEventListener('click', e => {
      e.stopPropagation();
      viewMonth++;
      if (viewMonth > 11){ viewMonth = 0; viewYear++; }
      render();
    });
    addDoc('click', e => {
      if (!wrap.contains(e.target)) closePanel();
    });
    addDoc('keydown', e => {
      if (e.key === 'Escape') closePanel();
    });
  });

  /* ===== Why Mwafq — scroll-driven toolkit with inline title slot ===== */
  (function(){
    var root  = document.querySelector('[data-toolkit]');
    var stage = document.querySelector('[data-stage]');
    if(!root || !stage) return;
    var row   = root.querySelector('[data-row]');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.why-card'));
    var segs  = Array.prototype.slice.call(root.querySelectorAll('.why-seg'));
    var titleFrame = root.querySelector('.why-title-frame');
    var titleEl    = root.querySelector('.why-panel');
    var track = root.querySelector('[data-title-track]');
    if(!cards.length || !titleFrame || !track || !row || !titleEl) return;

    var realCount = cards.length; // 4
    var current = -1;
    root.style.setProperty('--why-idx', 0);

    // Read CSS sizing once so JS layout matches CSS
    function readSizes(){
      var cs = getComputedStyle(root);
      return {
        cardW: parseFloat(cs.getPropertyValue('--why-card-w')) || 96,
        gap  : parseFloat(cs.getPropertyValue('--why-card-gap')) || 18,
        titleW: parseFloat(cs.getPropertyValue('--why-title-w')) || 280
      };
    }

    // Compute and apply translateX for each card and the title slot.
    // Layout when active = K:
    //   cards 0..K  → at their natural slot (i × (card+gap))
    //   title       → immediately after card K  (slot K+1)
    //   cards K+1..3 → shifted right by (titleW + gap) to make room
    function applyLayout(activeIdx){
      var s = readSizes();
      var step = s.cardW + s.gap;
      var titleX = (activeIdx + 1) * step;
      cards.forEach(function(c, i){
        var x;
        if(i <= activeIdx){
          x = i * step;
        } else {
          x = titleX + s.titleW + s.gap + (i - activeIdx - 1) * step;
        }
        c.style.setProperty('--cx', x + 'px');
      });
      titleEl.style.setProperty('--cx', titleX + 'px');
    }

    // Title swap — slide-only, no fade, no overlap.
    // Old item slides out RIGHT, new item slides IN from the LEFT.
    var titleItems = Array.prototype.slice.call(root.querySelectorAll('.why-title-item'));
    var swapTimers = [];
    function clearSwap(){
      swapTimers.forEach(function(t){ clearTimeout(t); });
      swapTimers = [];
    }
    function swapTitle(i){
      if(i === current) return;
      clearSwap();

      // OUTGOING: current active slides right
      var oldItem = titleItems[current];
      if(oldItem){
        oldItem.classList.remove('is-active');
        oldItem.classList.add('is-leaving');
        // After exit completes, snap back to off-left so it's ready next time
        var resetT = setTimeout((function(el){
          return function(){
            if(el.classList.contains('is-leaving') && !el.classList.contains('is-active')){
              el.style.transition = 'none';
              el.classList.remove('is-leaving');
              // Force reflow so the position snap happens before transition is restored
              void el.offsetWidth;
              el.style.transition = '';
            }
          };
        })(oldItem), 360);
        swapTimers.push(resetT);
      }

      // INCOMING: new becomes active. CSS handles the delayed slide-in from left.
      var newItem = titleItems[i];
      if(newItem){
        newItem.classList.remove('is-leaving');
        newItem.style.transition = '';
        newItem.classList.add('is-active');
      }
    }

    function setActive(i, subProgress){
      if(i !== current){
        cards.forEach(function(c, idx){
          var on = idx === i;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        applyLayout(i);
        swapTitle(i);
        current = i;
      }
      // Progress segments — fill past, sub-fill current, empty future
      segs.forEach(function(s, idx){
        var fill;
        if(idx < i)        fill = 1;
        else if(idx === i) fill = Math.max(0, Math.min(1, subProgress));
        else               fill = 0;
        s.style.setProperty('--fill', fill);
      });
    }

    var ticking = false;
    function update(){
      ticking = false;
      // On mobile, sticky stage is disabled in CSS; just keep first card active
      // and don't animate horizontal layout (cards stack via the mobile rule).
      if(window.innerWidth < 881){
        setActive(0, 1);
        return;
      }
      var rect = stage.getBoundingClientRect();
      var stageH = stage.offsetHeight;
      var vh = window.innerHeight;
      var maxScroll = Math.max(1, stageH - vh);
      var p = Math.max(0, Math.min(1, (-rect.top) / maxScroll));
      var raw = p * realCount;
      var idx = Math.min(realCount - 1, Math.floor(raw));
      var sub = Math.min(1, raw - idx);
      if(p >= 0.999){ idx = realCount - 1; sub = 1; }
      setActive(idx, sub);
    }
    function onScroll(){
      if(!ticking){ requestAnimationFrame(update); ticking = true; }
    }
    addWin('scroll', onScroll, { passive: true });
    addWin('resize', onScroll);

    // Click a card → scroll to its slot in the stage
    cards.forEach(function(c){
      c.addEventListener('click', function(){
        if(window.innerWidth < 881) return;
        var i = parseInt(c.getAttribute('data-i'), 10) || 0;
        var stageTop = stage.getBoundingClientRect().top + window.scrollY;
        var maxScroll = Math.max(1, stage.offsetHeight - window.innerHeight);
        var target = stageTop + ((i + 0.5) / realCount) * maxScroll;
        window.scrollTo({ top: Math.round(target), behavior: 'smooth' });
      });
    });

    // Apply initial layout immediately so cards aren't stacked at x=0 on first paint
    applyLayout(0);
    update();
  })();


    })();

    // ---- End ported script ----

    return () => {
      cleanups.forEach((c) => c());
      (window as any).__mwafakInit = false;
    };
  }, []);

  return null;
}

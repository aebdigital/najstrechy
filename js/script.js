const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),touchMultiplier:2});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);
        const header=document.getElementById('site-header');window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>50)});
        const menuToggle=document.getElementById('menu-toggle'),menuClose=document.getElementById('menu-close'),menuLinks=document.querySelectorAll('.menu-link');
        function openMenu(){document.body.classList.add('menu-open');document.body.style.overflow='hidden';lenis.stop()}
        function closeMenu(){document.body.classList.remove('menu-open');document.body.style.overflow='';lenis.start()}
        menuToggle.addEventListener('click',openMenu);menuClose.addEventListener('click',closeMenu);menuLinks.forEach(l=>l.addEventListener('click',closeMenu));
        const fadeObs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting){setTimeout(()=>en.target.classList.add('visible'),0);fadeObs.unobserve(en.target)}})},{threshold:.1});
        document.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right,.fade-in-scale').forEach(el=>fadeObs.observe(el));
        const curtainObs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting){en.target.style.opacity='0';curtainObs.unobserve(en.target)}})},{threshold:.15,rootMargin:'-100px'});
        document.querySelectorAll('.image-curtain').forEach(el=>curtainObs.observe(el));
        const heroSlides=document.querySelectorAll('.hero-slide'),slideInds=document.querySelectorAll('.slide-ind');let cur=0;
        const slideTexts=[{"subtitle": "Kvalitn\u00e9 materi\u00e1ly a priame ceny od v\u00fdrobcu.", "title": "Strechy Ro\u017e\u0148ava"}, {"subtitle": "Eternitov\u00e9, plechov\u00e9 strechy a kom\u00edny.", "title": "Izol\u00e1cie a opravy"}, {"subtitle": "Realiz\u00e1cie do 2 a\u017e 3 t\u00fd\u017ed\u0148ov.", "title": "R\u00fdchla realiz\u00e1cia"}];
        function goSlide(i){heroSlides.forEach(s=>s.classList.remove('active'));slideInds.forEach(ind=>{ind.classList.remove('bg-white','w-20');ind.classList.add('bg-white/30','w-8')});heroSlides[i].classList.add('active');slideInds[i].classList.remove('bg-white/30','w-8');slideInds[i].classList.add('bg-white','w-20');document.getElementById('hero-title').textContent=slideTexts[i].title;document.getElementById('hero-sub').textContent=slideTexts[i].subtitle;cur=i}
        slideInds.forEach(ind=>ind.addEventListener('click',()=>goSlide(parseInt(ind.dataset.i))));setInterval(()=>goSlide((cur+1)%heroSlides.length),6000);
        window.addEventListener('scroll',()=>{const hp=document.getElementById('hero-parallax');if(hp)hp.style.transform='translateY('+(window.scrollY*.1)+'px)'});window.dispatchEvent(new Event('scroll'));
        const refSlider=document.getElementById('ref-slider');document.getElementById('slider-left').addEventListener('click',()=>refSlider.scrollBy({left:-500,behavior:'smooth'}));document.getElementById('slider-right').addEventListener('click',()=>refSlider.scrollBy({left:500,behavior:'smooth'}));

// Scroll depth
  let scrollMarks = [25, 50, 75, 100];
  window.addEventListener('scroll', () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = (window.scrollY / docHeight) * 100;
    scrollMarks = scrollMarks.filter(mark => {
      if (pct >= mark) { plausible('Scroll', { props: { depth: mark + '%' } }); return false; }
      return true;
    });
  });
  // Time milestones
  setTimeout(() => plausible('Time30s'), 30000);
  setTimeout(() => plausible('Time60s'), 60000);
  setTimeout(() => plausible('Time120s'), 120000);
  // Clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(el =>
    el.addEventListener('click', () => plausible('PhoneClick')));
  document.querySelectorAll('a[href^="mailto:"]').forEach(el =>
    el.addEventListener('click', () => plausible('EmailClick')));

(function(){
  var shown=false;
  function showBanner(){if(shown)return;shown=true;document.getElementById('cta-banner').style.bottom='24px';}
  setTimeout(showBanner,20000);
  window.addEventListener('scroll',function(){
    var d=document.body.scrollHeight-window.innerHeight;
    if(d>0&&(window.scrollY/d)*100>=50)showBanner();
  },{passive:true});
  document.getElementById('cta-btn').addEventListener('click',function(e){
    e.preventDefault();
    plausible('BannerCTA');
    var b=document.getElementById('cta-banner');
    b.style.transition='bottom .5s cubic-bezier(.34,1.56,.64,1), opacity .3s ease';
    b.style.opacity='0';
    setTimeout(function(){
      b.innerHTML='<p style="margin:0;font-size:.85rem;font-weight:700;padding:4px 12px;">ďakujeme, budeme Vás kontaktovať 😊</p>';
      b.style.opacity='1';
      setTimeout(function(){b.style.bottom='-110px';},3500);
    },300);
  });
})();
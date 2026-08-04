import { useState, useEffect } from 'react'
import hero7 from '@/imports/7.webp'
import backpack3 from '@/imports/3.webp'
import region8 from '@/imports/8.webp'
import luggage1 from '@/imports/1.webp'

// ── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    })
    return () => io.disconnect()
  }, [])
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(244,239,227,.82)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(63,92,58,.12)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 21, color: '#33452f', letterSpacing: '-.01em' }}>
          동키로드<span style={{ fontFamily: "'Pretendard', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.22em', color: '#8a9678' }}>DONKEYROAD</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {[['소개','why'],['서비스','services'],['이용방법','how'],['영상','video'],['시작지역','region']].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}
              className="dk-navlink"
              style={{ display: 'none', padding: '8px 12px', fontSize: 14.5, fontWeight: 500, color: '#4a5347' }}>
              {label}
            </a>
          ))}
          <button onClick={() => scrollTo('signup')}
            style={{ marginLeft: 8, padding: '9px 18px', border: 'none', borderRadius: 999, background: '#3f5c3a', color: '#f7f3e8', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'background .2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#33452f')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#3f5c3a')}>
            출시 알림 받기
          </button>
        </nav>
      </div>
      <style>{`@media(min-width:860px){.dk-navlink{display:inline-block !important}}`}</style>
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" style={{ position: 'relative', minHeight: 640, display: 'flex', alignItems: 'center', padding: '120px 24px 96px', overflow: 'hidden', background: '#dfe6cb' }}>
      <img src={hero7} alt="동서트레일 봉화·울진 숲길" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(30,42,24,.78) 0%,rgba(35,48,28,.6) 42%,rgba(40,53,31,.28) 72%,rgba(40,53,31,.12) 100%)' }} />
      <div style={{ position: 'relative', maxWidth: 1160, margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: 640 }}>
          <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 999, background: 'rgba(30,42,24,.42)', border: '1px solid rgba(244,239,227,.35)', fontSize: 13, fontWeight: 600, color: '#eef0dd', marginBottom: 22, backdropFilter: 'blur(4px)' }}>동서트레일 봉화·울진에서 준비 중</span>
          <h1 style={{ margin: '0 0 22px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(28px,4.4vw,50px)', lineHeight: 1.32, letterSpacing: '-.02em', color: '#f7f3e8', wordBreak: 'keep-all', textShadow: '0 2px 20px rgba(20,28,16,.5)' }}>짐 없이 걷는 길,<br />짐이 지나며 살아나는 마을</h1>
          <p style={{ margin: '0 0 14px', fontSize: 'clamp(15px,1.7vw,18px)', color: '#eef0dd', maxWidth: 540, wordBreak: 'keep-all', textShadow: '0 1px 12px rgba(20,28,16,.55)' }}>동키로드는 장거리 트레커의 짐을 다음 목적지까지 옮기고,<br />텐트와 지역 먹거리까지 준비하는 트레일 여행 서비스입니다.</p>
          <p style={{ margin: '0 0 34px', fontSize: 16, color: '#d6dcc4', maxWidth: 540, textShadow: '0 1px 12px rgba(20,28,16,.55)' }}>무거운 배낭은 동키로드에 맡기고, 길과 풍경을 온전히 즐겨보세요.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <button onClick={() => scrollTo('signup')}
              style={{ padding: '15px 28px', border: 'none', borderRadius: 999, background: '#3f5c3a', color: '#f7f3e8', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 22px rgba(20,28,16,.4)', transition: 'transform .2s,background .2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#33452f'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3f5c3a'; e.currentTarget.style.transform = '' }}>
              출시 알림 받기
            </button>
            <button onClick={() => scrollTo('why')}
              style={{ padding: '15px 28px', border: '1.5px solid rgba(244,239,227,.55)', borderRadius: 999, background: 'rgba(244,239,227,.14)', color: '#f7f3e8', fontSize: 16, fontWeight: 600, cursor: 'pointer', transition: 'background .2s', backdropFilter: 'blur(4px)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(244,239,227,.26)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(244,239,227,.14)')}>
              동키로드 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why ──────────────────────────────────────────────────────────────────────
function Why() {
  return (
    <section id="why" style={{ padding: '104px 24px', background: '#f4efe3' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 52, alignItems: 'center' }} className="dk-why-grid">
        <div data-reveal>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#8a7a5c', textTransform: 'uppercase' }}>THE PROBLEM</span>
          <h2 style={{ margin: '12px 0 26px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.42, letterSpacing: '-.01em', color: '#2a332a', wordBreak: 'keep-all' }}>걷고 싶은 길은 길지만, 배낭의 무게는 걸음을 망설이게 합니다.</h2>
          <p style={{ margin: '0 0 18px', fontSize: 16.5, color: '#4a5347' }}>장거리 트레킹에서는 야영 장비와 옷, 식량을 담은 무거운 배낭을 매일 옮겨야 합니다. 배낭의 무게는 체력을 빠르게 소모시키고, 때로는 걷고 싶은 일정을 줄이거나 도전 자체를 망설이게 만듭니다.</p>
          <p style={{ margin: '0 0 26px', fontSize: 16.5, color: '#4a5347' }}>국내 장거리 트레일에는 길과 야영 공간이 만들어지고 있지만, 구간을 따라 짐을 옮겨주는 편의 서비스는 아직 충분하지 않습니다.</p>
          <p style={{ margin: 0, paddingLeft: 18, borderLeft: '3px solid #a3763f', fontFamily: "'Gowun Batang', serif", fontSize: 19, fontStyle: 'italic', color: '#5c4a33' }}>길을 걷는 즐거움보다 짐을 견디는 일이 더 커지지 않도록.</p>
        </div>
        <div data-reveal style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', minHeight: 340, background: '#4a4436', boxShadow: '0 20px 50px rgba(44,49,40,.2)' }}>
          <img src={backpack3} alt="배낭을 메고 숲길을 걷는 트레커" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        </div>
      </div>
      <style>{`@media(min-width:900px){.dk-why-grid{grid-template-columns:1.05fr .95fr !important}}`}</style>
    </section>
  )
}

// ── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      icon: null, label: '기본 서비스', title: '짐 배송',
      img: luggage1,
      imgPos: 'center',
      overlay: 'rgba(33,52,25,.18)',
      desc: '지정된 장소에 짐을 맡기면 동키로드가 다음 숙소, 야영장, 대피소 또는 물품 보관함까지 옮겨드립니다.',
      sub: '오늘 걸을 때 필요한 짐만 챙기고 다음 목적지에서 짐을 편리하게 찾아보세요.',
    },
    {
      icon: null, label: null, title: '텐트 지원',
      img: 'https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      imgPos: 'center 60%',
      overlay: 'rgba(20,38,20,.18)',
      desc: '텐트 대여부터 설치와 철수까지,\n번거로운 야영 준비를 덜어드립니다.\n가볍게 떠나 자연을 온전히 즐겨보세요.',
      sub: '사용한 텐트의 회수와 건조·세척·보관까지 동키로드가 맡아 걷기에 집중할 수 있도록 돕습니다.',
    },
    {
      icon: null, label: null, title: '지역 미식',
      img: 'https://images.unsplash.com/photo-1763994684055-a2401f64391b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
      imgPos: 'center',
      overlay: 'rgba(80,44,10,.18)',
      desc: '걷기를 마친 곳에서 봉화·울진의 맛을 만나보세요. 지역 음식과 특산품을 트레일의 다음 목적지로 전해드립니다.',
      sub: '지역 식재료 도시락부터 완주를 기념할 지역 먹거리 세트까지.',
    },
  ]
  return (
    <section id="services" style={{ padding: '104px 24px', background: 'linear-gradient(180deg,#efeada 0%,#e9e3d0 100%)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, margin: '0 auto 56px', textAlign: 'center' }} data-reveal>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#5a7551', textTransform: 'uppercase' }}>CORE SERVICE</span>
          <h2 style={{ margin: '12px 0 18px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,40px)', lineHeight: 1.32, letterSpacing: '-.01em' }}>걷는 데 필요한 부담은 덜고,<br />길 위의 경험은 더합니다.</h2>
          <p style={{ margin: 0, fontSize: 17, color: '#586150' }}>짐 배송을 기본으로, 텐트와 지역 먹거리 등 여행에 필요한 서비스만 선택할 수 있습니다.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="dk-svc-grid">
          {cards.map((c) => (
            <article key={c.title} data-reveal style={{ background: '#fbf7ee', border: '1px solid rgba(63,92,58,.14)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 30px rgba(44,49,40,.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                <img src={c.img} alt={c.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: c.imgPos }} />
                <div style={{ position: 'absolute', inset: 0, background: c.overlay }} />
                {c.label && <span style={{ position: 'absolute', top: 12, left: 12, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,253,248,.9)', fontSize: 12, fontWeight: 700, color: '#3f5c3a' }}>{c.label}</span>}
              </div>
              <div style={{ padding: '26px 24px 28px' }}>
                <h3 style={{ margin: '0 0 12px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 22, color: '#2a332a' }}>{c.title}</h3>
                <p style={{ margin: '0 0 14px', fontSize: 15.5, color: '#4a5347', whiteSpace: 'pre-line' }}>{c.desc}</p>
                <p style={{ margin: 0, fontSize: 14.5, color: '#6b7266' }}>{c.sub}</p>
              </div>
            </article>
          ))}
        </div>
        <p style={{ margin: '40px 0 0', textAlign: 'center', fontSize: 15, color: '#6b7266' }} data-reveal>짐 배송을 기본으로, 필요한 서비스만 선택하세요.</p>
      </div>
      <style>{`@media(min-width:820px){.dk-svc-grid{grid-template-columns:repeat(3,1fr) !important}}`}</style>
    </section>
  )
}

// ── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    ['구간과 일정 준비', '걷고 싶은 구간과 일정을 정하고, 숙소·야영장·대피소는 해당 예약 사이트에서 직접 예약합니다.'],
    ['동키로드 서비스 선택', '동키로드 웹사이트에서 짐 배송과 필요한 텐트·지역 미식 서비스를 선택합니다.'],
    ['장소 입력 및 결제', '짐을 맡기고 받을 장소를 입력한 뒤 동키로드 서비스를 결제합니다.'],
    ['짐 맡기기', '지정한 숙소, 야영장, 대피소 또는 물품 보관함에 짐을 맡기고 가볍게 걷습니다.'],
    ['다음 목적지에서 수령', '걷기를 마친 뒤 다음 목적지에서 짐과 신청한 서비스를 만납니다.'],
  ]
  return (
    <section id="how" style={{ padding: '104px 24px', background: '#f4efe3' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ maxWidth: 680, margin: '0 auto 54px', textAlign: 'center' }} data-reveal>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#8a7a5c', textTransform: 'uppercase' }}>HOW IT WORKS</span>
          <h2 style={{ margin: '12px 0 0', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,40px)', lineHeight: 1.32, letterSpacing: '-.01em' }}>짐은 맡기고,<br />길은 가볍게 걸으세요.</h2>
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: '1fr', gap: 14 }} className="dk-steps">
          {steps.map(([title, desc], i) => (
            <li key={i} data-reveal style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fbf7ee', border: '1px solid rgba(63,92,58,.12)', borderRadius: 14, padding: '22px 24px' }}>
              <span style={{ flex: 'none', width: 38, height: 38, borderRadius: '50%', background: '#3f5c3a', color: '#f7f3e8', fontWeight: 700, fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <div><h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 700, color: '#2a332a' }}>{title}</h3><p style={{ margin: 0, fontSize: 15, color: '#586150' }}>{desc}</p></div>
            </li>
          ))}
        </ol>
        <p style={{ margin: '26px auto 0', maxWidth: 760, textAlign: 'center', fontSize: 13.5, color: '#8a9078', background: 'rgba(90,117,81,.09)', borderRadius: 10, padding: '12px 18px' }} data-reveal>숙소·야영장·대피소 예약은 각 운영기관의 예약 사이트에서 별도로 진행됩니다.</p>
      </div>
    </section>
  )
}

// ── Video ────────────────────────────────────────────────────────────────────
const VIDEO_ID = 'wlj48-k40W4'

function VideoSection() {
  const [loaded, setLoaded] = useState(false)
  const thumbUrl = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`
  return (
    <section id="video" style={{ padding: '104px 24px', background: 'linear-gradient(180deg,#33452f 0%,#28351f 100%)', color: '#eef0dd' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 14px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(26px,3.6vw,40px)', lineHeight: 1.3, letterSpacing: '-.01em' }} data-reveal>짐을 내려놓으면, 길이 달라집니다.</h2>
        <p style={{ margin: '0 0 40px', fontSize: 17, color: '#c3d0a6' }} data-reveal>동키로드와 함께 더 가볍고 편안해지는 트레일 여행을 만나보세요.</p>
        <div data-reveal style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.4)', background: '#1c241a' }}>
          {loaded ? (
            <iframe src={embedUrl} title="동키로드 홍보 영상" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
          ) : (
            <button onClick={() => setLoaded(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, cursor: 'pointer', background: '#1c241a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, color: '#eef0dd' }}>
              <img src={thumbUrl} alt="동키로드 홍보 영상 미리보기" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .7 }} />
              <span style={{ position: 'relative', width: 82, height: 82, borderRadius: '50%', background: 'rgba(244,239,227,.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,.45)' }}>
                <span style={{ marginLeft: 5, borderStyle: 'solid', borderWidth: '15px 0 15px 26px', borderColor: 'transparent transparent transparent #33452f' }} />
              </span>
              <span style={{ position: 'relative', fontSize: 15, fontWeight: 600, letterSpacing: '.02em', textShadow: '0 1px 10px rgba(0,0,0,.6)' }}>홍보 영상 재생</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Who ──────────────────────────────────────────────────────────────────────
function Who() {
  const items = [
    ['🥾', '무거운 배낭이 부담스러운 트레커', '장거리 트레킹에 도전하고 싶지만 무거운 짐 때문에 망설였던 분'],
    ['🌿', '편안하게 걷고 싶은 트레킹 여행자', '체력이나 부상 이력 때문에 짐을 메고 오래 걷기 어려운 분'],
    ['📷', '별도의 촬영 장비가 필요한 하이커', '카메라와 촬영 장비 등 트레킹 외에도 다양한 장비를 함께 챙기는 분'],
    ['👨‍👩‍👧', '야영이 낯선 캠핑 입문자와 가족', '텐트와 야영 장비의 부담을 줄이고 조금 더 편안하게 시작하고 싶은 분'],
  ]
  return (
    <section id="who" style={{ padding: '104px 24px', background: '#f4efe3' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 46px', textAlign: 'center', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(24px,3.2vw,34px)', letterSpacing: '-.01em' }} data-reveal>이런 분께 동키로드를 추천해요.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }} className="dk-who-grid">
          {items.map(([icon, title, desc]) => (
            <div key={title} data-reveal style={{ background: '#fbf7ee', border: '1px solid rgba(63,92,58,.12)', borderRadius: 16, padding: '26px 24px' }}>
              <div style={{ fontSize: 30, marginBottom: 12 }}>{icon}</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 16.5, fontWeight: 700, color: '#2a332a' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, color: '#586150' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:760px){.dk-who-grid{grid-template-columns:repeat(2,1fr) !important}}@media(min-width:1040px){.dk-who-grid{grid-template-columns:repeat(4,1fr) !important}}`}</style>
    </section>
  )
}

// ── Region ───────────────────────────────────────────────────────────────────
function Region() {
  return (
    <section id="region" style={{ padding: '104px 24px', background: 'linear-gradient(180deg,#e9e3d0 0%,#dfd8c2 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="dk-region-grid">
        <div data-reveal>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', color: '#8a7a5c', textTransform: 'uppercase' }}>STARTING SOON</span>
          <h2 style={{ margin: '12px 0 22px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(25px,3.4vw,36px)', lineHeight: 1.44, letterSpacing: '-.01em' }}>동키로드의 첫 여정을<br />동서트레일 봉화·울진에서<br />준비하고 있습니다.</h2>
          <p style={{ margin: '0 0 16px', fontSize: 16, color: '#4a5347' }}>동키로드는 동서트레일 봉화·울진 구간을 직접 걸으며 트레커와 지역의 목소리를 확인했습니다. 이곳에서 짐 배송과 트레일 편의 서비스를 먼저 선보이기 위해 준비하고 있습니다.</p>
          <p style={{ margin: 0, paddingLeft: 18, borderLeft: '3px solid #5a7551', fontFamily: "'Gowun Batang', serif", fontSize: 18, fontStyle: 'italic', color: '#3f5c3a' }}>여행자는 더 가볍게 걷고, 지역에는 여행의 가치가 남도록.</p>
        </div>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ borderRadius: 18, overflow: 'hidden', background: '#3f5c3a', boxShadow: '0 16px 40px rgba(44,49,40,.16)' }}>
            <img src={region8} alt="봉화·울진 동서트레일 데크길을 걷는 하이커들" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.dk-region-grid{grid-template-columns:1fr 1fr !important}}`}</style>
    </section>
  )
}

// ── Launch notice: Kakao channel CTA ─────────────────────────────────────────
// 채널 홈: http://pf.kakao.com/_PJpxnX (카카오톡 채널 관리자센터에서 확인)
// 채널이 바뀌면 아래 ID 한 줄만 교체하면 친구추가·문의 링크가 함께 갱신됩니다.
const KAKAO_CHANNEL_ID = '_PJpxnX'
const KAKAO_CHANNEL_URL = `https://pf.kakao.com/${KAKAO_CHANNEL_ID}/friend`
const KAKAO_CHANNEL_CHAT_URL = `https://pf.kakao.com/${KAKAO_CHANNEL_ID}/chat`

function Signup() {
  return (
    <section id="signup" style={{ padding: '104px 24px 108px', background: 'linear-gradient(180deg,#33452f 0%,#3f5c3a 100%)', color: '#eef0dd' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }} data-reveal>
          <h2 style={{ margin: '0 0 14px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 'clamp(23px,3.1vw,32px)', lineHeight: 1.3, letterSpacing: '-.02em', wordBreak: 'keep-all' }}>동키로드의 첫 여정을 함께해 주세요.</h2>
          <p style={{ margin: 0, fontSize: 16.5, color: '#c3d0a6', wordBreak: 'keep-all' }}>카카오톡 채널을 추가하시면, 동키로드가 봉화·울진에서 첫걸음을 시작할 때 가장 먼저 알려드릴게요.</p>
        </div>

        <div data-reveal style={{ background: '#fbf7ee', color: '#2a332a', borderRadius: 22, padding: '36px 30px 30px', boxShadow: '0 24px 60px rgba(0,0,0,.32)', textAlign: 'center' }}>
          <div style={{ width: 66, height: 66, margin: '0 auto 20px', borderRadius: '50%', background: '#fee500', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>💬</div>

          <h3 style={{ margin: '0 0 12px', fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 22, color: '#2a332a' }}>동키로드의 첫 소식을 받아보세요.</h3>
          <p style={{ margin: '0 0 26px', fontSize: 15, lineHeight: 1.65, color: '#4a5347', wordBreak: 'keep-all' }}>카카오톡 채널을 추가하고 동키로드의 첫 소식과 새로운 코스 소식을 가장 먼저 만나보세요.</p>

          <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, width: '100%', padding: 16, borderRadius: 12, background: '#fee500', color: '#191600', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'background .2s, transform .2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f5dc00'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fee500'; e.currentTarget.style.transform = '' }}>
            동키로드 카카오톡 채널 추가하기
          </a>

          <p style={{ margin: '16px 0 0', fontSize: 12.5, color: '#9aa08e', wordBreak: 'keep-all' }}>카카오톡 채널은 언제든 자유롭게 추가하거나 해제할 수 있습니다.</p>
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#28351f', color: '#c3d0a6', padding: '52px 24px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 360 }}>
          <div style={{ fontFamily: "'Gowun Batang', serif", fontWeight: 700, fontSize: 20, color: '#eef0dd', marginBottom: 10 }}>동키로드 <span style={{ fontFamily: "'Pretendard', sans-serif", fontSize: 11, letterSpacing: '.2em', color: '#8ea079' }}>DONKEYROAD</span></div>
          <p style={{ margin: 0, fontSize: 14, color: '#9db184' }}>짐 없이 걷는 길, 짐이 지나며 살아나는 마을 — 동키로드</p>
        </div>
        <div style={{ fontSize: 13.5, lineHeight: 2, color: '#9db184' }}>
          <div>문의: <a href={KAKAO_CHANNEL_CHAT_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#c3d0a6' }}>카카오톡 채널 | 동키로드</a></div>
          <div>이메일: <a href="mailto:donkeyroad.official@gmail.com" style={{ color: '#c3d0a6' }}>donkeyroad.official@gmail.com</a></div>
          <div>인스타그램: <span style={{ color: '#c3d0a6' }}>@donkeyroad.official &nbsp;·&nbsp; @team.donkeylog</span></div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '32px auto 0', paddingTop: 20, borderTop: '1px solid rgba(195,208,166,.16)', fontSize: 12.5, color: '#7c8f6b', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between' }}>
        <span>© 2026 DONKEYROAD. All rights reserved.</span>
      </div>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useReveal()
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <Why />
      <Services />
      <HowItWorks />
      <VideoSection />
      <Who />
      <Region />
      <Signup />
      <Footer />
    </div>
  )
}

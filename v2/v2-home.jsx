/* V2 — Editorial Premium Prototype */
const { useState, useEffect, useRef, useMemo } = React;
const D = window.MECA_DATA;
const Ph = window.Placeholder;

/* ===== Scroll reveal hook ===== */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.v2 .reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ===== Parallax on scroll ===== */
function useParallax(scrollRef) {
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const els = root.querySelectorAll('.parallax');
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollY = root.scrollTop;
        els.forEach(el => {
          const speed = parseFloat(el.dataset.speed || '0.2');
          const rect = el.getBoundingClientRect();
          const rootRect = root.getBoundingClientRect();
          const rel = (rect.top - rootRect.top) - rootRect.height / 2;
          el.style.transform = `translate3d(0, ${-rel * speed * 0.15}px, 0)`;
        });
      });
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener('scroll', onScroll);
  }, [scrollRef]);
}

/* ===== NAV ===== */
function Nav({ page, setPage }) {
  const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'products', label: 'Productos' },
    { id: 'about', label: 'Empresa' },
    { id: 'contact', label: 'Contacto' },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => setPage('home')}>
          Mecanizados<em>UPC</em>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <div key={l.id} className={`nav-link ${page === l.id ? 'active' : ''}`} onClick={() => setPage(l.id)}>
              {l.label}
            </div>
          ))}
        </div>
        <div className="nav-cta">
          <span className="dot" />
          <span>Taller operativo · Rubí</span>
        </div>
      </div>
    </nav>
  );
}

/* ===== Componente: tarjeta de contador con cuenta atrás animada ===== */
function CounterCard({ num, prefix = '', suffix = '', sub, isDecimal = false, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Cuenta atrás animada
          const duration = 1800;
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          let step = 0;
          setTimeout(() => {
            const interval = setInterval(() => {
              step++;
              current = increment * step;
              if (step >= steps) {
                setDisplay(num);
                clearInterval(interval);
              } else {
                // Easing easeOutCubic
                const t = step / steps;
                const eased = 1 - Math.pow(1 - t, 3);
                setDisplay(num * eased);
              }
            }, duration / steps);
          }, delay);
        }
      });
    }, { threshold: 0.3 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, num, delay]);

  const formatted = isDecimal
    ? display.toFixed(2).replace('.', ',')
    : Math.floor(display).toString();

  return (
    <div ref={cardRef} style={{
      position: 'relative',
      padding: '40px 28px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'default',
      overflow: 'hidden',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.borderColor = 'var(--accent-bright)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Esquinas decorativas estilo blueprint */}
      {['tl','tr','bl','br'].map(c => (
        <span key={c} style={{
          position: 'absolute',
          top: c[0] === 't' ? 8 : 'auto',
          bottom: c[0] === 'b' ? 8 : 'auto',
          left: c[1] === 'l' ? 8 : 'auto',
          right: c[1] === 'r' ? 8 : 'auto',
          width: 10, height: 10,
          borderTop: c[0] === 't' ? '1px solid var(--accent-bright)' : 'none',
          borderBottom: c[0] === 'b' ? '1px solid var(--accent-bright)' : 'none',
          borderLeft: c[1] === 'l' ? '1px solid var(--accent-bright)' : 'none',
          borderRight: c[1] === 'r' ? '1px solid var(--accent-bright)' : 'none',
          opacity: 0.5,
        }} />
      ))}

      {/* Número con animación */}
      <div style={{
        fontFamily: "'Newsreader', serif",
        fontWeight: 200,
        fontSize: 'clamp(56px, 6vw, 88px)',
        color: '#fff',
        lineHeight: 1, marginBottom: 16,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        textShadow: '0 0 40px rgba(74,122,184,0.3)',
      }}>
        <span style={{ color: 'var(--accent-bright)', fontSize: '0.6em', verticalAlign: 'super', marginRight: 4 }}>
          {prefix}
        </span>
        {formatted}
        {suffix && <span style={{ color: 'var(--accent-bright)', fontSize: '0.6em', verticalAlign: 'baseline', marginLeft: 4 }}>{suffix}</span>}
      </div>

      {/* Línea separadora animada */}
      <div style={{
        width: hasAnimated ? 40 : 0,
        height: 1,
        background: 'var(--accent-bright)',
        margin: '0 auto 14px',
        transition: 'width 0.8s ease 1s',
      }} />

      {/* Subtítulo */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
      }}>
        {sub}
      </div>
    </div>
  );
}

/* ===== Componente: botón con efecto magnético al hover ===== */
function MagneticButton({ onClick }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block', padding: 20,
      }}
    >
      <button
        ref={btnRef}
        onClick={onClick}
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, var(--accent-bright) 0%, #fff 200%)',
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          color: '#0a1a30',
          border: 'none',
          padding: '20px 48px',
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background-position 0.6s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease',
          boxShadow: '0 10px 30px -5px rgba(74,122,184,0.5)',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundPosition = '100% 100%';
          e.currentTarget.style.boxShadow = '0 20px 50px -5px rgba(74,122,184,0.7)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundPosition = '0% 0%';
          e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(74,122,184,0.5)';
        }}
      >
        Iniciar proyecto
        <span style={{ marginLeft: 12, display: 'inline-block', transition: 'transform 0.3s' }}>→</span>
      </button>
    </div>
  );
}

/* ===== HOME ===== */
function Home({ setPage, openProduct }) {
  // Las 4 piezas destacadas para "Qué fabricamos"
  const featured = (window.CNC_CATALOG || []).slice(0, 4);

  // Sectores con sus imágenes para el carrusel
  const sectorSlides = [
    { id: 'auto',   name: 'Automoción',         img: 'sectores/auto.jpg',   desc: 'Utillajes de producción, bancos de ensayo y piezas de serie para la cadena de montaje.' },
    { id: 'pharma', name: 'Farmacéutica',       img: 'sectores/pharma.jpg', desc: 'Equipos y componentes en acero inoxidable con trazabilidad completa y validación documental.' },
    { id: 'rail',   name: 'Ferroviario',        img: 'sectores/rail.jpg',   desc: 'Componentes estructurales y piezas críticas certificadas para material rodante.' },
    { id: 'design', name: 'Diseño de producto', img: 'sectores/design.jpg', desc: 'Prototipos, preseries y fabricación puente para startups y departamentos de I+D.' },
    { id: 'aero',   name: 'Aeronáutica',        img: 'sectores/aero.jpg',   desc: 'Tolerancias cerradas y materiales de alto rendimiento — aluminio, titanio y aleaciones especiales.' },
    { id: 'food',   name: 'Agroalimentario',    img: 'sectores/food.jpg',   desc: 'Maquinaria de proceso y componentes aptos para contacto alimentario en inox sanitario.' },
  ];

  const [sectorIdx, setSectorIdx] = useState(0);
  const [sectorHover, setSectorHover] = useState(false);
  const [animEnabled, setAnimEnabled] = useState(true);

  // Carrusel responsive: nº de tarjetas visibles y ancho según viewport
  const sectorViewportRef = useRef(null);
  const SECTOR_GAP = 16;
  const [cardW, setCardW] = useState(0);
  useEffect(() => {
    const calc = () => {
      const el = sectorViewportRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const pv = window.innerWidth < 560 ? 1 : window.innerWidth < 960 ? 2 : 4;
      setCardW((w - (pv - 1) * SECTOR_GAP) / pv);
    };
    calc();
    window.addEventListener('resize', calc);
    const t = setTimeout(calc, 200); // tras cargar fuentes/layout
    return () => { window.removeEventListener('resize', calc); clearTimeout(t); };
  }, []);

  // Loop infinito: avanza siempre hacia la derecha, al llegar al final del primer set salta silenciosamente al inicio
  useEffect(() => {
    if (sectorHover) return;
    const id = setInterval(() => {
      setSectorIdx(s => s + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [sectorHover]);

  // Cuando pasamos del final del primer set, hacemos un salto sin animación de vuelta a 0
  useEffect(() => {
    if (sectorIdx >= sectorSlides.length) {
      const t = setTimeout(() => {
        setAnimEnabled(false);
        setSectorIdx(0);
        const t2 = setTimeout(() => setAnimEnabled(true), 50);
        return () => clearTimeout(t2);
      }, 700); // esperar a que termine la transición
      return () => clearTimeout(t);
    }
  }, [sectorIdx, sectorSlides.length]);

  return (
    <div>
      {/* ===== HERO (tipo Tiyoo: dos titulares grandes sobre fondo oscuro) ===== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 60%, #1a3358 100%)',
        color: '#fff',
        padding: '120px 40px 100px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', right: -120, top: -120,
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,122,184,0.18) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent-on-dark)', marginBottom: 32,
          }}>
            Mecanizados UPC · est. {D.company.established} · Rubí, Barcelona
          </div>

          <h2 className="reveal" style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.15,
            letterSpacing: '-0.022em',
            color: '#fff',
            margin: 0, marginBottom: 24,
            maxWidth: 1000,
          }}>
            Equipamiento avanzado y un taller <em style={{ color: 'var(--accent-bright)' }}>perfectamente preparado.</em>
          </h2>

          <h2 className="reveal" style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-0.022em',
            color: 'rgba(255,255,255,0.78)',
            margin: 0, marginBottom: 56,
            maxWidth: 950,
          }}>
            La calidad es la mejor garantía para mantener la <em style={{ color: '#fff' }}>confianza del cliente.</em>
          </h2>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={() => setPage('products')} style={{
              background: 'var(--accent-bright)', color: '#fff',
              border: 'none', padding: '16px 32px',
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500,
              letterSpacing: '0.03em', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { e.target.style.background = '#fff'; e.target.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.target.style.background = 'var(--accent-bright)'; e.target.style.color = '#fff'; }}
            >
              Ver catálogo de piezas →
            </button>
            <button onClick={() => setPage('contact')} style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)', padding: '16px 32px',
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500,
              letterSpacing: '0.03em', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => e.target.style.borderColor = '#fff'}
              onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.4)'}
            >
              Solicitar presupuesto
            </button>
          </div>
        </div>
      </section>

      {/* ===== QUÉ FABRICAMOS (What Can We Supply) ===== */}
      <section style={{ padding: '100px 40px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.022em',
              color: 'var(--ink)',
              margin: 0, marginBottom: 16,
            }}>
              Qué <em>fabricamos</em>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16, color: 'var(--ink-soft)',
              maxWidth: 600, margin: '0 auto',
            }}>
              Especialistas en piezas mecanizadas de precisión bajo plano —
              desde el prototipo unitario a la serie media.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {featured.map(p => (
              <div key={p.code} className="reveal"
                onClick={() => setPage('products')}
                style={{
                  background: '#fff',
                  border: '1px solid var(--rule)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(13, 27, 46, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--accent-bright)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--rule)';
                }}
              >
                <div style={{
                  aspectRatio: '1/1', background: '#fafafa',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <img src={p.img} alt={p.name} style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'contain', padding: 24,
                  }} />
                </div>
                <div style={{
                  padding: '18px 20px',
                  borderTop: '1px solid var(--rule)',
                  textAlign: 'center',
                }}>
                  <h3 style={{
                    fontFamily: "'Newsreader', serif",
                    fontWeight: 400, fontSize: 22,
                    color: 'var(--ink)', margin: 0,
                    letterSpacing: '0.02em',
                  }}>
                    {p.code}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <button onClick={() => setPage('products')} style={{
              background: 'var(--accent)', color: '#fff',
              border: 'none', padding: '14px 36px',
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
              letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => e.target.style.background = 'var(--accent-deep)'}
              onMouseLeave={(e) => e.target.style.background = 'var(--accent)'}
            >
              Ver más piezas →
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTORES (Slider lineal de 4 cards con autoplay) ===== */}
      <section style={{
        padding: '100px 40px',
        background: 'var(--paper)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Cabecera con título + controles */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 40,
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div>
              <h2 style={{
                fontFamily: "'Newsreader', serif",
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                letterSpacing: '-0.022em',
                color: 'var(--ink)',
                margin: 0, marginBottom: 8,
              }}>
                Sectores a los que <em style={{ color: 'var(--accent-bright)' }}>servimos</em>
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: 'var(--ink-mute)',
                margin: 0,
              }}>
                {sectorSlides.length} industrias · más de 10 años de experiencia
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: 'var(--ink-mute)',
                letterSpacing: '0.1em',
              }}>
                <span style={{ color: 'var(--ink)', fontWeight: 500 }}>
                  {String((sectorIdx % sectorSlides.length) + 1).padStart(2, '0')}
                </span>
                <span style={{ opacity: 0.5, margin: '0 6px' }}>/</span>
                <span>{String(sectorSlides.length).padStart(2, '0')}</span>
              </span>
              <button
                onClick={() => setSectorIdx(Math.max(0, sectorIdx - 1))}
                aria-label="Anterior"
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid var(--rule)',
                  color: 'var(--ink)',
                  fontSize: 18, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
              >‹</button>
              <button
                onClick={() => setSectorIdx(sectorIdx + 1)}
                aria-label="Siguiente"
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  color: '#fff',
                  fontSize: 18, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-deep)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent)'; }}
              >›</button>
            </div>
          </div>

          {/* Viewport con cards deslizándose en línea */}
          <div
            ref={sectorViewportRef}
            onMouseEnter={() => setSectorHover(true)}
            onMouseLeave={() => setSectorHover(false)}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div style={{
              display: 'flex',
              gap: SECTOR_GAP,
              transform: `translateX(${-sectorIdx * (cardW + SECTOR_GAP)}px)`,
              transition: animEnabled ? 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              willChange: 'transform',
            }}>
              {[...sectorSlides, ...sectorSlides].map((s, i) => {
                return (
                  <div key={`${s.id}-${i}`}
                    onClick={() => setSectorIdx(i % sectorSlides.length)}
                    style={{
                      flex: `0 0 ${cardW > 0 ? cardW + 'px' : 'calc((100% - 48px) / 4)'}`,
                      position: 'relative',
                      aspectRatio: '4/5',
                      overflow: 'hidden',
                      borderRadius: 6,
                      background: 'var(--accent-deep)',
                      cursor: 'pointer',
                      transition: 'opacity 0.5s ease',
                    }}
                  >
                    <img src={s.img} alt={s.name} style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,26,48,0.92) 0%, rgba(10,26,48,0.2) 50%, transparent 100%)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: 20, left: 20, right: 20,
                      color: '#fff',
                    }}>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: 'var(--accent-on-dark)',
                        letterSpacing: '0.12em',
                        marginBottom: 6,
                      }}>
                        {String((i % sectorSlides.length) + 1).padStart(2, '0')}
                      </div>
                      <div style={{
                        fontFamily: "'Newsreader', serif",
                        fontSize: 22, fontWeight: 400,
                        lineHeight: 1.1,
                        marginBottom: 8,
                      }}>
                        {s.name}
                      </div>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12, lineHeight: 1.5,
                        color: 'rgba(255,255,255,0.8)',
                        margin: 0,
                      }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Barra de progreso del autoplay */}
          <div style={{
            marginTop: 28,
            height: 2,
            background: 'var(--rule)',
            borderRadius: 1,
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              left: 0, top: 0, height: '100%',
              width: `${(((sectorIdx % sectorSlides.length) + 1) / sectorSlides.length) * 100}%`,
              background: 'var(--accent-bright)',
              transition: animEnabled ? 'width 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ===== SOLUCIÓN (Solution: 3 columnas tipo NEEDS/FIND/CDMO) ===== */}
      <section style={{
        padding: '100px 40px',
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 100%)',
        color: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.022em',
              color: '#fff',
              margin: 0,
            }}>
              Nuestra <em style={{ color: 'var(--accent-bright)' }}>solución</em>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 32,
          }}>
            {[
              { t: 'CONSULTA', sub: 'Escuchamos tu necesidad', body: 'Analizamos plano, función y volumen. Te asesoramos sobre el material y el proceso óptimo.' },
              { t: 'INGENIERÍA', sub: 'Diseñamos la pieza', body: 'Oficina técnica con CAD/CAM avanzado. De la idea al plan de mecanizado validado.' },
              { t: 'FABRICACIÓN', sub: 'Entregamos calidad', body: 'CNC de alta precisión, control dimensional con MMC y trazabilidad pieza a pieza.' },
            ].map((c, i) => (
              <div key={c.t} className="reveal" style={{
                padding: '40px 32px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'var(--accent-bright)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                }}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, letterSpacing: '0.15em',
                  color: 'var(--accent-on-dark)', marginBottom: 20,
                }}>
                  0{i+1} — {c.t}
                </div>
                <h3 style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 400, fontSize: 28,
                  color: '#fff', margin: 0, marginBottom: 16,
                  letterSpacing: '-0.01em',
                }}>
                  {c.sub}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.75)', margin: 0,
                }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTADORES + CTA (con efecto wow) ===== */}
      <section style={{
        position: 'relative',
        padding: '120px 40px',
        background: 'linear-gradient(135deg, #0a1a30 0%, #0d1b2e 50%, #1a3358 100%)',
        color: '#fff',
        overflow: 'hidden',
      }}>
        {/* Halos de luz que respiran */}
        <div style={{
          position: 'absolute', right: -200, top: -200,
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,122,184,0.25) 0%, transparent 60%)',
          pointerEvents: 'none',
          animation: 'breathe1 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', left: -150, bottom: -150,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,123,63,0.18) 0%, transparent 60%)',
          pointerEvents: 'none',
          animation: 'breathe2 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', left: '40%', top: '30%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,122,184,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'breathe3 12s ease-in-out infinite',
        }} />

        {/* Líneas técnicas en movimiento (estilo radar) */}
        <div style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden', pointerEvents: 'none',
        }}>
          {/* Línea horizontal que cruza */}
          <div style={{
            position: 'absolute', top: '25%', left: 0, right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent 0%, rgba(74,122,184,0.4) 50%, transparent 100%)',
            animation: 'scanH 7s linear infinite',
          }} />
          <div style={{
            position: 'absolute', top: '70%', left: 0, right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent 0%, rgba(224,123,63,0.3) 50%, transparent 100%)',
            animation: 'scanH 9s linear infinite reverse',
            animationDelay: '2s',
          }} />
          {/* Línea vertical que cruza */}
          <div style={{
            position: 'absolute', left: '20%', top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(180deg, transparent 0%, rgba(74,122,184,0.25) 50%, transparent 100%)',
            animation: 'scanV 11s linear infinite',
            animationDelay: '1s',
          }} />
          <div style={{
            position: 'absolute', left: '75%', top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(180deg, transparent 0%, rgba(74,122,184,0.25) 50%, transparent 100%)',
            animation: 'scanV 13s linear infinite reverse',
            animationDelay: '4s',
          }} />
        </div>

        {/* Partículas flotantes (puntos pequeños) */}
        <div style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden', pointerEvents: 'none',
        }}>
          {[
            { l: '15%', t: '20%', d: 0,   s: 6 },
            { l: '85%', t: '15%', d: 1.5, s: 4 },
            { l: '70%', t: '60%', d: 3,   s: 5 },
            { l: '25%', t: '75%', d: 2,   s: 4 },
            { l: '50%', t: '45%', d: 4,   s: 6 },
            { l: '92%', t: '50%', d: 0.5, s: 3 },
            { l: '8%',  t: '50%', d: 2.5, s: 5 },
            { l: '60%', t: '85%', d: 1,   s: 4 },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: p.l, top: p.t,
              width: p.s, height: p.s, borderRadius: '50%',
              background: i % 3 === 0 ? 'var(--accent-bright)' : 'rgba(255,255,255,0.5)',
              boxShadow: i % 3 === 0 ? '0 0 12px var(--accent-bright)' : '0 0 8px rgba(255,255,255,0.3)',
              animation: `float${(i % 3) + 1} ${8 + i}s ease-in-out infinite`,
              animationDelay: `${p.d}s`,
            }} />
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* Etiqueta superior con línea */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16,
            marginBottom: 60,
            justifyContent: 'center',
          }}>
            <span style={{ display: 'block', width: 60, height: 1, background: 'rgba(255,255,255,0.3)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent-on-dark)',
            }}>
              Datos de fabricación
            </span>
            <span style={{ display: 'block', width: 60, height: 1, background: 'rgba(255,255,255,0.3)' }} />
          </div>

          {/* Grid de contadores con efecto wow */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 100,
          }}>
            {[
              { num: 10, prefix: '+', suffix: '', sub: 'Años de experiencia', icon: 'time' },
              { num: 500, prefix: '+', suffix: '', sub: 'Proyectos entregados', icon: 'box' },
              { num: 0.01, prefix: '±', suffix: '', sub: 'Tolerancia (mm)', icon: 'ruler', isDecimal: true },
              { num: 24, prefix: '', suffix: 'h', sub: 'Respuesta técnica', icon: 'clock' },
            ].map((s, i) => (
              <CounterCard key={s.sub} {...s} delay={i * 150} />
            ))}
          </div>

          {/* CTA con efecto magnético */}
          <div style={{
            position: 'relative',
            padding: '80px 40px 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h2 className="reveal" style={{
              fontFamily: "'Newsreader', serif",
              fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.15, letterSpacing: '-0.022em',
              color: '#fff',
              margin: 0, marginBottom: 24,
              maxWidth: 800, marginLeft: 'auto', marginRight: 'auto',
            }}>
              ¿Tienes un plano y una idea de cuándo lo necesitas?{' '}
              <em style={{
                background: 'linear-gradient(90deg, var(--accent-bright) 0%, #fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}>
                Hablemos.
              </em>
            </h2>

            <p className="reveal" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: 'rgba(255,255,255,0.7)',
              margin: 0, marginBottom: 48,
            }}>
              Te respondemos con un presupuesto técnico en menos de 24 horas.
            </p>

            <MagneticButton onClick={() => setPage('contact')} />

            {/* Línea decorativa inferior con punto pulsante */}
            <div style={{
              marginTop: 60,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 12px rgba(74,222,128,0.6)',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Taller operativo · Lunes a viernes 8:00 — 18:00
            </div>
          </div>
        </div>

        {/* CSS para todas las animaciones */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.3); }
          }
          @keyframes breathe1 {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
            50%      { transform: scale(1.15) translate(-30px, 20px); opacity: 1; }
          }
          @keyframes breathe2 {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.7; }
            50%      { transform: scale(1.2) translate(40px, -30px); opacity: 1; }
          }
          @keyframes breathe3 {
            0%, 100% { transform: scale(0.9) translate(0, 0); opacity: 0.4; }
            50%      { transform: scale(1.1) translate(-50px, -40px); opacity: 0.8; }
          }
          @keyframes scanH {
            0%   { transform: translateX(-100%); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          @keyframes scanV {
            0%   { transform: translateY(-100%); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0); opacity: 0.6; }
            50%      { transform: translate(20px, -30px); opacity: 1; }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0); opacity: 0.5; }
            50%      { transform: translate(-25px, -20px); opacity: 0.9; }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0); opacity: 0.4; }
            33%      { transform: translate(15px, 25px); opacity: 0.8; }
            66%      { transform: translate(-15px, 10px); opacity: 0.6; }
          }
        `}</style>
      </section>
    </div>
  );
}

window.V2_Home = Home;
window.V2_Nav = Nav;
window.V2_useReveal = useReveal;
window.V2_useParallax = useParallax;

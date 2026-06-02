/* V2 — Other pages: Services, Products, Contact, About */
const { useState: uS1, useEffect: uE1, useMemo: uM1 } = React;
const D1 = window.MECA_DATA;
const Ph1 = window.Placeholder;

/* ===== SERVICES ===== */
function V2_Services({ setPage }) {
  const svcDetail = [
    {
      id: 'cnc',
      n: '01',
      name: 'Mecanizado CNC',
      kicker: 'Núcleo de fabricación',
      lead: 'Cinco centros de mecanizado y tres tornos CNC operando en continuo. De prototipo a serie.',
      body: 'Nuestro taller combina fresado vertical y horizontal con torneado CNC para resolver piezas unitarias complejas y series cortas. Trabajamos con planos técnicos o archivos 3D (STEP, IGES, Parasolid). El control dimensional se realiza pieza a pieza con máquina de medición tridimensional y se documenta en protocolo firmado.',
      bullets: ['Fresado 3/4 ejes — 1600 × 800 × 700 mm', 'Torneado Ø500 × L1500 mm', 'Tolerancia estándar ±0,01 mm', 'MMC certificada'],
      img: 'https://images.unsplash.com/photo-1713371398485-7bde1bde9def?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'maq',
      n: '02',
      name: 'Maquinaria especial',
      kicker: 'Ingeniería a medida',
      lead: 'Utillajes, bancos de ensayo y pequeñas líneas automatizadas diseñadas para tu proceso.',
      body: 'Desde el pliego de condiciones hasta el SAT. Nuestro equipo de oficina técnica diseña y documenta la máquina; nuestro taller la fabrica y monta. Incluye integración de neumática, hidráulica, servomotores y control PLC.',
      bullets: ['Diseño mecánico completo (CAD 3D)', 'Fabricación y montaje llave en mano', 'Integración eléctrica y PLC', 'Puesta en marcha y formación'],
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'ing',
      n: '03',
      name: 'Ingeniería',
      kicker: 'De CAD a pieza',
      lead: 'Oficina técnica con experiencia en diseño mecánico, optimización de piezas y fabricación aditiva.',
      body: 'Convertimos ideas en documentación fabricable. Analizamos viabilidad técnica y económica, optimizamos diseños para manufacturabilidad y colaboramos con el cliente durante todas las fases del proyecto.',
      bullets: ['CAD 3D — SolidWorks · Inventor', 'Cálculo FEA estructural', 'Optimización DFM/DFA', 'Documentación ISO'],
      img: 'servicios/ing.jpg',
    },
    {
      id: 'estruct',
      n: '04',
      name: 'Estructuras metálicas',
      kicker: 'Obra y planta',
      lead: 'Estructuras soldadas, calderería ligera y protecciones industriales con mecanizado de referencias.',
      body: 'Fabricamos bastidores, chasis, pasarelas, protecciones perimetrales y carcasas en acero y aluminio. Todas nuestras estructuras soldadas pasan por normalizado térmico y mecanizado de superficies de referencia para garantizar planitud.',
      bullets: ['Soldadura TIG · MIG · MAG certificada', 'Normalizado térmico', 'Mecanizado post-soldadura', 'Tratamientos superficiales'],
      img: 'servicios/estruct.jpg',
    },
  ];

  return (
    <div>
      {/* === HERO oscuro tipo Tiyoo con breadcrumb === */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 100%)',
        color: '#fff',
        padding: '100px 40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent-on-dark)', marginBottom: 32,
          }}>
            04 disciplinas · Rubí
          </div>
          <h1 style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.022em',
            color: '#fff',
            margin: 0, marginBottom: 28,
            maxWidth: 900,
          }}>
            Lo que <em style={{ color: 'var(--accent-bright)', fontStyle: 'italic' }}>hacemos.</em>
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.78)',
            margin: 0, marginBottom: 60,
            maxWidth: 720,
          }}>
            Cuatro disciplinas complementarias que resuelven desde el prototipo hasta la serie mediana.
            Todas bajo el mismo techo, en Rubí.
          </p>
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.25)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 40px',
          marginLeft: -40, marginRight: -40,
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Inicio</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: '#fff' }}>Servicios</span>
          </div>
        </div>
      </section>

      {/* === GRID DE SERVICIOS (4 cards en 2x2 con foto + info) === */}
      <section style={{ padding: '80px 40px' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 24,
        }}>
          {svcDetail.map((s) => (
            <article
              key={s.id}
              className="reveal"
              style={{
                position: 'relative',
                background: '#fff',
                border: '1px solid var(--rule)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 20px 50px -10px rgba(13, 27, 46, 0.18)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                const img = e.currentTarget.querySelector('.svc-img');
                if (img) img.style.transform = 'scale(1.08)';
                const num = e.currentTarget.querySelector('.svc-n');
                if (num) num.style.color = 'var(--accent-bright)';
                const arr = e.currentTarget.querySelector('.svc-arr');
                if (arr) {
                  arr.style.transform = 'translateX(6px)';
                  arr.style.color = 'var(--accent-bright)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--rule)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                const img = e.currentTarget.querySelector('.svc-img');
                if (img) img.style.transform = 'scale(1)';
                const num = e.currentTarget.querySelector('.svc-n');
                if (num) num.style.color = 'var(--ink-mute)';
                const arr = e.currentTarget.querySelector('.svc-arr');
                if (arr) {
                  arr.style.transform = 'translateX(0)';
                  arr.style.color = 'var(--ink)';
                }
              }}
            >
              {/* Foto */}
              <div style={{
                aspectRatio: '16/9',
                background: '#fafbfc',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img
                  className="svc-img"
                  src={s.img}
                  alt={s.name}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                {/* Tinte azul sutil sobre la foto */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(10,26,48,0.15) 0%, transparent 60%)',
                }} />
                {/* Marcas técnicas en las esquinas */}
                {['tl','tr','bl','br'].map(c => (
                  <span key={c} style={{
                    position: 'absolute',
                    top: c[0] === 't' ? 12 : 'auto',
                    bottom: c[0] === 'b' ? 12 : 'auto',
                    left: c[1] === 'l' ? 12 : 'auto',
                    right: c[1] === 'r' ? 12 : 'auto',
                    width: 14, height: 14,
                    borderTop: c[0] === 't' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                    borderBottom: c[0] === 'b' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                    borderLeft: c[1] === 'l' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                    borderRight: c[1] === 'r' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                  }} />
                ))}
                {/* Número grande en esquina */}
                <span
                  className="svc-n"
                  style={{
                    position: 'absolute',
                    top: 24, right: 32,
                    fontFamily: "'Newsreader', serif",
                    fontWeight: 200,
                    fontSize: 64,
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {s.n}
                </span>
              </div>

              {/* Texto */}
              <div style={{ padding: '32px 32px 36px' }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-text)',
                  marginBottom: 12,
                }}>
                  § {s.n} — {s.kicker}
                </div>
                <h2 style={{
                  fontFamily: "'Newsreader', serif",
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 2.5vw, 36px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  margin: 0, marginBottom: 16,
                }}>
                  {s.name}
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15, lineHeight: 1.6,
                  color: 'var(--ink-soft)',
                  margin: 0, marginBottom: 24,
                }}>
                  {s.lead}
                </p>

                {/* Bullets en grid 2 columnas */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px 20px',
                  marginBottom: 24,
                  paddingTop: 24,
                  borderTop: '1px solid var(--rule)',
                }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.4,
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: 4, height: 4,
                        borderRadius: '50%',
                        background: 'var(--accent-bright)',
                        marginTop: 7,
                      }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Pie con CTA */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 20,
                  borderTop: '1px solid var(--rule)',
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                  }}>
                    Más información
                  </span>
                  <span
                    className="svc-arr"
                    style={{
                      fontSize: 22,
                      color: 'var(--ink)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA wow al final (mismo estilo que el de la home) === */}
      <section style={{
        position: 'relative',
        padding: '100px 40px',
        background: 'linear-gradient(135deg, #0a1a30 0%, #0d1b2e 50%, #1a3358 100%)',
        color: '#fff',
        overflow: 'hidden',
      }}>
        {/* Halos animados */}
        <div style={{
          position: 'absolute', right: -150, top: -150,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,122,184,0.2) 0%, transparent 60%)',
          pointerEvents: 'none',
          animation: 'svcBreathe1 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', left: -100, bottom: -100,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,123,63,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
          animation: 'svcBreathe2 11s ease-in-out infinite',
        }} />

        <div style={{
          maxWidth: 900, margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 2,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            marginBottom: 32,
          }}>
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--accent-on-dark)',
            }}>
              Cómo empezar
            </span>
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.15, letterSpacing: '-0.022em',
            color: '#fff',
            margin: 0, marginBottom: 24,
          }}>
            Envíanos tu plano o tu idea.{' '}
            <em style={{
              background: 'linear-gradient(90deg, var(--accent-bright) 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              Te respondemos en 24 horas.
            </em>
          </h2>

          <button
            onClick={() => setPage('contact')}
            style={{
              marginTop: 32,
              background: 'var(--accent-bright)',
              color: '#fff',
              border: 'none',
              padding: '18px 40px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 10px 30px -5px rgba(74,122,184,0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 40px -5px rgba(74,122,184,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-bright)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(74,122,184,0.5)';
            }}
          >
            Solicitar presupuesto →
          </button>
        </div>

        <style>{`
          @keyframes svcBreathe1 {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.6; }
            50%      { transform: scale(1.15) translate(-30px, 20px); opacity: 1; }
          }
          @keyframes svcBreathe2 {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.7; }
            50%      { transform: scale(1.2) translate(40px, -30px); opacity: 1; }
          }
        `}</style>
      </section>
    </div>
  );
}

/* ===== PRODUCTS ===== */
function V2_Products({ openProduct }) {
  const [activeCat, setActiveCat] = uS1('cnc');
  const [page, setPageNum] = uS1(1);
  const PAGE_SIZE = 10;

  // Categorías tipo Tiyoo (mismo orden)
  const categories = [
    { id: 'cnc',      label: 'Mecanizado CNC' },
    { id: 'milling',  label: 'Fresado' },
    { id: 'lathing',  label: 'Torneado' },
    { id: 'plate',    label: 'Chapa metálica' },
    { id: 'fiveaxis', label: 'Mecanizado 5 ejes' },
    { id: 'welded',   label: 'Conjuntos soldados' },
    { id: 'gearing',  label: 'Engranajes' },
    { id: 'casting',  label: 'Fundición' },
  ];

  const activeLabel = categories.find(c => c.id === activeCat)?.label || '';

  // Por ahora solo CNC tiene catálogo cargado (las 21 piezas)
  const allItems = activeCat === 'cnc' ? window.CNC_CATALOG : [];
  const totalPages = Math.max(1, Math.ceil(allItems.length / PAGE_SIZE));
  const visibleItems = allItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  uE1(() => { setPageNum(1); }, [activeCat]);

  return (
    <div>
      {/* === BREATCOME (cabecera oscura con título y breadcrumb) === */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 100%)',
        color: '#fff',
        padding: '100px 40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.1,
            letterSpacing: '-0.022em',
            color: '#fff',
            margin: 0,
            maxWidth: 900,
          }}>
            Comprometidos en ofrecer <em style={{ color: 'var(--accent-bright)', fontStyle: 'italic' }}>productos excelentes</em>
          </h1>
        </div>
        {/* Breadcrumb */}
        <div style={{
          marginTop: 60,
          background: 'rgba(0,0,0,0.25)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 40px',
          marginLeft: -40, marginRight: -40,
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ cursor: 'pointer' }}>Inicio</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ cursor: 'pointer' }}>Qué fabricamos</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: '#fff' }}>{activeLabel}</span>
          </div>
        </div>
      </section>

      {/* === BARRA DE CATEGORÍAS (product-class de Tiyoo) === */}
      <section style={{
        background: 'var(--paper)',
        borderBottom: '1px solid var(--rule)',
        padding: '0 40px',
        position: 'sticky', top: 60, zIndex: 10,
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', flexWrap: 'wrap', gap: 0,
          overflowX: 'auto',
        }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeCat === c.id ? '2px solid var(--accent-bright)' : '2px solid transparent',
                padding: '20px 24px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: activeCat === c.id ? 600 : 400,
                color: activeCat === c.id ? 'var(--ink)' : 'var(--ink-soft)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { if (activeCat !== c.id) e.target.style.color = 'var(--ink)'; }}
              onMouseLeave={(e) => { if (activeCat !== c.id) e.target.style.color = 'var(--ink-soft)'; }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* === GRID DE PRODUCTOS (tipo Tiyoo: foto + código abajo) === */}
      <section style={{ padding: '60px 40px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {visibleItems.length === 0 ? (
            <div style={{
              padding: '80px 20px', textAlign: 'center',
              color: 'var(--ink-mute)', fontFamily: "'Newsreader', serif",
              fontSize: 22, fontStyle: 'italic',
            }}>
              Catálogo en preparación. Próximamente disponible.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
              gap: 20,
            }}>
              {visibleItems.map(p => (
                <div
                  key={p.code}
                  className="reveal"
                  onClick={() => openProduct(p)}
                  style={{
                    position: 'relative',
                    background: '#fff',
                    border: '1px solid var(--rule)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(13, 27, 46, 0.18)';
                    e.currentTarget.style.transform = 'translateY(-6px)';

                    const img = e.currentTarget.querySelector('.cnc-img');
                    if (img) img.style.transform = 'scale(1.1)';

                    const tint = e.currentTarget.querySelector('.cnc-tint');
                    if (tint) tint.style.opacity = '1';

                    const code = e.currentTarget.querySelector('.cnc-code');
                    if (code) {
                      code.style.transform = 'translateY(-6px)';
                      code.style.color = 'var(--accent-bright)';
                    }

                    const line = e.currentTarget.querySelector('.cnc-line');
                    if (line) line.style.width = '60px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--rule)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';

                    const img = e.currentTarget.querySelector('.cnc-img');
                    if (img) img.style.transform = 'scale(1)';

                    const tint = e.currentTarget.querySelector('.cnc-tint');
                    if (tint) tint.style.opacity = '0';

                    const code = e.currentTarget.querySelector('.cnc-code');
                    if (code) {
                      code.style.transform = 'translateY(0)';
                      code.style.color = 'var(--ink)';
                    }

                    const line = e.currentTarget.querySelector('.cnc-line');
                    if (line) line.style.width = '0px';
                  }}
                >
                  {/* Foto de la pieza */}
                  <div style={{
                    aspectRatio: '4/3',
                    background: '#fafbfc',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <img
                      className="cnc-img"
                      src={p.img}
                      alt={p.code}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'contain',
                        padding: 28,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />

                    {/* Tinte azul al hover */}
                    <div className="cnc-tint" style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(135deg, rgba(74,122,184,0.12) 0%, rgba(30,58,95,0.06) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }} />
                  </div>

                  {/* Solo código abajo (estilo Tiyoo) */}
                  <div style={{
                    padding: '20px 18px 22px',
                    borderTop: '1px solid var(--rule)',
                    textAlign: 'center',
                    position: 'relative',
                  }}>
                    <h3
                      className="cnc-code"
                      style={{
                        fontFamily: "'Newsreader', serif",
                        fontWeight: 400,
                        fontSize: 22,
                        color: 'var(--ink)',
                        margin: 0,
                        letterSpacing: '0.04em',
                        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.35s ease',
                      }}
                    >
                      {p.code}
                    </h3>
                    {/* Línea azul que aparece al hover */}
                    <div
                      className="cnc-line"
                      style={{
                        position: 'absolute',
                        left: '50%', bottom: 12,
                        width: 0, height: 2,
                        background: 'var(--accent-bright)',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* === PAGINACIÓN === */}
          {totalPages > 1 && (
            <div style={{
              marginTop: 60,
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
            }}>
              <button
                onClick={() => setPageNum(Math.max(1, page - 1))}
                disabled={page === 1}
                style={{
                  background: 'none',
                  border: '1px solid var(--rule)',
                  padding: '10px 16px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: page === 1 ? 'var(--ink-mute)' : 'var(--ink)',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  opacity: page === 1 ? 0.5 : 1,
                }}
              >
                ← Anterior
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPageNum(n)}
                  style={{
                    background: page === n ? 'var(--accent)' : '#fff',
                    color: page === n ? '#fff' : 'var(--ink)',
                    border: '1px solid ' + (page === n ? 'var(--accent)' : 'var(--rule)'),
                    width: 40, height: 40,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPageNum(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                style={{
                  background: 'none',
                  border: '1px solid var(--rule)',
                  padding: '10px 16px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: page === totalPages ? 'var(--ink-mute)' : 'var(--ink)',
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  opacity: page === totalPages ? 0.5 : 1,
                }}
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ===== EMPRESA (About) ===== */
function V2_About({ setPage }) {
  const disciplines = [
    { mono: 'OT', name: 'Oficina técnica', desc: 'Diseño 3D, viabilidad y documentación de fabricación en CAD/CAM.' },
    { mono: 'PG', name: 'Programación CNC', desc: 'Estrategias de mecanizado y CAM para fresado y torneado multieje.' },
    { mono: 'SM', name: 'Soldadura y montaje', desc: 'Conjuntos soldados certificados, calderería ligera y ensamblaje.' },
    { mono: 'CC', name: 'Control de calidad', desc: 'Verificación dimensional con MMC y protocolo firmado pieza a pieza.' },
  ];

  return (
    <div>
      {/* === HERO oscuro con breadcrumb (coherente con Servicios/Productos) === */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 100%)',
        color: '#fff',
        padding: '100px 40px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -120, top: -120,
          width: 460, height: 460, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,122,184,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent-on-dark)', marginBottom: 32,
          }}>
            Rubí, Barcelona · Desde {D1.company.established}
          </div>
          <h1 style={{
            fontFamily: "'Newsreader', serif",
            fontWeight: 300,
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.022em',
            color: '#fff',
            margin: 0, marginBottom: 28,
            maxWidth: 900,
          }}>
            Oficina técnica y taller <em style={{ color: 'var(--accent-bright)', fontStyle: 'italic' }}>bajo el mismo techo.</em>
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.78)',
            margin: 0, marginBottom: 60,
            maxWidth: 720,
          }}>
            Más de diez años mecanizando piezas de precisión bajo plano. El problema y la solución,
            nunca a más de diez metros de distancia.
          </p>
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.25)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '16px 40px',
          marginLeft: -40, marginRight: -40,
        }}>
          <div style={{
            maxWidth: 1280, margin: '0 auto',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Inicio</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: '#fff' }}>Empresa</span>
          </div>
        </div>
      </section>

      {/* === HISTORIA: foto real + texto === */}
      <section style={{ padding: '100px 40px', background: 'var(--bg)' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
        }}>
          <div className="reveal" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--accent-deep)' }}>
            <img src={window.PRODUCT_IMAGES.taller} alt="Taller de mecanizado en Rubí" style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(10,26,48,0.25) 0%, transparent 55%)',
            }} />
            {['tl','tr','bl','br'].map(c => (
              <span key={c} style={{
                position: 'absolute',
                top: c[0] === 't' ? 14 : 'auto', bottom: c[0] === 'b' ? 14 : 'auto',
                left: c[1] === 'l' ? 14 : 'auto', right: c[1] === 'r' ? 14 : 'auto',
                width: 16, height: 16,
                borderTop: c[0] === 't' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                borderBottom: c[0] === 'b' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                borderLeft: c[1] === 'l' ? '1px solid rgba(255,255,255,0.7)' : 'none',
                borderRight: c[1] === 'r' ? '1px solid rgba(255,255,255,0.7)' : 'none',
              }} />
            ))}
            <div style={{
              position: 'absolute', left: 16, bottom: 14,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em',
              color: '#fff', textTransform: 'uppercase',
              background: 'rgba(10,22,37,0.5)', padding: '6px 10px', backdropFilter: 'blur(4px)',
            }}>
              Taller · Rubí
            </div>
          </div>

          <div className="reveal">
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 24,
            }}>
              § A — Historia
            </div>
            <p style={{
              fontFamily: "'Newsreader', serif", fontWeight: 300,
              fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.25, letterSpacing: '-0.018em',
              color: 'var(--ink)', margin: 0, marginBottom: 32,
            }}>
              Nacimos en Rubí en {D1.company.established} con una idea simple: llevar la oficina técnica y el
              taller al mismo edificio, para resolver cada pieza de principio a fin sin intermediarios.
            </p>
            <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
              Combinamos diseño, mecanizado CNC y construcción de maquinaria especial. Trabajamos a partir de
              plano o de archivo 3D y entregamos con control dimensional documentado, para clientes industriales
              de automoción, farma, ferroviario y aeronáutica.
            </p>
            <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.7 }}>
              No somos los más grandes. Sí los más dispuestos a entender qué tiene que hacer tu pieza —
              y por qué falla la anterior.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
              marginTop: 40, borderTop: '1px solid var(--rule)',
            }}>
              {[
                { n: D1.company.years, l: 'Años de experiencia' },
                { n: '4', l: 'Disciplinas integradas' },
              ].map((s, i) => (
                <div key={s.l} style={{
                  padding: '24px 0',
                  borderRight: i === 0 ? '1px solid var(--rule)' : 'none',
                  paddingLeft: i === 1 ? 28 : 0,
                }}>
                  <div style={{
                    fontFamily: "'Newsreader', serif", fontWeight: 300,
                    fontSize: 52, lineHeight: 1, color: 'var(--accent)',
                  }}>{s.n}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 8,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CALIDAD / CERTIFICACIONES === */}
      <section style={{ padding: '100px 40px', background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 56 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 16,
            }}>
              § B — Calidad
            </div>
            <h2 style={{
              fontFamily: "'Newsreader', serif", fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-0.022em',
              color: 'var(--ink)', margin: 0,
            }}>
              Normas y <em style={{ color: 'var(--accent-bright)', fontStyle: 'italic' }}>compromisos.</em>
            </h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20,
          }}>
            {D1.certifications.map((c, i) => (
              <div key={c} className="reveal" style={{
                background: '#fff', border: '1px solid var(--rule)',
                padding: '32px 28px', minHeight: 180,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-bright)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em',
                  color: 'var(--accent-text)',
                }}>0{i+1}</div>
                <div style={{
                  fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 24, lineHeight: 1.15,
                  color: 'var(--ink)',
                }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === EQUIPO POR DISCIPLINAS (sin rostros) === */}
      <section style={{ padding: '100px 40px', background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 56 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 16,
            }}>
              § C — Equipo
            </div>
            <h2 style={{
              fontFamily: "'Newsreader', serif", fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1, letterSpacing: '-0.022em',
              color: 'var(--ink)', margin: 0, marginBottom: 16,
            }}>
              Las <em style={{ color: 'var(--accent-bright)', fontStyle: 'italic' }}>manos</em> detrás.
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 16, color: 'var(--ink-soft)',
              margin: 0, maxWidth: 600,
            }}>
              Un equipo multidisciplinar que cubre todo el ciclo, del plano a la pieza verificada.
            </p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20,
          }}>
            {disciplines.map((d) => (
              <div key={d.name} className="reveal" style={{
                background: '#fff', border: '1px solid var(--rule)', padding: '32px 28px',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  width: 56, height: 56, marginBottom: 24,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--accent-deep)', color: '#fff',
                  fontFamily: "'Newsreader', serif", fontSize: 22, letterSpacing: '0.02em',
                }}>{d.mono}</div>
                <h3 style={{
                  fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 24, lineHeight: 1.1,
                  color: 'var(--ink)', margin: 0, marginBottom: 12,
                }}>{d.name}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6,
                  color: 'var(--ink-soft)', margin: 0,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== MAPA (facade: solo carga Google Maps al hacer clic) ===== */
function V2_MapBlock() {
  const [open, setOpen] = uS1(false);

  if (open) {
    return (
      <div style={{ height: 440, position: 'relative', background: 'var(--bg-2)', borderTop: '1px solid var(--rule)' }}>
        <iframe
          title="Ubicación — Mecanizados UPC, Rubí"
          src="https://www.google.com/maps?q=Carrer%20Alt%2C%209%2C%2008191%20Rub%C3%AD%2C%20Barcelona&output=embed"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setOpen(true)}
      style={{
        height: 440, position: 'relative', overflow: 'hidden', cursor: 'pointer',
        borderTop: '1px solid var(--rule)',
        background: 'linear-gradient(135deg, var(--accent-deep) 0%, var(--accent) 100%)',
      }}
    >
      {/* Marcador */}
      <div style={{
        position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        <span style={{
          width: 16, height: 16, borderRadius: '50%',
          background: 'var(--accent-bright)',
          boxShadow: '0 0 0 8px rgba(74,122,184,0.25), 0 0 24px rgba(74,122,184,0.6)',
        }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
        }}>
          41.49° N · 2.03° E
        </span>
      </div>
      {/* Tarjeta de dirección + botón */}
      <div style={{
        position: 'absolute', left: 0, bottom: 0, right: 0,
        padding: '28px 40px',
        background: 'linear-gradient(to top, rgba(10,22,37,0.85) 0%, transparent 100%)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        gap: 24, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--accent-on-dark)', marginBottom: 10,
          }}>
            Dónde estamos
          </div>
          <div style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 26, color: '#fff', lineHeight: 1.2 }}>
            Carrer Alt, 9 — Rubí, Barcelona
          </div>
        </div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'var(--accent-bright)', color: '#fff',
          padding: '14px 24px', fontFamily: "'Inter', sans-serif",
          fontSize: 13, fontWeight: 500, letterSpacing: '0.04em',
        }}>
          Ver mapa →
        </span>
      </div>
    </div>
  );
}

/* ===== CONTACT (multi-step form) ===== */
function V2_Contact() {
  const [step, setStep] = uS1(0);
  const [data, setData] = uS1({
    service: [],
    material: '',
    timing: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [sent, setSent] = uS1(false);

  const steps = [
    { label: 'Proyecto' },
    { label: 'Detalles' },
    { label: 'Contacto' },
  ];

  const toggle = (k, v) => {
    setData(d => {
      const arr = d[k] || [];
      return { ...d, [k]: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v] };
    });
  };

  if (sent) {
    return (
      <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--accent-text)', marginBottom: 30 }}>— Recibido —</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(56px, 14vw, 96px)', marginBottom: 32 }}>Gracias.</h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 26, color: 'var(--ink-soft)', lineHeight: 1.4, marginBottom: 40 }}>
            Hemos recibido tu consulta. Nuestro equipo técnico responderá en las próximas 24 horas.
          </p>
          <button className="btn btn-ghost" onClick={() => { setSent(false); setStep(0); setData({ service: [], material: '', timing: '', name: '', email: '', company: '', message: '' }); }}>
            Enviar otra <span className="arrow">→</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="contact">
        <div className="contact-left">
          <div className="mono" style={{ color: 'var(--accent-on-dark)', marginBottom: 24 }}>Contacto · Rubí, Barcelona</div>
          <h1 className="contact-title">Empecemos<br/>un <em>proyecto.</em></h1>
          <p style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 22, lineHeight: 1.45, marginBottom: 40, color: 'rgba(255,255,255,0.75)' }}>
            Responde tres preguntas. En 24 horas te llamamos con una primera estimación.
          </p>

          <div style={{ marginTop: 60 }}>
            <div className="mono" style={{ marginBottom: 12, color: 'var(--accent-on-dark)' }}>Dirección</div>
            <div style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 22, lineHeight: 1.35, marginBottom: 32, color: '#fff' }}>
              Carrer Alt, 9<br/>Rubí, 08191<br/>Barcelona — España
            </div>

            <div className="mono" style={{ marginBottom: 12, color: 'var(--accent-on-dark)' }}>Teléfono</div>
            <div style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 22, marginBottom: 32, color: '#fff' }}>
              <a href="tel:+34938636976" style={{ color: '#fff', textDecoration: 'none' }}>+34 938 63 69 76</a>
            </div>

            <div className="mono" style={{ marginBottom: 12, color: 'var(--accent-on-dark)' }}>Correo</div>
            <div style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 22, color: '#fff' }}>
              <a href="mailto:oficinatecnica@mecanizadosupc.com" style={{ color: '#fff', textDecoration: 'none', wordBreak: 'break-word' }}>oficinatecnica@<br/>mecanizadosupc.com</a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="step-dots">
            {steps.map((s, i) => (
              <div key={s.label} className={`step-dot ${i < step ? 'done' : ''} ${i === step ? 'current' : ''}`} />
            ))}
          </div>
          <div className="mono" style={{ marginBottom: 24 }}>Paso {step + 1} de {steps.length} — {steps[step].label}</div>

          {step === 0 && (
            <div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 40, lineHeight: 1.1, marginBottom: 32 }}>¿Qué servicio necesitas?</h3>
              <div className="form-chip-row">
                {D1.services.map(s => (
                  <button key={s.id}
                    className={`form-chip ${data.service.includes(s.id) ? 'active' : ''}`}
                    onClick={() => toggle('service', s.id)}>
                    {s.name}
                  </button>
                ))}
                {['Fundición','Chapa','Engranajes','5 ejes'].map(s => (
                  <button key={s}
                    className={`form-chip ${data.service.includes(s) ? 'active' : ''}`}
                    onClick={() => toggle('service', s)}>
                    {s}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <button className="btn" onClick={() => setStep(1)} disabled={!data.service.length}>
                  Continuar <span className="arrow">→</span>
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 40, lineHeight: 1.1, marginBottom: 32 }}>Cuéntanos el proyecto.</h3>
              <div className="form-group">
                <label className="form-label">Material principal</label>
                <div className="form-chip-row">
                  {['Aluminio','Acero','Inoxidable','Titanio','Plástico','Otro'].map(m => (
                    <button key={m}
                      className={`form-chip ${data.material === m ? 'active' : ''}`}
                      onClick={() => setData({ ...data, material: m })}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Plazo estimado</label>
                <div className="form-chip-row">
                  {['< 2 semanas','2–4 semanas','1–3 meses','Serie continua','No lo sé'].map(t => (
                    <button key={t}
                      className={`form-chip ${data.timing === t ? 'active' : ''}`}
                      onClick={() => setData({ ...data, timing: t })}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Describe brevemente la pieza</label>
                <textarea className="form-textarea"
                  value={data.message}
                  onChange={e => setData({ ...data, message: e.target.value })}
                  placeholder="Ej. bastidor en aluminio 6082, 300 × 200 × 80 mm, serie de 50 unidades…" />
              </div>
              <div style={{ marginTop: 20, display: 'flex', gap: 16 }}>
                <button className="btn btn-ghost" onClick={() => setStep(0)}>← Atrás</button>
                <button className="btn" onClick={() => setStep(2)}>Continuar <span className="arrow">→</span></button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 40, lineHeight: 1.1, marginBottom: 32 }}>¿Cómo contactamos?</h3>
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="form-input" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Nombre y apellido" />
              </div>
              <div className="form-group">
                <label className="form-label">Empresa</label>
                <input className="form-input" value={data.company} onChange={e => setData({ ...data, company: e.target.value })} placeholder="Empresa o proyecto" />
              </div>
              <div className="form-group">
                <label className="form-label">Correo electrónico</label>
                <input type="email" className="form-input" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="tu@empresa.com" />
              </div>
              <div style={{ marginTop: 30, display: 'flex', gap: 16 }}>
                <button className="btn btn-ghost" onClick={() => setStep(1)}>← Atrás</button>
                <button className="btn" onClick={() => setSent(true)} disabled={!data.name || !data.email}>
                  Enviar consulta <span className="arrow">→</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mapa de la ubicación (carga bajo demanda — sin peticiones externas hasta el clic) */}
      <V2_MapBlock />
    </div>
  );
}

/* ===== PRODUCT MODAL (ficha de pieza del catálogo) ===== */
function V2_Modal({ product, onClose, setPage }) {
  uE1(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!product) return null;

  // Soporta tanto piezas del catálogo CNC ({code,name,material,desc,img})
  // como categorías de producto ({n,en,name,desc,specs,id}).
  const isPiece = !!product.code;
  const img = product.img || (product.id && window.PRODUCT_IMAGES[product.id]);
  const meta = isPiece
    ? `Ref. ${product.code} · Mecanizado CNC`
    : `${product.n} / 08 · ${product.en}`;
  const specs = isPiece
    ? [`Material — ${product.material}`, 'Fabricación bajo plano', 'Control dimensional con MMC']
    : (product.specs || []);

  const goQuote = () => { onClose(); if (setPage) setPage('contact'); };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <div style={{
          background: 'var(--bg-2)', position: 'relative', minHeight: 320,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={img} alt={product.name || product.code} style={{
            width: '100%', height: '100%', objectFit: isPiece ? 'contain' : 'cover',
            padding: isPiece ? 40 : 0, display: 'block',
          }} />
          {isPiece && (
            <div style={{
              position: 'absolute', left: 20, top: 20,
              fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 40,
              color: 'var(--accent)', opacity: 0.4, lineHeight: 1,
            }}>{product.code}</div>
          )}
        </div>
        <div className="modal-body">
          <div className="modal-meta">{meta}</div>
          <h2 className="modal-title">{product.name || product.code}</h2>
          <p className="modal-desc">{product.desc}</p>

          <div className="modal-specs-title">— Ficha técnica</div>
          <ul className="modal-specs">
            {specs.map(s => <li key={s}>{s}</li>)}
          </ul>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn" onClick={goQuote}>Solicitar presupuesto <span className="arrow">→</span></button>
            <button className="btn btn-ghost" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== FOOTER ===== */
function V2_Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Mecanizados<em>UPC</em></div>
          <p style={{ color: '#c9bfae', fontSize: 14, marginTop: 20, maxWidth: 320 }}>
            Diseño, mecanizado y construcción de piezas y maquinaria especial desde 2013.
          </p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Navegación</div>
          <ul>
            <li onClick={() => setPage('home')}>Inicio</li>
            <li onClick={() => setPage('services')}>Servicios</li>
            <li onClick={() => setPage('products')}>Productos</li>
            <li onClick={() => setPage('about')}>Empresa</li>
            <li onClick={() => setPage('contact')}>Contacto</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contacto</div>
          <ul style={{ cursor: 'default' }}>
            <li>Carrer Alt, 9 — Rubí</li>
            <li>08191 Barcelona</li>
            <li>+34 938 63 69 76</li>
            <li>oficinatecnica@mecanizadosupc.com</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <ul>
            <li>Aviso legal</li>
            <li>Privacidad</li>
            <li>Cookies</li>
            <li>Términos de uso</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Mecanizados UPC, S.L.</span>
        <span>Rubí · Barcelona · España</span>
        <span>Mecanizados UPC · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { V2_Services, V2_Products, V2_About, V2_Contact, V2_Modal, V2_Footer });

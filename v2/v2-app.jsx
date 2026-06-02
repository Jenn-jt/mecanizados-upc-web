/* V2 — Prusia / Técnico · App shell */
const { useState: uSA, useEffect: uEA, useRef: uRA } = React;

function MecaApp({ storageKey = 'v2_page' }) {
  const [page, setPage] = uSA(() => {
    try { return localStorage.getItem(storageKey) || 'home'; } catch (e) { return 'home'; }
  });
  const [product, setProduct] = uSA(null);
  const scrollRef = uRA(null);

  uEA(() => {
    try { localStorage.setItem(storageKey, page); } catch (e) {}
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [page, storageKey]);

  // Reveal on scroll
  uEA(() => {
    const root = scrollRef.current;
    if (!root) return;
    const scan = () => {
      const els = root.querySelectorAll('.reveal:not(.in)');
      const rootRect = root.getBoundingClientRect();
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < rootRect.bottom - 40 && r.bottom > rootRect.top) {
          el.classList.add('in');
        }
      });
    };
    scan();
    root.addEventListener('scroll', scan, { passive: true });
    const id = setInterval(scan, 600);
    return () => { root.removeEventListener('scroll', scan); clearInterval(id); };
  }, [page]);

  const openProduct = (p) => setProduct(p);
  const closeProduct = () => setProduct(null);

  return (
    <div className="v2" ref={scrollRef} style={{ height: '100%', overflow: 'auto' }}>
      <window.V2_Nav page={page} setPage={setPage} />
      {page === 'home' && <window.V2_Home setPage={setPage} openProduct={openProduct} />}
      {page === 'services' && <window.V2_Services setPage={setPage} />}
      {page === 'products' && <window.V2_Products openProduct={openProduct} />}
      {page === 'about' && <window.V2_About setPage={setPage} />}
      {page === 'contact' && <window.V2_Contact />}
      <window.V2_Footer setPage={setPage} />
      {product && <window.V2_Modal product={product} onClose={closeProduct} setPage={setPage} />}
    </div>
  );
}

window.MecaApp = MecaApp;
window.V2App = () => <MecaApp storageKey="v2_page" />;

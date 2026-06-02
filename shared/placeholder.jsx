// Editorial photo placeholder with monospace caption, OR real image when src provided
const Placeholder = ({ label = "imagen", ratio = "4/3", tone = "warm", className = "", style = {}, src = null }) => {
  const tones = {
    warm:   { bg: "#e8e2d8", stroke: "#c9bfae", ink: "#6b5f4e" },
    cool:   { bg: "#dee3ea", stroke: "#b9c3d0", ink: "#4a5668" },
    dark:   { bg: "#1c1c1a", stroke: "#2e2e2a", ink: "#9a9283" },
    cream:  { bg: "#f1ece1", stroke: "#d9d1bf", ink: "#7a6d54" },
    steel:  { bg: "#cdd2d7", stroke: "#a8b0b8", ink: "#3e474f" },
  };
  const t = tones[tone] || tones.warm;

  if (src) {
    return (
      <div className={"ph " + className} style={{ aspectRatio: ratio, position: "relative", overflow: "hidden", background: t.bg, ...style }}>
        <img src={src} alt={label}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => { e.target.style.display = 'none'; }} />
        <div style={{
          position: "absolute", left: 12, bottom: 10,
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 10, letterSpacing: "0.08em",
          color: "#faf6ee", textTransform: "uppercase",
          background: "rgba(0,0,0,0.55)", padding: "5px 9px",
          display: "flex", alignItems: "center", gap: 7,
          backdropFilter: "blur(4px)",
        }}>
          <span style={{ width: 5, height: 5, background: "#faf6ee", borderRadius: "50%" }} />
          {label}
        </div>
      </div>
    );
  }

  return (
    <div className={"ph " + className} style={{ aspectRatio: ratio, background: t.bg, position: "relative", overflow: "hidden", ...style }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, ${t.stroke} 0 1px, transparent 1px 14px)`,
        opacity: 0.55,
      }} />
      {["tl","tr","bl","br"].map(c => (
        <div key={c} style={{
          position: "absolute",
          top: c.startsWith("t") ? 10 : "auto",
          bottom: c.startsWith("b") ? 10 : "auto",
          left: c.endsWith("l") ? 10 : "auto",
          right: c.endsWith("r") ? 10 : "auto",
          width: 14, height: 14,
          borderTop: c.startsWith("t") ? `1px solid ${t.ink}` : "none",
          borderBottom: c.startsWith("b") ? `1px solid ${t.ink}` : "none",
          borderLeft: c.endsWith("l") ? `1px solid ${t.ink}` : "none",
          borderRight: c.endsWith("r") ? `1px solid ${t.ink}` : "none",
          opacity: 0.5,
        }} />
      ))}
      <div style={{
        position: "absolute", left: 14, bottom: 12,
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontSize: 10, letterSpacing: "0.08em",
        color: t.ink, textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 6, height: 6, background: t.ink, borderRadius: "50%" }} />
        {label}
      </div>
    </div>
  );
};

// Real product imagery URLs for each product category
window.PRODUCT_IMAGES = {
  cnc:      "fotos/ty-001.png",
  milling:  "fotos/ty-010.png",
  lathing:  "https://images.unsplash.com/photo-1617094416871-834bc0cff0de?auto=format&fit=crop&w=1200&q=80",
  plate:    "https://images.unsplash.com/photo-1565791380709-69a5d615ef51?auto=format&fit=crop&w=1200&q=80",
  fiveaxis: "fotos/ty-011.png",
  welded:   "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  gearing:  "fotos/ty-016.png",
  casting:  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
  hero:     "fotos/ty-001.png",
  taller:   "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
};

// CNC parts catalog — real pieces from reference (21 pieces)
window.CNC_CATALOG = [
  { code: "TY-001", name: "Brida mecanizada",       material: "Aluminio 6082",    desc: "Brida de acoplamiento con 6 alojamientos circulares y taladros pasantes. Torneada y fresada en CNC 4 ejes.", img: "fotos/ty-001.png" },
  { code: "TY-010", name: "Bloque de carcasa",      material: "Aluminio 7075",    desc: "Bloque estructural con rebajes y taladros calibrados para montaje de rodamientos y ejes.", img: "fotos/ty-010.png" },
  { code: "TY-011", name: "Cuerpo hidráulico",      material: "Aluminio 6061",    desc: "Cuerpo con doble alojamiento cilíndrico y canales de conducción. Mecanizado 3 ejes Ra 0,8.", img: "fotos/ty-011.png" },
  { code: "TY-016", name: "Brazo de soporte",       material: "Aluminio forjado", desc: "Brazo estructural con casquillo integrado para eje de transmisión. Pieza crítica para automoción.", img: "fotos/ty-016.png" },
  { code: "TY-019", name: "Soporte estructural",    material: "Aluminio 6082",    desc: "Pieza de fijación con cavidad central rebajada y taladros pasantes para montaje en bastidor.", img: "fotos/ty-019.jpg" },
  { code: "TY-021", name: "Carcasa de precisión",   material: "Aluminio 7075",    desc: "Cuerpo mecanizado con tolerancias cerradas para alojamiento de componentes mecánicos.", img: "fotos/ty-021.jpg" },
  { code: "TY-024", name: "Pieza de revolución",    material: "Acero inoxidable 316L", desc: "Componente cilíndrico con escalonados torneados y rosca métrica calibrada.", img: "fotos/ty-024.jpg" },
  { code: "TY-027", name: "Bloque conector",        material: "Aluminio 6061",    desc: "Bloque mecanizado con múltiples taladros y cavidades para conexiones hidráulicas.", img: "fotos/ty-027.jpg" },
  { code: "TY-028", name: "Soporte de rodamiento",  material: "Acero al carbono", desc: "Alojamiento de rodamiento con bridado de fijación y tolerancia H7 en cavidad principal.", img: "fotos/ty-028.jpg" },
  { code: "TY-037", name: "Pieza estructural",      material: "Aluminio 6082",    desc: "Componente con geometría compleja mecanizada en CNC 4 ejes. Acabado anodizado.", img: "fotos/ty-037.jpg" },
  { code: "TY-040", name: "Cuerpo válvula",         material: "Latón mecanizado", desc: "Cuerpo de válvula con conexiones roscadas y conducción interna mecanizada.", img: "fotos/ty-040.jpg" },
  { code: "TY-041", name: "Casquillo guía",         material: "Bronce",           desc: "Casquillo torneado con tolerancia de ajuste para guiado de eje. Acabado interior pulido.", img: "fotos/ty-041.jpg" },
  { code: "TY-050", name: "Anclaje mecanizado",     material: "Acero S355",       desc: "Pieza de anclaje con base ranurada y taladros pasantes para fijación estructural.", img: "fotos/ty-050.jpg" },
  { code: "TY-051", name: "Disco de fijación",      material: "Aluminio 6082",    desc: "Disco mecanizado con patrón circular de taladros y cavidad central rebajada.", img: "fotos/ty-051.jpg" },
  { code: "TY-052", name: "Soporte angular",        material: "Aluminio 7075",    desc: "Pieza estructural en L mecanizada con rebajes de aligeramiento y tolerancias de plano.", img: "fotos/ty-052.jpg" },
  { code: "TY-053", name: "Tapa mecanizada",        material: "Aluminio 6061",    desc: "Tapa de cierre con junta tórica integrada y taladros pasantes para fijación.", img: "fotos/ty-053.jpg" },
  { code: "TY-054", name: "Brida de conexión",      material: "Acero inoxidable 304", desc: "Brida con patrón de taladros normalizados para conexión a tubería industrial.", img: "fotos/ty-054.jpg" },
  { code: "TY-057", name: "Cuerpo de bomba",        material: "Aluminio 6082",    desc: "Cuerpo mecanizado con cavidades calibradas y conducciones internas para sistema hidráulico.", img: "fotos/ty-057.jpg" },
  { code: "TY-062", name: "Pieza de unión",         material: "Aluminio 7075",    desc: "Componente de transmisión con doble cavidad cilíndrica y taladrado de precisión.", img: "fotos/ty-062.jpg" },
  { code: "TY-063", name: "Soporte motor",          material: "Aluminio 6082",    desc: "Soporte de fijación de motor con rebajes de aligeramiento y tolerancias dimensionales cerradas.", img: "fotos/ty-063.jpg" },
  { code: "TY-066", name: "Carcasa de protección",  material: "Aluminio lacado",  desc: "Carcasa con geometría curva mecanizada y acabado exterior con pintura epoxi blanca.", img: "fotos/ty-066.jpg" },
];

window.Placeholder = Placeholder;

// Shared content across all three variants
window.MECA_DATA = {
  company: {
    name: "Mecanizados UPC",
    tagline: "Diseño, mecanizado y construcción",
    established: "2013",
    years: "+10",
    address: "Carrer Alt, 9 — Rubí, 08191 Barcelona",
    phone: "+34 938 63 69 76",
    email: "oficinatecnica@mecanizadosupc.com",
  },

  // 8 product categories — inspired by a typical CNC supplier catalog
  products: [
    { id: "cnc",      n: "01", name: "Mecanizado CNC",     en: "CNC Machining",      desc: "Piezas de alta precisión fabricadas en centros de control numérico, desde prototipos unitarios a series medias.", specs: ["Tolerancia hasta ±0,01 mm", "Materiales ferrosos y no ferrosos", "Acabados Ra 0,8"], color: "aluminio anodizado" },
    { id: "milling",  n: "02", name: "Fresado",             en: "Milling Parts",       desc: "Mecanizado 3 y 4 ejes para componentes estructurales, soportes, carcasas y utillajes de precisión.", specs: ["Volumen máx. 1600 × 800 × 700 mm", "Acero, aluminio, titanio, plásticos técnicos"], color: "acero mecanizado" },
    { id: "lathing",  n: "03", name: "Torneado",            en: "Lathing Parts",       desc: "Torneado CNC de ejes, casquillos, bridas y piezas de revolución con acabados superficiales exigentes.", specs: ["Ø hasta 500 mm · L hasta 1500 mm", "Roscado métrico, whitworth, UNF"], color: "bronce pulido" },
    { id: "plate",    n: "04", name: "Chapa metálica",      en: "Metal Plate",         desc: "Corte láser, plegado y soldadura de conjuntos en chapa para estructuras, carcasas y protecciones.", specs: ["Corte láser hasta 20 mm", "Plegado CNC 4 m", "Soldadura MIG / TIG"], color: "chapa galvanizada" },
    { id: "fiveaxis", n: "05", name: "Mecanizado 5 ejes",   en: "5-axis Machining",    desc: "Geometrías complejas y formas orgánicas resueltas en un solo anclado — álabes, impellers, moldes.", specs: ["Simultáneo 5 ejes continuos", "Precisión en superficies libres", "CAM avanzado"], color: "impeller titanio" },
    { id: "welded",   n: "06", name: "Conjuntos soldados",  en: "Welded Parts",        desc: "Bastidores, chasis y estructuras soldadas con tratamiento térmico y mecanizado posterior garantizando planitud.", specs: ["TIG · MIG · MAG", "Normalizado post-soldadura", "Control por ensayos no destructivos"], color: "estructura soldada" },
    { id: "gearing",  n: "07", name: "Engranajes",          en: "Gearing",             desc: "Fabricación de ruedas dentadas, piñones, cremalleras y tornillos sin fin bajo plano.", specs: ["Módulos 0,5 – 20", "Tallado y rectificado de perfil", "Tratamientos de dureza"], color: "engranaje helicoidal" },
    { id: "casting",  n: "08", name: "Fundición",           en: "Investment Casting",  desc: "Piezas de fundición a la cera perdida con mecanizado final — ideal para geometrías complejas en serie.", specs: ["Cera perdida · Arena", "Aleaciones Fe, Al, Cu, inox", "Postmecanizado integrado"], color: "pieza fundida" },
  ],

  services: [
    { id: "cnc",       name: "Mecanizado CNC",       kicker: "Núcleo de fabricación", body: "Fresado y torneado CNC de alta precisión, prototipos, series cortas y medias. Piezas críticas con control dimensional certificado." },
    { id: "maq",       name: "Maquinaria especial",  kicker: "Ingeniería a medida",   body: "Diseño, fabricación y montaje de utillajes, bancos de pruebas y líneas automatizadas adaptadas al proceso del cliente." },
    { id: "ing",       name: "Ingeniería",           kicker: "De CAD a pieza",         body: "Servicio integral de oficina técnica: viabilidad, diseño 3D, documentación de fabricación y soporte post-montaje." },
    { id: "estruct",   name: "Estructuras metálicas", kicker: "Obra y planta",        body: "Estructuras soldadas para plantas industriales, protecciones, plataformas y conjuntos calderería ligera." },
  ],

  sectors: [
    { id: "auto",   name: "Automoción",       desc: "Utillajes de producción, bancos de ensayo y piezas de serie." },
    { id: "pharma", name: "Farmacéutica",     desc: "Equipos y componentes en inox con trazabilidad completa." },
    { id: "rail",   name: "Ferroviario",      desc: "Componentes estructurales y piezas críticas certificadas." },
    { id: "design", name: "Diseño de producto", desc: "Prototipos, preseries y fabricación puente para startups." },
    { id: "aero",   name: "Aeronáutica",      desc: "Tolerancias cerradas y materiales de alto rendimiento." },
    { id: "food",   name: "Agro-alimentario",  desc: "Maquinaria de proceso y transporte aptos para contacto." },
  ],

  process: [
    { n: "01", name: "Consulta técnica",  body: "Escuchamos el problema. Analizamos plano, función y volumen." },
    { n: "02", name: "Oficina técnica",   body: "Diseño 3D, plan de mecanizado y selección de material." },
    { n: "03", name: "Fabricación",       body: "Mecanizado CNC, soldadura y tratamientos según plan." },
    { n: "04", name: "Control dimensional", body: "Verificación con MMC y protocolo firmado pieza a pieza." },
    { n: "05", name: "Entrega",           body: "Embalaje, trazabilidad y logística puerta a puerta." },
  ],

  capabilities: {
    materials: ["Aluminio (6082, 7075)", "Acero al carbono", "Inoxidable (304, 316L)", "Titanio Gr.2/Gr.5", "Latón · Bronce", "Plásticos técnicos (PEEK, POM, PTFE)"],
    tolerances: ["±0,01 mm estándar", "Roscado hasta M1,2", "Ra 0,4 con rectificado", "Concentricidad ≤ 0,005 mm"],
    sizes: ["Fresado 1600 × 800 × 700", "Torneado Ø500 × L1500", "5 ejes Ø450", "Chapa láser hasta 20 mm"],
  },

  certifications: ["ISO 9001:2015", "Calidad PPAP nivel 3", "Trazabilidad completa", "Ensayos LND certificados"],

  clients: ["SEAT", "ALSTOM", "ROCHE", "HP", "GRIFOLS", "CELSA", "IDIADA", "AIRBUS"],
};

// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [

  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Realizamos instalaciones eléctricas completas para viviendas nuevas y remodelaciones, cumpliendo la normativa RETIE vigente.'
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales e industriales',
    descripcion: 'Diseño y montaje de sistemas eléctricos de baja y media tensión para locales, oficinas, bodegas y plantas de producción.'
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo y correctivo',
    descripcion: 'Inspecciones periódicas, termografía y reparación inmediata de fallas para garantizar la continuidad y seguridad de sus operaciones.'
  },
  {
    icono: '🎛️',
    titulo: 'Tableros eléctricos y breakers',
    descripcion: 'Armado, modernización y distribución de tableros de control, fuerza y protecciones térmicas bajo estándares técnicos internacionales.'
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED y domótica',
    descripcion: 'Proyectos de eficiencia energética mediante sistemas LED y automatización residencial para el control inteligente de luces, accesos y clima.'
  },
  {
    icono: '🔋',
    titulo: 'Plantas eléctricas y UPS',
    descripcion: 'Suministro, instalación y soporte técnico de sistemas de respaldo de energía crítica y plantas generadoras para evitar interrupciones.'
  },
  {
    icono: '🌱',
    titulo: 'Puestas a tierra y apantallamiento',
    descripcion: 'Diseño, medición e instalación de sistemas de puesta a tierra (SPT) y pararrayos para la protección de equipos sensibles y personal.'
  }
];
function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            {"Soluciones eléctricas profesionales y certificadas"}
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">

          {servicios.map((servicio, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  {/* Ícono */}
                  <div className="fs-1 mb-3">{servicio.icono}</div>
                  
                  {/* Título */}
                  <h5 className="card-title fw-bold">{servicio.titulo}</h5>
                  
                  {/* Descripción */}
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;

       
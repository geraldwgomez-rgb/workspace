
// 🛠️ INSTRUCCIÓN 1: Definimos el array "razones" con 4 objetos
const razones = [
  {
    icono: '🛡️',
    titulo: 'Seguridad Garantizada',
    descripcion: 'Trabajamos bajo estrictos protocolos de seguridad y cumplimos al 100% con la normativa RETIE.'
  },
  {
    icono: '🎓',
    titulo: 'Personal Certificado',
    descripcion: 'Nuestro equipo está conformado por técnicos e ingenieros electricistas matriculados.'
  },
  {
    icono: '⏱️',
    titulo: 'Atención Inmediata',
    descripcion: 'Ofrecemos tiempos de respuesta rápidos y soluciones eficientes ante cualquier emergencia.'
  },
  {
    icono: '💎',
    titulo: 'Calidad y Respaldo',
    descripcion: 'Utilizamos materiales de marcas líderes y ofrecemos garantía por escrito en cada trabajo.'
  }
];

function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="py-5 bg-white">
      <div className="container">
        
        <div className="row align-items-center g-5">
          
          {/* 🛠️ INSTRUCCIÓN 2: Imagen en la columna izquierda */}
          <div className="col-12 col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
              alt="Trabajo de instalaciones eléctricas profesionales" 
              className="img-fluid rounded-3 shadow"
            />
          </div>

          {/* Columna derecha: Información y Razones */}
          <div className="col-12 col-lg-6">
            
            <h2 className="fw-bold mb-4">¿Por qué elegir nuestra empresa?</h2>
            
            {/* 🛠️ INSTRUCCIÓN 3: Dos párrafos sobre la empresa */}
            <p className="text-secondary mb-3">
              Somos una compañía líder en el sector de la ingeniería eléctrica, comprometida con el desarrollo de soluciones energéticas seguras, eficientes y sostenibles. Contamos con una sólida trayectoria transformando proyectos residenciales, comerciales e industriales a través de un servicio transparente que prioriza la excelencia técnica y la tranquilidad de nuestros clientes.
            </p>
            <p className="text-secondary mb-4">
              Nos diferenciamos por nuestra rigurosidad en el cumplimiento de los estándares internacionales y locales. Cada miembro de nuestro equipo aporta su experiencia y conocimiento actualizado para garantizar que sus instalaciones no solo funcionen a la perfección, sino que operen bajo el marco legal y de seguridad vigente.
            </p>

            {/* 🛠️ INSTRUCCIÓN 4: Uso de .map() para renderizar la lista de razones */}
            <div className="row g-3">
              {razones.map((razon, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="d-flex align-items-start p-3 border rounded bg-light h-100">
                    {/* Icono */}
                    <div className="fs-3 me-3">{razon.icono}</div>
                    {/* Texto */}
                    <div>
                      <h6 className="fw-bold mb-1">{razon.titulo}</h6>
                      <p className="text-muted small mb-0">{razon.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyUs;
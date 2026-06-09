import React, { useState } from 'react';

function Contact() {
  // 🛠️ RETO ADICIONAL: Estado para controlar los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Mostramos la alerta con los datos ingresados
    alert(`¡Gracias por escribirnos, ${formData.nombre}! \n\nHemos recibido tu solicitud para el servicio de: "${formData.servicio}". Nos pondremos en contacto contigo pronto.`);
    
    // Opcional: Limpiar el formulario después del envío
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        {/* Encabezado */}
        <div className="text-center mb-5">
          <h2 className="section-titulo text-white fw-bold">Contáctenos</h2>
          <p className="text-light opacity-75">
            ¿Tiene un proyecto en mente o una emergencia eléctrica? Déjenos sus datos y un especialista lo asesorará en menos de 24 horas.
          </p>
        </div>

        <div className="row g-5">

          {/* 🛠️ INSTRUCCIÓN 2: Columna izquierda - Información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4 fw-bold">Información de contacto</h4>
            
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <span className="fs-3 me-3">📍</span>
                <div>
                  <h6 className="mb-0 fw-semibold">Dirección</h6>
                  <small className="text-light opacity-75">Calle 45 #12-34, Zona Industrial</small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="fs-3 me-3">📞</span>
                <div>
                  <h6 className="mb-0 fw-semibold">Teléfono / WhatsApp</h6>
                  <small className="text-light opacity-75">+57 (604) 321-4567 / +57 300 123 4567</small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="fs-3 me-3">📧</span>
                <div>
                  <h6 className="mb-0 fw-semibold">Correo Electrónics</h6>
                  <small className="text-light opacity-75">contacto@electricosprofesionales.com</small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span className="fs-3 me-3">🕐</span>
                <div>
                  <h6 className="mb-0 fw-semibold">Horario de Atención</h6>
                  <small className="text-light opacity-75">Lunes a Viernes: 7:00 AM - 5:30 PM / Sábados: 8:00 AM - 1:00 PM</small>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            {/* Convertimos el div contenedor en una etiqueta <form> para capturar el submit */}
            <form onSubmit={handleSubmit} className="bg-white text-dark rounded-3 p-4 shadow">
              <div className="row g-3">

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Campo Nombre */}
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label fw-semibold">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    className="form-control" 
                    placeholder="Ej. Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Campo Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-control" 
                    placeholder="juan@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Campo Teléfono */}
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label fw-semibold">Teléfono de Contacto</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    className="form-control" 
                    placeholder="3001234567"
                    value={formData.telefono}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Tipo de servicio (select con 5+ opciones) */}
                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label fw-semibold">Tipo de Servicio</label>
                  <select 
                    id="servicio" 
                    name="servicio"
                    className="form-select"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seleccione una opción...</option>
                    <option value="Residencial">Instalaciones Residenciales</option>
                    <option value="Comercial">Instalaciones Comerciales e Industriales</option>
                    <option value="Mantenimiento">Mantenimiento Preventivo / Correctivo</option>
                    <option value="Tableros">Tableros Eléctricos y Protecciones</option>
                    <option value="Domotica">Iluminación LED y Domótica</option>
                    <option value="Otros">Otros / Emergencia Técnica</option>
                  </select>
                </div>

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Mensaje (textarea) */}
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label fw-semibold">Detalles del Mensaje o Proyecto</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje"
                    className="form-control" 
                    rows="4" 
                    placeholder="Escriba brevemente lo que necesita..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* 🛠️ INSTRUCCIÓN 1 y 3: Botón enviar */}
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary px-4 fw-bold">
                    Enviar Mensaje
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
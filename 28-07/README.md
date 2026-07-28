# Sistema de Control Financiero & SMC

Bienvenido a la documentación de la arquitectura y el diseño del sistema. Puedes navegar a las diferentes secciones utilizando los siguientes enlaces:

* [🗺️ Mapa de Sitio y Rutas Protegidas](./mapa-sitio.md)
* [📦 Mapa de Componentes (Frontend)](./componentes.md)

---

## 🔄 Flujo de Usuario y Permisos

### Paso 1: Autenticación obligatoria
* El usuario llega a la plataforma y `Supabase Auth` valida si existe una sesión activa.
  * **No existe sesión:** Es redirigido a `/login`.
  * **Existe sesión:** Se descarga el perfil (`Cedula`, `Nombre`, `Apellido`, `Correo`, `Rol`) y se le da acceso al Layout de `/dashboard`.

### Paso 2: Bifurcación por Rol (Autorización en Sidebar)
El componente `Sidebar.jsx` evalúa el rol recuperado de Supabase:
* **Si el Rol es `USER`:** Visualiza en el menú únicamente *Resumen, Gastos, Ingresos y Presupuestos*. Si intenta escribir manualmente en la URL `/dashboard/smc`, el middleware bloquea el paso y lo devuelve a `/dashboard/resumen`.
* **Si el Rol es `ADMIN`:** Visualiza en el menú la sección especial *Sistema SMC (Cuentas, Categorías y Métricas Globales)* además de los módulos financieros estándar.

### Paso 3: Flujos Operativos de Datos
* **Flujo del Usuario Normal (`USER`):** Entra a `/gastos` ➔ Clic en "Nuevo Gasto" ➔ Completa el formulario (`Monto Extraordinario/Fijo`, `Descripción`) ➔ Envía a Supabase ➔ Se actualiza automáticamente el `Gasto acumulado` dentro de la tabla **PRESUPUESTO** de su periodo actual para contrastarlo con su `Monto limite`.
* **Flujo del Administrador (`ADMIN`):** Entra a `/dashboard/smc` ➔ Crea una nueva cuenta (`Nombre`, `Divisa`) o define categorías globales (`Tipo_movimiento: INGRESO/GASTO`) que luego nutrirán las opciones que ven los usuarios.
# 📦 Mapa Conceptual de Componentes (Estructura Real del Proyecto)

```mermaid
graph TD
    %% Estilos explícitos para alto contraste (Fondo claro/gris, texto negro)
    classDef modulo fill:#f5f5f5,stroke:#333,stroke-width:1.5px,color:#000;
    classDef layout fill:#fff3e0,stroke:#ff9800,stroke-width:1.5px,color:#000;
    classDef common fill:#e1f5fe,stroke:#03a9f4,stroke-width:1.5px,color:#000;

    %% Carpeta Principal que se ve en tu captura
    subgraph Componentes [Estructura de Carpetas del Proyecto]
        direction TB

        %% Módulos del Sistema
        C_Common[📁 common / Componentes Globales UI]:::common
        C_Layout[📁 layout / Estructura: Navbar, Sidebar]:::layout
        C_Pages[📁 pages / Enrutador y Vistas principales]:::modulo

        %% Carpetas por Entidad / Funcionalidad
        C_Auth[📁 auth / Login y Registro]:::modulo
        C_Dash[📁 dashboard / Panel General]:::modulo
        C_Gastos[📁 gastos / Gestión Financiera]:::modulo
        C_Ingresos[📁 ingresos / Gestión Financiera]:::modulo
        C_Presup[📁 presupuestos / Límites y Periodos]:::modulo
        
        %% Módulos del Sistema SMC (Admin)
        C_Cat[📁 categorias / Gestión SMC]:::modulo
        C_Cuentas[📁 cuentas / Gestión SMC]:::modulo
        C_User[📁 usuarios / Gestión SMC]:::modulo
    end

    %% Relaciones de Flujo
    C_Pages --> |Carga| C_Layout
    C_Layout --> |Contiene| C_Common
    
    %% Conexión de vistas con componentes
    C_Pages --> C_Auth
    C_Pages --> C_Dash
    C_Pages --> C_Gastos
    C_Pages --> C_Ingresos
    C_Pages --> C_Presup
    
    %% Conexión vistas ADMIN
    C_Pages --> C_Cat
    C_Pages --> C_Cuentas
    C_Pages --> C_User
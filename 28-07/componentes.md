# 📦 Mapa Conceptual de Componentes (Arquitectura Frontend)

```mermaid
graph LR
    subgraph SRC [src / Directorio Principal]
        direction TB
        
        subgraph UI [components/ui - Atómicos]
            B[Button.jsx] --- Input[Input.jsx]
            Input --- Card[Card.jsx]
            Card --- Modal[Modal.jsx]
        end

        subgraph LAYOUT [components/layout - Estructura]
            Nav[Navbar.jsx]
            Side[Sidebar.jsx]
            Prot[ProtectedLayout.jsx]
        end

        subgraph VIEWS [views - Páginas y Vistas]
            A_V[Auth: Login / Register]
            F_V[Finanzas: Gastos / Ingresos / Presupuesto]
            S_V[Sistema SMC: Cuentas / Categorías]
        end

        subgraph SERVICES [services - Conexión API]
            S_Auth[auth.service.js]
            S_Fin[finanzas.service.js]
            S_SMC[smc.service.js]
            S_Cli[(supabaseClient.js)]
        end
    end

    %% Conexiones y Relaciones del Sistema
    Prot --> |Renderiza| Side
    Prot --> |Renderiza| Nav
    
    VIEWS --> |Usa Componentes| UI
    
    A_V --> |Peticiones| S_Auth
    F_V --> |Queries de Finanzas| S_Fin
    S_V --> |Queries Especiales| S_SMC
    
    S_Auth & S_Fin & S_SMC --> |Cliente Global| S_Cli
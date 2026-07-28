# 🗺️ Mapa de Sitio (Rutas y Accesos)

```mermaid
graph TD
    %% Estilos globales con color de texto explícito (color:#000)
    classDef publica fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px,color:#000;
    classDef protegida fill:#fff3e0,stroke:#ff9800,stroke-width:2px,color:#000;
    classDef admin fill:#ffebee,stroke:#f44336,stroke-width:2px,color:#000;

    %% Nodos principales
    Raiz((/ Raíz)) --> Login["/login (Pública)"]:::publica
    Raiz --> Register["/register (Pública)"]:::publica
    Raiz --> Dash["/dashboard (Protected Layout)"]:::protegida

    %% Subrutas protegidas
    Dash --> Resumen["/resumen <br> (User & Admin)"]:::protegida
    Dash --> Gastos["/gastos <br> (User & Admin)"]:::protegida
    Dash --> Ingresos["/ingresos <br> (User & Admin)"]:::protegida
    Dash --> Presupuesto["/presupuestos <br> (User & Admin)"]:::protegida
    
    %% Ruta Admin
    Dash --> SMC["/smc (Sistema SMC) <br> 🔐 EXCLUSIVO ADMIN"]:::admin

    %% Detalle de subrutas
    Gastos --> G_Nuevo["/nuevo (Formulario)"]:::protegida
    Ingresos --> I_Nuevo["/nuevo (Formulario)"]:::protegida
    Presupuesto --> P_Config["/configurar (Límites)"]:::protegida
    
    SMC --> S_Cuentas["/cuentas"]:::admin
    SMC --> S_Cat["/categorias"]:::admin
    SMC --> S_User["/usuarios"]:::admin
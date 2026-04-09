Create database  SMC proyecto;
Use SMC proyecto;
Create table Usuario ( // y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    cedula INT primary key ,// el primero es INT , por que solo son datos numericos .
    nombre Varchar , // y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    apellido Varchar, // y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    correo VARCHAR ) // y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
  
Create database SMC proyecto;
Use SMC proyecto;
Create table Sistema SMC ( // y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    id_cuenta VARCHAR primary key ,// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    USUARIO VARCHAR(50),// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    PRESUPUESTO INT ,,// el primero es INT , por que solo son datos numericos .
    CATEGORIA VARCHAR  );// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.

  
  Create database SMC proyecto;
Use SMC proyecto;
Create table presupuesto (,// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    id_ presupuesto INT primary key ,// el primero es INT , por que solo son datos numericos .
    gastos acumulados INT,// el primero es INT , por que solo son datos numericos .
    monto límite INT ,// el primero es INT , por que solo son datos numericos .
    periodo INT );// el primero es INT , por que solo son datos numericos .

Create database SMC proyecto;
Use SMC proyecto;
Create table Ingresos(,// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    id_ ingresos VARCHAR primary key ,,// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
   ingresos extraordinarios INT,// los ultimos son INT por que son los ingresos monetarios recibidos
   ingresos fijos INT,// los ultimos son INT por que son los ingresos monetarios recibidos
   diferidos INT) ;// los ultimos son INT por que son los ingresos monetarios recibidos


Create database SMC proyecto;
Use SMC proyecto;
Create table Gastos (// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    id gastos INT primary key ,// los ultimos son INT por que son los ingresos monetarios recibidos
    extraordinarios INT,// los ultimos son INT por que son los ingresos monetarios recibidos
    FIJOS INT,// los ultimos son INT por que son los ingresos monetarios recibidos
   descripción VARCHAR );// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.


Create database SMC proyecto;
Use SMC proyecto;
Create table Cuenta (// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    id_cuenta INT primary key ,// los ultimos son INT por que son los ingresos monetarios recibidos
    NOMBRE varchar,// y los otros  son VARCHAR , por que solo se admiten datos tipo texto.
    DIVISA INT );// los ultimos son INT por que son los ingresos monetarios recibidos

Create database SMC proyecto;
Use SMC proyecto;
Create table categories (// los varchar son para expecificar y nombrar que tipo de movimiento es y su nombre , atravez de textos
    id_categoria INT primary key ,    // El int es como la fecha de publicacion del movimiento
    tipo movimiento varchar,// los varchar son para expecificar y nombrar que tipo de movimiento es y su nombre , atravez de textos
    nombre varchar );// los varchar son para expecificar y nombrar que tipo de movimiento es y su nombre , atravez de textos

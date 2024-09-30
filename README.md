# Employee API REST - NodeJS - Express - Prisma ORM

Esta es una API RESTful para gestionar empleados, construida con Node.js, Express y Prisma. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros de empleados en una base de datos SQLite.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework web para Node.js que facilita la creación de APIs.
- **Prisma**: ORM para interactuar con la base de datos de manera más sencilla.
- **SQLite**: Base de datos ligera para almacenar los datos de los empleados.
- **CORS**: Middleware para permitir solicitudes desde diferentes dominios.

### Endpoints de la API

#### 1. Rutas Principales

- **`GET /`**
  - **Descripción**: Bienvenida a la API.
  - **Respuesta**: Mensaje de bienvenida.

#### 2. Rutas de Empleados

- **`GET /employees`**

  - **Descripción**: Obtiene todos los empleados.
  - **Respuesta**: Un array de objetos que representan a todos los empleados.

- **`GET /employees/:id`**

  - **Descripción**: Obtiene un empleado específico por ID.
  - **Parámetros**:
    - `id`: ID del empleado a buscar.
  - **Respuesta**: Objeto que representa al empleado encontrado, o `null` si no existe.

- **`POST /employees`**

  - **Descripción**: Crea un nuevo empleado.
  - **Cuerpo de la Solicitud**:
    ```json
    {
      "name": "Nombre del Empleado",
      "salary": Salario del Empleado
    }
    ```
  - **Respuesta**: Mensaje confirmando la creación del empleado con su ID.

- **`PUT /employees/:id`**

  - **Descripción**: Actualiza un empleado existente por ID.
  - **Parámetros**:
    - `id`: ID del empleado a actualizar.
  - **Cuerpo de la Solicitud**:
    ```json
    {
      "name": "Nuevo Nombre del Empleado",
      "salary": Nuevo Salario del Empleado
    }
    ```
  - **Respuesta**: Mensaje confirmando la actualización del empleado.

- **`DELETE /employees/:id`**
  - **Descripción**: Elimina un empleado por ID.
  - **Parámetros**:
    - `id`: ID del empleado a eliminar.
  - **Respuesta**: Mensaje confirmando la eliminación del empleado.

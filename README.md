# Trabajo Práctico Integrador N° II

Frontend del Sistema de Gestión de Blog Personal construido con React + Vite y Tailwind CSS.

## Backend

URL del repositorio del TP Integrador N° I: https://github.com/MaxiSoriaGit/trabajo-practico-integrador-1

## Cómo levantar el proyecto

### 1. Backend

Necesitás MySQL corriendo con la base `blog_db`.

```bash
cd ../trabajo-practico-integrador-1
npm install
npm run dev      # http://localhost:3000
```

### 2. Frontend

En una segunda terminal:

```bash
npm install
npm run dev      
```

Abrí http://localhost:5173 en el navegador.

## Estructura de ramas

- `main` → rama principal
- `develop` → rama de integración
- `desarrollo-pantallas` → custom hooks, páginas, Navbar y estilos
- `proteccion-rutas` → autenticación, logout y rutas públicas y privadas
# NEXORA DIGITAL

Sitio web académico, público y adaptable para NEXORA DIGITAL, una empresa tecnológica ficticia que ofrece soluciones prácticas a pequeñas y medianas empresas de Honduras.

## Objetivo

Presentar a la empresa, sus servicios y una vía de contacto en un sitio profesional, accesible y fácil de reproducir posteriormente con bloques de WordPress.com.

## Tecnologías

- HTML5 semántico
- CSS3: Flexbox, CSS Grid y media queries
- JavaScript sin dependencias
- SVG originales para las ilustraciones
- Tipografía Poppins

## Estructura

```text
.
├── index.html
├── pages/
│   ├── quienes-somos.html
│   ├── servicios.html
│   └── contacto.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── equipo-nexora.svg
    ├── favicon.svg
    └── tecnologia-nexora.svg
```

## Secciones

- **Inicio:** presentación, beneficios, resumen de servicios y llamada a la acción.
- **Quiénes somos:** historia ficticia, misión, visión, valores y descripción del equipo.
- **Servicios:** diseño y desarrollo web, sistemas, analítica de datos, automatización, soporte tecnológico y consultoría digital.
- **Contacto:** formulario con nombre, correo, asunto y mensaje, más los datos ficticios de Tegucigalpa.

## Cómo ejecutar

Abre `index.html` en un navegador. Para servir el proyecto en una dirección local, ejecuta desde esta carpeta:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Formulario

El formulario valida los campos y prepara un borrador de correo dirigido a `contacto@nexoradigital.com`. No envía ni almacena datos automáticamente.

## Preparación para WordPress.com

Las páginas están divididas por tema y utilizan elementos que corresponden directamente a bloques de WordPress: encabezados, párrafos, imágenes, botones, columnas, grupos, menús y formulario. Las imágenes SVG pueden cargarse como medios del sitio.

## Autor

Proyecto académico ficticio — INFOP

© 2026 NEXORA DIGITAL. Todos los derechos reservados.
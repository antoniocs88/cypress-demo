# Cypress Docker Automation Framework - Herokuapp

[![Cypress](https://img.shields.io/badge/cypress-13.7.0-brightgreen)](https://www.cypress.io/)
[![Docker](https://img.shields.io/badge/docker-container-blue)](https://www.docker.com/)

Este proyecto proporciona una infraestructura profesional y aislada para la automatización de pruebas E2E utilizando **Cypress v13** y **Docker**. El objetivo es garantizar que las pruebas se ejecuten en un entorno idéntico sin dependencias locales.

## 🚀 Requisitos Previos

- [Docker](https://www.docker.com/get-started) instalado.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.

> [!NOTE]
> No necesitas instalar Node.js ni Cypress localmente. Todo se gestiona dentro del contenedor.

## 🛠️ Estructura del Proyecto

```text
cypress-demo/
├── cypress/
│   └── e2e/
│       └── the_internet.cy.js   # Suite con 10 casos de prueba
├── .gitignore                   # Archivos excluidos del control de versiones
├── cypress.config.js            # Configuración principal de Cypress
├── Dockerfile                   # Definición de la imagen del contenedor
├── docker-compose.yml           # Orquestación para ejecución fácil
├── package.json                 # Definición de dependencias
└── README.md                    # Este archivo
```

## 🧪 Ejecución de Pruebas

Para ejecutar la suite de pruebas completa en modo *headless* (sin interfaz gráfica), simplemente abre una terminal en la raíz del proyecto y ejecuta:

```bash
docker-compose up --build --exit-code-from cypress
```

Este comando realizará lo siguiente:
1.  Construirá la imagen de Docker (solo la primera vez o si hay cambios).
2.  Instalará las dependencias necesarias.
3.  Ejecutará los 10 tests en la web de [Herokuapp](https://the-internet.herokuapp.com/).
4.  Detendrá el contenedor automáticamente al finalizar.

### 🎥 Resultados: Vídeos y Capturas

Aunque las pruebas se ejecutan en Docker, los resultados se mapean a tu máquina local:
-   **Vídeos:** `cypress/videos/`
-   **Capturas de fallos:** `cypress/screenshots/` (se generan automáticamente si un test falla).

## 📄 Casos de Prueba Incluidos (10)

La suite `the_internet.cy.js` incluye pruebas críticas para validar la funcionalidad web:

1.  **Add/Remove Elements:** Validación de creación y eliminación dinámica de elementos.
2.  **Checkboxes:** Verificación de estados *checked* y *unchecked*.
3.  **Dropdown:** Selección y validación de opciones por valor.
4.  **Form Authentication (Success):** Login exitoso con credenciales válidas.
5.  **Form Authentication (Failure):** Validación de mensajes de error ante credenciales inválidas.
6.  **Horizontal Slider:** Interacción con elementos de rango numérico.
7.  **Hovers:** Verificación de visibilidad de información oculta al pasar el ratón.
8.  **Inputs:** Interacción y validación de campos numéricos.
9.  **Key Presses:** Detección de eventos de teclado (Letras y Teclas Especiales).
10. **JS Alerts:** Manejo de diálogos nativos del navegador (*Alert* y *Confirm*).

## 🔒 Seguridad y Eficiencia

-   **Imagen Ligera:** Se utiliza `cypress/base` para minimizar el tamaño de la imagen.
-   **Cero Vulnerabilidades:** La configuración está diseñada para ser aislada y segura, sin dependencias locales innecesarias.

# Cypress Docker Automation Framework - Herokuapp

[![Cypress](https://img.shields.io/badge/cypress-13.7.0-brightgreen)](https://www.cypress.io/)
[![Docker](https://img.shields.io/badge/docker-container-blue)](https://www.docker.com/)

Este proyecto proporciona una infraestructura profesional y aislada para la automatizaciÃ³n de pruebas E2E utilizando **Cypress v13** y **Docker**. El objetivo es garantizar que las pruebas se ejecuten en un entorno idÃ©ntico sin dependencias locales.

## ðŸš€ Requisitos Previos

- [Docker](https://www.docker.com/get-started) instalado.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.

> [!NOTE]
> No necesitas instalar Node.js ni Cypress localmente. Todo se gestiona dentro del contenedor.

## ðŸ› ï¸ Estructura del Proyecto

```text
cypress-demo/
â”œâ”€â”€ cypress/
â”‚   â””â”€â”€ e2e/
â”‚       â””â”€â”€ the_internet.cy.js   # Suite con 10 casos de prueba
â”œâ”€â”€ .gitignore                   # Archivos excluidos del control de versiones
â”œâ”€â”€ cypress.config.js            # ConfiguraciÃ³n principal de Cypress
â”œâ”€â”€ Dockerfile                   # DefiniciÃ³n de la imagen del contenedor
â”œâ”€â”€ docker-compose.yml           # OrquestaciÃ³n para ejecuciÃ³n fÃ¡cil
â”œâ”€â”€ package.json                 # DefiniciÃ³n de dependencias
â””â”€â”€ README.md                    # Este archivo
```

## ðŸ§ª EjecuciÃ³n de Pruebas

Para ejecutar la suite de pruebas completa en modo *headless* (sin interfaz grÃ¡fica), simplemente abre una terminal en la raÃ­z del proyecto y ejecuta:

```bash
docker-compose up --build --exit-code-from cypress
```

Este comando realizarÃ¡ lo siguiente:
1.  ConstruirÃ¡ la imagen de Docker (solo la primera vez o si hay cambios).
2.  InstalarÃ¡ las dependencias necesarias.
3.  EjecutarÃ¡ los 10 tests en la web de [Herokuapp](https://the-internet.herokuapp.com/).
4.  DetendrÃ¡ el contenedor automÃ¡ticamente al finalizar.

### ðŸŽ¥ Resultados: VÃ­deos y Capturas

Aunque las pruebas se ejecutan en Docker, los resultados se mapean a tu mÃ¡quina local:
-   **VÃ­deos:** `cypress/videos/`
-   **Capturas de fallos:** `cypress/screenshots/` (se generan automÃ¡ticamente si un test falla).

## ðŸ“„ Casos de Prueba Incluidos (10)

La suite `the_internet.cy.js` incluye pruebas crÃ­ticas para validar la funcionalidad web:

1.  **Add/Remove Elements:** ValidaciÃ³n de creaciÃ³n y eliminaciÃ³n dinÃ¡mica de elementos.
2.  **Checkboxes:** VerificaciÃ³n de estados *checked* y *unchecked*.
3.  **Dropdown:** SelecciÃ³n y validaciÃ³n de opciones por valor.
4.  **Form Authentication (Success):** Login exitoso con credenciales vÃ¡lidas.
5.  **Form Authentication (Failure):** ValidaciÃ³n de mensajes de error ante credenciales invÃ¡lidas.
6.  **Horizontal Slider:** InteracciÃ³n con elementos de rango numÃ©rico.
7.  **Hovers:** VerificaciÃ³n de visibilidad de informaciÃ³n oculta al pasar el ratÃ³n.
8.  **Inputs:** InteracciÃ³n y validaciÃ³n de campos numÃ©ricos.
9.  **Key Presses:** DetecciÃ³n de eventos de teclado (Letras y Teclas Especiales).
10. **JS Alerts:** Manejo de diÃ¡logos nativos del navegador (*Alert* y *Confirm*).

## ðŸ”’ Seguridad y Eficiencia

-   **Imagen Ligera:** Se utiliza `cypress/base` para minimizar el tamaÃ±o de la imagen.
-   **Cero Vulnerabilidades:** La configuraciÃ³n estÃ¡ diseÃ±ada para ser aislada y segura, sin dependencias locales innecesarias.

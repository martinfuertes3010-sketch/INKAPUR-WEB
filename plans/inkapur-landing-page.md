# Plan de implementación — Landing page INKAPUR

## Objetivo

Construir una landing page de producto moderna, profesional, responsive y accesible para **INKAPUR**, basada en el contenido confirmado del PDF adjunto. La página debe comunicar de inmediato la promesa de tres meses de agua limpia, explicar el funcionamiento del tubo sin ambigüedades y conducir a una consulta de compra por WhatsApp.

## Contexto verificado

- Proyecto React 19 + Vite 8 + TypeScript + Tailwind CSS v4.
- La aplicación actual está vacía: `src/App.tsx` solo contiene un contenedor y `src/index.css` únicamente importa Tailwind.
- No hay librerías de componentes, iconos, animación, router ni e-commerce instaladas.
- El PDF proporciona copy, paleta, tipografías, estructura, interacciones y datos técnicos, pero no incluye logo, fotos oficiales, precio, teléfono ni perfiles sociales.
- Decisiones del usuario:
  - La compra se resolverá como **consulta por WhatsApp**, sin inventar un precio.
  - Se crearán recursos visuales provisionales para marca y producto.
  - Teléfono y redes quedarán claramente preparados para completar con datos reales.

## Dirección visual

- Aplicar la paleta especificada:
  - Azul profundo `#0B4F6C`.
  - Azul agua `#4FB286`.
  - Verde limpieza `#74C69D`.
  - Blanco `#FFFFFF`.
  - Fondo suave `#F0F8FA`.
  - Texto principal `#1D3557` y secundario `#6B7280`.
- Cargar **Montserrat** para títulos y **Inter** para cuerpo mediante Google Fonts, con el `@import` al inicio de `src/index.css` antes de Tailwind.
- Usar una estética limpia, realista y premium: abundante aire, jerarquía tipográfica clara, gradientes acuáticos suaves, tarjetas con radios de 12–20 px y sombras sutiles.
- Crear un wordmark tipográfico provisional “INKAPUR” y una ilustración original del tubo con sus tres cápsulas mediante HTML/CSS/SVG local, evitando depender de una fotografía inexistente del producto.
- Complementar hero/galería con fotografía de agua y tanque obtenida de Unsplash durante la implementación, eligiendo imágenes sobrias que no representen falsamente el producto. Aplicar overlays y recortes coherentes con la paleta.
- Mantener contraste suficiente, foco visible y movimiento moderado; respetar `prefers-reduced-motion`.

## Arquitectura y alcance técnico

### `src/App.tsx`

Implementar la landing en una sola página, sin router ni dependencias nuevas. Mantener componentes pequeños dentro del mismo archivo cuando ayuden a legibilidad, por ejemplo:

- `Logo`
- `ProductTube`
- `SectionHeading`
- `BenefitCard`
- `HowItWorksStep`
- `Gallery`
- `Testimonials`
- `FaqItem`
- `PurchaseCard`

Definir arreglos tipados para beneficios, pasos, especificaciones, galería, testimonios y preguntas frecuentes; renderizarlos con `.map()` para evitar duplicación. Usar iconos SVG inline simples y consistentes, con `aria-hidden` cuando sean decorativos.

Mantener en la parte superior constantes fáciles de reemplazar para:

- `WHATSAPP_NUMBER` inicialmente vacío o marcado como pendiente.
- Enlaces sociales inicialmente vacíos.
- Mensaje de WhatsApp prellenado: “Hola, quiero consultar por INKAPUR para tener 3 meses de agua limpia en mi tanque.”

Mientras no exista un número real, el CTA no debe abrir un enlace inválido ni inventar contacto: mostrará el texto “Consultar por WhatsApp” con estado pendiente/inhabilitado accesible y una nota breve “Número de atención por confirmar”. El código quedará listo para generar `https://wa.me/<numero>?text=<mensaje>` automáticamente al completar la constante.

### `src/index.css`

- Añadir imports de Google Fonts antes del import de Tailwind.
- Definir variables CSS para colores, sombras y tipografías.
- Establecer estilos globales: `scroll-behavior`, antialiasing, color/fondo base, selección y foco.
- Añadir solo las animaciones que no resulten prácticas con utilidades: entrada del hero, revelado al hacer scroll, flotación/agua del producto, progreso y transición del carrusel.
- Incorporar una regla `prefers-reduced-motion: reduce` que desactive animaciones y desplazamiento suave.

No modificar `src/main.tsx`, `index.html`, configuración Vite ni dependencias salvo que una necesidad comprobada durante la implementación lo exija.

## Estructura de la página

### 1. Cabecera y hero (`#inicio`)

- Header transparente/integrado al hero con wordmark INKAPUR, navegación por anclas (“Producto”, “Cómo funciona”, “Comprar”, “Preguntas”) y CTA compacto.
- En móvil, navegación simplificada sin introducir un menú complejo innecesario; conservar logo y CTA principal.
- Hero en dos columnas en escritorio y apilado en móvil.
- Eyebrow de capacidad: “Para tanques de hasta 1500 litros”.
- H1 exacto: “Ponlo y olvídalo: 3 meses de agua limpia”.
- Subtítulo condensado pero fiel al PDF: eliminación de sarro/bacterias, tubo completo, cápsulas internas y duración.
- CTAs:
  - Principal: “Consultar por WhatsApp”, con el comportamiento pendiente descrito arriba.
  - Secundario: “Ver cómo funciona”, desplazamiento a `#como-funciona`.
- Pruebas rápidas visibles: `100%` sarro, `99.9%` bacterias, `90 días`.
- Composición visual con ilustración del tubo sumergido, tres cápsulas visibles, ondas/burbujas y fondo acuático.
- Animaciones: fade del texto y slide-up/fade del producto, sin bloquear la lectura.

### 2. Beneficios (`#producto`)

- Encabezado “¿Por qué elegir INKAPUR?”.
- Cuadrícula de cuatro tarjetas con el contenido del PDF:
  1. Sarro: 100% eliminado.
  2. Bacterias: 99.9% reducidas.
  3. Se consume solo.
  4. 3 meses sin preocupaciones.
- Iconografía propia, detalle de color y hover con elevación suave/borde verde.
- Entrada escalonada al entrar en viewport.

### 3. Cómo funciona (`#como-funciona`)

- Encabezado “Así de simple”.
- Tres pasos numerados con explicaciones fieles al PDF:
  1. Colocar el tubo completo y cerrado.
  2. Dejar que las cápsulas actúen desde dentro.
  3. Renovar a los tres meses.
- Línea de progreso visual “Día 1 → Mes 1 → Mes 2 → Mes 3” que se anima al aparecer.
- Ilustración lateral del tubo/cápsulas en etapas; el cambio de tamaño de las cápsulas será representativo, no una simulación científica.
- Aviso destacado: “No manipules las cápsulas. El tubo va entero al agua y trabaja 3 meses seguidos.”

### 4. Ficha técnica (`#ficha-tecnica`)

- Encabezado “Todo sobre INKAPUR”.
- Panel limpio de especificaciones con las diez filas del PDF: marca, presentación, modo de uso, duración, mecanismo, capacidad, eliminación de sarro, reducción de bacterias, mantenimiento y conservación.
- En móvil, convertir la tabla visual en filas apiladas legibles, evitando scroll horizontal.
- Destacar `100%`, `99.9%`, `3 meses` y `1500 litros` mediante chips o cifras verdes.

### 5. Galería (`#galeria`)

- Encabezado “INKAPUR en tu tanque”.
- Carrusel accesible con cinco escenas basadas en el PDF:
  - Presentación del tubo (ilustración original).
  - Tubo sumergido (composición fotográfica + ilustración).
  - Detalle de las tres cápsulas (ilustración).
  - Comparación visual de tanque con sarro/limpio, identificada como representación.
  - Agua cristalina saliendo del grifo (fotografía).
- Botones anterior/siguiente y puntos de navegación con etiquetas accesibles.
- Soporte táctil básico mediante scroll-snap o controles; no añadir una librería.
- Hover con zoom muy leve solo en dispositivos que lo soporten.

### 6. Testimonios

- Encabezado “Familias que ya lo tienen”.
- Mostrar los dos testimonios de Elena (Lima) y Pedro (Trujillo) incluidos en el PDF.
- Carrusel con avance automático cada cinco segundos y transición fade, pero:
  - Pausar con hover/foco.
  - Incluir controles manuales y estado accesible.
  - Desactivar autoanimación con `prefers-reduced-motion`.
- Presentarlos como testimonios proporcionados por la marca, sin agregar avatares o datos inventados.

### 7. Compra (`#comprar`)

- Fondo degradado acuático y tarjeta destacada.
- Título “Tu agua limpia por 3 meses, sin esfuerzo”.
- Sustituir el precio no definido `S/ XX.XX` por “Consulta el precio por WhatsApp”.
- Resumen: “1 tubo INKAPUR · se coloca completo · 3 meses de protección”.
- Mostrar “Consulta por 2 tubos y accede al descuento especial”, sin cuantificar un descuento inexistente.
- CTA de WhatsApp con mensaje prellenado, preparado para activarse al completar el número real.
- Garantías textuales del PDF: “Pago seguro · Envío a todo el Perú · Devolución”, presentadas como información de marca; no implementar checkout.
- No simular carrito ni pago.

### 8. Preguntas frecuentes (`#preguntas`)

- Encabezado “Dudas comunes”.
- Acordeón nativo/accesible con las seis preguntas y respuestas del PDF.
- Un panel abierto por defecto para reforzar la instrucción principal.
- Botón por pregunta con `aria-expanded`, región asociada e icono `+` que rota/cambia al abrir.
- Animación de altura/opacidad moderada, con fallback sin movimiento.

### 9. Footer (`#contacto`)

- Wordmark y frase “Ponlo y olvídalo”.
- Navegación interna funcional: Inicio, El producto, Cómo funciona, Comprar y Contacto.
- Área de contacto/redes marcada de forma discreta como “Datos de contacto por confirmar”; no mostrar perfiles ficticios.
- Copyright “© 2026 INKAPUR — Todos los derechos reservados”.

## Interacciones y estado

- Usar `IntersectionObserver` en un hook local reutilizable para activar revelados una sola vez; si no existe soporte, el contenido permanece visible.
- Estado React local para FAQ, slide activo de galería y testimonio activo.
- Limpiar intervalos del carrusel al desmontar y reiniciarlos de forma controlada tras navegación manual.
- Navegación interna con anclas y offsets adecuados para la cabecera.
- No guardar datos, no solicitar información personal y no conectar servicios externos aparte de imágenes públicas y el futuro enlace de WhatsApp.

## Responsive y accesibilidad

- Diseñar mobile-first y validar al menos en anchos aproximados de 375 px, 768 px y 1440 px.
- Evitar desbordamiento horizontal; objetivos táctiles de al menos 44 px.
- Un solo `h1`, jerarquía correcta de encabezados, `main`, `nav`, `section` y `footer` semánticos.
- Textos alternativos descriptivos para fotografía; SVG decorativos ocultos a lectores de pantalla.
- Contraste WCAG AA para texto y botones, foco visible, navegación completa por teclado y controles de carrusel/FAQ etiquetados.
- Las cifras y afirmaciones se copiarán exactamente del PDF; no agregar beneficios médicos, certificaciones ni afirmaciones no proporcionadas.

## Verificación

1. Ejecutar el formateador prescrito por el proyecto con `pnpm format` después de los cambios.
2. Ejecutar `pnpm build` porque se trata de una implementación amplia y confirmar que TypeScript/Vite compilan sin errores.
3. Revisar la página en la vista previa existente, sin iniciar otro servidor, en móvil y escritorio.
4. Comprobar manualmente:
   - Todos los enlaces de ancla.
   - Estado pendiente seguro del CTA de WhatsApp.
   - FAQ por mouse y teclado.
   - Galería y testimonios, incluidos pausa/controles.
   - Reducción de movimiento.
   - Ausencia de overflow y legibilidad de la ficha técnica.
   - Correspondencia de textos, porcentajes, duración y capacidad con el PDF.

## Fuera de alcance / datos pendientes

- Checkout, carrito, pasarela de pago, inventario o backend.
- Precio real y porcentaje del descuento por dos tubos.
- Número real de WhatsApp y perfiles sociales.
- Logo vectorial, empaque y fotografías oficiales del producto.
- Certificaciones, políticas legales detalladas o pruebas adicionales de las afirmaciones del producto.

Estos elementos podrán reemplazarse o activarse sin rediseñar la página gracias a las constantes y componentes preparados para ello.

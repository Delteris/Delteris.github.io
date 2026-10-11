---
update_product: atlas
lang: es
version: "Atlas 1.1"
date: 2026-10-11
permalink: /es/atlas/updates/1-1/
title: "Atlas 1.1: Correspondencia de WPS y una Vista Más Limpia | Elenchon Atlas"
heading: "Atlas 1.1: correspondencia de WPS y una vista que puede simplificar"
description: "Atlas 1.1 comprueba cada WPS contra el WPQR en el que se apoya, la relaciona con los soldadores que pueden soldarla y deja que cada persona oculte las funciones que no usa."
summary: "Cada WPS se comprueba ahora contra el rango del WPQR en el que se apoya y se relaciona con los soldadores cuyos certificados la cubren. Y cada persona puede ocultar las funciones que no usa."
image: "/static/updates/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1/"
pt_url: "/pt/atlas/updates/1-1/"
es_url: "/es/atlas/updates/1-1/"
---
## Correspondencia: cada WPS contra su WPQR y sus soldadores

Una WPS vale lo que valen las dos cosas que la respaldan: el WPQR en el que se apoya y los soldadores que pueden soldarla. Atlas 1.1 comprueba los dos lados, para cada WPS de su biblioteca.

### Contra el WPQR

Introduzca una vez el rango de cualificación desde el certificado del WPQR. El editor abre el certificado junto al formulario, en la página en la que estaba, y puede copiar el rango de otro WPQR. A partir de ahí, cada WPS vinculada a ese WPQR se comprueba campo a campo: procesos, grupos de material, espesor, diámetro, posiciones, precalentamiento, temperatura entre pasadas, TTPS, tipo de corriente, consumibles y aporte térmico.

Cada resultado es uno de cuatro: **dentro**, **fuera**, **difiere** o **no comprobado**.

- **Un WPQR por grupo de pasadas, por defecto.** Cada grupo de pasadas (proceso y material de aporte) tiene que estar cubierto por un único WPQR vinculado, en todos los campos. Combinar varios WPQR en un rango más amplio es una opción por WPS, y cada resultado combinado queda señalado.
- **Los consumibles se comparan por designación.** Una designación distinta aparece como *difiere*, para que la valore la persona responsable. Atlas nunca la marca como *fuera*, porque decidir si está cubierta le corresponde a esa persona.
- **Sin suposiciones.** Una WPS sin precalentamiento mínimo nunca se trata como si estuviera a temperatura ambiente. Un valor en blanco o poco claro queda *no comprobado*, no es una alerta roja.
- **Cada resultado se explica solo**, en palabras sencillas, por ejemplo "PB no figura en el WPQR-2402 (PF, PC)". El informe de comprobación de rango muestra primero los problemas, agrupados por grupo de pasadas, y se exporta a PDF.
- **La Biblioteca lo muestra de un vistazo**: una etiqueta *Fuera* o *Difiere* en cada WPS y un filtro para ver solo esas.

### Contra los soldadores

La cobertura de soldadores relaciona cada WPS con los soldadores cuyos certificados vigentes la cubren, y cada soldador con las WPS que puede soldar. Si nadie está cualificado para una WPS, lo ve. Si caduca una cualificación de la que depende, también lo ve.

El informe mensual reúne los dos lados para todo el registro: qué ha cambiado desde el mes anterior, qué WPS están fuera del rango de su WPQR y qué WPS no tienen ningún soldador cualificado.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: una WPS con la comprobación de rango del WPQR y sus soldadores cualificados">
        <img src="/static/updates/atlas-1-1-matching.webp" width="1600" height="341" loading="lazy" decoding="async" alt="Una WPS en la biblioteca de Atlas: comprobación de rango del WPQR con Outside · 1, la línea 'Positions: PB is not listed on MER-WPQR-2402 (PF, PC)' y el botón Open range check report, seguida de los soldadores cualificados: Aaron Webb, cualificado vía 135">
    </button>
    <figcaption>Una WPS, los dos lados: la comprobación contra su WPQR y los soldadores cualificados para soldarla.</figcaption>
</figure>

<p class="feature-note">Qué es y qué no es: Atlas compara los valores de su WPS con los rangos que ha introducido desde sus certificados. No deriva rangos de la ISO 15614-1, la ISO 9606-1 ni el ASME IX, y no decide si una WPS o un soldador está cualificado. Los resultados quedan para confirmación por la persona responsable.</p>

## Lo que ve: oculte lo que no usa

No todos los talleres usan todas las funciones, y una pantalla llena de cosas que no necesita es ruido. **Lo que ve**, en el Resumen, permite a cada persona desactivar funciones completas en su propia vista: copias firmadas, comprobación de rango del WPQR, cobertura de soldadores, informe mensual y las páginas Comparar, Asistente de aporte térmico y Panel.

- **Solo cambia su vista.** No se borra nada y sus compañeros siguen viéndolo todo.
- **Le acompaña.** El ajuste se guarda en su cuenta, no en el navegador.
- **No olvida lo que ha ocultado.** Tras cada inicio de sesión, una nota breve enumera lo que está oculto, con un enlace para volver a mostrarlo.
- **Los problemas no se quedan en silencio.** Si ha ocultado la comprobación de rango y una WPS está fuera del rango de su WPQR, la nota sigue indicando cuántas.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: el panel Lo que ve en el Resumen">
        <img src="/static/updates/atlas-1-1-what-you-see.webp" width="1482" height="257" loading="lazy" decoding="async" alt="El panel What you see en el Resumen: interruptores para Signed copies, WPQR range check (oculto), Welder coverage, Monthly report (oculto), Compare, Heat input helper y Board, con la indicación '2 hidden'">
    </button>
    <figcaption>Lo que ve: un interruptor por función, solo para su vista. (Captura de la interfaz en inglés; Atlas también está en español.)</figcaption>
</figure>

## Disponibilidad

Atlas 1.1 ya está disponible para todos los clientes de Atlas, sin coste adicional: el mismo precio fijo, sin cuotas por usuario. ¿Quiere verlo con sus propias WPS? Oferta limitada: [una prueba gratuita](/es/wps-manager-contact.html), con sus datos importados por nosotros.

---
update_product: atlas
lang: es
version: "Atlas 1.1"
date: 2026-10-11
permalink: /es/atlas/updates/1-1/
title: "Atlas 1.1: Correspondencia de WPS y una Vista Más Limpia | Elenchon Atlas"
heading: "Atlas 1.1: correspondencia de WPS y una vista que puede simplificar"
description: "Atlas 1.1 comprueba cada WPS contra el WPQR en el que se apoya y contra los soldadores cualificados para soldarla, y deja que cada persona oculte las funciones que no usa."
summary: "Esta versión comprueba cada WPS contra el WPQR en el que se apoya y contra los soldadores cualificados para soldarla, y deja que cada persona oculte las partes de Atlas que no usa."
chip: "Nuevo en Atlas 1.1: correspondencia de WPS y ocultar lo que no usa"
image: "/static/updates/es/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1/"
pt_url: "/pt/atlas/updates/1-1/"
es_url: "/es/atlas/updates/1-1/"
---
Atlas 1.1 trae dos cosas. La correspondencia comprueba cada WPS contra el WPQR que la respalda y contra los soldadores que pueden soldarla. Y **Lo que ve** deja que cada persona oculte las partes de Atlas que no usa.

## Correspondencia

Una WPS se apoya en dos cosas: el WPQR que la cualifica y los soldadores cualificados para soldarla. La correspondencia comprueba las dos, para cada WPS de su biblioteca.

### Contra el WPQR

Usted introduce el rango de cualificación una vez, a partir del certificado del WPQR. El editor abre el certificado junto al formulario, en la página donde lo dejó, y puede copiar el rango de otro WPQR como punto de partida. A partir de ahí, cada WPS vinculada a ese WPQR se comprueba contra él, campo por campo: procesos, grupos de material, espesor, diámetro, posiciones, precalentamiento, temperatura entre pasadas, TTPS, intensidad, consumibles y aporte térmico.

Cada resultado es uno de cuatro: **dentro**, **fuera**, **difiere** o **no comprobado**.

Algunas decisiones que tomamos a propósito:

- Un WPQR por grupo de pasadas, por defecto. Cada grupo de pasadas (proceso y material de aporte) tiene que estar cubierto por un único WPQR vinculado, en todos los campos. Esto sigue nuestra lectura de las interpretaciones publicadas por el ISO/TC 44 sobre la ISO 15614-1: no se pueden juntar ensayos de procedimiento separados para ampliar un rango de cualificación, pero cada proceso de una unión puede apoyarse en su propio WPQR. Aun así, puede combinar varios WPQR en un rango más amplio en una WPS, pero es una opción que tiene que activar, y cada resultado combinado lo indica.
- Los consumibles se comparan por su designación. Una designación distinta aparece como *difiere*, nunca como *fuera*: decidir si está cubierta corresponde a la persona responsable, no a nosotros.
- Sin suposiciones. Una WPS sin precalentamiento mínimo no se trata como si estuviera a temperatura ambiente, y un valor en blanco o poco claro queda *no comprobado*, no como una alerta roja.

Cada resultado se explica con palabras sencillas, por ejemplo "PB no figura en WPQR-2402 (PF, PC)". El informe de comprobación de rango muestra primero los problemas, agrupados por grupo de pasadas, y se exporta a PDF. En la Biblioteca, una WPS con un problema lleva una etiqueta *Fuera* o *Difiere*, y un filtro muestra solo esas.

### Contra los soldadores

La cobertura de soldadores relaciona cada WPS con los soldadores cuyos certificados vigentes la cubren, y cada soldador con las WPS que puede soldar. Verá cuándo nadie está cualificado para una WPS, y cuándo caduca una cualificación de la que depende.

El informe mensual reúne los dos lados para todo el registro: qué ha cambiado desde el mes anterior, qué WPS están fuera del rango de su WPQR y cuáles no tienen ningún soldador cualificado.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: una WPS con la comprobación de rango del WPQR y los soldadores cualificados">
        <img src="/static/updates/es/atlas-1-1-matching.webp" width="1600" height="305" loading="lazy" decoding="async" alt="Una WPS en la biblioteca de Atlas: Comprobación de rango del WPQR con Fuera · 1, la línea 'Posiciones — PB no figura en MER-WPQR-2402 (PF, PC)' y el botón Abrir informe de comprobación de rango, seguida de los soldadores cualificados: Andrés Cuenca, cualificado por 135">
    </button>
    <figcaption>Una WPS, los dos lados: la comprobación contra su WPQR y los soldadores cualificados para soldarla.</figcaption>
</figure>

<p class="feature-note">Qué es y qué no es: Atlas compara los valores de su WPS con los rangos que introdujo a partir de sus certificados. No deduce rangos de la ISO 15614-1, la ISO 9606-1 ni el ASME IX, y no decide si una WPS o un soldador está cualificado. Los resultados quedan para que la persona responsable los confirme.</p>

## Lo que ve

No todos los talleres usan todas las partes de Atlas, y las funciones que no usa son solo ruido en pantalla. **Lo que ve**, en el Resumen, deja que cada persona desactive funciones enteras en su propia vista: copias firmadas, comprobación de rango del WPQR, cobertura de soldadores, informe mensual y las páginas Comparar, Asistente de aporte térmico y Panel.

- Solo cambia su vista. No se borra nada y sus compañeros siguen viéndolo todo.
- Se guarda en su cuenta, no en el navegador, así que le acompaña en cualquier dispositivo.
- Tras cada inicio de sesión, una nota breve enumera lo que ha ocultado, con un enlace para volver a mostrarlo.
- Ocultar una función no oculta sus problemas. Si ha ocultado la comprobación de rango y una WPS queda fuera del rango de su WPQR, la nota sigue indicando cuántas.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: el panel Lo que ve en el Resumen">
        <img src="/static/updates/es/atlas-1-1-what-you-see.webp" width="1482" height="322" loading="lazy" decoding="async" alt="El panel Lo que ve en el Resumen: interruptores para Copias firmadas, Comprobación de rango del WPQR (oculto), Cobertura de soldadores, Informe mensual (oculto), Comparar, Asistente de aporte térmico y Panel, con la indicación '2 ocultas'">
    </button>
    <figcaption>Lo que ve: un interruptor por función, solo para su vista.</figcaption>
</figure>

Atlas 1.1 ya está disponible para todos los clientes de Atlas, sin coste adicional. Dudas: [escríbanos](/es/atlas-free-trial.html).

El equipo de Delteris

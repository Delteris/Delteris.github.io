---
update_product: atlas
lang: es
version: "Atlas 1.2"
date: 2026-10-19
# DRAFT: hidden preview. To publish: delete the next three lines and set permalink,
# en_url, pt_url and es_url to the /1-2/ addresses.
preview: true
noindex: true
sitemap: false
permalink: /es/atlas/updates/1-2-preview-k7m2x9/
title: "Atlas 1.2: Un Lector de WPS que se Adapta a sus Formularios | Elenchon Atlas"
heading: "Atlas 1.2: un lector de WPS que se adapta a sus formularios"
description: "Atlas 1.2 trata del lector de WPS: conserva todas las líneas de sus formularios, recuerda cómo escribe las cosas su empresa y le deja compartir con nosotros lo que aún no lee."
summary: "Esta versión trata del lector de WPS: conserva todas las líneas de sus formularios, recuerda cómo escribe las cosas su empresa y le deja compartir con nosotros lo que aún no lee."
image: "/static/updates/es/atlas-1-2-fields.webp"
chip: "Nuevo en Atlas 1.2: un lector de WPS que se adapta a sus formularios"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
pt_url: "/pt/atlas/updates/1-2-preview-k7m2x9/"
es_url: "/es/atlas/updates/1-2-preview-k7m2x9/"
---
Atlas 1.2 trata sobre todo del lector de WPS, la parte que convierte sus formularios en registros. Cada empresa redacta sus formularios a su manera, así que hemos hecho que Atlas se adapte a los suyos a medida que lo usa, y le hemos dado una forma de avisarnos cuando hay algo que no lee.

Llega una semana después de la 1.1. El lector es algo en lo que llevábamos tiempo trabajando y, ahora que está a punto, no quisimos guardarlo: es la parte de Atlas que usa en cada importación.

## Otros campos de este formulario

Cuando un formulario tiene una línea que no corresponde a ninguno de nuestros campos (un gas de purga, una referencia interna, una nota), Atlas la conserva en la WPS para que usted la coloque. Verá un recuento arriba en la WPS con un botón **Revisar**, y una etiqueta *N por decidir* en esa WPS en la Biblioteca.

Para cada una puede añadirla a un campo vacío, conservarla como campo propio o eliminarla. Al añadirla, le sugerimos primero los campos más probables, a partir de las palabras de la denominación: *Purga* apunta al gas de respaldo, *Diámetro* al rango de diámetro. El valor se toma del formulario tal cual, así que no hay nada que volver a escribir.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Otros campos de este formulario">
        <img src="/static/updates/es/atlas-1-2-other-fields.webp" width="1600" height="404" loading="lazy" decoding="async" alt="Otros campos de este formulario (2): REF. PLANO con el valor DWG-2207-14 rev B, y PURGA con el valor Argón 99,99 %, 8 L/min y Gas de respaldo elegido en el selector de campo; cada fila tiene los botones Añadir, Conservar como campo propio y Eliminar">
    </button>
    <figcaption>Dos líneas del formulario de un proveedor que no corresponden a un campo estándar. Para <em>Purga</em>, Atlas sugiere primero el gas de respaldo.</figcaption>
</figure>

## Denominaciones de los formularios

Cuando añade un Otro campo a uno de los nuestros, Atlas recuerda esa denominación para su organización, y el siguiente formulario que la use se lee directamente en ese campo. La lista está en **Configuración → Plantillas → Denominaciones de los formularios**, y un administrador puede quitar cualquier entrada.

Dos decisiones que tomamos a propósito:

- Solo acepta la denominación exacta. *Purga* no se extiende a *Gas de purga*. Es en esas casi coincidencias donde nacen los valores erróneos, y preferimos preguntarle dos veces a rellenar un campo mal una vez.
- Sus denominaciones solo se aplican a su organización. Nada de lo que asigne cambia cómo lee Atlas los formularios de otra empresa.

## Compartir con nosotros el informe de denominaciones

Atlas mantiene un informe de denominaciones para su organización: las denominaciones que ha asignado, los campos que ha conservado como propios y las líneas que nadie ha colocado todavía. Solo contiene denominaciones y recuentos: ningún valor, ningún documento.

Un administrador puede elegir compartirlo con nosotros, con **Compartir el informe de denominaciones con Delteris** en **Configuración → Plantillas → Denominaciones de los formularios**. Está desactivado hasta que lo active, y puede volver a desactivarlo cuando quiera. Los administradores también pueden descargar el informe en la misma pantalla para ver exactamente qué contiene.

Leemos todos los informes que recibimos. Cuando varias empresas asignan la misma denominación, pasa al lector para todos en una versión. Cuando muchas empresas conservan el mismo campo propio, pasa a ser candidato a un nuevo campo estándar.

También es la forma más rápida de resolver un formulario que se lee de forma extraña. Con el informe compartido, basta con una línea suya sobre lo que vio: podemos ver exactamente qué denominaciones no está colocando Atlas, sin que tenga que enviar el documento ni describir el formato, y la corrección que publicamos se aplica a todos los formularios que usan esa denominación. Nuestra [garantía de respuesta](/es/wps-management-software.html#response-guarantee) se aplica como siempre: una respuesta por escrito en 3 días hábiles, o ese mes cuesta la mitad.

## Cambios menores

- Volver a interpretar una WPS le muestra primero qué cambiaría. La lectura actual y la nueva aparecen una al lado de la otra, filtradas por las diferencias o con todos los campos, y no se guarda nada hasta que elija **Aplicar nueva lectura** o **Mantener lectura actual**. Un campo que corrigió a mano y que la nueva lectura sustituiría aparece como diferencia. Resulta útil después de una versión como esta: vuelva a interpretar una WPS para aprovechar lo nuevo, y mantenga su lectura si la prefiere.
- Los campos N/A se muestran en la WPS, para que se lea como el formulario. Puede ocultarlos solo para usted en **Configuración → Plantillas → Presentación de las WPS**, o en una WPS con su interruptor **Mostrar N/A / Ocultar N/A**.
- Todo lo nuevo está en inglés, portugués y español.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: vista previa al volver a interpretar">
        <img src="/static/updates/es/atlas-1-2-reparse.webp" width="1600" height="460" loading="lazy" decoding="async" alt="Volver a analizar: qué cambiaría. Diferencias 2 de 70 campos: Ángulo de la antorcha / electrodo, lectura actual 10°–20° empujando (corregido a mano), nueva lectura 10°–15° empujando; Limpieza entre pasadas, lectura actual Solo amolado, nueva lectura Cepillo de alambre / amolado. Botones: Mantener lectura actual, Aplicar nueva lectura">
    </button>
    <figcaption>Dos campos corregidos a mano aparecen como diferencias antes de elegir.</figcaption>
</figure>

## Por dentro

Para quien quiera el detalle:

- El lector deduce el formato de cada formulario a partir del propio archivo: celdas y celdas combinadas en Excel; líneas de tabla, posiciones de las palabras y tipos de letra en los PDF de texto.
- Encuentra denominaciones en inglés, portugués y español, además de denominaciones habituales en francés y alemán, y comprueba que cada valor tiene la forma correcta antes de guardarlo (una fecha, un número de proceso ISO 4063, una revisión, un número). Si no está seguro, deja el campo en blanco. Un campo en blanco se rellena en segundos; un valor erróneo puede pasar desapercibido.
- Lee el conjunto completo de detalles de la ISO 15609-1: posicionado y sujeción, punteado, secuencia de soldeo, secado o estufado especial, electrodo de wolframio, distancia tubo de contacto–pieza, mantenimiento del precalentamiento, postcalentamiento, velocidades de calentamiento y enfriamiento, balanceo, oscilación, ángulo de la antorcha o del electrodo, soldeo pulsado, longitud de depósito y limpieza entre pasadas.
- La tabla de pasadas se lee columna por columna, con las funciones de las pasadas y el aporte térmico calculados. Materiales base (incluido el diámetro exterior o el rango de tubo), materiales de aporte, gas de protección y fundente se leen de una tabla o como campos sueltos.
- Los formatos que maneja incluyen PDF escritos sin líneas de tabla, columnas de números alineadas a la derecha, notas en varias líneas, una denominación y su valor en la misma celda, texto encima de una tabla con líneas y formularios de varias páginas.
- Solo lee texto que realmente está en el archivo, así que no puede producir un valor que no esté en el formulario. Por eso no adivina caracteres a partir de una imagen (OCR) ni usa IA: el mismo archivo da siempre el mismo resultado. Un PDF escaneado se guarda con la WPS; sus campos se rellenan a mano.
- Tarda alrededor de un segundo por formulario.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: campos de cabecera leídos de la WPS de un proveedor">
        <img src="/static/updates/es/atlas-1-2-fields.webp" width="1600" height="776" loading="lazy" decoding="async" alt="Campos de cabecera (37) de la NSW-WPS-114 de Nordvik Steelworks AS, leídos del formulario de la propia empresa en español: empresa, números de WPS y WPQR, tipo de unión, precalentamiento, temperatura entre pasadas, saneado de raíz, proceso 135, posición PB, modo de transferencia, posicionado, punteado, distancia tubo de contacto–pieza, balanceo y ángulo de la antorcha, con los campos N/A visibles">
    </button>
    <figcaption>La WPS de un proveedor tal como la leyó Atlas, incluidos los campos de detalle de la ISO 15609-1.</figcaption>
</figure>

<p class="feature-note">Como siempre: el lector copia los valores de sus formularios tal cual. Una vez dentro una WPS, Atlas la comprueba contra los rangos de WPQR que ha introducido, pero no evalúa la conformidad con la norma ni decide si una WPS es correcta. Eso corresponde a la persona responsable, así que revise cada importación como hace hoy.</p>

## Lo que viene

Más trabajo en la experiencia del día a día, y estamos estudiando otras formas de quitarle trabajo de encima. Si algo en Atlas le hace perder tiempo, díganoslo: así decidimos qué viene después.

Atlas 1.2 ya está disponible para todos los clientes de Atlas, sin coste adicional. Dudas, o un formulario que se lee de forma extraña: [escríbanos](/es/wps-manager-contact.html).

El equipo de Delteris

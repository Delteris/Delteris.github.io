---
update_product: atlas
lang: es
version: "Atlas 1.2"
date: 2026-10-24
permalink: /es/atlas/updates/1-2/
title: "Atlas 1.2: Un Lector de WPS que se Adapta a sus Formularios, y un Atlas más Limpio | Elenchon Atlas"
heading: "Atlas 1.2: nuestra primera gran actualización"
description: "Atlas 1.2 trae un lector de WPS que se adapta a sus formularios, ASME y AWS incluidos, y una revisión de cada pantalla para que lo que le necesita aparezca primero. También puede redactar y aprobar WPS en Atlas y confirmar cualificaciones de soldadores en una sola ronda."
summary: "Un lector de WPS que se adapta a sus formularios, ASME y AWS incluidos, y una revisión de cada pantalla para que lo que le necesita aparezca primero. Y además: redactar y aprobar WPS en Atlas, y confirmar cualificaciones de soldadores en una sola ronda."
image: "/static/updates/es/atlas-1-2-fields.webp"
chip: "Nuevo en Atlas 1.2: un lector de WPS que se adapta a sus formularios, y un Atlas más limpio"
en_url: "/atlas/updates/1-2/"
pt_url: "/pt/atlas/updates/1-2/"
es_url: "/es/atlas/updates/1-2/"
---
<div class="update-lead">
    <p>Desde que lanzamos Atlas, no hemos dejado de preguntarnos dos cosas: ¿qué más podemos quitarle de encima, y cómo mostrarle con más claridad lo que importa? Atlas 1.2 es el primer gran resultado.</p>
    <p>Los dos grandes cambios: el lector de WPS ahora se adapta a sus formularios, ASME y AWS incluidos, y hemos revisado cada pantalla para que lo que le necesita aparezca primero. También puede redactar y aprobar WPS en Atlas, y confirmar una ronda entera de cualificaciones de soldadores con una sola firma.</p>
</div>

<ul class="update-highlights">
    <li><a href="#lector"><span class="hl-title">Un lector que se adapta a sus formularios</span>Formularios ASME IX y AWS D1.1, archivos con varias WPS, y las denominaciones de su empresa.</a></li>
    <li><a href="#pantallas"><span class="hl-title">Cada pantalla, revisada</span>Menos ruido, sin quitarle nada de lo que necesita: lo que le necesita aparece primero.</a></li>
    <li><a href="#redactar"><span class="hl-title">Redactar una WPS en Atlas</span>Parte de los WPQR en los que se basa, comprobada contra ellos mientras escribe.</a></li>
    <li><a href="#aprobar"><span class="hl-title">Aprobar con una firma</span>Una WPS o varias a la vez, con historial completo.</a></li>
    <li><a href="#soldadores"><span class="hl-title">Ronda de confirmación</span>Muchas cualificaciones de soldadores de una vez, y una tarjeta para cada soldador.</a></li>
</ul>

## Un lector de WPS que se adapta a sus formularios {#lector}

El lector es la parte de Atlas que convierte sus formularios en registros. Ahora determina la estructura de cada formulario a partir del propio archivo, en lugar de depender de una plantilla fija, y aprende las denominaciones y las lecturas de su empresa a medida que lo usa.

Tenemos un compromiso con el lector: ningún error silencioso. Un campo en blanco se ve enseguida y se rellena en segundos; un valor erróneo puede pasar desapercibido hasta el taller. Por eso, cuando el lector no está seguro, deja el campo en blanco o lo señala para revisarlo, y se lo dice. También por eso no usa OCR ni IA: adivinar caracteres en una imagen, o un modelo rellenando huecos, supondría valores que no podemos respaldar.

- **Formularios ASME y AWS.** Además de la ISO 15609-1, lee formularios ASME IX (al estilo QW-482) y AWS D1.1: una columna por proceso (*GTAW* y *SMAW* lado a lado, por ejemplo), secciones QW-402 a QW-410, y *Prequalified* cuando una WPS AWS no tiene PQR. La progresión de soldadura se lee como ascendente o descendente, también a partir de los códigos de posición ISO 6947 (*PF* es ascendente, *PG* es descendente).
- **Archivos con varias WPS.** Un PDF que reúne varias, o un libro Excel con una WPS por hoja: Atlas pregunta una vez por carga qué hacer. Dividirlo en un archivo por WPS (la opción por defecto), importar solo la primera, u omitir todos los archivos así.
- **Otros campos de este formulario.** Una línea que no corresponde a ninguno de nuestros campos (un gas de purga, una referencia interna) se guarda en la WPS para que la coloque: añadirla a un campo, conservarla como campo propio, o eliminarla. Sugerimos primero los campos más probables, y el valor se toma del formulario tal cual.
- **Denominaciones de los formularios.** Cuando añade un Otro campo a uno de los nuestros, Atlas recuerda esa denominación para su organización y lee el siguiente formulario que la use directamente en ese campo. Solo acepta la denominación exacta, y solo para su organización: preferimos preguntarle dos veces a rellenar mal un campo una vez. La lista está en **Configuración → Plantillas → Denominaciones de los formularios**.
- **Lecturas que confirma siempre igual.** Algunos valores llegan señalados para revisarlos: la función de una pasada que el lector tuvo que suponer, o una norma leída en el título del formulario. Cuando su equipo ha confirmado la misma lectura en cinco documentos del mismo formulario, por al menos dos personas, Atlas deja de señalarla en ese formulario. Nunca rellena ni cambia un valor, todo lo nuevo sigue señalado, y si alguien indica alguna vez otro valor para esa lectura, vuelve a señalarse en todas partes. La lista está en **Configuración → Plantillas → Lecturas aprendidas**, donde un administrador puede revocar cualquiera. Cuando verifica varios valores señalados a la vez, Atlas pregunta si deben contar.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Otros campos de este formulario">
        <img src="/static/updates/es/atlas-1-2-other-fields.webp" width="1600" height="404" loading="lazy" decoding="async" alt="Otros campos de este formulario (2): REF. PLANO con el valor DWG-2207-14 rev B, y PURGA con el valor Argón 99,99 %, 8 L/min y Gas de respaldo elegido en el selector de campo; cada fila tiene los botones Añadir, Conservar como campo propio y Eliminar">
    </button>
    <figcaption>Dos líneas del formulario de un proveedor que no corresponden a un campo normal. Para <em>Purga</em>, Atlas sugiere primero el gas de respaldo.</figcaption>
</figure>

### Compartir con nosotros el informe de denominaciones

Un administrador puede compartir con nosotros el informe de denominaciones de su organización, en **Configuración → Plantillas → Denominaciones de los formularios**. Solo contiene denominaciones y recuentos, nunca valores ni documentos, y está desactivado hasta que lo active. Las denominaciones que asignan varias empresas entran en el lector para todos en una versión. Con el informe compartido, basta un mensaje de una línea para que corrijamos un formulario que se lee de forma extraña, y se aplica nuestra [garantía de respuesta](/es/wps-management-software.html#response-guarantee): una respuesta por escrito en 3 días hábiles, o ese mes cuesta la mitad.

## Cada pantalla, revisada {#pantallas}

Atlas se había vuelto recargado: etiquetas en cada fila, avisos que repetían lo que ya dice el menú, botones para cosas que usa una vez al mes. Hemos revisado cada pantalla para quitar ese ruido sin quitarle nada de lo que necesita. Lo que necesita a una persona aparece primero; el resto está a un clic.

- **Biblioteca.** La lista solo señala lo que requiere atención: fuera del rango del WPQR, campos por decidir, no leída, un borrador o una edición tras la aprobación, una WPS que ningún WPQR cualifica. Una WPS sin nada pendiente lleva un discreto visto en lugar de una fila de etiquetas. En la propia WPS, los campos se agrupan como en el formulario, los valores largos se abren con un clic en lugar de desplazarse dentro de su celda, y la lista y la WPS se desplazan por separado.
- **Resumen.** Las áreas sin nada que comunicar se pliegan en una línea de vistos verdes. Solo lo que necesita a alguien aparece como tarjeta, y los bloques que repetían la tarjeta de plazos han desaparecido.
- **Cualificaciones.** Cada registro muestra, como botón, lo único que está esperando (confirmar, registrar una soldadura, ponerse al día).
- **Configuración.** Una línea por sección, que se abre con un clic, y Atlas recuerda cuáles mantiene abiertas.
- **Todas las páginas.** El gran encabezado superior es ahora un título discreto, porque el menú ya dice dónde está.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: la Biblioteca con una WPS abierta">
        <img src="/static/updates/atlas-1-2-library.webp" width="1600" height="868" loading="lazy" decoding="async" alt="La Biblioteca (en inglés): una lista de WPS en la que solo MER-WPS-003 y MER-WPS-010 (Differs) y MER-WPS-005, 006, 011 y 012 (Outside) están señaladas y el resto lleva un discreto visto; MER-WPS-005 está abierta, con Editar, Descargar y Comparar en la barra, Aprobación, Copia firmada, Comprobación de rango del WPQR y Soldadores cualificados en una lista compacta, y los campos de cabecera agrupados como en el formulario">
    </button>
    <figcaption>La Biblioteca: solo se señalan las excepciones, y la WPS se abre con lo que le necesita arriba.</figcaption>
</figure>

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Resumen, requiere atención">
        <img src="/static/updates/atlas-1-2-overview.webp" width="1600" height="163" loading="lazy" decoding="async" alt="Resumen (en inglés): dos tarjetas que requieren atención (4 cualificaciones han caducado, 6 soldadores necesitan reverificación) y las áreas en orden como etiquetas verdes: campos de las WPS revisados, registro al día, alertas por correo activadas">
    </button>
    <figcaption>Resumen: lo que necesita a alguien es una tarjeta; lo que está bien es una línea de vistos verdes.</figcaption>
</figure>

### Dónde han ido las cosas

- **En una WPS:** Exportar PDF, Vista previa, Imprimir formulario, Reglas de cualificación, Nueva revisión y Eliminar están en el menú ⋯. Editar, Descargar y Comparar siguen en la barra.
- **Encima de la lista de la Biblioteca:** Seleccionar varios, Volver a comprobar vínculos WPQR y Adjuntar copias firmadas están en el menú ⋯.
- **Informe mensual:** el interruptor está ahora en **Configuración → Informe mensual**. Generar ahora sigue en el Resumen.

## Redactar una WPS en Atlas {#redactar}

Hasta ahora, una WPS llegaba a Atlas como un archivo redactado en otro sitio. Ahora puede redactarla en Atlas, con **Redactar WPS** en las pestañas WPS y pWPS de la Biblioteca.

Elija el WPQR (o los WPQR) en los que se basa la WPS y esta parte de su rango de cualificación. Los valores comunes a todos los WPQR quedan rellenados, y el material de aporte, la corriente y el gas vienen del WPQR que indica cada proceso. Donde los WPQR no coinciden, el campo queda en blanco para que usted decida. Todos los campos del formulario están ahí, en el orden en que se imprimen.

Mientras edita, la comprobación de rango se ejecuta sobre lo que escribe y señala cualquier campo fuera de los WPQR vinculados. No se guarda nada hasta que guarda.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: comprobación de rango al redactar una WPS">
        <img src="/static/updates/atlas-1-2-write.webp" width="1600" height="486" loading="lazy" decoding="async" alt="Una nueva WPS (en inglés), MER-WPS-030, redactada en Atlas y vinculada a MER-WPQR-2402, en modo de edición. La comprobación de rango del WPQR (al editar) muestra 1 fuera: Posiciones, PB no figura en MER-WPQR-2402 (PF, PC)">
    </button>
    <figcaption>Al escribir PB como posición, la comprobación de rango la señala antes de guardar nada.</figcaption>
</figure>

Bajo cada campo, **Valores ya usados en su biblioteca** muestra los valores que su empresa ya ha usado, los más usados primero, para que un valor habitual esté a un clic en lugar de volver a escribirlo.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: valores ya usados en su biblioteca">
        <img src="/static/updates/atlas-1-2-past-values.webp" width="1600" height="642" loading="lazy" decoding="async" alt="El campo Precalentamiento (en inglés) en modo de edición con la lista de valores ya usados abierta: Not required (workpiece ≥ 5 °C), 150 °C, 120 °C y 100 °C">
    </button>
    <figcaption>Valores ya usados en su biblioteca: los valores que su empresa ya usa, los más usados primero.</figcaption>
</figure>

Cuando esté lista, **Imprimir formulario** la imprime en el formulario propio de Atlas (Excel, que puede exportar a PDF), con la estructura de la norma a la que está cualificada: ISO 15609-1, ASME IX (agrupado como en QW-482) o AWS D1.1 (como en el Anexo J). La estructura es nuestra, no una copia del formulario de ninguna norma. Se imprimen todos los procesos, con una columna por proceso para materiales de aporte y gases, y una vez aprobada la WPS en Atlas, la aprobación va en el recuadro de aprobación.

**Nueva revisión** inicia la siguiente revisión de cualquier WPS, incluidas las importadas, como una copia de sus valores y vínculos a WPQR que puede editar. La revisión anterior se queda como estaba.

## Aprobar con una firma {#aprobar}

Ahora puede aprobar una WPS o pWPS en Atlas. Confirma con su contraseña, y Atlas registra una firma electrónica simple: su nombre, la fecha y la hora, y una huella exacta de lo que aprobó. Seleccione varias en la Biblioteca y una sola firma las aprueba todas.

<figure class="app-figure update-figure update-figure-narrow">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: aprobar una WPS">
        <img src="/static/updates/atlas-1-2-approve.webp" width="920" height="766" loading="lazy" decoding="async" alt="La ventana Aprobar esta WPS (en inglés): apruebo MER-WPS-030 · Rev 0 tal como está ahora, la nota sobre lo que queda registrado, un comentario opcional, un campo de contraseña para firmar, y Firmar y aprobar">
    </button>
    <figcaption>Aprobar con su contraseña: Atlas registra quién aprobó exactamente qué, y cuándo.</figcaption>
</figure>

- Una WPS redactada en Atlas se aprueba por sus valores. Si se edita después, queda marcada como *Editada tras aprobarse*. Nada se bloquea ni se anula, y **Reconfirmar** la aprueba tal como está ahora.
- Una WPS importada se aprueba por su archivo, así que corregir algo que Atlas leyó de ella no afecta a la aprobación.
- Cada aprobación y reconfirmación queda en el historial de la WPS, que nunca se reescribe.

Si aprueba sus WPS en papel, nada cambia: el escaneo firmado sigue donde está, y el bolígrafo en la lista de la Biblioteca marca una WPS como firmada en cualquier caso.

## Soldadores: una ronda de confirmación y una tarjeta del soldador {#soldadores}

Confirmar cualificaciones era un registro cada vez. La **Ronda de confirmación**, en Cualificaciones, hace muchas a la vez:

- **ISO / EN:** todo lo que vence pronto o está en su periodo de gracia viene marcado. Cada soldador tiene su fecha de **Firmado el**: hoy, o el día en que firmó en el taller si lo introduce más tarde. Atlas calcula hasta cuándo vale cada confirmación, seis meses desde la firma (ISO 9606-1), nunca más allá de la caducidad del propio certificado. O elija **Manual** e indique las fechas; Atlas señala las que difieren de la norma. Una contraseña firma todas, y cada registro recibe su propia entrada firmada.
- **ASME / AWS:** registra la fecha en que los soldadores ejecutaron el proceso por última vez, para muchos soldadores a la vez, y Atlas recalcula la continuidad de cada uno a partir de ella: seis meses desde esa soldadura.

<figure class="app-figure update-figure update-figure-narrow">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: ronda de confirmación">
        <img src="/static/updates/es/atlas-1-2-confirmation-round.webp" width="1400" height="1400" loading="lazy" decoding="async" alt="La ventana Ronda de confirmación en la pestaña ISO / EN: Válido hasta calculado por ISO 9606-1, firma + 6 meses; las cuatro cualificaciones que vencen antes marcadas, cada una con su fecha de Firmado el (una firmada en papel tres días antes, así que válida hasta el 19/4/2027, las demás hasta el 22/4/2027) y aquello en lo que se basa la confirmación; Firmar y confirmar 4">
    </button>
    <figcaption>Cada soldador con su fecha de firma; una sola firma los confirma todos, y cada registro recibe su entrada firmada.</figcaption>
</figure>

Cada registro pasa por las mismas comprobaciones que cuando lo confirma por separado, y los que no se pueden actualizar aparecen en una lista con el motivo. Confirmar un soldador por separado funciona igual.

La **Tarjeta del soldador (PDF)** imprime una página por soldador con las cualificaciones que tiene hoy, lista para el soldador, un cliente o un inspector.

El panel de cualificaciones tiene dos ajustes nuevos, en **Configuración → Panel de cualificaciones**: el **orden de los soldadores** (lo más urgente primero, por nombre o por número de trabajador), que un administrador define para toda la empresa, y el **tamaño en su pantalla** (Compacto, Normal o Amplio), que cada persona define para sí.

## Cambios menores

- Volver a interpretar una WPS muestra la lectura actual y la nueva lado a lado, y no se guarda nada hasta que elige **Aplicar nueva lectura** o **Mantener lectura actual**. Un campo que corrigió a mano aparece como diferencia. Una pestaña **Por comprobar** muestra lo que habría que comprobar una vez aplicada la nueva lectura, incluidos campos que ya había comprobado y de los que el lector no está seguro.
- Puede volver a interpretar varias WPS a la vez: márquelas en **Seleccionar varios** y elija **Volver a interpretar**. Una lista muestra, para cada WPS, cuántos campos cambiarían y cuántos habría que comprobar; abra cualquiera para ver el detalle, y solo las que marque reciben la nueva lectura.
- Los campos N/A aparecen en la WPS, para que se lea como el formulario. Puede ocultarlos solo para usted en **Configuración → Plantillas → Presentación de las WPS**, o en una WPS con su interruptor **Mostrar N/A / Ocultar N/A**, que Atlas ahora recuerda.
- Cuando una WPS indica un rango abierto (≥ 25 mm, por ejemplo) y su WPQR lo limita, la comprobación de rango dice ahora lo que falta: *La WPS no fija límite superior (≥ 25 mm); el WPQR cubre 25–450 mm.*
- Cuando algo nunca se registró, como el nombre de un soldador o quién firmó una línea, Atlas dice ahora *No indicado* en lugar de mostrar un guion. Un guion parecía una celda rota, y *N/A* querría decir que no se aplica.
- La cuenta de administrador que vino con su Atlas está marcada como **Sistema** en Usuarios; su contraseña se gestiona en el servidor.
- Todo lo nuevo está en inglés, portugués y español.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: vista previa al volver a interpretar">
        <img src="/static/updates/es/atlas-1-2-reparse.webp" width="1600" height="460" loading="lazy" decoding="async" alt="Volver a interpretar: qué cambiaría. Diferencias 2 de 70 campos: Ángulo de la antorcha / electrodo, lectura actual 10°–20° empujando (corregido a mano), nueva lectura 10°–15° empujando; Limpieza entre pasadas, lectura actual Solo amolado, nueva lectura Cepillo de alambre / amolado. Botones: Mantener lectura actual, Aplicar nueva lectura">
    </button>
    <figcaption>Dos campos corregidos a mano aparecen como diferencias antes de elegir.</figcaption>
</figure>

## Por dentro

- El lector determina la estructura de cada formulario a partir del propio archivo (celdas en Excel; líneas de tabla, posiciones de las palabras y tipos de letra en los PDF de texto) y reconoce sus secciones, sean ISO, ASME o AWS.
- Lee el conjunto completo de detalles de la ISO 15609-1, la tabla de pasadas columna a columna con el aporte térmico calculado, y los materiales base, materiales de aporte, gas y fundente por proceso.
- Comprueba que cada valor tiene la forma correcta antes de guardarlo y, si no está seguro, deja el campo en blanco.
- Solo lee texto que está de verdad en el archivo, así que el mismo archivo da siempre el mismo resultado, en un segundo aproximadamente.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: campos de cabecera leídos de la WPS de un proveedor">
        <img src="/static/updates/es/atlas-1-2-fields.webp" width="1600" height="776" loading="lazy" decoding="async" alt="Campos de cabecera (37) de la NSW-WPS-114 de Nordvik Steelworks AS, leídos del formulario de la propia empresa en español: empresa, números de WPS y WPQR, tipo de unión, precalentamiento, temperatura entre pasadas, saneado de raíz, proceso 135, posición PB, modo de transferencia, posicionado, punteado, distancia tubo de contacto–pieza, balanceo y ángulo de la antorcha, con los campos N/A visibles">
    </button>
    <figcaption>La WPS de un proveedor tal como la leyó Atlas, incluidos los campos de detalle de la ISO 15609-1.</figcaption>
</figure>

## Conviene saber

- **Vuelva a interpretar para aprovechar el nuevo lector.** Las WPS importadas antes de la 1.2 mantienen su lectura actual. Vuelva a interpretar una, o varias a la vez desde **Seleccionar varios**, para ver lo que encuentra el nuevo lector; nada cambia hasta que lo aplique.
- **Los PDF escaneados no se leen.** Atlas no usa OCR, a propósito: el escaneo se guarda como el archivo de la WPS, y los campos que quiera en Atlas los añade usted en Editar. Si tiene el original digital (el archivo Excel, o un PDF exportado desde él), súbalo y Atlas lo lee.
- **La aprobación es una firma electrónica simple.** Registra quién aprobó qué, y cuándo; no es una firma electrónica cualificada.
- **El intervalo de la norma, o el suyo.** La nueva fecha de una confirmación sigue la norma que elija (ISO 9606-1, o la continuidad ASME / AWS). El periodo de gracia de confirmación en la Configuración es la tolerancia de su empresa; la ISO 9606-1 en sí no tiene periodo de gracia.
- **Atlas comprueba, usted decide.** Atlas comprueba cada WPS contra los rangos de WPQR que ha introducido, pero no evalúa la conformidad con la norma ni decide si una WPS es correcta. Eso queda en manos de la persona responsable.

## Lo que viene

Ninguna gran funcionalidad nueva por ahora. Seguiremos haciendo lo que hace esta versión: recorrer Atlas, encontrar dónde todavía le cuesta tiempo o atención, y quitarlo. Si algo en Atlas le hace perder tiempo, díganoslo; va directamente a la lista.

Atlas 1.2 ya está disponible para todos los clientes de Atlas, sin coste adicional. Dudas, o un formulario que se lee de forma extraña: [escríbanos](/es/wps-manager-contact.html).

El equipo de Delteris

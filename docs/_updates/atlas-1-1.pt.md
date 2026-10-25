---
update_product: atlas
lang: pt
version: "Atlas 1.1"
date: 2026-10-11
permalink: /pt/atlas/updates/1-1/
title: "Atlas 1.1: Correspondência de WPS e uma Vista Mais Limpa | Elenchon Atlas"
heading: "Atlas 1.1: correspondência de WPS e uma vista que pode simplificar"
description: "O Atlas 1.1 verifica cada WPS contra o WPQR em que assenta e contra os soldadores qualificados para a soldar, e deixa cada pessoa ocultar as funcionalidades que não usa."
summary: "Esta versão verifica cada WPS contra o WPQR em que assenta e contra os soldadores qualificados para a soldar, e deixa cada pessoa ocultar as partes do Atlas que não usa."
chip: "Novo no Atlas 1.1: correspondência de WPS e ocultar o que não usa"
image: "/static/updates/pt/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1/"
pt_url: "/pt/atlas/updates/1-1/"
es_url: "/es/atlas/updates/1-1/"
---
O Atlas 1.1 traz duas coisas. A correspondência verifica cada WPS contra o WPQR que a sustenta e contra os soldadores que a podem soldar. E **O que vê** deixa cada pessoa ocultar as partes do Atlas que não usa.

## Correspondência

Uma WPS assenta em duas coisas: o WPQR que a qualifica e os soldadores qualificados para a soldar. A correspondência verifica as duas, para cada WPS da sua biblioteca.

### Contra o WPQR

Introduz a gama de qualificação uma vez, a partir do certificado do WPQR. O editor abre o certificado ao lado do formulário, na página em que estava, e pode copiar a gama de outro WPQR como ponto de partida. A partir daí, cada WPS ligada a esse WPQR é verificada contra ele, campo a campo: processos, grupos de material, espessura, diâmetro, posições, pré-aquecimento, temperatura entre passes, TTPS, corrente, consumíveis e aporte térmico.

Cada resultado é um de quatro: **dentro**, **fora**, **difere** ou **não verificado**.

Algumas escolhas que fizemos de propósito:

- Um WPQR por grupo de passes, por omissão. Cada grupo de passes (processo e material de adição) tem de estar coberto por um único WPQR ligado, em todos os campos. Isto segue a nossa leitura das interpretações publicadas pelo ISO/TC 44 sobre a ISO 15614-1: ensaios de procedimento separados não se podem juntar para alargar uma gama de qualificação, mas cada processo de uma junta pode assentar no seu próprio WPQR. Pode na mesma combinar vários WPQR numa gama mais larga numa WPS, mas é uma opção que tem de ativar, e cada resultado combinado indica-o.
- Os consumíveis comparam-se pela designação. Uma designação diferente aparece como *difere*, nunca como *fora*: saber se está coberta é decisão da pessoa responsável, não nossa.
- Sem suposições. Uma WPS sem pré-aquecimento mínimo não é tratada como estando à temperatura ambiente, e um valor em branco ou pouco claro fica *não verificado*, em vez de um alerta vermelho.

Cada resultado explica-se em palavras simples, por exemplo "PB não consta em WPQR-2402 (PF, PC)". O relatório de verificação de gama mostra primeiro os problemas, agrupados por grupo de passes, e exporta para PDF. Na Biblioteca, uma WPS com um problema tem uma etiqueta *Fora* ou *Difere*, e um filtro mostra só essas.

### Contra os soldadores

A cobertura de soldadores liga cada WPS aos soldadores cujos certificados em vigor a cobrem, e cada soldador às WPS que pode soldar. Vê quando ninguém está qualificado para uma WPS, e quando caduca uma qualificação de que ela depende.

O relatório mensal junta os dois lados para todo o registo: o que mudou desde o mês anterior, que WPS estão fora da gama do seu WPQR e que WPS não têm nenhum soldador qualificado.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: uma WPS com a verificação de gama do WPQR e os soldadores qualificados">
        <img src="/static/updates/pt/atlas-1-1-matching.webp" width="1600" height="305" loading="lazy" decoding="async" alt="Uma WPS na biblioteca do Atlas: Verificação de gama do WPQR com Fora · 1, a linha 'Posições — PB não consta em MER-WPQR-2402 (PF, PC)' e o botão Abrir relatório de verificação de gama, seguida dos soldadores qualificados: André Cunha, qualificado por 135">
    </button>
    <figcaption>Uma WPS, os dois lados: a verificação contra o seu WPQR e os soldadores qualificados para a soldar.</figcaption>
</figure>

<p class="feature-note">O que é e o que não é: o Atlas compara os valores da sua WPS com as gamas que introduziu a partir dos seus certificados. Não deriva gamas da ISO 15614-1, da ISO 9606-1 nem do ASME IX, e não decide se uma WPS ou um soldador está qualificado. Os resultados ficam para a pessoa responsável confirmar.</p>

## O que vê

Nem todas as oficinas usam todas as partes do Atlas, e funcionalidades que não usa são só ruído no ecrã. **O que vê**, no Resumo, deixa cada pessoa desligar funcionalidades inteiras na sua própria vista: cópias assinadas, verificação de gama do WPQR, cobertura de soldadores, relatório mensal e as páginas Comparar, Ajuda de aporte térmico e Quadro.

- Só muda a sua vista. Nada é apagado e os seus colegas continuam a ver tudo.
- Fica guardado na sua conta, não no navegador, por isso acompanha-o em qualquer dispositivo.
- Depois de cada início de sessão, uma nota curta lista o que ocultou, com uma ligação para o voltar a mostrar.
- Ocultar uma funcionalidade não oculta os seus problemas. Se ocultou a verificação de gama e uma WPS fica fora da gama do seu WPQR, a nota continua a indicar quantas.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: o painel O que vê no Resumo">
        <img src="/static/updates/pt/atlas-1-1-what-you-see.webp" width="1482" height="322" loading="lazy" decoding="async" alt="O painel O que vê no Resumo: interruptores para Cópias assinadas, Verificação de gama do WPQR (oculto), Cobertura de soldadores, Relatório mensal (oculto), Comparar, Ajuda de aporte térmico e Quadro, com a indicação '2 ocultas'">
    </button>
    <figcaption>O que vê: um interruptor por funcionalidade, só para a sua vista.</figcaption>
</figure>

O Atlas 1.1 já está disponível para todos os clientes do Atlas, sem custo adicional. Dúvidas: [escreva-nos](/pt/atlas-free-trial.html).

A equipa Delteris

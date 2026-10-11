---
update_product: atlas
lang: pt
version: "Atlas 1.1"
date: 2026-10-11
permalink: /pt/atlas/updates/1-1/
title: "Atlas 1.1: Correspondência de WPS e uma Vista Mais Limpa | Elenchon Atlas"
heading: "Atlas 1.1: correspondência de WPS e uma vista que pode simplificar"
description: "O Atlas 1.1 verifica cada WPS contra o WPQR em que assenta, liga-a aos soldadores que a podem soldar e deixa cada pessoa ocultar as funcionalidades que não usa."
summary: "Cada WPS passa a ser verificada contra a gama do WPQR em que assenta e ligada aos soldadores cujos certificados a cobrem. E cada pessoa pode ocultar as funcionalidades que não usa."
image: "/static/updates/atlas-1-1-matching.webp"
en_url: "/atlas/updates/1-1/"
pt_url: "/pt/atlas/updates/1-1/"
es_url: "/es/atlas/updates/1-1/"
---
## Correspondência: cada WPS contra o seu WPQR e os seus soldadores

Uma WPS vale o que valem as duas coisas que a sustentam: o WPQR em que assenta e os soldadores que a podem soldar. O Atlas 1.1 verifica os dois lados, para cada WPS da sua biblioteca.

### Contra o WPQR

Introduza uma vez a gama de qualificação a partir do certificado do WPQR. O editor abre o certificado ao lado do formulário, na página em que estava, e pode copiar a gama de outro WPQR. A partir daí, cada WPS ligada a esse WPQR é verificada campo a campo: processos, grupos de material, espessura, diâmetro, posições, pré-aquecimento, temperatura entre passes, TTPS, tipo de corrente, consumíveis e aporte térmico.

Cada resultado é um de quatro: **dentro**, **fora**, **difere** ou **não verificado**.

- **Um WPQR por grupo de passes, por omissão.** Cada grupo de passes (processo e material de adição) tem de estar coberto por um único WPQR ligado, em todos os campos. Combinar vários WPQR numa gama mais larga é uma opção por WPS, e cada resultado combinado fica assinalado.
- **Os consumíveis comparam-se pela designação.** Uma designação diferente aparece como *difere*, para a pessoa responsável avaliar. O Atlas nunca a marca como *fora*, porque saber se está coberta é decisão dessa pessoa.
- **Sem suposições.** Uma WPS sem pré-aquecimento mínimo nunca é tratada como estando à temperatura ambiente. Um valor em branco ou pouco claro fica *não verificado*, não é um alerta vermelho.
- **Cada resultado explica-se** em palavras simples, por exemplo "PB não consta do WPQR-2402 (PF, PC)". O relatório de verificação de gama mostra primeiro os problemas, agrupados por grupo de passes, e exporta para PDF.
- **A Biblioteca mostra tudo de relance**: uma etiqueta *Fora* ou *Difere* em cada WPS e um filtro para ver só essas.

### Contra os soldadores

A cobertura de soldadores liga cada WPS aos soldadores cujos certificados em vigor a cobrem, e cada soldador às WPS que pode soldar. Se ninguém estiver qualificado para uma WPS, vê-o. Se uma qualificação de que ela depende caducar, também o vê.

O relatório mensal junta os dois lados para todo o registo: o que mudou desde o mês anterior, que WPS estão fora da gama do seu WPQR e que WPS não têm nenhum soldador qualificado.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: uma WPS com a verificação de gama do WPQR e os soldadores qualificados">
        <img src="/static/updates/atlas-1-1-matching.webp" width="1600" height="341" loading="lazy" decoding="async" alt="Uma WPS na biblioteca do Atlas: verificação de gama do WPQR com Outside · 1, a linha 'Positions: PB is not listed on MER-WPQR-2402 (PF, PC)' e o botão Open range check report, seguida dos soldadores qualificados: Aaron Webb, qualificado via 135">
    </button>
    <figcaption>Uma WPS, os dois lados: a verificação contra o seu WPQR e os soldadores qualificados para a soldar.</figcaption>
</figure>

<p class="feature-note">O que é e o que não é: o Atlas compara os valores da sua WPS com as gamas que introduziu a partir dos seus certificados. Não deriva gamas da ISO 15614-1, da ISO 9606-1 nem do ASME IX, e não decide se uma WPS ou um soldador está qualificado. Os resultados ficam para confirmação pela pessoa responsável.</p>

## O que vê: oculte o que não usa

Nem todas as oficinas usam todas as funcionalidades, e um ecrã cheio do que não precisa é ruído. **O que vê**, no Resumo, deixa cada pessoa desligar funcionalidades inteiras na sua própria vista: cópias assinadas, verificação de gama do WPQR, cobertura de soldadores, relatório mensal e as páginas Comparar, Ajuda de aporte térmico e Quadro.

- **Só muda a sua vista.** Nada é apagado e os seus colegas continuam a ver tudo.
- **Acompanha-o.** A definição fica guardada na sua conta, não no navegador.
- **Não se esquece do que ocultou.** Depois de cada início de sessão, uma nota curta lista o que está oculto, com uma ligação para o voltar a mostrar.
- **Os problemas não ficam em silêncio.** Se ocultou a verificação de gama e uma WPS está fora da gama do seu WPQR, a nota continua a indicar quantas.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: o painel O que vê no Resumo">
        <img src="/static/updates/atlas-1-1-what-you-see.webp" width="1482" height="257" loading="lazy" decoding="async" alt="O painel What you see no Resumo: interruptores para Signed copies, WPQR range check (oculto), Welder coverage, Monthly report (oculto), Compare, Heat input helper e Board, com a indicação '2 hidden'">
    </button>
    <figcaption>O que vê: um interruptor por funcionalidade, só para a sua vista. (Captura da interface em inglês; o Atlas também está em português.)</figcaption>
</figure>

## Disponibilidade

O Atlas 1.1 já está disponível para todos os clientes do Atlas, sem custo adicional: o mesmo preço fixo, sem custos por utilizador. Quer vê-lo com as suas WPS? Oferta limitada: [um teste gratuito](/pt/wps-manager-contact.html), com os seus dados importados por nós.

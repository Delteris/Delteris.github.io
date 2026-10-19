---
update_product: atlas
lang: pt
version: "Atlas 1.2"
date: 2026-10-19
# DRAFT: hidden preview. To publish: delete the next three lines and set permalink,
# en_url, pt_url and es_url to the /1-2/ addresses.
preview: true
noindex: true
sitemap: false
permalink: /pt/atlas/updates/1-2-preview-k7m2x9/
title: "Atlas 1.2: Um Leitor de WPS que se Adapta aos Seus Formulários | Elenchon Atlas"
heading: "Atlas 1.2: um leitor de WPS que se adapta aos seus formulários"
description: "O Atlas 1.2 é sobre o leitor de WPS: guarda todas as linhas dos seus formulários, lembra-se de como a sua empresa escreve as coisas e deixa-o partilhar connosco o que ainda não lê."
summary: "Esta versão é sobre o leitor de WPS: guarda todas as linhas dos seus formulários, lembra-se de como a sua empresa escreve as coisas e deixa-o partilhar connosco o que ainda não lê."
image: "/static/updates/pt/atlas-1-2-fields.webp"
chip: "Novo no Atlas 1.2: um leitor de WPS que se adapta aos seus formulários"
en_url: "/atlas/updates/1-2-preview-k7m2x9/"
pt_url: "/pt/atlas/updates/1-2-preview-k7m2x9/"
es_url: "/es/atlas/updates/1-2-preview-k7m2x9/"
---
O Atlas 1.2 é sobretudo sobre o leitor de WPS, a parte que transforma os seus formulários em registos. Cada empresa escreve os seus formulários à sua maneira, por isso pusemos o Atlas a adaptar-se aos seus à medida que o usa, e demos-lhe uma forma de nos dizer quando há algo que não lê.

Chega uma semana depois da 1.1. O leitor é algo em que andávamos a trabalhar há algum tempo e, agora que está em forma, não o quisemos guardar: é a parte do Atlas que usa em cada importação.

## Outros campos deste formulário

Quando um formulário tem uma linha que não corresponde a nenhum dos nossos campos (um gás de purga, uma referência interna, uma nota), o Atlas guarda-a na WPS para a arrumar. Vê uma contagem no topo da WPS com um botão **Rever**, e uma etiqueta *N por decidir* nessa WPS na Biblioteca.

Para cada uma, pode adicioná-la a um campo vazio, mantê-la como campo próprio ou eliminá-la. Quando a adiciona, sugerimos primeiro os campos mais prováveis, a partir das palavras da designação: *Purga* aponta para o gás de proteção da raiz, *Diâmetro* para a gama de diâmetro. O valor vem do formulário tal como está, por isso não há nada para voltar a escrever.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Outros campos deste formulário">
        <img src="/static/updates/pt/atlas-1-2-other-fields.webp" width="1600" height="405" loading="lazy" decoding="async" alt="Outros campos deste formulário (2): REF. DO DESENHO com o valor DWG-2207-14 rev B, e PURGA com o valor Árgon 99,99 %, 8 L/min e Gás de proteção da raiz escolhido no seletor de campo; cada linha tem os botões Adicionar, Manter como campo próprio e Eliminar">
    </button>
    <figcaption>Duas linhas do formulário de um fornecedor que não correspondem a um campo normal. Para <em>Purga</em>, o Atlas sugere primeiro o gás de proteção da raiz.</figcaption>
</figure>

## Designações dos formulários

Quando adiciona um Outro campo a um dos nossos, o Atlas lembra-se dessa designação para a sua organização, e o próximo formulário que a use é lido diretamente para esse campo. A lista está em **Definições → Modelos → Designações dos formulários**, e um administrador pode remover qualquer entrada.

Duas escolhas que fizemos de propósito:

- Só aceita a designação exata. *Purga* não se estende a *Gás de purga*. É nessas quase-coincidências que nascem os valores errados, e preferimos perguntar-lhe duas vezes a preencher um campo mal uma vez.
- As suas designações só se aplicam à sua organização. Nada do que associa muda a forma como o Atlas lê os formulários de outra empresa.

## Partilhar connosco o relatório de designações

O Atlas mantém um relatório de designações para a sua organização: as designações que associou, os campos que manteve como próprios e as linhas que ainda ninguém arrumou. Contém apenas designações e contagens: nenhum valor, nenhum documento.

Um administrador pode escolher partilhá-lo connosco, com **Partilhar o relatório de designações com a Delteris** em **Definições → Modelos → Designações dos formulários**. Fica desligado até o ligar, e pode voltar a desligá-lo quando quiser. Os administradores também podem descarregar o relatório no mesmo ecrã para ver exatamente o que contém.

Lemos todos os relatórios que recebemos. Quando várias empresas associam a mesma designação, ela entra no leitor para todos numa versão. Quando muitas empresas mantêm o mesmo campo próprio, ele passa a candidato a um novo campo normal.

É também a forma mais rápida de resolver um formulário que é lido de forma estranha. Com o relatório partilhado, basta uma linha sua sobre o que viu: conseguimos ver exatamente que designações o Atlas não está a arrumar, sem que tenha de enviar o documento ou descrever o esquema, e a correção que publicamos aplica-se a todos os formulários que usam essa designação. A nossa [garantia de resposta](/pt/wps-management-software.html#response-guarantee) aplica-se como sempre: uma resposta escrita em 3 dias úteis, ou esse mês fica a metade do preço.

## Alterações mais pequenas

- Reprocessar uma WPS mostra-lhe primeiro o que mudaria. A leitura atual e a nova aparecem lado a lado, filtradas pelas diferenças ou com todos os campos, e nada é guardado até escolher **Aplicar nova leitura** ou **Manter leitura atual**. Um campo que corrigiu à mão e que a nova leitura substituiria aparece como diferença. Dá jeito depois de uma versão como esta: reprocesse uma WPS para aproveitar o que é novo, e mantenha a sua leitura se a preferir.
- Os campos N/A aparecem na WPS, para que se leia como o formulário. Pode ocultá-los só para si em **Definições → Modelos → Apresentação das WPS**, ou numa WPS com o seu interruptor **Mostrar N/A / Ocultar N/A**.
- Tudo o que é novo está em inglês, português e espanhol.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: pré-visualização ao reprocessar">
        <img src="/static/updates/pt/atlas-1-2-reparse.webp" width="1600" height="438" loading="lazy" decoding="async" alt="Reanalisar: o que mudaria. Diferenças 2 de 77 campos: Ângulo da tocha / elétrodo, leitura atual 10°–20° a empurrar (corrigido à mão), nova leitura 10°–15° a empurrar; Limpeza entre passes, leitura atual Só rebarbagem, nova leitura Escova de arame / rebarbagem. Botões: Manter leitura atual, Aplicar nova leitura">
    </button>
    <figcaption>Dois campos corrigidos à mão aparecem como diferenças antes de escolher.</figcaption>
</figure>

## Por dentro

Para quem quer o detalhe:

- O leitor determina o esquema de cada formulário a partir do próprio ficheiro: células e células unidas no Excel; linhas de tabela, posições das palavras e tipos de letra nos PDF de texto.
- Encontra designações em inglês, português e espanhol, e também designações comuns em francês e alemão, e verifica que cada valor tem a forma certa antes de o guardar (uma data, um número de processo ISO 4063, uma revisão, um número). Se não tiver certeza, deixa o campo em branco. Um campo em branco preenche-se em segundos; um valor errado pode passar despercebido.
- Lê o conjunto completo de detalhes da ISO 15609-1: posicionamento e fixação, ponteamento, sequência de soldadura, secagem ou estufagem especial, elétrodo de tungsténio, distância tubo de contacto–peça, manutenção do pré-aquecimento, pós-aquecimento, velocidades de aquecimento e arrefecimento, tecimento, oscilação, ângulo da tocha ou do elétrodo, soldadura pulsada, comprimento de deposição e limpeza entre passes.
- A tabela de passes é lida coluna a coluna, com as funções dos passes e o aporte térmico calculados. Materiais de base (incluindo diâmetro exterior ou gama de tubo), materiais de adição, gás de proteção e fluxo são lidos de uma tabela ou como campos soltos.
- Os esquemas que trata incluem PDF escritos sem linhas de tabela, colunas de números alinhadas à direita, notas em várias linhas, uma designação e o seu valor na mesma célula, texto acima de uma tabela com linhas e formulários com várias páginas.
- Só lê texto que está mesmo no ficheiro, por isso não pode produzir um valor que não esteja no formulário. É por isso que não adivinha caracteres a partir de uma imagem (OCR) nem usa IA: o mesmo ficheiro dá sempre o mesmo resultado. Um PDF digitalizado fica guardado com a WPS; os seus campos preenchem-se à mão.
- Demora cerca de um segundo por formulário.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: campos de cabeçalho lidos da WPS de um fornecedor">
        <img src="/static/updates/pt/atlas-1-2-fields.webp" width="1600" height="868" loading="lazy" decoding="async" alt="Campos de cabeçalho (41) da NSW-WPS-114 da Nordvik Steelworks AS, lidos do formulário da própria empresa em português: empresa, números da EPS e do RQPS, tipo de junta, pré-aquecimento, temperatura entre passes, goivagem, processo 135, posição PB, modo de transferência, posicionamento, ponteamento, sequência de soldadura, distância tubo de contacto–peça, tecimento e ângulo da tocha, com os campos N/A visíveis">
    </button>
    <figcaption>A WPS de um fornecedor tal como o Atlas a leu, incluindo os campos de detalhe da ISO 15609-1.</figcaption>
</figure>

<p class="feature-note">Como sempre: o leitor copia os valores dos seus formulários tal como estão. Depois de uma WPS entrar, o Atlas verifica-a contra as gamas de WPQR que introduziu, mas não avalia a conformidade com a norma nem decide se uma WPS está certa. Isso fica com a pessoa responsável, por isso reveja cada importação como faz hoje.</p>

## O que vem a seguir

Mais trabalho na experiência do dia a dia, e estamos a estudar outras formas de lhe tirar trabalho de cima. Se alguma coisa no Atlas lhe faz perder tempo, diga-nos: é assim que decidimos o que vem a seguir.

O Atlas 1.2 já está disponível para todos os clientes do Atlas, sem custo adicional. Dúvidas, ou um formulário lido de forma estranha: [escreva-nos](/pt/wps-manager-contact.html).

A equipa Delteris

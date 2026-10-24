---
update_product: atlas
lang: pt
version: "Atlas 1.2"
date: 2026-10-24
permalink: /pt/atlas/updates/1-2/
title: "Atlas 1.2: Um Leitor de WPS que se Adapta aos Seus Formulários, e um Atlas Mais Limpo | Elenchon Atlas"
heading: "Atlas 1.2: a nossa primeira grande atualização"
description: "O Atlas 1.2 traz um leitor de WPS que se adapta aos seus formulários, ASME e AWS incluídos, e uma revisão de cada ecrã para que o que precisa de si apareça primeiro. Também pode escrever e aprovar WPS no Atlas e confirmar qualificações de soldadores numa só ronda."
summary: "Um leitor de WPS que se adapta aos seus formulários, ASME e AWS incluídos, e uma revisão de cada ecrã para que o que precisa de si apareça primeiro. E ainda: escrever e aprovar WPS no Atlas, e confirmar qualificações de soldadores numa só ronda."
image: "/static/updates/pt/atlas-1-2-fields.webp"
chip: "Novo no Atlas 1.2: um leitor de WPS que se adapta aos seus formulários, e um Atlas mais limpo"
en_url: "/atlas/updates/1-2/"
pt_url: "/pt/atlas/updates/1-2/"
es_url: "/es/atlas/updates/1-2/"
---
<div class="update-lead">
    <p>Desde que lançámos o Atlas, não deixámos de nos perguntar duas coisas: o que mais lhe podemos tirar de cima, e como lhe mostrar com mais clareza o que importa? O Atlas 1.2 é o primeiro grande resultado.</p>
    <p>As duas grandes mudanças: o leitor de WPS adapta-se agora aos seus formulários, ASME e AWS incluídos, e revimos cada ecrã para que o que precisa de si apareça primeiro. Também pode escrever e aprovar WPS no Atlas, e confirmar uma ronda inteira de qualificações de soldadores com uma só assinatura.</p>
</div>

<ul class="update-highlights">
    <li><a href="#leitor"><span class="hl-title">Um leitor que se adapta aos seus formulários</span>Formulários ASME IX e AWS D1.1, ficheiros com várias WPS, e as designações da sua empresa.</a></li>
    <li><a href="#ecras"><span class="hl-title">Cada ecrã, revisto</span>Menos ruído, sem lhe tirar nada de que precise: o que precisa de si aparece primeiro.</a></li>
    <li><a href="#escrever"><span class="hl-title">Escrever uma WPS no Atlas</span>Parte dos WPQR em que assenta, verificada contra eles enquanto escreve.</a></li>
    <li><a href="#aprovar"><span class="hl-title">Aprovar com uma assinatura</span>Uma WPS ou várias de uma vez, com histórico completo.</a></li>
    <li><a href="#soldadores"><span class="hl-title">Ronda de confirmação</span>Muitas qualificações de soldadores de uma vez, e um cartão para cada soldador.</a></li>
</ul>

## Um leitor de WPS que se adapta aos seus formulários {#leitor}

O leitor é a parte do Atlas que transforma os seus formulários em registos. Agora determina o esquema de cada formulário a partir do próprio ficheiro, em vez de depender de um modelo fixo, e aprende as designações e as leituras da sua empresa à medida que o usa.

Assumimos um compromisso com o leitor: nenhum erro silencioso. Um campo em branco vê-se logo e preenche-se em segundos; um valor errado pode passar despercebido até à oficina. Por isso, quando o leitor não tem certeza, deixa o campo em branco ou assinala-o para revisão, e diz-lhe. É também por isso que não usa OCR nem IA: adivinhar caracteres numa imagem, ou um modelo a preencher lacunas, significaria valores que não podemos garantir.

- **Formulários ASME e AWS.** Além da ISO 15609-1, lê formulários ASME IX (no estilo QW-482) e AWS D1.1: uma coluna por processo (*GTAW* e *SMAW* lado a lado, por exemplo), secções QW-402 a QW-410, e *Prequalified* quando uma WPS AWS não tem PQR. A progressão de soldadura é lida como ascendente ou descendente, também a partir dos códigos de posição ISO 6947 (*PF* é ascendente, *PG* é descendente).
- **Ficheiros com várias WPS.** Um PDF que junta várias, ou um livro Excel com uma WPS por folha: o Atlas pergunta uma vez por carregamento o que fazer. Dividir em um ficheiro por WPS (a opção por defeito), importar só a primeira, ou ignorar todos os ficheiros assim.
- **Outros campos deste formulário.** Uma linha que não corresponde a nenhum dos nossos campos (um gás de purga, uma referência interna) fica guardada na WPS para a arrumar: adicioná-la a um campo, mantê-la como campo próprio, ou eliminá-la. Sugerimos primeiro os campos mais prováveis, e o valor vem do formulário tal como está.
- **Designações dos formulários.** Quando adiciona um Outro campo a um dos nossos, o Atlas lembra-se dessa designação para a sua organização e lê o próximo formulário que a use diretamente para esse campo. Só aceita a designação exata, e só para a sua organização: preferimos perguntar-lhe duas vezes a preencher um campo mal uma vez. A lista está em **Definições → Modelos → Designações dos formulários**.
- **Leituras que confirma sempre da mesma forma.** Alguns valores vêm assinalados para revisão: a função de um passe que o leitor teve de assumir, ou uma norma lida no título do formulário. Quando a sua equipa confirmou a mesma leitura em cinco documentos do mesmo formulário, por pelo menos duas pessoas, o Atlas deixa de a assinalar nesse formulário. Nunca preenche nem altera um valor, tudo o que é novo continua assinalado, e se alguém alguma vez indicar outro valor para essa leitura, volta a ser assinalada em todo o lado. A lista está em **Definições → Modelos → Leituras aprendidas**, onde um administrador pode revogar qualquer uma. Quando verifica vários valores assinalados de uma vez, o Atlas pergunta se devem contar.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Outros campos deste formulário">
        <img src="/static/updates/pt/atlas-1-2-other-fields.webp" width="1600" height="405" loading="lazy" decoding="async" alt="Outros campos deste formulário (2): REF. DO DESENHO com o valor DWG-2207-14 rev B, e PURGA com o valor Árgon 99,99 %, 8 L/min e Gás de proteção da raiz escolhido no seletor de campo; cada linha tem os botões Adicionar, Manter como campo próprio e Eliminar">
    </button>
    <figcaption>Duas linhas do formulário de um fornecedor que não correspondem a um campo normal. Para <em>Purga</em>, o Atlas sugere primeiro o gás de proteção da raiz.</figcaption>
</figure>

### Partilhar connosco o relatório de designações

Um administrador pode partilhar connosco o relatório de designações da sua organização, em **Definições → Modelos → Designações dos formulários**. Contém apenas designações e contagens, nunca valores nem documentos, e fica desligado até o ligar. As designações que várias empresas associam entram no leitor para todos numa versão. Com o relatório partilhado, basta uma mensagem de uma linha para corrigirmos um formulário que é lido de forma estranha, e aplica-se a nossa [garantia de resposta](/pt/wps-management-software.html#response-guarantee): uma resposta escrita em 3 dias úteis, ou esse mês fica a metade do preço.

## Cada ecrã, revisto {#ecras}

O Atlas tinha ficado carregado: etiquetas em cada linha, faixas a repetir o que o menu já diz, botões para coisas que usa uma vez por mês. Revimos cada ecrã para tirar esse ruído sem lhe tirar nada de que precise. O que precisa de uma pessoa aparece primeiro; o resto está a um clique.

- **Biblioteca.** A lista só assinala o que precisa de atenção: fora da gama do WPQR, campos por decidir, não lida, um rascunho ou uma edição após a aprovação, uma WPS que nenhum WPQR qualifica. Uma WPS sem nada a tratar fica com um visto discreto em vez de uma fila de etiquetas. Na própria WPS, os campos estão agrupados como no formulário, os valores longos abrem com um clique em vez de rolarem dentro da célula, e a lista e a WPS rolam em separado.
- **Resumo.** As áreas sem nada a reportar recolhem-se numa linha de vistos verdes. Só o que precisa de alguém aparece como cartão, e os blocos que repetiam o cartão de prazos desapareceram.
- **Qualificações.** Cada registo mostra, como botão, a única coisa de que está à espera (confirmar, registar uma soldadura, pôr em dia).
- **Definições.** Uma linha por secção, aberta com um clique, e o Atlas lembra-se das que mantém abertas.
- **Todas as páginas.** A faixa grande no topo é agora um título discreto, porque o menu já diz onde está.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: a Biblioteca com uma WPS aberta">
        <img src="/static/updates/atlas-1-2-library.webp" width="1600" height="868" loading="lazy" decoding="async" alt="A Biblioteca (em inglês): uma lista de WPS em que só a MER-WPS-003 e a MER-WPS-010 (Differs) e as MER-WPS-005, 006, 011 e 012 (Outside) estão assinaladas e as restantes têm um visto discreto; a MER-WPS-005 está aberta, com Editar, Descarregar e Comparar na barra, Aprovação, Cópia assinada, Verificação de gama do WPQR e Soldadores qualificados numa lista compacta, e os campos de cabeçalho agrupados como no formulário">
    </button>
    <figcaption>A Biblioteca: só as exceções são assinaladas, e a WPS abre com o que precisa de si no topo.</figcaption>
</figure>

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: Resumo, precisa de atenção">
        <img src="/static/updates/atlas-1-2-overview.webp" width="1600" height="163" loading="lazy" decoding="async" alt="Resumo (em inglês): dois cartões que precisam de atenção (4 qualificações caducaram, 6 soldadores precisam de reverificação) e as áreas em ordem como etiquetas verdes: campos das WPS todos revistos, registo em dia, alertas por email ligados">
    </button>
    <figcaption>Resumo: o que precisa de alguém é um cartão; o que está bem é uma linha de vistos verdes.</figcaption>
</figure>

### Onde as coisas mudaram de sítio

- **Numa WPS:** Exportar PDF, Pré-visualizar, Imprimir formulário, Regras de qualificação, Nova revisão e Eliminar estão no menu ⋯. Editar, Descarregar e Comparar ficam na barra.
- **Acima da lista da Biblioteca:** Selecionar vários, Verificar associações WPQR e Anexar cópias assinadas estão no menu ⋯.
- **Relatório mensal:** o interruptor está agora em **Definições → Relatório mensal**. Gerar agora continua no Resumo.

## Escrever uma WPS no Atlas {#escrever}

Até agora, uma WPS entrava no Atlas como um ficheiro escrito noutro lado. Agora pode escrevê-la no Atlas, com **Escrever WPS** nos separadores WPS e pWPS da Biblioteca.

Escolha o WPQR (ou os WPQR) em que a WPS assenta e ela parte da sua gama de qualificação. Os valores comuns a todos os WPQR ficam preenchidos, e o material de adição, a corrente e o gás vêm do WPQR que indica cada processo. Onde os WPQR não estão de acordo, o campo fica em branco para decidir. Todos os campos do formulário estão lá, pela ordem em que são impressos.

Enquanto edita, a verificação de gama corre sobre o que escreve e assinala qualquer campo fora dos WPQR ligados. Nada é guardado até guardar.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: verificação de gama ao escrever uma WPS">
        <img src="/static/updates/atlas-1-2-write.webp" width="1600" height="486" loading="lazy" decoding="async" alt="Uma nova WPS (em inglês), MER-WPS-030, escrita no Atlas e ligada ao MER-WPQR-2402, em modo de edição. A verificação de gama do WPQR (ao editar) mostra 1 fora: Posições, PB não consta do MER-WPQR-2402 (PF, PC)">
    </button>
    <figcaption>Ao escrever PB como posição, a verificação de gama assinala-a antes de qualquer coisa ser guardada.</figcaption>
</figure>

Por baixo de cada campo, **Valores já usados na sua biblioteca** mostra os valores que a sua empresa já usou, os mais usados primeiro, para que um valor habitual esteja a um clique em vez de o voltar a escrever.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: valores já usados na sua biblioteca">
        <img src="/static/updates/atlas-1-2-past-values.webp" width="1600" height="642" loading="lazy" decoding="async" alt="O campo Pré-aquecimento (em inglês) em modo de edição com a lista de valores já usados aberta: Not required (workpiece ≥ 5 °C), 150 °C, 120 °C e 100 °C">
    </button>
    <figcaption>Valores já usados na sua biblioteca: os valores que a sua empresa já usa, os mais usados primeiro.</figcaption>
</figure>

Quando estiver pronta, **Imprimir formulário** imprime-a no formulário do próprio Atlas (Excel, que pode exportar para PDF), com o esquema da norma a que está qualificada: ISO 15609-1, ASME IX (agrupado como na QW-482) ou AWS D1.1 (como no Anexo J). O esquema é nosso, não é uma cópia do formulário de nenhuma norma. Todos os processos são impressos, com uma coluna por processo para materiais de adição e gases, e depois de a WPS ser aprovada no Atlas, a aprovação vai para o quadro de aprovação.

**Nova revisão** começa a revisão seguinte de qualquer WPS, incluindo as importadas, como uma cópia dos seus valores e associações a WPQR que pode editar. A revisão anterior fica como estava.

## Aprovar com uma assinatura {#aprovar}

Agora pode aprovar uma WPS ou pWPS no Atlas. Confirma com a sua palavra-passe, e o Atlas regista uma assinatura eletrónica simples: o seu nome, a data e a hora, e uma impressão digital exata do que aprovou. Selecione várias na Biblioteca e uma só assinatura aprova-as todas.

<figure class="app-figure update-figure update-figure-narrow">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: aprovar uma WPS">
        <img src="/static/updates/atlas-1-2-approve.webp" width="920" height="766" loading="lazy" decoding="async" alt="A janela Aprovar esta WPS (em inglês): aprovo a MER-WPS-030 · Rev 0 tal como está agora, a nota sobre o que fica registado, um comentário opcional, um campo de palavra-passe para assinar, e Assinar e aprovar">
    </button>
    <figcaption>Aprovar com a sua palavra-passe: o Atlas regista quem aprovou exatamente o quê, e quando.</figcaption>
</figure>

- Uma WPS escrita no Atlas é aprovada pelos seus valores. Se for editada depois, fica marcada como *Editada após aprovação*. Nada é bloqueado nem anulado, e **Reconfirmar** aprova-a tal como está agora.
- Uma WPS importada é aprovada pelo seu ficheiro, por isso corrigir algo que o Atlas leu dela não mexe na aprovação.
- Cada aprovação e reconfirmação fica no histórico da WPS, que nunca é reescrito.

Se aprova as suas WPS em papel, nada muda: a digitalização assinada fica onde está, e a caneta na lista da Biblioteca marca uma WPS como assinada de qualquer forma.

## Soldadores: uma ronda de confirmação e um cartão do soldador {#soldadores}

Confirmar qualificações era um registo de cada vez. A **Ronda de confirmação**, em Qualificações, faz muitas de uma vez:

- **ISO / EN:** tudo o que vence em breve ou está no período de tolerância vem marcado. Cada soldador tem a sua data de **Assinado em**: hoje, ou o dia em que assinou na oficina se o está a introduzir mais tarde. O Atlas calcula até quando vale cada confirmação, seis meses a partir da assinatura (ISO 9606-1), nunca para além da validade do próprio certificado. Ou escolha **Manual** e indique as datas; o Atlas assinala as que diferem da norma. Uma palavra-passe assina todas, e cada registo fica com a sua própria entrada assinada.
- **ASME / AWS:** regista a data em que os soldadores executaram o processo pela última vez, para muitos soldadores de uma vez, e o Atlas recalcula a continuidade de cada um a partir dela: seis meses a partir dessa soldadura.

<figure class="app-figure update-figure update-figure-narrow">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: ronda de confirmação">
        <img src="/static/updates/pt/atlas-1-2-confirmation-round.webp" width="1400" height="1400" loading="lazy" decoding="async" alt="A janela Ronda de confirmação no separador ISO / EN: Válido até calculado por ISO 9606-1, assinatura + 6 meses; as quatro qualificações que vencem primeiro marcadas, cada uma com a sua data de Assinado em (uma assinada em papel três dias antes, por isso válida até 19/04/2027, as outras 22/04/2027) e aquilo em que a confirmação se baseia; Assinar e confirmar 4">
    </button>
    <figcaption>Cada soldador com a sua data de assinatura; uma só assinatura confirma todos, e cada registo fica com a sua entrada assinada.</figcaption>
</figure>

Cada registo passa pelas mesmas verificações de quando o confirma sozinho, e os que não podem ser atualizados aparecem listados com o motivo. Confirmar um soldador sozinho funciona da mesma forma.

O **Cartão do soldador (PDF)** imprime uma página por soldador com as qualificações que tem hoje, pronta para o soldador, um cliente ou um inspetor.

O quadro de qualificações tem duas novas definições, em **Definições → Quadro de qualificações**: a **ordem dos soldadores** (mais urgente primeiro, por nome ou por número de trabalhador), que um administrador define para toda a empresa, e o **tamanho no seu ecrã** (Compacto, Normal ou Espaçoso), que cada pessoa define para si.

## Alterações mais pequenas

- Reprocessar uma WPS mostra a leitura atual e a nova lado a lado, e nada é guardado até escolher **Aplicar nova leitura** ou **Manter leitura atual**. Um campo que corrigiu à mão aparece como diferença.
- Os campos N/A aparecem na WPS, para que se leia como o formulário. Pode ocultá-los só para si em **Definições → Modelos → Apresentação das WPS**, ou numa WPS com o seu interruptor **Mostrar N/A / Ocultar N/A**, de que o Atlas agora se lembra.
- Quando uma WPS indica uma gama aberta (≥ 25 mm, por exemplo) e o seu WPQR a limita, a verificação de gama diz agora o que falta: *A WPS não define limite superior (≥ 25 mm); o WPQR cobre 25–450 mm.*
- Quando algo nunca foi registado, como o nome de um soldador ou quem assinou uma linha, o Atlas diz agora *Não indicado* em vez de mostrar um traço. Um traço parecia uma célula avariada, e *N/A* quereria dizer que não se aplica.
- A conta de administrador que veio com o seu Atlas está marcada como **Sistema** em Utilizadores; a sua palavra-passe é gerida no servidor.
- Tudo o que é novo está em inglês, português e espanhol.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: pré-visualização ao reprocessar">
        <img src="/static/updates/pt/atlas-1-2-reparse.webp" width="1600" height="438" loading="lazy" decoding="async" alt="Reprocessar: o que mudaria. Diferenças 2 de 77 campos: Ângulo da tocha / elétrodo, leitura atual 10°–20° a empurrar (corrigido à mão), nova leitura 10°–15° a empurrar; Limpeza entre passes, leitura atual Só rebarbagem, nova leitura Escova de arame / rebarbagem. Botões: Manter leitura atual, Aplicar nova leitura">
    </button>
    <figcaption>Dois campos corrigidos à mão aparecem como diferenças antes de escolher.</figcaption>
</figure>

## Por dentro

- O leitor determina o esquema de cada formulário a partir do próprio ficheiro (células no Excel; linhas de tabela, posições das palavras e tipos de letra nos PDF de texto) e reconhece as suas secções, sejam ISO, ASME ou AWS.
- Lê o conjunto completo de detalhes da ISO 15609-1, a tabela de passes coluna a coluna com o aporte térmico calculado, e os materiais de base, materiais de adição, gás e fluxo por processo.
- Verifica que cada valor tem a forma certa antes de o guardar e, se não tiver certeza, deixa o campo em branco.
- Só lê texto que está mesmo no ficheiro, por isso o mesmo ficheiro dá sempre o mesmo resultado, em cerca de um segundo.

<figure class="app-figure app-figure-wide update-figure">
    <button type="button" class="app-figure-frame app-figure-zoom" data-zoomable aria-label="Ampliar: campos de cabeçalho lidos da WPS de um fornecedor">
        <img src="/static/updates/pt/atlas-1-2-fields.webp" width="1600" height="868" loading="lazy" decoding="async" alt="Campos de cabeçalho (41) da NSW-WPS-114 da Nordvik Steelworks AS, lidos do formulário da própria empresa em português: empresa, números da EPS e do RQPS, tipo de junta, pré-aquecimento, temperatura entre passes, goivagem, processo 135, posição PB, modo de transferência, posicionamento, ponteamento, sequência de soldadura, distância tubo de contacto–peça, tecimento e ângulo da tocha, com os campos N/A visíveis">
    </button>
    <figcaption>A WPS de um fornecedor tal como o Atlas a leu, incluindo os campos de detalhe da ISO 15609-1.</figcaption>
</figure>

## Bom saber

- **Reprocesse para aproveitar o novo leitor.** As WPS importadas antes da 1.2 mantêm a leitura atual. Reprocesse uma para ver o que o novo leitor encontra; nada muda até escolher **Aplicar nova leitura**.
- **Os PDF digitalizados não são lidos.** O Atlas não usa OCR, de propósito: a digitalização fica guardada como o ficheiro da WPS, e os campos que quiser no Atlas acrescenta-os em Editar. Se tiver o original digital (o ficheiro Excel, ou um PDF exportado a partir dele), carregue esse e o Atlas lê-o.
- **A aprovação é uma assinatura eletrónica simples.** Regista quem aprovou o quê, e quando; não é uma assinatura eletrónica qualificada.
- **O intervalo da norma, ou o seu.** A nova data de uma confirmação segue a norma que escolher (ISO 9606-1, ou a continuidade ASME / AWS). A tolerância de confirmação nas Definições é a tolerância da sua empresa; a ISO 9606-1 em si não tem período de tolerância.
- **O Atlas verifica, você decide.** O Atlas verifica cada WPS contra as gamas dos WPQR que introduziu, mas não avalia a conformidade com a norma nem decide se uma WPS está certa. Isso fica com a pessoa responsável.

## O que vem a seguir

Nada de grandes funcionalidades novas por agora. Vamos continuar a fazer o que esta versão faz: percorrer o Atlas, encontrar onde ainda lhe custa tempo ou atenção, e tirar isso. Se alguma coisa no Atlas lhe faz perder tempo, diga-nos; vai diretamente para a lista.

O Atlas 1.2 já está disponível para todos os clientes do Atlas, sem custo adicional. Dúvidas, ou um formulário lido de forma estranha: [escreva-nos](/pt/wps-manager-contact.html).

A equipa Delteris

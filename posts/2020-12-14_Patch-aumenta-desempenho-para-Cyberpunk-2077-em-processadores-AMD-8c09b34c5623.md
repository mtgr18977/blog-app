---
title: "Patch aumenta desempenho para Cyberpunk 2077 em processadores AMD"
date: 2025-04-19T17:39:36.282Z
tags: []
---

Como eu profetizei — internamente — a comunidade vai arrumar o jogo da CPR antes que ela faça alguma coisa efetiva de fato. Já foi assim…

* * *

### Patch aumenta desempenho para Cyberpunk 2077 em processadores AMD

![](https://cdn-images-1.medium.com/max/1200/1*doRX5dh9C_TlHYt-W2G_WQ.jpeg)

Como eu profetizei — internamente — a comunidade vai arrumar o jogo da CPR antes que ela faça alguma coisa efetiva de fato. Já foi assim com The Witcher e Skyrim.

* * *

Um patch feito por um usuário do Reddit para o jogo Cyberpunk 2077 está rendendo ganhos de desempenho de dois dígitos em CPUs AMD. Eis aqui um guia rápido sobre como aplicar a correção sozinho

**Opinião do editor: Uma obra-prima da literatura de videogame e um desastre técnico. Embora nem todo mundo pareça ter problemas com o Cyberpunk 2077, uma parte dos jogadores continua tendo problemas, mesmo em hardware atual. Assim, Cyberpunk está definido para se destacar entre títulos como The Witcher 3 e Skyrim como mais um jogo salvo por fãs inexplicavelmente dedicados. (Todos saúdam os _modders_.) Em vez de jogar o tão esperado título, nossos heróis não pagos começaram a trabalhar consertando os erros de programação do jogo e criaram um patch de uma linha que melhora significativamente o desempenho na maioria dos processadores AMD.**

Vamos começar com o óbvio: sim, é decepcionante que um jogo caro, que passou quase uma década em desenvolvimento, tenha sido lançado com um erro de uma linha. Mas este artigo não é sobre isso, é sobre a solução bizarra.

Ontem, _redditors_ [notaram](https://www.reddit.com/r/Amd/comments/kbp0np/cyberpunk_2077_seems_to_ignore_smt_and_mostly/gfjf1vo/) que no hardware AMD, Cyberpunk 2077 estava usando principalmente núcleos físicos e deixando os núcleos lógicos secundários ociosos. Em outras palavras, o jogo estava ignorando a capacidade de multithreading simultâneo do processador. Nos processadores Ryzen de desempenho moderado, isso limitava a utilização do processador em cerca de 40–60%, dependendo de outros fatores no sistema.

A causa dessa peculiaridade foi atribuída erroneamente ao compilador Intel (que realmente pode causar esse problema), mas alguns _redditors_ mais experientes [apontaram](https://www.reddit.com/r/pcgaming/comments/kbsywg/cyberpunk_2077_used_an_intel_c_compiler_which/gfknein/?context=3) que o problema de passagem que estava no arquivo executável do Cyberpunk era do GPUOpen. O GPUOpen verifica se o processador é um AMD Ryzen autêntico e, se for, limita o número de threads de agendador que o jogo pode fornecer ao processador. Este código oferece benefícios; sua inclusão no jogo não é um exemplo de preconceito vindo da Intel, mas a CD Projekt Red _deveria_ tê-lo alterado como parte de suas otimizações para os processadores Ryzen.

A solução rápida é fácil: simplesmente altere uma linha no setor que tem apontamentos errados e assim permita que o jogo aloque o número máximo de threads para o processador. Não importa qual processador AMD você use, isso aumentará a sua utilização e por consequência o desempenho do jogo. Mais de cem _redditors_ experimentaram a correção e relataram que a utilização passou de 50% para 75%, em média. Alguns relatam que o ganho pode ser ainda maior se o sistema estivesse com algum tipo de funil de CPU. A melhoria de desempenho correspondente foi mais variável, no entanto.

Em primeiro lugar, os grandes processadores com alta contagem de núcleos não se beneficiaram dessa correção. Pelo contrário, o R9 5950X de 16 núcleos diminuiu o seu desempenho quando a correção foi aplicada, provavelmente porque compartilhar as threads ociosas as alocou para núcleos piores; e dezesseis já era o suficiente para todos os threads. Em processadores com doze núcleos, a correção proporcionou um pequeno benefício, apenas quando o sistema estava com afunilamento de CPU.

A correção oferece melhorias sérias para processadores com oito ou menos núcleos, no entanto. Um _redditor_ com um AMD 3700X relatou um salto de 60 fps para 70 fps enquanto dirigia. Um usuário com um R5 3600 relatou um aumento de 20 fps em ~1% dos casos de baixa latência, enquanto outro usou o ganho em FPS para melhorar suas configurações: passando de 50 fps em configurações altas, sem _ray tracing_ e com DLSS, para 60 fps em configurações ultra e com _ray tracing_ setado para o nível médio.

Outro _redditor_ passou de 60 fps para 75–80 fps. Ainda outro relatou um salto de 35 para 45 fps em movimento e de 40 para 55 fps enquanto estava parado. Outro usuário relatou que agora obtém +/-60 fps em áreas lotadas, quando costumava cair para 40 fps. Usuários com processadores menos potentes, como o R5 2600, descobriram que a aplicação da correção tornava o jogo “finalmente jogável” e em cenários de CPU severamente limitados, a correção poderia fornecer uma melhoria de 25~30%.

Claro que estes não são benchmarks científicos. Ainda não houve tempo para fazer uma baterias de teste adequada, mas esperamos que números mais precisos apareçam nos próximos dias. Também poderíamos testar essa correção nós mesmos como parte de nossos próximos testes de CPU para Cyberpunk 2077. No entanto, parece que, para a maioria dos usuários dos processadores Ryzen, a aplicação dessa correção fornece uma melhoria de desempenho, que às vezes é equivalente a passar de configurações altas para médias, por exemplo.

**Como aplicar a correção**

Não recomendamos necessariamente a aplicação da correção você mesmo, mas admitimos que seria muito difícil acidentalmente causar sérios danos aos arquivos do jogo, então se você gosta de remendos e tem um processador Ryzen, vá em frente. Se você não estiver interessado, não se preocupe, é quase certo que a CD Projekt Red lance um patch oficial em breve.

Aqui estão as instruções passo a passo, cortesia do [u/chaosxk](https://www.reddit.com/r/cyberpunkgame/comments/kbrsta/psa_amd_cpu_you_can_double_your_fps/gfk8af5/?utm_source=reddit&utm_medium=web2x&context=3) :

*   Baixe o [editor hexadecimal HxD](https://mh-nexus.de/en/downloads.php?product=HxD20) .
*   Encontre o arquivo executável (.exe) do jogo Cyberpunk 2077.
*   Faça um backup do arquivo.
*   Clique e arraste o executável para o editor HxD.
*   Pressione CTRL + F e altere a coluna no topo da caixa de diálogo para valores hexadecimais.
*   Digite 75 30 33 C9 B8 01 00 00 00 0F A2 8B C8 C1 F9 08 para encontrar a linha que deve ser alterada.
*   Copie o valor EB 30 33 C9 B8 01 00 00 00 0F A2 8B C8 C1 F9 08.
*   Clique com o botão direito no código que se inicia com 75 e que ficou destacado no HxD e cole o código que se inicia com EB.
*   Clique em salvar.

Artigo original: [https://www.techspot.com/amp/news/87947-reddit-patch-cyberpunk-2077-yields-double-digit-performance.html](https://www.techspot.com/amp/news/87947-reddit-patch-cyberpunk-2077-yields-double-digit-performance.html)

* * *

É bem provável que um patch desse tamanho só chegue oficialmente depois do natal, de acordo com o comunicado da CPR no Twitter.

![](https://cdn-images-1.medium.com/max/1200/1*UElwIrFfibj6vXDdOwGAxA.jpeg)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [December 14, 2020](https://medium.com/p/8c09b34c5623).

[Canonical link](https://medium.com/@paulopilotti/patch-aumenta-desempenho-para-cyberpunk-2077-em-processadores-amd-8c09b34c5623)

Exported from [Medium](https://medium.com) on April 19, 2025.
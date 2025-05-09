---
title: "Como o primeiro DOOM usava a criptografia para esconder trapaças?"
date: 2025-04-19T17:39:36.153Z
tags: []
---

tradução da thread no Twitter do usuário Foone sobre como funcionava a criptografia das trapaças (cheats) do primeiro DOOM (1993) na era…

* * *

![](https://cdn-images-1.medium.com/max/2560/1*H8LkQ-6nM4_Idk5pJmYvBQ.jpeg)

Fonte: [http://screenrant.com/wp-content/uploads/Doom-2-FPS-video-game.jpg](http://screenrant.com/wp-content/uploads/Doom-2-FPS-video-game.jpg)

### Como o primeiro DOOM usava a criptografia para esconder trapaças?

tradução da thread no Twitter do usuário Foone sobre como funcionava a criptografia das trapaças (cheats) do primeiro DOOM (1993) na era pré-histórica da internet, com USENET, BBS e outras coisas que ninguém com menos de 30 anos conhece.

[Thread original.](https://twitter.com/Foone/status/1189249817492557826)

* * *

Vamos falar sobre Doom (1993) e sobre o pouco que ele possui de criptografia. Não é criptografia muito forte, mas ainda é criptografia. E não é usada de qualquer maneira, ou da maneira que você normalmente esperaria: não é como proteção contra cópia, anti-fraude no multiplayer ou anti-adulteração de arquivos de salvamento… É para desacelerar as perguntas frequentes (FAQ).

Assim, aqui está o código que estou falando, a macro **SCRAMBLE** parece irritantemente complicada, mas na verdade não é. O que este código faz é pegar um número de 8 bits e mudar alguns dos bits.

![](https://cdn-images-1.medium.com/max/800/0*lnW65pArDI0P75AY)

Se você esboçar o que está acontecendo, isso fará um pouco (mas apenas levemente) de mais sentido. Parece que eles começaram com uma função para “reverter a ordem desses bits”, mas depois a trocaram para que as posições 4 e 32 não sejam trocadas, eles simplesmente passam direto.

![](https://cdn-images-1.medium.com/max/800/0*I0DveBuGYEAPHtUj)

Então, como esse código é usado? Bem, o arquivo _m\_cheat._c é usado para criar uma tabela de pesquisa que possui todos os valores pré-criptografados para que assim possa procurá-los rapidamente mais tarde. Então quando você pressiona uma tecla, ela é convertida nesta tabela:

![](https://cdn-images-1.medium.com/max/800/0*t6Bh3ZNaItYyE9R0)

Esse código cuida principalmente da verificação sobre o que você digitou enquanto jogava Doom; serve principalmente para ver se ele corresponde a um dos códigos de truques, como IDKFA ou IDDQD. Se o que você digitou corresponder a um, ele retornará um valor verdadeiro ao código de chamada e o jogo poderá ativar (ou desativar) essa trapaça.

Mas a parte interessante é como esses códigos de trapaça são definidos no código fonte (e, portanto, no executável). Aqui está um deles, o clássico IDKFA:

![](https://cdn-images-1.medium.com/max/800/0*Yj1wPOvKNowfpXxj)

a parte //idkfa é apenas um comentário para os programadores que leem e escrevem o código, a única parte com a qual o compilador se importa é a parte “0xb2,0x26,…”. Mas por que está escrito como 0xb2, 0x26? isso é _scancode_ ou algo assim? Não! Quando eles escreveram os truques no código fonte eles os pré-criptografaram com a função SCRAMBLE. Então, quando o código m\_cheat.c está verificando suas teclas pressionadas, ele também as embaralha (SCRAMBLE) e verifica se elas correspondem. Como está comparando valores embaralhados com valores embaralhados, não é necessário um decodificador de nenhum tipo. O algoritmo apenas verifica se os dois estão embaralhados da mesma maneira. Mas por que eles fizeram dessa maneira?

Acontece que o passo pré-embaralhamento é o ponto principal. Eles não queriam que “IDKFA” e os outros truques fossem escritos em texto sem formatação no código-fonte. Agora, o código fonte não foi lançado até seis anos depois, então por que eles se importaram? Porque coisas como strings são incorporadas diretamente no arquivo binário do programa. Eles não são compilados como as instruções em C. Assim, qualquer um poderia ter sacado um editor hexadecimal e começado a rolar pelo DOOM.EXE até encontrar algum texto, como “IDKFA” que, por estar na fonte ao lado de todos os outros truques, imediatamente diria que os outros truques são IDMUS, IDCHOPPERS, IDDQD, IDKFA, IDFA, IDSPISPOSD, IDCLIP, IDBEHOLD\*, IDCLEVe IDMYPOS.

![](https://cdn-images-1.medium.com/max/800/0*UK9IBrCVQOI3Ruo_)

O que obviamente seria imediatamente colocado em todos os truques.

Eu quase disse “site”, mas não havia muitos sites em 1993. Todos os arquivos com trapaças estavam nas seções de perguntas frequentes da USENET.

Então, pré-criptografando esses truques no código fonte que eles criaram foi algo para impedir que você não pudesse encontrar rapidamente os truques pesquisando no EXE por frases em texto puro. Não sei o quanto isso os atrasou. Seria interessante examinar os arquivos dos grupos da USENET e ver quanto tempo levou para que vários truques fossem mencionados. Mas os hackers são astutos. Você precisaria de um depurador (e para um jogo em modo de 32 bits no DOS não seria fácil encontrá-lo), mas você poderia definir pontos de interrupção ao pressionar teclas e provavelmente encontraria o código de verificação de fraude bem rápido, e então descobrir como eles são codificados. Eu verifiquei a USENET. E o primeiro resultado em comp.sys.Ibm.pc.games.action (onde a maioria das discussões do Doom estava acontecendo) para “IDKFA”, foi às 8h do dia 15 de dezembro de 1993. Elias ‘CaveMan’ Papavassilopoulos publicou esta lista de truques:

![](https://cdn-images-1.medium.com/max/800/0*w465kINkLtsjEtb0)

Esse tópico, intitulado “idNews: desculpe, não hoje à noite”, de David Taylor, parece ser a primeira vez que algum truque do Doom foi mencionado na USENET.

O episódio de shareware de Doom foi lançado à meia-noite de 10 de dezembro de 1993. Portanto, a resposta para “quanto isso desacelerou os hackers?” Parece ser “no máximo, cinco dias”. Sendo que é possível que eles tenham sido mencionados em outros lugares na USENET antes desse post. Eu não consegui realmente pesquisar. Esse parece ter sido o principal grupo de USENET para coisas de Doom na época, então teria sido rapidamente postado se tivesse aparecido em outro lugar primeiro. Havia, mais tarde, um conjunto de grupos de notícias relacionados a Doom, mas eles não começaram a ser criados até janeiro de 1994.

![](https://cdn-images-1.medium.com/max/800/0*W0gpFKxsETaDkjJd)

Aliás, é divertido ver que NO MESMO LUGAR em que se falou animadamente sobre este novo jogo, “Doom”, em 1993, agora está se falando sobre Outer Worlds. Este post tem cerca de 30 minutos de idade. A USENET nunca morreu, apenas diminuiu a velocidade.

![](https://cdn-images-1.medium.com/max/800/0*gg9cB94kFrX7ur5v)

Aliás, três horas depois que Elias ‘CaveMan’ Papavassilopoulos postou sua lista de truques, Jim Mcnicholas postou seus próprios truques. Em uma ordem suspeitosamente semelhante.

**J’ACUSE, JIM MCNICOLAS!**

![](https://cdn-images-1.medium.com/max/800/0*EhQgwnTDhAKAM5o8)

Você copiou descaradamente e totalmente a lista de Elias e depois não os creditou. Admita.

David Taylor (da ID Software) confirmaria os truques (e os aumentaria, já que os hackers ainda não haviam encontrado o IDDTt) mais tarde naquele mesmo dia, por volta das 17h

![](https://cdn-images-1.medium.com/max/800/0*rJtLQPD99ElvN2FG)

Uma coisa interessante sobre como encontrar os truques: já no dia 11, alguém (Eugen Wolwod) havia visto as mensagens de ativação dos truques no executável, mas ainda não conseguia descobrir como ativá-los. \[3\]

![](https://cdn-images-1.medium.com/max/800/0*WAF9lMeMXfIF5MJk)

No dia 12, as pessoas estavam hackeando seus arquivos de jogos salvos para obter todas as armas, mesmo que ainda não tivessem nenhum código de trapaça: \[4\]

![](https://cdn-images-1.medium.com/max/800/0*bSsEFTMCRVZA4PJa)

O fato de eles encontrarem outros mais longos, como Chopper & Spispopd, me faz pensar que os truques foram finalmente descobertos por alguém depurando o EXE (em vez de apenas digitar combinações de teclas até encontrar algo que funcionasse), e eles perderam o IDDT porque este estava em outro lugar

Todos os outros truques estão em st\_stuff.c, mas o IDDT está em am\_map.c

![](https://cdn-images-1.medium.com/max/800/0*jSwtIqMOtFkKWngO)

E sendo os compiladores o que são, isso provavelmente acabará em outro lugar no executável. Eles teriam encontrado se fizessem uma pesquisa sobre nas chamadas do código em cht\_CheckCheat e verificassem cada um dos argumentos; mas provavelmente não pensaram que precisavam fazer isso. Eles sabiam como era codificado ao olhar para cht\_CheckCheat e depois o seguiam de volta para o grupo de truques enfileirados em st\_stuff.c. Esse é um problema sério nesse tipo de arqueologia de software: geralmente é fácil provar que algo existe no código e encontrar coisas relacionadas, mas é muito mais difícil ter certeza de que você encontrou todas elas ou provar que elas não existem. É um desses tipos de coisas conhecidas/desconhecidas: você não consegue encontrar a coisa que perdeu, porque não sabe que precisa procurá-la. Você encontra 5 coisas, isso significa que você encontrou todas as cinco coisas que existem? Ou que você só conseguiu encontrar cinco coisas de um número qualquer de coisas? A pesquisa entre grupos não funciona muito bem nos grupos do Google, então pensei em verificar os arquivos da USENET nos arquivos da Internet e fiquei chocado ao ver “alt.dolcett” na frontpage.dolcett, se você não o conhece (NÃO PROCURE NO GOOGLE), é um artista obscuro de gore-pornográfico dos anos 80.

![](https://cdn-images-1.medium.com/max/800/0*KKJV8YP2YKxnmQVt)

E eu fiquei tipo “por que isso é tão popular?” E então lembrei: Ah, sim, um dos usuários que postou lá comeu alguém.

Seria Armin Meiwes, um alemão que comeu outro alemão no início de 2001. Foi “consensual” (se você pode dizer isso sobre o [CANIBALISMO](https://en.wikipedia.org/wiki/Armin_Meiwes)), mas ele está preso agora.

Enfim, isso é uma famosa tangente de TDAH registrada pela Foone! “Cara, essa parte do código de um jogo do DOS não é interessante? e como a USENET descobriu os truques? Além disso, você sabia que um alemão comeu alguém por razões sexuais em 2001? ” Enfim, eu não pretendia terminar isso lá, mas parece que não há uma boa interface online para os outros arquivos de coisas da USENET que me deixariam fazer uma pesquisa entre grupos com base no tempo, então vou ter desistir disso por enquanto. Não tenho tempo nem espaço para trabalhar nisso

mas é inteiramente possível (se não provável) que os códigos de trapaças no Doom foram descobertos em outro grupo da USENET primeiro ou mesmo fora da USENET em outro local menos bem arquivado, como o IRC ou o BBS.

Mas, no mínimo, temos um limite superior de quanto tempo essa ofuscação desacelerou os hackers: 5 dias! É interessante que a ID tenha deixado a ofuscação no código, mesmo em versões posteriores. A primeira atualização Doom (1.1 no dia 16) foi publicada depois que os fãs descobriram todos os truques, e remover a ofuscação teria reduzido os requisitos de memória do jogo em 260 bytes.

Mas eu acho que:

1.  Mesmo em 1993, isso não é muito
2.  A maioria das pessoas não tinha acesso à USENET, e isso os impedia de descobrir os truques por conta própria.

Além disso, em relação ao item 1, os requisitos de memória oficial do Doom eram “4M de memória RAM”. Doom realmente usa cerca de 3.5M de memória RAM, mas é improvável que você tenha essa quantidade. Portanto, tinha ~ 500K de memória sobressalente, não vale a pena se preocupar com um quarto de kilobyte.

E este era o DOS: ou seja, não é multitarefa. Não é como hoje onde de o Firefox usa 400M a menos de memória, esses 400M podem agora ir para a execução de Sublime Text. Com o DOS, o DOOM estava funcionando, não havia mais nada que pudesse usar essa memória livre.

> _A rigor, isso não é EXATAMENTE verdade. Existem TSRs, programas que terminam e permanecem residentes, que foram amplamente usados para drivers de dispositivos DOS e outros._

Aliás, Elias Papavassilopoulos passaria a fazer um Doom (com Steve McCrea e Simon Wall) chamado [_The Unholy Trinity_](https://doomwiki.org/wiki/The_Unholy_Trinity) em agosto de 1994. Era um nível baseado no Trinity College, em Cambridge.

O Trinity College faz parte da Universidade de Cambridge e Elias Papavassilopoulos estava postando em um endereço de e-mail da Universidade de Cambridge. E se você pesquisar o nome, encontrará um link para Elias Papavassilopoulos, que obteve um Mestrado em Artes na Universidade de Cambridge, estudando de 1988 a 1997. Eles agora são diretores/gerentes do Barclays Investment Bank, em Londres.

Tem sido apontado que Cambridge sempre oferece um bacharelado em artes, portanto, essa não é uma informação muito útil. O grau de fato é em Física Teórica. E eles responderam com algumas informações sobre como conseguiram os truques do Doom. (Eles escreveram seu próprio desmontador de 32 bits X86!)

Obrigado pela leitura.

Se você quiser me ajudar a criar tópicos futuros como este, fique à vontade [para me dar um dólar ou dois em ko-fi](https://ko-fi.com/fooneturing). Ou faça uma [doação mensal no Patreon.](https://www.patreon.com/foone)

Alias, foi perguntado se o Wolfenstein 3D funcionava da mesma maneira, já que o post do grupo de notícias original diz que eles são semelhantes. Bem, Wolfenstein 3D usa truques totalmente diferentes (são todas combinações de teclas, não palavras digitadas), que são implicitamente difíceis de localizar em um despejo hexadecimal. Mas também há uma palavra de código especial que você pode fornecer ao jogo para habilitá-los, e isso poderia ser codificado. É mesmo?

**Não!**

![](https://cdn-images-1.medium.com/max/800/0*aL98-tR1-METDh8P)

Ainda, já foi perguntado _“por que a ID Software se incomodou com isso?”_ E porque Wolf3D pode ser a resposta: é mencionado no manual de dicas Wolfenstein 3D que algumas pessoas hackearam o Wolf3D e fizeram com que o concurso oculto fosse cancelado (porque não seria justo)!

![](https://cdn-images-1.medium.com/max/800/0*HokDRrMFLvOVRlDC)

Esse concurso era esse objeto estranho escondido em um labirinto no episódio 2, nível 8.

![](https://cdn-images-1.medium.com/max/800/0*gVb_Lwx2DtSSMqhQ)

Não havia concurso equivalente no Doom, mas talvez eles quisessem tornar o Doom um pouco mais difícil de hackear por causa da rapidez com que as pessoas estavam fazendo isso com Wolf3D e mapeando-o.

**Referências**

[https://twitter.com/Foone/status/1189249817492557826](https://twitter.com/Foone/status/1189249817492557826)

[https://github.com/id-Software/wolf3d/blob/05167784ef009d0d0daefe8d012b027f39dc8541/WOLFSRC/WL\_PLAY.C](https://github.com/id-Software/wolf3d/blob/05167784ef009d0d0daefe8d012b027f39dc8541/WOLFSRC/WL_PLAY.C)

[https://www.patreon.com/foone](https://www.patreon.com/foone)

[https://ko-fi.com/fooneturing](https://ko-fi.com/fooneturing)

[https://doomwiki.org/wiki/The\_Unholy\_Trinity](https://doomwiki.org/wiki/The_Unholy_Trinity)

[https://en.wikipedia.org/wiki/Armin\_Meiwes](https://en.wikipedia.org/wiki/Armin_Meiwes)

[https://github.com/id-Software/DOOM/blob/77735c3ff0772609e9c8d29e3ce2ab42ff54d20b/linuxdoom-1.10/am\_map.c#L287](https://github.com/id-Software/DOOM/blob/77735c3ff0772609e9c8d29e3ce2ab42ff54d20b/linuxdoom-1.10/am_map.c#L287)

[https://groups.google.com/forum/#!msg / comp.sys.ibm.pc.games.action / hDUPzSnmT1Q / 0y3Qiv8bhHUJ](https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/hDUPzSnmT1Q/0y3Qiv8bhHUJ)

[https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/hDUPzSnmT1Q / Waj4S9D1viwJ](https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/hDUPzSnmT1Q/Waj4S9D1viwJ)

[https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/QL8WehGZhps/7GRT3t0N514J](https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/QL8WehGZhps/7GRT3t0N514J)

[https://doomwiki.org/wiki/Usenet\_groups](https://doomwiki.org/wiki/Usenet_groups)

[https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/ArY43Es\_1bw/uZilNsl8EwkJ](https://groups.google.com/forum/#!msg/comp.sys.ibm.pc.games.action/ArY43Es_1bw/uZilNsl8EwkJ)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [January 5, 2020](https://medium.com/p/4a3e4cf18bd3).

[Canonical link](https://medium.com/@paulopilotti/como-o-primeiro-doom-usava-a-criptografia-para-esconder-trapa%C3%A7as-4a3e4cf18bd3)

Exported from [Medium](https://medium.com) on April 19, 2025.
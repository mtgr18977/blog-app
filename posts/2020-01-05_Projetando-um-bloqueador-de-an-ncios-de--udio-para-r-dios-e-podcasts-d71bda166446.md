---
title: "Projetando um bloqueador de anúncios de áudio para rádios e podcasts"
date: 2025-04-19T17:39:36.159Z
tags: []
---

Por Alexandre Storelli

* * *

### Projetando um bloqueador de anúncios de áudio para rádios e podcasts

![](https://cdn-images-1.medium.com/max/2560/1*0XXAQwtrhlZjlHXupT07MA.jpeg)

Fonte: [https://i.ytimg.com/vi/P2y73tscUzI/maxresdefault.jpg](https://i.ytimg.com/vi/P2y73tscUzI/maxresdefault.jpg)

_Por Alexandre Storelli_

**tl;dr: o Adblock Radio detecta anúncios de áudio com técnicas de aprendizado de máquina e as usadas no aplicativo Shazam. O algoritmo principal é de código aberto: use-o no seu produto de rádio! Você pode se unir aos nossos esforços para oferecer suporte a mais rádios e podcasts.**

* * *

Poucas pessoas gostam de ouvir anúncios no rádio. Assim, criei o AdblockRadio.com para permitir que os ouvintes pulem as interrupções de anúncios em suas rádios web favoritas. O algoritmo é de código aberto e este artigo descreve como ele funciona.

O Adblock Radio foi testado com dados reais de mais de 60 rádios, em 7 países. E também é compatível com podcasts. E funciona muito bem!

É inovador quando comparado às implementações anteriores, que não puderam ser aplicadas a todos os streamings. O primeiro baseia-se em metadados das webradios, mas apenas uma pequena fração de rádios é compatível com esta técnica. Outra abordagem escutava jingles conhecidos; mas em muitos casos o início e o fim dos intervalos comerciais não são marcados por um jingle.

Além de detectar comerciais, o algoritmo proposto também pode distinguir uma conversa da música. Por isso, também pode ser usado para evitar bate-papos e ouvir apenas música.

Este é um relatório de um trabalho pessoal que se estende por quase três anos. Eu comecei o Adblock Radio no final de 2015, alguns meses depois de concluir meus estudos de doutorado em física. Logo após o Adblock Radio ganhar força, em 2016, recebi ameaças de advogados das redes de rádio francesas (mais detalhes abaixo). Eu tive que desligar parcialmente o site, mudar sua arquitetura, entender melhor as implicações legais, etc. Hoje, minha visão é que o Adblock Radio vai muito além com a inovação aberta.

Este artigo contém três partes que visam diferentes públicos. Você pode rolar para baixo ou clicar nos respectivos títulos para navegar diretamente.

1.  Detectando anúncios: tentativas de estratégias — dedicado à pessoas com conhecimento técnico, cientistas de dados … Esta seção apresenta as diferentes abordagens técnicas que eu testei para detectar anúncios, incluindo reconhecimento de fala, impressão digital acústica e aprendizado de máquina. Também discuto alguns caminhos para trabalhos futuros.
2.  Não é recomendável executar o Adblock Radio na nuvem — para desenvolvedores de software, mas também para pessoas interessadas na lei de direitos autorais. Essa seção mostra como foi difícil é encontrar uma interseção satisfatória entre restrições técnicas e legais que se aplicam à execução do Adblock Radio em servidores em nuvem. Por esses motivos, é melhor executar o Adblock Radio nos dispositivos dos usuários finais.
3.  Você pode integrar o Adblock Radio no seu player de rádio — para fabricantes, proprietários de produtos, designers de UX, técnicos … Nesta seção reviso as idéias para integrar o algoritmo de código aberto nos produtos dos usuários finais, incluindo carros, e enfatizo a necessidade de obter sinalizações de previsões errôneas dos usuários para manter o sistema. Por fim, dou dicas de como projetar interfaces de usuário adequadas. Espero muito retorno sobre esse tópico.

### Detectando anúncios: tentativas de estratégias

Para bloquear anúncios, primeiro é necessário detectá-los. Meu objetivo é detectar anúncios em um streaming de áudio, sem qualquer cooperação das empresas de rádio. Isso está longe de ser fácil. Eu tentei várias abordagens antes de obter bons resultados.

### Frutas mais baixas (não estão funcionando)

### Volume

Uma primeira ideia é verificar a intensidade do áudio, porque eles são muito barulhentos! Os anúncios geralmente contam com compactação acústica. Esse é um critério interessante, mas não é suficiente discernir anúncios de outro conteúdo. Por exemplo, essa estratégia funcionaria muito bem em estações de música clássica, onde os anúncios costumam ser mais altos. Mas não seria nos rádios de música pop, onde músicas são tão altas quanto anúncios. Além disso, alguns anúncios são bastante específicos, portanto, não seriam detectados.

### Bloqueio por tempo fixo

Outra ideia é considerar que os anúncios são transmitidos em horários fixos. Isso é verdade até certo ponto, mas falta precisão. Por exemplo, observei que um programa matinal em uma estação francesa não começava exatamente no mesmo horário todas as manhãs, apresentando variações de até dois minutos. As estações de rádio poderiam derrotar facilmente uma estratégia de bloqueio por tempo apenas mudando seus programas aleatoriamente por alguns segundos a cada dia.

### Metadados

Uma solução óbvia seria confiar nos metadados ICY Shoutcast das webradios que ajudam softwares como o VLC a exibir informações sobre a transmissão. Infelizmente, esses dados são quebrados na maioria dos casos. Seria possível usar as informações da transmissão ao vivo em sites de rádio ( desenvolvi uma ferramenta para isso), mas na maioria das vezes os anúncios não são identificados como tais. Em geral, durante os anúncios, o site exibe o nome da música ou programa que foi transmitido anteriormente. Uma exceção digna de nota a essa regra é o Jazz Radio , onde, no momento da redação deste artigo, mostra “_La musique revient vite …_ ” (a música voltará em breve) durante os anúncios. Concluindo, essa estratégia não é durável, pois as rádios podem alterar esses metadados com muita facilidade.

### Sinalização humana

Finalmente, pode-se detectar anúncios sem nenhum algoritmo! Pode-se simplesmente pedir a alguns ouvintes que apertem um botão quando os anúncios são iniciados ou interrompidos. Outros ouvintes se beneficiariam disso. Esta é a estratégia por trás do gravador de TV TiVo Bolt. Esse gravador se oferece para pular anúncios em uma seleção de canais em determinados horários. Dá resultados perfeitos, mas não escala bem em milhares de estações de rádio.

Uma desvantagem é que é difícil começar um sistema desse tipo. Uma estação que tenha sido recém incluída pode não ter ouvintes suficientes ao mesmo tempo para funcionar corretamente. Esses ouvintes ficariam frustrados e iriam embora.

Outra dificuldade é que as estações de rádio têm o incentivo para enviar sinalizações falsas para sabotar o sistema. Isso requer um sistema de moderação, consenso do usuário ou limite de votos.

Crowdsourcing é uma boa ideia. Eu acho que é ainda mais durável se um algoritmo faz a maior parte do trabalho, deixando o mínimo para as pessoas. Foi o que eu fiz.

### Reconhecimento de fala e análise de campo lexical (falho)

A publicidade é sempre sobre os mesmos tópicos e campo lexical: comprar um carro, obter cupons de supermercado, assinar um seguro, etc. Se o áudio puder ser convertido em palavras, ferramentas para combater o spam de e-mail poderão ser usadas para detectar conteúdo indesejado. Este foi o meu primeiro caminho de pesquisa no final de 2015, contudo eu não consegui fazer com que o reconhecimento de fala funcionasse.

Sendo um novato no processamento de fala, comecei lendo o Processamento de linguagem falada de Huang, um excelente livro, embora agora um pouco datado. Sujei as minhas mãos com o CMU Sphinx, o melhor kit de ferramentas de reconhecimento de fala de código aberto da época.

Minha primeira tentativa deu resultados muito ruins e exigiu cálculos pesados da CPU. Utilizei parâmetros padrão: um dicionário francês padrão (lista de possíveis palavras e fonemas correspondentes), modelo de linguagem (probabilidades de sequências de palavras) e modelo acústico (relação fonema a forma de onda).

Tentei melhorar o sistema, mas em vão: o reconhecimento ainda era decepcionante. Eu personalizei o dicionário e o modelo de idioma com um pequeno conjunto de dados criado para esse fim, usando gravações divididas com uma ferramenta de diarização. Também fiz uma MLLR para adaptar o modelo acústico à estação de transmissão — Europa 1 (francês) — que eu estava estudando.

Eu abandonei a ideia de detectar anúncios com reconhecimento de fala. Este é provavelmente um tópico para especialistas. Observe, contudo, que essa ideia pode ser revisitada. Muito progresso foi feito no reconhecimento de fala desde 2015. Novas ferramentas de código aberto foram publicadas, como o Mozilla Deep Speech.

### Base de dados de anúncios via crowdsourcing, detecção com impressões digitais acústicas (encorajador)

A primeira versão do Adblock Radio em 2016 manteve um banco de dados de anúncios. Ele ouviu a transmissão continuamente, procurando anúncios. Os resultados foram realmente promissores, mas manter o banco de dados atualizado foi um desafio.

A técnica de pesquisa foi a impressão digital acústica, semelhante ao que o Shazam faz em seus servidores quando você deseja identificar uma música. Esse tipo de algoritmo é conhecido como _landmark_. Eu o adaptei para trabalhar em transmissões ao vivo e de código aberto: [adblockradio/stream-audio-fingerprint](http://adblockradio/stream-audio-fingerprint).

A impressão digital é relevante para detectar anúncios porque eles são transmitidos de forma idêntica muitas vezes. Pelo mesmo motivo, também pode detectar música. Mas essa técnica não funcionaria para o conteúdo da conversa porque as pessoas nunca pronunciam as palavras exatamente da mesma maneira. Essa detecção de conversa pode ocorrer apenas em reprises à noite, o que não nos interessa aqui. Portanto, para criar um banco de dados de impressões digitais, é preciso colocar anúncios e música (considerados “não um anúncio”), mas inserir conteúdo de conversação é inútil.

Mais detalhadamente, a impressão digital de áudio é sobre a conversão de alguns recursos de áudio em uma série de números, chamados impressões digitais. Quando muitas impressões digitais correspondem entre áudio ao vivo e uma amostra de anúncio em um banco de dados, podemos supor que o rádio esteja transmitindo anúncios. É necessário algum ajuste para ter uma resolução ideal e um intervalo de tempo e frequência. Diferentes amostras de áudio devem ser corretamente discriminadas. Mas um áudio quase idêntico deve corresponder, mesmo se a codificação de áudio for diferente ou se os rádios aplicarem configurações diferentes do equalizador. Finalmente, a quantidade de impressões digitais deve permanecer pequena, para não ficarmos sem recursos de computação.

![](https://cdn-images-1.medium.com/max/800/0*Ubw_SkgYS_0wMLnc.png)

A classificação era binária, classificando o áudio entre anúncios e outro conteúdo. O sistema forneceu a imensa maioria dos resultados como falsos negativos, ou seja, perdeu anúncios e muito raramente teve falsos positivos, ou seja, marcou um bom conteúdo como anúncio. Os usuários podem relatar anúncios não detectados com um único clique, proporcionando uma excelente experiência ao usuário. O áudio correspondente foi integrado automaticamente no banco de dados. Eu moderava essas ações a posteriori.

Era difícil manter o banco de dados atualizado, pois os comerciais mudam bastante. Anúncios semelhantes são geralmente transmitidos em várias pequenas variações. Eles também são renovados com frequência, em alguns casos a cada poucos dias. Algumas transmissões com ouvintes insuficientes foram classificadas muito mal.

Eu investiguei estratégias excitantes para automatizar parte do trabalho dos ouvintes. Os anúncios são transmitidos de forma idêntica várias vezes ao dia. Isso pode ajudar a identificá-los. Procurei sequências maximamente repetidas (MRS) em gravações de rádio. Outro conteúdo também é repetido, como músicas e jinges de rádio. Então classifiquei todas as sequências por comprimento e observei os resultados cuja duração era de aproximadamente 30 segundos, a duração típica dos anúncios. Dessa forma, muitas vezes eu pegava anúncios. Mas, às vezes, eu também recebia o refrão de músicas (entre versos diferentes) ou até gravava previsões do tempo.

Eu encontrei uma maneira de descartar a maioria das sequências repetidas musicais. Eu olhei para a lista de reprodução musical de rádios, baixei as músicas e as integrei no banco de dados sob um rótulo “não comercializado”. Portanto, mais e mais candidatos à MRS eram anúncios reais. Como ainda não são todos, as ações do usuário ainda eram necessárias.

Menos trabalho manual era necessário, mas a carga de E/S nos servidores havia se tornado problemática. Em retrospecto, a escolha do SQLite para essas operações de banco de dados com uso intensivo de leitura e gravação e provavelmente não foi a melhor.

Felizmente, o algoritmo teve vários segundos para determinar se o som era um anúncio ou não. Isso ocorre porque as rádios da web usam um buffer de áudio, geralmente entre 4 e 30 segundos, que não é reproduzido imediatamente no dispositivo do usuário final. Ajuda a evitar cortes de áudio quando a rede não é confiável.

Usei esse atraso no buffer para pós-processar previsões, para torná-las mais estáveis e sensíveis ao contexto. Pouco antes do áudio ser reproduzido no dispositivo do usuário final, o algoritmo analisa os resultados das previsões que ainda estão no buffer, bem como os mais antigos que já foram reproduzidos. Ele remove dados duvidosos com poucas correspondências de impressões digitais, introduzindo um comportamento de histerese . Ele também faz uma média de tempo ponderada para suavizar falhas temporárias.

### Classificação acústica entre anúncios, conversa e música com aprendizado de máquina (quase lá!)

A próxima versão do algoritmo analisou o conteúdo acústico das transmissões de rádio: sons graves a agudos e suas variações no tempo. Novos anúncios desconhecidos foram detectados quase tão bem quanto os antigos que eram usados para o ajuste, isso ocorreu apenas por serem barulhentos e cativantes. Este é um método mais sofisticado para monitorar o volume do áudio (consulte a discussão anterior).

Para isso, usei ferramentas de aprendizado de máquina, mais precisamente a biblioteca Keras conectada ao Tensorflow. Ele deu bons resultados usando poucos recursos computacionais. Ele permaneceu em produção por mais de um ano, do início de 2017 a meados de 2018. A distinção entre conversa e música acabou sendo alcançável, de modo que a classificação se tornou mais precisa, desde anúncio/não anúncio para anúncios/conversa/música.

Agora vamos mergulhar em detalhes. Eu converti o som em um mapa 2D, fornecendo a intensidade do som em função da frequência e do tempo (em uma escala de cerca de quatro segundos). Este mapa era conceitualmente semelhante ao vermelho no parágrafo das impressões digitais. A principal diferença é que, em vez dos espectros clássicos de Fourier, usei os coeficientes [cepstrais](http://blog.newtonpaiva.br/pos/wp-content/uploads/2017/04/POS13-04.pdf) da frequência Mel, comuns em contextos de reconhecimento de fala.

Mapas consecutivos, em diferentes tempos, foram então analisados como imagens em um filme com uma rede neural recorrente do tipo LSTM (memória de curto prazo). Cada mapa foi analisado independentemente do outro (RNN sem estado ), mas os mapas se sobrepuseram. Os mapas duravam 4 segundos e havia um novo mapa a cada segundo. A saída final para cada mapa foi um vetor _softmax_, como anúncio: 72%, conversa: 11%, música 17%. Essas previsões foram então pós-processadas de maneira semelhante à descrita anteriormente com a técnica de impressão digital acústica.

![](https://cdn-images-1.medium.com/max/800/0*kV06RvkBBBN5CkyG.png)

Inicialmente, treinei a rede neural com um conjunto de dados muito pequeno. Desenvolvi uma ferramenta de interface do usuário (veja a figura acima) para visualizar previsões versus tempo para permitir que eu pudesse adicionar mais dados para treinar modelos com melhor desempenho. No momento em que escrevo esse artigo, o conjunto de dados de treinamento contém cerca de dez dias de áudio: 66 horas de anúncios, 96 de conversas e 73 de música.

Apesar do bom comportamento, a precisão da classificação atingiu um platô um pouco abaixo das expectativas do usuário (consulte Melhorias futuras abaixo). No treinamento, a precisão categórica foi de cerca de 95%. As previsões erradas restantes fizeram com que o ouvinte experimentasse menos que isso.

> _Nota para os cientistas de dados: é prática comum apresentar medidas formais de desempenho, dividindo o conjunto de dados em subconjuntos de treinamento e teste. Eu acho que não faz sentido fazê-lo aqui, porque o conjunto de dados foi construído de forma incremental com dados que eram confusos para modelos anteriores. Isso significa que o conjunto de dados contém mais dados patológicos do que a transmissão de rádio média e que a precisão seria subestimada. Seria necessário um trabalho separado para medir o desempenho do mundo real. Um operador pode rotular segmentos contínuos de registros de áudio regulares, como dados de teste, e calcular precisão e recuperar com base neles. Fazer isso regularmente permitiria monitorar a saúde dos filtros._

As previsões ao se tornarem classificáveis entre anúncio, conversa e música, nos trouxe mais flexibilidade para os ouvintes. Mas essa classificação tornou as interfaces do usuário mais complexas e os relatórios do usuário se tornaram mais difíceis de lidar. Se uma sinalização indicar que algum conteúdo não é música, é um anúncio ou é conversa? Isso exigiu moderação a priori.

Para melhorar ainda mais a qualidade da detecção, projetei a última versão do Adblock Radio, que é uma melhoria incremental dessa estratégia.

### Combinação de classificação acústica e correspondência de impressões digitais (vitória!)

O algoritmo com melhor desempenho que criei está disponível no Github. Para maior confiabilidade, ele combina conceitos das duas tentativas anteriores: classificação acústica e banco de dados de áudio.

O preditor de aprendizado de máquina, se treinado adequadamente, fornece classificações corretas no conteúdo mais original, mas falha em algumas situações (veja abaixo na seção Melhorias futuras). O papel do módulo de correspondência de impressões digitais é aliviar os erros do módulo de aprendizado de máquina.

Nem todos os dados de treinamento conhecidos são colocados no banco de dados do módulo de impressão digital. Somente o pequeno subconjunto do banco de dados que é imprevisível pelo preditor de aprendizado de máquina é inserido. Eu chamo de banco de dados da “lista quente”. Seu tamanho pequeno ajuda a reduzir a taxa de erro geral, mantendo os cálculos baratos.

Em uma CPU de laptop comum, todo o algoritmo é executado em 5–10X para arquivos e em 10–20% de uso para transmissão ao vivo.

### Melhorias futuras

Alguns tipos de conteúdo ainda são problemáticos

A detecção não é perfeita para alguns tipos específicos de conteúdo de áudio:

*   Música hip-hop, facilmente confundida com propaganda. A solução alternativa é adicionar faixas à lista direta, mas há muita música na lista de permissões. Uma rede neural mais geral poderia ser projetada, mas talvez à custa do desempenho.  
    Anúncios de álbuns de música, geralmente confundidos com música. Mas bloqueá-los com impressões digitais levaria à detecção de falsos positivos quando a música real fosse transmitida. Pode ser resolvido fazendo uma análise de contexto mais forte, mas é difícil resolver esse problema para transmissões ao vivo onde não temos mais do que alguns segundos além do buffer e o restante é desconhecido.
*   Anúncios de talk shows, confundidos com conversas. Isso é litigioso, porque os dois são conversas e anúncios ao mesmo tempo. Destaca um limite da classificação de anúncio/conversa/música. Para a classificação de impressões digitais, eu utilizo há algum tempo uma classe _ad\_self_ , contendo anúncios de programas na mesma estação, mas parei de fazê-lo com o algoritmo de aprendizado de máquina. Pode ser interessante recriar essa classe. Como alternativa, o contexto poderia ser melhor analisado para identificar isso como anúncios.
*   Anúncios nativos, onde o locutor mesmo lê o conteúdo patrocinado. Isso é bastante incomum em rádios, embora seja mais comum em podcasts. O próximo passo lógico para isso seria usar o software de reconhecimento de fala.

E [cadeias de Markov](https://pt.wikipedia.org/wiki/Cadeias_de_Markov) para um pós-processamento mais estável

A estabilidade do pós-processamento poderia ser melhorada. Atualmente, ele usa apenas limites de confiança. Quando abaixo do limite, ele usa a última previsão confiável. Assim, o sistema algumas vezes persiste no erro.

Ciclos de anúncios, conversas e músicas são bastante repetitivos para cada transmissão de rádio. Por exemplo, um intervalo comercial geralmente dura alguns minutos. Para cada período de intervalo comercial seria possível calcular uma probabilidade de transição para outro estado (conversa ou música). Essa probabilidade ajudaria a interpretar melhor as previsões imprecisas do algoritmo: isso é apenas um pequeno segmento de música em um anúncio ou o intervalo comercial terminou? Neste tópico, os modelos Hidden Markov são uma boa direção para se olhar.

**_O rádio analógico ainda não é suportado_**

Os sinais analógicos (FM) não foram testados e atualmente não são suportados. O ruído analógico pode invalidar as técnicas usadas aqui. Podem ser necessários filtros e/ou algoritmos de impressão digital resistentes ao ruído. O trabalho neste tópico pode ampliar os casos de uso deste projeto. No entanto, no futuro, o rádio será consumido de maneira mais significativa com tecnologias sem ruído, como DAB e rádios web.

**_Não é recomendável executar o Adblock Radio na nuvem_**

O Adblock Radio deve idealmente ser executado no dispositivo do usuário final. Mas está em voga fazer os cálculos na nuvem e enviar os resultados aos ouvintes. Além disso, seria uma ótima ideia de negócio! O Adblock Radio testou duas opções para projetar uma arquitetura com esse paradigma. A experiência em primeira mão mostra que não é uma solução ideal por razões técnicas e legais.

### Opção 1 — O servidor retransmite o áudio

O servidor de análise pode transmitir conteúdo de áudio para os ouvintes, com tags de anúncio/conversa/música. Isso foi testado brevemente em 2016. Contudo, essa abordagem nos leva a problemas jurídicos, pois a retransmissão de uma transmissão pode ser considerada falsificação e/ou violação de direitos autorais (isenção de responsabilidade: IANAL). Além disso, isso é pouco escalável porque agora você é um CDN e precisa arcar com os custos.

Pela anedota, em um domingo, enquanto eu estava em uma reunião de família, o Adblock Radio obteve alguma viralidade e, posteriormente, um abraço de morte. Curiosidade: alguns dias depois, a France Inter, uma importante estação de rádio pública francesa, anunciou o Adblock Radio em um momento de audiência alta (embora sem nomeá-la). Essa surpreendente opção editorial pode ser posta em perspectiva com o fato de os reguladores terem escolhido em 2016 afrouxar as restrições para anúncios transmitidos em estações de rádio públicas, contribuindo para um clima ruim entre o pessoal da Radio France e sua direção.

Algumas semanas depois, recebi ameaças de advogados da rede de rádio privada francesa Les Indés Radios, por supostos motivos de violação de direitos autorais e marca registrada. Na falta de recursos financeiros para me defender seriamente, isso me forçou a remover algumas transmissões do site, desligar o site parcialmente e alterar a arquitetura do sistema. Na época, esse grupo de rádio se recusou a iniciar uma colaboração para encontrar um meio termo. Desde então, pude detectar pela análise de tráfego que eles continuavam monitorando meu site (às vezes com contas usando pseudônimos) e consultando seus advogados. Que honra! Retrospectivamente, eles conseguiram ganhar tempo, mas nada mais. **Olá pessoal da Indés! Espero que vocês gostem de ler isso! XoXoXo.**

![](https://cdn-images-1.medium.com/max/800/0*ygeCTf446MoAci3t.jpg)

**Opção 2 — O servidor retransmite o áudio, mas é uma cópia privada**

Uma opção seria considerar que a análise que a retransmissão da transmissão de áudio limpo é uma operação para um indivíduo específico. Esse sistema pode resultar em exceções legais ao direito de fazer cópias privadas de sua própria mídia. Se o servidor for gerenciado pelo usuário final, isso provavelmente estará em conformidade com a lei, desde que a fonte original seja legal e oficialmente disponível em sua área. Para mais informações sobre isso, consulte as discussões sobre o Station Ripper \[FR\] e VCast \[FR\]. Mas os usuários finais raramente são conhecedores de tecnologia o suficiente para alugar e instalar um servidor para fazer isso.

É muito tentador ter o servidor gerenciado por terceiros, mas isso gera problemas legais, pois quando o operador que está fazendo a cópia e o usuário final não são a mesma pessoa, as restrições legais se aplicam, pelo menos na França. O serviço de Internet francês Wizzgo \[FR\] foi esmagado por essa regra em 2008. Mais recentemente, nos EUA, o serviço de TV Aereo foi processado até não existir mais, mesmo que tenha tomado a precaução de usar um sintonizador separado para cada um de seus clientes (!).

O ator atual Molotov.TV \[FR\] está lutando contra os ataques de detentores de direitos que desejam restrições aos recursos \[FR\], apesar da influência considerável de seus cofundadores. É necessário pagar uma taxa de cópia particular a uma organização oficial \[FR\]. A quantia é determinada por cálculos bastante nebulosos \[FR\] e está aumentando \[FR\] ano após ano, atingindo algumas dezenas de centavos de euro por usuário e por mês. Essa taxa se tornou tão alta que o Molotov.TV recentemente removeu recursos de seu serviço para usuários gratuitos \[FR\]. (Nota: agradeço calorosamente aos jornalistas do site francês NextINpact por sua excelente cobertura sobre esse assunto).

Pagar não é suficiente: a lei exige que atores como o Molotov.TV assinem acordos \[FR\] sobre recursos com as empresas detentoras dos direitos autorais. Boa sorte em chegar a um acordo com as empresas de rádio, se você bloqueis ostensivamente os anúncios deles.

### Opção 3 — O servidor envia apenas metadados

A outra opção é fazer com que o usuário e o servidor escutem a mesma webradio ao mesmo tempo. O servidor analisa o áudio e envia os metadados de classificação para o usuário (anúncio/conversa/música), mas nenhum conteúdo de áudio. Essa arquitetura está em produção no adblockradio.com desde 2017. Ele conta com o CDN de rádios, portanto, não há requisitos de custo ou disponibilidade a suportar em relação à transmissão de áudio.

Essa arquitetura tem o benefício de esclarecer preocupações legais sobre os direitos dos autores (isenção de responsabilidade: eu não sou advogado). No entanto, ainda pode haver alguma incerteza sobre as leis de marcas registradas. Recentemente (outubro de 2018), a rede de rádio por trás do Skyrock solicitou a remoção de conteúdo por tais supostos motivos.

![](https://cdn-images-1.medium.com/max/800/0*rbmtE0dXJbZyvNxO.jpg)

Além de considerações legais, um problema técnico é que não há como garantir que a sincronização entre áudio e metadados esteja correta. Na maioria dos casos funciona bem e com um intervalo de sincronização inferior a dois segundos. Mas alguns rádios possuem CDNs estranhas/mal-intencionadas, ou introduzem publicidade dinâmica em suas transmissões. Isso significa que as transmissões entre o servidor e os clientes podem se tornar significativamente diferentes. Por exemplo, atrasos de cerca de 20 segundos foram observados na Rádio FG chegando a até 45 segundos na Rádio Jazz. Isso leva a uma experiência frustrante para os ouvintes.

A sincronização pode ser imposta por força bruta, comparando-se partes de dados entre o servidor e o usuário. Infelizmente, isso não funciona em navegadores web porque a maioria das CDNs de webradios não ativou os cabeçalhos CORS. Isso significa que o JavaScript no navegador não poderá ler o conteúdo de áudio para compará-lo. Seriam necessários pacotes independentes (por exemplo, Electron), módulos Flash (duh) ou extensões web, mas isso parece um pouco exagerado.

### Você pode integrar o Adblock Radio no seu player de rádio

Este projeto não se destina a ser manuseado pelos usuários finais. Ele deve ser integrado aos produtos do mercado de massa. Você é bem-vindo a fazer isso!

Os desenvolvedores têm duas opções para integrar o Adblock Radio. O primeiro, usando o SDK, simplesmente buscando metadados ao vivo dos servidores adblockradio.com. Não é a solução ideal pelos motivos detalhados acima (problemas legais e de sincronização). A melhor aposta é executar o algoritmo de análise completo.

### Software

Aplicativos móveis para webradios e podcasts. Os modelos Keras devem ser convertidos em modelos nativos do Tensorflow; a biblioteca Keras + Tensorflow pode ser substituída pelo Tensorflow Mobile para Android e iOS. As rotinas do Node.JS podem ser integradas a este plug-in React Native ou, provavelmente, ao Termux.  
Extensões para navegadores com Tensorflow JS e SQL.js. A extensão pode assumir o controle do botão de volume em catálogos populares de rádios da web, como TuneIn ou Radio.de. Eu já trabalhei nisso. Foi engraçado fazer engenharia reversa dos tocadores JavaScript para controlá-los. Dependendo de como você implementa isso, esteja ciente dos problemas de sincronização detalhados acima.

### Hardware

*   Rádio-relógios e projetos amadores, desde que haja energia e rede de computação suficientes. Plataformas tão pequenas quanto o Raspberry Pi Zero/A/B devem ser suficientes para a análise uma única transmissão, embora o RPi 3B/3B+ seja recomendado para monitorar várias transmissões em paralelo. O [Tensorflow](https://www.tensorflow.org/) está disponível no Raspbian.
*   Alto-falantes conectados, como o Sonos. O algoritmo em si não será executado no hardware do Sonos; portanto, se não for feito na nuvem, um dispositivo de hardware separado na mesma rede local poderá fazê-lo (como um Raspberry). Ótima ideia para uma campanha de crowdfunding.

### Usando o Adblock Radio em um carro

O carro é uma das situações mais frequentes em que as pessoas ouvem rádio. Os usuários precisam do Adblock Radio lá. É também um contexto em que a implementação do Adblock Radio não é simples. O algoritmo precisa de atualizações para filtrar com eficiência novos anúncios, portanto, precisa de uma conexão de rede. Apresento três possíveis conceitos de produtos para carros com o Adblock Radio.

### Aplicativo compatível com sistemas de informação e entretenimento de carros modernos

A maneira mais fácil de transmitir dados em um dispositivo em um carro é provavelmente através do acesso à Internet via smartphone. Um smartphone pode ser usado sozinho com um aplicativo móvel, transmitindo webradios, com a saída de áudio conectada à entrada de áudio AUX ou Bluetooth do carro. Também poderia ser integrado ao sistema de informação e entretenimento do carro, no espírito do Apple Car Play, Android Auto e MirrorLink. Seria fantástico ouvir rádio terrestre (FM, DAB). Mas é necessário trabalho para identificar em quais configurações exatas o Adblock Radio pode obter acesso à saída de áudio do sintonizador de rádio e, ao mesmo tempo, controlar o sintonizador (volume, canal).

Um adaptador de hardware universal ou interface de usuário dedicada — Também é possível desenvolver hardware personalizado, semelhante aos adaptadores DAB existentes para carros. Esses dispositivos sintonizam estações de rádio e transmitem os dados de áudio para o sistema veicular por meio de uma conexão AUX ou por um canal FM não utilizado, como fazem os antigos adaptadores de iPod FM. O acesso à rede pode, novamente, contar com um smartphone por meio de uma conexão Bluetooth. Soluções alternativas podem ser consideradas, como Sigfox e LoRa, se a taxa de bits e o preço da comunicação forem compatíveis. Deve-se projetar, então, uma interface de usuário dedicada, separada da unidade principal do carro. Isso pode ser muito caro para ser viável.

Um dispositivo minimalista que modifica a recepção FM — Para a conveniência de usar a interface principal do rádio do carro em vez da de um dispositivo pequeno, o dispositivo pequeno pode ficar escondido e assim assumir o controle do sintonizador quando necessário. Não há interface para isso que seja padrão e facilmente conectável ao mesmo tempo. Um bom candidato teria sido o controle do volante, mas eles não podem ser facilmente adaptados pelos usuários finais. Então, precisamos invadir o sistema.  
O dispositivo escondido teria um sintonizador de FM e saberia qual estação é ouvida no carro com um microfone (fazendo correlação cruzada). Quando os anúncios são detectados, eles emitem dados RDS falsos (como avisos de trânsito) para enganar o sintonizador do carro na mudança de estação durante os anúncios. Ele também pode emitir áudio em branco na mesma frequência FM para diminuir o volume.

A interface desse dispositivo seria muito simples, com apenas alguns botões. Portanto, seria mais barato que o adaptador de carro completo. No entanto, não está claro se isso funcionaria de maneira confiável, pois, sem licença, o poder de emissão é estritamente limitado por lei. Finalmente, não se sabe se essa estratégia poderia ser adaptada para trabalhar com transmissões de DAB digitais.

Se a técnica puder ser elaborada com uma lista de materiais barata, um produto que ofereça Adblock Radio em carros provavelmente seria um sucesso comercial. Além disso, é favorável ao crowdfunding.

O Adblock Radio precisa de relatórios de erros de previsão por parte dos ouvintes e ajuda para processá-los

Ao integrar o Adblock Radio em um produto, forneça ao usuário uma forma de fornecer feedback negativo sobre a classificação. As previsões errôneas devem ser prontamente relatadas a mim para que eu possa atualizar os modelos de ML e os bancos de dados da hotlist adequadamente.

Os relatórios são revisados manualmente: basta fornecer o nome do(s) rádio(s) e um registro de data e hora em que o problema ocorreu. Para uma determinada seleção de rádios, basta um relatório a cada poucos minutos. Um mecanismo para enviar relatórios está incluído na biblioteca.

Processar relatórios é um fardo. Além dos custos com o servidor, é por isso que não adicionei mais rádios ao adblockradio.com. É necessária ajuda para isso, ouvindo faixas de áudio e classificando-as em uma interface de administração da web dedicada. Isso pode ser usado para disponibilizar mais rádios e também oferecer suporte para podcasts nativos. Se você estiver pronto para ajudar, registre-se aqui e monitore este repositório do GitHub ; é nele que haverão discussões sobre as transmissões suportadas.

### Com o que substituir os anúncios — um desafio ao UX

Ignorar anúncios em um podcast é trivial em termos de experiência do usuário: é como ignorar parte de uma música. Infelizmente, não é tão simples para o rádio. As transmissões são lineares e, para conteúdo ao vivo, avançar não é uma opção!

O serviço do atual adblockradio.com oferece três opções para os usuários quando um anúncio deve ser filtrado:

### Abaixando o volume

Sintonizando outra rádio e sintonizando novamente quando os anúncios terminarem. Isso é relevante quando o usuário ouve um programa de rádio. Durante os anúncios, ele alterna temporariamente em uma estação musical.  
Permanentemente sintonizando em outra rádio. Isso é útil ao ouvir várias estações musicais.

Fiz esforços para oferecer a melhor experiência possível ao usuário, mas ainda é complexa. Não é tão simples quanto um rádio comum e nem tão simples quanto os bloqueadores de anúncios em computadores, que são incrivelmente instalados e esquecidos. Eu realmente conto com a comunidade para debater sobre esse tópico.

![](https://cdn-images-1.medium.com/max/800/0*d6spYknMIiPFbLDH.png)

Existe outra maneira de consumir conteúdo que acho interessante. Por razões legais discutidas acima, não foi possível implementá-lo no adblockradio.com. Em vez disso, construí um tocador para desktop que é independente da versão web (também disponível no Github), inspirado nos recursos dos gravadores de vídeo digital . Os usuários começam a ouvir com uma mudança de tempo de cerca de 10 minutos (ou seja, se começam a ouvir às 7h30, ouvem a transmissão de áudio às 7h20). Cada vez que um intervalo de anúncio acontece, eles avançam e desfrutam de seu programa sem interrupções. Dada a quantidade típica de anúncios, um intervalo de tempo de 10 minutos permite ouvir sem pausas por uma hora ou duas. Se fosse um aplicativo móvel, seria tempo suficiente para ir ao trabalho.

Quando o usuário liga o dispositivo, um áudio de dez minutos antes começa a ser veiculado. Como fazer isso em um contexto de mobilidade, com restrições de volume de energia e dados? Observe que a lei impede que terceiros não licenciados (na nuvem) transmitam gravações de rádio.

![](https://cdn-images-1.medium.com/max/800/0*83ZzQN6DK_2W4ho1.png)

A longo prazo, é provável que a solução consuma conteúdo de transmissão sob demanda e personalize-o completamente de acordo com os gostos de cada ouvinte. Marque os programas de rádio como favoritos, escolha gostos musicais, insira podcasts etc. A melhor experiência seria, na minha opinião, oferecer recursos semelhantes ao Spotify em conteúdo ao vivo que não podem esperar para serem baixados, como podcasts, eventos esportivos, notícias, previsão do tempo, música ao vivo etc. Pode até ser a base de um modelo de negócios alternativo para rádios.

**Conclusão**

A solução técnica para detectar anúncios em rádios e podcasts é mais complexa do que eu gostaria que fosse. Seus modelos precisam ser atualizados periodicamente para dar conta de novos anúncios, o que significa que o sistema deve ser usado em dispositivos conectados à Internet, como smartphones e rádios WiFi. Ainda não pode ser usado em rádios Hertzian offline regulares (FM, DAB +). Felizmente, os usos do rádio estão mudando com o uso de dados móveis cada vez mais onipresente, de modo que o uso desse algoritmo será plausivelmente mais fácil no futuro.

### Você pode ajudar o Adblock Radio a ir além.

*   Como ouvinte de rádio: acesse adblockradio.com/player, ouça o rádio e sinalize erros de previsão para que o algoritmo possa aprender. Faltam suas estações favoritas? Sem problemas, acesse [github.com/adblockradio/available-models/](http://github.com/adblockradio/available-models/) e envie sua solicitação.
*   Como desenvolvedor: acesse github.com/adblockradio/adblockradio/ e execute a demonstração; conserte e participe da discussão. Confira também o player de demonstração de desktop independente implementada em Electron em [github.com/adblockradio/buffer-player.](http://github.com/adblockradio/buffer-player.)
*   Como gerente de produto: entre em contato se desejar integrar o Adblock Radio no seu produto. Terei prazer em ajudar.

No futuro, os anúncios em áudio serão apenas memórias distantes! Obrigado por ler.

### Espalhe a palavra!

Este artigo foi destaque em:

*   r/programming no Reddit
*   Hacker News (primeira página)
*   Gigazine (Japão)
*   HABR (Rússia, nº 1 diário)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [January 5, 2020](https://medium.com/p/d71bda166446).

[Canonical link](https://medium.com/@paulopilotti/projetando-um-bloqueador-de-an%C3%BAncios-de-%C3%A1udio-para-r%C3%A1dios-e-podcasts-d71bda166446)

Exported from [Medium](https://medium.com) on April 19, 2025.
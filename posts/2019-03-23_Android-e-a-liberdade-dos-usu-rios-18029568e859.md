---
title: "Android e a liberdade dos usuários"
date: 2025-04-19T17:39:36.138Z
tags: []
---

Richard Stallman ainda é, provavelmente, a voz mais ativa e mais questionadora do mundo da tecnologia. Ele é o cara por detrás de toda a…

* * *

### Android e a liberdade dos usuários

![](https://cdn-images-1.medium.com/max/2560/0*8EmhZtbGpe0bVdvf)

[Richard Stallman](https://stallman.org/) ainda é, provavelmente, a voz mais ativa e mais questionadora do mundo da tecnologia. Ele é o cara por detrás de toda a GPL/GNU e o programador responsável por ferramentas como Emacs e GCC/G++, parte integrantes do que se chama de LINUX/GNU (não confunda com as distribuições Linux tais como Ubuntu e Debian).

Além disso, um grande advogado em prol da causa do FL/CA, funador da FSL e escritor compulsivo sobre todos os temas que permeia discussões sobre liberdade, privacidade, software livre e de código aberto e, principalmente, empresas e suas implicações na vida cotidiana de todos nós.

Esse artigo abaixo foi escrito por ele para alertar dos usos (e mau usos) do Android e diferenciar o SO do Google do Linux ou de outros softwares de CA que existem por aí.

* * *

_Por Richard Stallman_  
_Primeira publicado pelo_ [_The Guardian_](http://www.guardian.co.uk/technology/2011/sep/19/android-free-software-stallman)

> _Até qual ponto o Android respeita a liberdade dos seus usuários? Para um usuário de computador (desktop e laptop) que valoriza a liberdade, essa é a questão mais importante a ser feita em relação a qualquer sistema._

Dentro do [movimento software livre](http://fsf.org/) desenvolvemos softwares que respeitam a liberdade dos usuários para permitir que tanto nós como você possam escapar de programas que não sejam assim (livres). Contrastando com a ideia de “código aberto” que se foca apenas no desenvolvimento do código fonte; é uma corrente de pensamento diferente cujo principal valor é a [qualidade do código antes da liberdade.](https://www.gnu.org/philosophy/open-source-misses-the-point.html) Entretanto, a preocupação aqui não é se o Android é “ [aberto](https://www.gnu.org/philosophy/free-open-overlap.html) “ e sim se ele permite que os seus usuários sejam livres.

O Android é um sistema operacional com foco principal em sistemas móveis (telefones) e alguns outros dispositivos e que consiste do Kernel Linux (kernel desenvolvido por Linux Torvalds), algumas bibliotecas, uma plataforma Java e algumas aplicações. Aparte do Linux, as versões 1 e 2 do Android foram desenvolvidas majoritariamente pelo Google; O Google lançou o Android sob a licença Apache 2.0, que é uma licença muito mais permissiva em relação a liberdade, por exemplo, sem incorporar o princípio de [copyleft.](https://www.gnu.org/licenses/copyleft.html)

A versão do Linux que foi incluída com o Android não inteiramente livre, uma vez que contém “pegadinhas binárias” que não são livres (tal qual a versão de Linux Torvalds do Linux), alguns dos quais sã usados nos dispositivos Android. As plataformas Android usam, ainda, uma série de firmwares e bibliotecas proprietárias. Além dessas questões, o código fonte das versões 1 e 2 do Android, conforme lançadas pelo Google, é software livre — mas o código liberado é insuficiente para ser compilado e rodar em qualquer dispositivo. Algumas das aplicações que geralmente vem junto do sistema também são proprietárias.

O Android é muito diferente do [sistema operacional Linux/GNU](https://www.gnu.org/gnu/the-gnu-project.html), uma vez que contém muito pouco de GNU. De fato, apenas um componente é comum entre ambos, Android e Linux, exatamente o Kernel. Pessoas que pensam, erroneamente, que Linux se refere à toda combinação GNU/Linux acaba de surpreendendo som esses fatos e dizendo coisas paradoxais como “Android contém Linux mas não é Linux” ( [1](https://www.gnu.org/philosophy/android-and-users-freedom.html#linuxnote)). Tirando essa confusão, a situação é simples: Android contém Linux, mas não faz parte do movimento GNU, ainda, Android e GNU/Linux são bastante diferentes porque a única coisa que eles tem em comum é o Linux.

Junto do Android, o kernel Linux permanece como sendo um programa separado e com o seu código fonte licenciado sob a [segunda versão da GNU/GPL.](https://www.gnu.org/licenses/gpl-2.0.html) Combinar o código do Linux e código sob a licença Apache 2.0 seria infringir os direitos autorais, uma vez que a GPL 2 e a Apache 2.0 são [incompatíveis.](https://www.gnu.org/licenses/license-list.html#apache2) Rumores que apontam que o Google, de alguma maneira, converteu o Linux para a Apache 2.0, estão errados. O Google não tem poder para mudar as licenças do código do Linux e sequer tentou. Se os autores do Linux permitirem seu uso sob a [GPL 3](https://www.gnu.org/licenses/gpl.html), então esse código poderá ser combinado com código licenciada sob a Apache 2.0 e essa combinação poderá ser lançada sob a GPL 3. Mas o Linux não foi lançado desse modo.

O Google concordou com os requerimentos da Licença Pública Geral (GNU) para o Linux, contudo, a licença Apache não requer que o código fonte seja lançado junto. O Google afirma que nunca publicará o código da versão 3 do Android (apartado do Linux). O código fonte do Android 3.1 foi retido também, mantendo assim o Android 3, aparte da sua porção Linux, software proprietário pura e simplesmente.

O Google ainda afirma que reteve o código fonte da versão 3.0 porque este estaria com muito erros ( _bugado_) e que o público deveria esperar pelo próxima lançamento. Este pode ter sido um bom conselho para pessoas que simplesmente querem rodar o Android, contudo, usuários devem ter a possibilidade deles próprias decidirem isso. De qualquer modo, programador e usuários avançados que queiram incluir algumas das mudanças em suas próprias versões deveriam poder usar este código fonte sem maiores problemas.

Afortunadamente, o Google posteriormente lançou o código fonte da versão 3 do Android junto com a versão 4 (que também foi lançada com o código fonte). O problema cima mostrou-se uma aberração temporária ao invés de uma mudança de política. Entretanto, o que ocorre uma vez, ocorre novamente.

De qualquer modo, a maioria do código fonte de várias versões do Android tem sido lançadas como software livre. Isso quer dizer que os produtos lançados usando versões do Android respeitam a liberdade dos usuários? Não, por muitas razões.

Primeiro de tudo, a maioria destas versões contém aplicações proprietárias do Google para comunicação como serviços tais como Youtube e Google Maps. Estas não fazem parte oficialmente do Android, mas, isso não faz do produto algo melhor para a sua liberdade. Muitas das aplicações livres disponíveis para verões anteriores do Android tem sido [substituídas por versões proprietárias](http://arstechnica.com/gadgets/2013/10/googles-iron-grip-on-android-controlling-open-source-by-any-means-necessary/); em 2013 os dispositivos Android [foram impedidos de acessar as suas fotos de outra maneira que não fosse através da aplicação proprietária Google+.](http://www.androidbeat.com/2013/12/new-google-play-edition-devices-lack-photo-gallery-app-use-google/) Em, 2014 o Google anunciou que as [versões de TV, relógios e carros usarão majoritariamente aplicações proprietárias.](http://arstechnica.com/gadgets/2014/06/android-wear-auto-and-tv-save-you-from-skins-and-oems-from-themselves/)

A maioria dos dispositivos com Android vem com a aplicação proprietária da Loja de Aplicativos do Google (Google Play, antiga Android Firmware). Esse programa convida os usuários com uma conta do Google a instalar aplicações proprietárias. E também tem um back door com o qual o Google pode, de maneira arbitrária, instalar ou desinstalar aplicativos. (Isso provavelmente o torna um back door universal, contudo, ainda não foi provado) O Google Play não é, oficialmente, parte do sistema Android, mas isso não torna nada menos preocupante.

O Google moveu muitas das suas bibliotecas básicas essenciais para versões proprietárias, notoriamente o que se chama de biblioteca [Google Play Services.](https://blog.grobox.de/2016/the-proprietarization-of-android-google-play-services-and-apps/) Se o código fonte de uma aplicação é livre mas depende do Google Play Services, essa aplicação, de modo geral, é proprietária; não pode rodar em uma versão livre do Android como a Replicant.

Se você valoriza a liberdade, você não deve usar aplicações proprietárias sugeridas pelas ofertas da Google Play. Para instalar aplicações livres você não precisa da loja Google Play, você pode baixá-las, por exemplo, através do [f-Droid.](http://f-droid.org/)

Produtos Android ainda vem com bibliotecas proprietárias. Estas não são parte oficial do Android, mas uma vez que várias funcionalidades dependem dessas bibliotecas, ou seja, elas fazem parte de qualquer instalação real do Android.

Mesmo os programas que fazem parte oficialmente do Android podem não corresponder as versões do código fonte liberadas pelo Google. Fabricantes podem modificar esse código e quase sempre eles não lançam o código de suas versões. A GNU/GPL requer que eles distribuam esse código, assumindo que eles concordaram com a licença. O resto do código, sob a permissiva licença Apache, não requer que o código dessas versões seja lançado.

Um usuário descobriu que muitos desses programas, rodando dentro do sistema Android, são [modificados de modo a enviar dados pessoais para a Motorola.](http://www.beneaththewaves.net/Projects/Motorola_Is_Listening.html) Alguns fabricantes adicionam ainda um [pacote geral de vigilância, como os das operadoras.](http://androidsecuritytest.com/features/logs-and-services/loggers/carrieriq/)

O [Replicant](http://replicant.us/) é uma versão livre do Android. Os programadores do Replicant tem substituído muitas das bibliotecas proprietárias para alguns dispositivos em específico. As aplicações proprietárias são excluídas, mas você certamente não vai querer usá-las. Em contraste, a CyanogenMod (outra modificação do Android) não é livre, afinal, ela contém muito software proprietário.

Alguns dispositivos Android são “tiranos”: eles são projetados de maneira que os usuários não possam instalar ou rodar nenhum tipo de software modificado, apenas as versões previamente aprovadas pela empresa. Nessa situação os executáveis não são livres mesmo que sejam feitos a partir de código fonte que está amplamente disponível para todos. Entretanto, alguns dispositivos Android podem ser “ _rooteados_ “ para permitir que os seus usuários instalem qualquer programa.

É importante notar, contudo, que drivers e firmwares são, usualmente, programas proprietários. Estes são os que lidam com a rede de telefonia, sinal sem fio, bluetooth, GPS, gráficos 3D, câmera, alto-falante e, em alguns casos, o microfone. Em alguns modelos apenas alguns poucos drivers são livres; ainda temos alguns que podem ser ignorados — mas você não pode ignorar o sistema de telefonia ou o microfone.

O firmware para o sistema de telefonia vem pré-instalado. E tudo o que ele faz é ficar esperando que você o use para falar quando quiser, ou seja, podemos inclusive tratá-lo como o equivalente a um circuito. Quando insistimos que todo o programa em um sistema computacional deve ser livre estamos olhando para todo o conjunto, inclusive programas pré-instalados que nunca serão atualizados (principalmente porque não faz diferença nenhuma para o usuário se este é um programa ou um circuito).

Infelizmente, neste caso, é um circuito malicioso. Características maliciosas são inaceitáveis, não interessando a forma como foram implementadas.

Na maioria dos dispositivos Android este firmware tem tanto controle que pode transformar o seu dispositivo em uma escuta. Em outros, controlar o microfone. E em outros, ainda, pode obter controle completo do computador principal, através da memória compartilhada, podendo sobrescrever qualquer programa livre que você instalou. Com alguns, talvez todos, os modelos já é possível controlar remotamente o dispositivo através deste firmware de modo a sobrescrever todo o dispositivo. O ponto principal do software livre é nos dar o controle dos nossos sistemas e um dispositivo com um back door não e encaixa nessa definição. Enquanto qualquer sistema computacional pode ter erros, esses dispositivos são o próprio erro. (Craig Murray em [Assassinato em Samarkand](http://www.guardian.co.uk/books/2006/aug/12/politics) relaciona esse envolvimento com uma operação de inteligência que converteu remotamente aparelhos normais e que não rodavam Android em escutas).

Em qualquer caso, o firmware da rede de telefonia em um aparelho Android não é o equivalente a um circuito porque o hardware permite a instalação de novas versões, e isso de fato é feito. Uma vez que o firmware é proprietário, na prática, apenas o fabricante poderia fazer novas verões — nunca os usuários.

Juntando estes pontos podemos tolerar que novas versões de firmwares proprietários para redes de telefonia não serão carregados, não tomarão controle total do computador principal e apenas irão se comunicar quando o sistema operacional livre fizer uma chamada. Em outras palavras, precisa ser o equivalente a um circuito, e um circuito que não seja malicioso. Não existe nenhum obstáculo técnico que impeça de desenvolver-se uma versão Android com essas características, contudo, não conhecemos nenhuma.

O Android não é um sistema completo; o desenvolvimento para Android precisa ser feito usando outro sistema operacional. As ferramentas que o Google oferece, chamadas de kit de desenvolvimento (SDK), parecem ser livres, mas é um trabalho duro checar se isso é verdade. Os arquivos de definição de algumas API’s do Google não são livres. Instalar o SDK requer assinar uma licença de software proprietário, a qual você deveria recusar-se a assinar. O [kit de desenvolvimento do Replicant](http://redmine.replicant.us/projects/replicant/wiki/ReplicantSDK) é uma alternativa livre.

Ocorreu uma recente cobertura da imprensa com foco na guerra de patentes do Android Durante 20 anos de campanha contra as patentes em software nós alertamos que algo assim iria ocorrer. Patentes de software podem forçar a eliminação de algumas características do Android ou mesmo torná-lo inviável. Veja [esse site](http://endsoftpatents.org/) para maiores informações sobre como e porque as patentes de software precisam ser abolidas.

Entretanto, o ataque pelas patentes e a reposta do Google não são diretamente relevantes ao tópico deste artigo: como os produtos Android se aproximam parcialmente de um sistema ético de distribuição e como eles falham miseravelmente. Esse problema merece atenção da imprensa também.

O Android é um grande passo em direção de um sistema para telefones portáteis que seja ético, controlado pelo usuário e livre, mas ainda temos um longo caminho a percorrer e o Google parece estar na direção errada. Hackers tem trabalhador no [Replicant](http://replicant.us/), mas é um trabalho muito grande para fornecer suporte para um dispositivo novo e muitos ainda param no problema do firmware. Ainda assim os telefones Android de hoje são considerados menor piores do que os telefones Apple ou mesmos os telefones Windows., afinal, nenhum destes dois respeitam a sua liberdade.

* * *

_Copyright 2011 Richard Stallman. Licenciado sob a_ [_Creative Commons Attribution Noderivs 3.0 licence_](http://creativecommons.org/licenses/by-nd/3.0/)_._

* * *

_Originally published at_ [_http://mtgr18977.wordpress.com_](https://mtgr18977.wordpress.com/2019/03/23/android-e-a-liberdade-dos-usuarios/) _on March 23, 2019._

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [March 23, 2019](https://medium.com/p/18029568e859).

[Canonical link](https://medium.com/@paulopilotti/android-e-a-liberdade-dos-usu%C3%A1rios-18029568e859)

Exported from [Medium](https://medium.com) on April 19, 2025.
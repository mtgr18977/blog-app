---
title: "Ou: como pagamos caro para ver anúncios."
date: 2025-04-19T17:39:36.131Z
tags: []
---

Eu tenho um amigo que defende que a internet acabou quando os links diretos deixaram de existir. Eu concordo com ele, mas, a internet…

* * *

### Propaganda e internet

_Ou: como pagamos caro para ver anúncios._

Eu tenho um amigo que defende que a internet acabou quando os links diretos deixaram de existir. Eu concordo com ele, mas, a internet acabou mais um pouco quando o modelo de negócios do Google Ads passou a ser a regra na web e nós, meros consumidores nesse mundo capitalista, passamos a pagar duplamente para ver propagandas. Pagamos para acessar essas propagandas (com banda contratada junto a operadora) e pagamos com a nossa atenção (e quase sempre, em se tratando de Facebook, Twitter e Google, pagamos com nossos dados sendo usados de maneira indiscriminada como moeda).

Eu sempre fui fiel usuário dos bloqueadores de anúncio e do Ghostery (uma ótima extensão para bloquear rastreadores de conteúdo) mas nunca tive uma real dimensão do problema que esse modelo de negócios é.

Até hoje.

Eu estava com um Raspberry Pi encostado em casa, sem nenhum uso (é um modelo antigo demais para usar para coisas mais modernas, mas, ainda serve bem como servidor de baixo custo e consumo energético com os seus 2W em carga completa) e isso me deixava nervoso. Resolvi pesquisar por soluções de uso para esse hardware e encontrei o Pi-hole, um bloqueador de anúncios que funciona como um servidor DNS que redireciona as consultas da sua rede, filtra utilizando as listas mais comuns da internet, e retorna uma site quase limpo (ainda é preciso usar o Ghostery para rastreadores e um bloqueador de anúncios para alguns estilos mais sofisticados de intrusão) que se torna mais rápido e mais responsivo.

Até aí era algo que não me importava muito e que iria servir como uma camada a mais de bloqueio de anúncios, além de bloquear uma série de anúncios no telefone, principalmente de sites com assinatura que, ainda assim, usam anúncios segmentados. Nada demais e nada além do conhecido.

Tive que configurar aparelho aparelho para usar o DNS novo do Pi-hole porque a NET não permite essa configuração direto no modem/roteador deles e, por conta do Android ser uma colcha de retalhos, tive que definir um IP estático para as duas redes que eu tenho em casa. Chato mas nada que alguns minutos não resolvam.

Tudo instalado e funcionando.

Chegou então a hora de controlar o acesso a rede e ver como o Pi-hole se comportava, se iria ter lentidão por conta da camada extra de acesso ou mesmo se ele iria bloquear os anúncios de forma minimamente eficaz. Como eu já disse, tirando um ou outro anúncio mais chato, ele bloqueia a contendo o conteúdo comercial e não impacta na velocidade da rede. Continuo com os 120M no cabo e a rede sem fio de pouco alcance que a NET oferece. Nada de novo. Única ressalva a ser feita é o fato de ele não mexe no CSS dos sites que ele bloqueia, sendo assim, muitos elementos do site acabam ficando como espaços em branco (provavelmente ele bloqueia apenas a chamada e não mexe na DIV desses leiautes), algo que não ocorre com os bloqueadores que trabalham via extensão do navegador. Mas não é nada que não possa ser burlado ou mesmo ignorado.

Ou seja, é um bom uso para um Raspberry antigo (é um sistema leve que precisa apenas de uma versão lite do Raspberry e, na média, uso 10% da memória RAM \[50 MB\] e consome menos de 4% de processamento) e necessita de quase zero manutenção depois de configurado. Pouco trabalho e um retorno muito bom.

![](https://cdn-images-1.medium.com/max/800/0*UisjCZhR3wDioWA_)

O problema maior veio. Analisando a tela do servidor web do Pi-hole percebe-se que mais ou menos 45% das requisições são bloqueadas, ou seja, 45% de tudo o que é pedido aos servidores são requisições de anúncios

Pode parecer pouco em tempos de internet fixa sem franquia, mas, pense mais sobre isso. Imagine que você tenha uma internet duplamente limitada (velocidade e tráfego), você vai querer tirar o máximo proveito dela, não? Você não vai querer gastar metade da sua banda para ver (ou bloquear, afinal, as requisições só são bloqueadas depois de feitas e nisso você já gastou banda) anúncios que, via de regra, além de tudo são irrelevantes.

![](https://cdn-images-1.medium.com/max/800/0*CI4E_UYTOIRd17nX)

E isso é ainda pior quando falamos de clientes móveis. A maioria do acesso hoje é por telefones e, sabendo disso, as empresas progrediram muito mais no acesso móvel do que no acesso fixo. Telefones ainda dependem de soluções externas para bloquear anúncios; muitas vezes contando com limitações de hardware dos aparelhos (que já são caros) que acabam impedindo uma pessoa normal de bloquear esses anúncios.

A internet não morreu com o fim do link direto, morreu quando o Google resolveu pagar _“pró-blogger”_ nos anos 2000 com cheques em dólar para encher os sites de _adsense_.

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [February 14, 2019](https://medium.com/p/d721adc9604).

[Canonical link](https://medium.com/@paulopilotti/ou-como-pagamos-caro-para-ver-an%C3%BAncios-d721adc9604)

Exported from [Medium](https://medium.com) on April 19, 2025.
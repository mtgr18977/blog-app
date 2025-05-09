---
title: "Servidores DNS"
date: 2025-04-19T17:39:36.123Z
tags: []
---

Dia 1/4 a Cloudfare resolveu lançar um servidor de DNS com um endereço tão curioso quanto aquele o que o Google lançou anos atrás: 1.1.1.1…

* * *

### Servidores DNS

Dia 1/4 a Cloudfare resolveu lançar um servidor de DNS com um endereço tão curioso quanto aquele o que o Google lançou anos atrás: 1.1.1.1 e 1.0.0.1

Até aí, nada demais, servidores de DNS alternativos são a coisa mais comum que temos desde os tempos mais primórdios. OpenDNS que o diga.

O problema é que a maioria das pessoas, se baseando em efeitos psicológicos ou boatos de envenenamento de DNS das operadoras brasileiras (até hoje não se tem nenhuma prova disso), acaba mudando esses servidores, deixando de usar os mais rápido fornecidos para as operadoras, e usando servidores alternativos sediados nos EUA.

Problema per se não existe. Não tem muita motivação para não se usar um DNS brasileiros — das operadoras — e muito menos para se usar (ou não) um DNS do Google ou da CloudFare, porque, no perfil de navegação/uso da internet da maioria das pessoas isso não influenciar em nada.

O porém ficará para aquelas pessoas que jogam online (principalmente em jogos como os da Blizzard que tem seus servidores dentro do AWS da Amazon) que vão experimentar uma latência digna dos anos de discada, tudo porque um DNS desses será geolocalizado nos EUA e assim sendo o CDN vai lhe mandar para servidores sediados nos EUA (o que vai lhe trazer uma bela latência acima de 400ms no Overwatch, por exemplo, ao usar um servidor em Miami/FL). Ou mesmo, dependendo, o seu serviço de streaming vai ser direcionado para servidores (com o mesmo conteúdo, diga-se, afinal não é uma VPN) nos EUA, tornando aquela fase inicial de caching do streaming (com a resolução mais baixa) mais demorada e talvez trazendo alguma engasgada (sem falar que isso iria afetar a operadora, caso o DNS acabe contornando as caixas OpenConnnect da Netflix e Amazon dentro dos servidores brasileiros \[sim, streaming é, via de regra, um streaming local para a sua operadora, mais um argumento anti-franquia\]).

Fiz hoje o benchmark dos servidores mais comuns (operadora NET (no meu caso), Google, CloudFare e OpenDNS) para saber qual seria o mais rápido.

![](https://cdn-images-1.medium.com/max/800/0*6hX__5U7u7m7Q1YN.)

O que se nota pela imagem acima é:

1.  Como era esperado o DNS da NET é mais rápido para conteúdo que esteja no seu cache (servidores brasileiros) e tem quase a mesma velocidade para servidores fora do cache (brasileiros também) e mais lento para servidores estrangeiros (.com).
2.  A diferença é sensível para conteúdos dentro do Brasil e fora do Brasil exatamente por conta da geolocalização (note o US ao lado dos endereços do Google e da CloudFare), tendo uma velocidade muito maior para a NET quando tratamos de conteúdo local e uma velocidade muito maior para conteúdos .com quando falamos de servidores Google e CF.
3.  Teoricamente (e a propaganda era essa) o DNS da CF deveria ser mais rápido para qualquer conteúdo, mas, ele é mais rápido que o Google apenas para conteúdo non-cached, tendo uma boa diferença pro conteúdo .com.
4.  Ainda dá pra relevar que pra mim o servidor principal da CF (1.1.1.1) ficou fora do ar o tempo todo, desde o lançamento.

Como eu disse, contudo, a grosso modo isso não tem problema nenhum e não vai impactar no uso diário da maioria das pessoas. Mas é bom pensar, analizar e testar de maneira pragmática essas soluções pensadas pro mercado americano antes de sair usando e propagando que são ótimas e muito melhores que as soluções pensadas pro mercado brasileiro.

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [April 9, 2018](https://medium.com/p/e9ab850c13b5).

[Canonical link](https://medium.com/@paulopilotti/servidores-dns-e9ab850c13b5)

Exported from [Medium](https://medium.com) on April 19, 2025.
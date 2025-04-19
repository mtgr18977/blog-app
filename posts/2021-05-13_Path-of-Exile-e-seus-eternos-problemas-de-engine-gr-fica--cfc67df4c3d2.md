---
title: "Path of Exile e seus eternos problemas de engine gráfica."
date: 2025-04-19T17:39:36.318Z
tags: []
---

* * *

### Path of Exile e seus eternos problemas de engine gráfica.

![](https://cdn-images-1.medium.com/max/1200/0*JG61U7GZS3dL1DzY.png)

Direto do r/PathOfExile

Eu jog Path of Exile (POE) desde o beta inicial. De lá pra cá uma comunidade bastante grande, mesmo no Brasil, se formou ao redor do jogo e ele ganhou ainda mais complexidade. O mercado interno do jogo (exalts, chaos, mirrors) ganhou uma dinâmica digna dos RPG’s japoneses e, é possível, muita gente ganha uma boa grande com bots de _farm_ e _trade_.

Dito isso, o jogo a cada nova liga ganha uma camada extra de complexidade e, de alguma forma, acaba se tornando mais refém da sua engine, completamente ultrapassada. No meio do caminho a equipe de desenvolvimento da GGG mudou de renderizador, Vulkan, criou técnicas que amenizaram o problema de consumo de RAM e de carregamento de texturas e, por último, criou um sistema de backslash de textura que mantém o frame rate do jogo em troca de alguns problemas gráficos.

Tudo isso sempre aconteceu muito rápido nas outras ligas (como são chamadas as ladders de POE) e normalmente não era um problema grande. Contudo, nessa liga (Ultimatum) esse problema de transmissão de textura (que é explicado abaixo) se tornou bastante complicado de ignorar. Muitas vezes o jogo não carrega mesmo, obrigando os jogadores a lidarem com um grande borrão colorido na tela — isso em um jogo em que o tempo de input é essencial. Por sorte a equipem, provavelmente depois de ser bombardeada por relatórios de bugs e posta no fórum, foi atrás de uma solução pra esse problema.

As questões mais técnicas são explicadas abaixo, no post de desenvolvimento que eu traduzi do site da GGG que foi escrito pelo chefe da GGG, Chris Wilson.

* * *

Em um futuro próximo, implementaremos algumas melhorias no modo como o _Path of Exile_ lida com a memória de vídeo. Esse post explica como isso irá impactar a jogabilidade e o que esperar dessa correção.

Placas de vídeo tem uma certa quantia de memória (VRAM) que é usada para carregar os vários elementos que estamos renderizando para uma cena em específico. Se você ficar sem VRAM enquanto estiver usando o _DirectX 11 (DX11)_, nosso renderizador padrão, o jogo irá funcionar, contudo, com uma perda considerável no frame rate, uma vez que ele terá que estarão na memória do sistema. O drive gráfico também move esses artefatos gráficos entre a VRAM e a RAM, o que deixa as coisas ainda mais lentas. Para usuários com pouca VRAM o desempenho utilizando DX11 é sofrível.

Embora a API do renderizador _Vulkan_ tenha todo o tipo de benefício em termos de desempenho, essa API não traz um sistema padrão para lidar com a questão de falta de VRAM (como o DX11) e o seu comportamento padrão quando o usuário fica sem VRAM disponível é congelar o jogo. Quando lançamos a versão beta do _Vulkan_, muitos usuários acabaram experimentando esses travamentos quando estavam em uma situação que exigia muita memória.

Uma vez que tanto travamentos quanto um desempenho sofrível são ruins para a experiência dos nossos usuários, é importante que a engine do jogo consiga lidar com esse tipo de problema e gerenciar quais artefatos estarão na VRAM e quais estarão na RAM, carregando e descarregando eles de cada local na medida em que são necessários. No último ano a GGG adicionou um sistema que descarrega artefatos que o jogo julga que não será mais necessário no curto prazo e mantém o uso da VRAM em um nível aceitável (em uma abordagem conservadora). Isso tinha eliminado os congelamentos e momentos de lentidão devido ao uso excessivo de VRAM, mas, infelizmente, acabou criando outros problemas relativos ao ciclo de vida dos artefatos na memória.

Com os artefatos sendo carregados e descarregados dinamicamente durante o jogo, nós remodelamos a engine para que esses artefatos pudessem ser carregas de forma assíncrona, sem atrasos na renderização. Quando isso foi implementado, o que se viu foi uma bagunça completa com os atrasos causados, principalmente porque a engine travava completamente esperando que um artefato fosse completamente carregado.

Entretanto, o que você vê quando uma textura não está completamente carregada? Para não mostrar uma textura completamente vazia, adicionamos uma técnica chamada de “textura streaming” (streaming de textura, ou transmissão de textura), onde o jogo carrega o padrão mais baixo da textura em questão (_mip_) sempre na VRAM até que seja possível carregá-la completamente, assim você tem uma ideia aproximada do que está sendo carregado. Este comportamento se mostrou mais desejável do o comportamento padrão de queda de FPS ou de não mostrar nada. Ainda que a transmissão de textura é uma otimização inofensiva ela muitas vezes é correlacionada com problemas que estão diretamente ligados à engine do jogo e com o fato de quem nem sempre ela carrega a textura correta.

Alguns parágrafos atrás eu descrevi o nosso uso de VRAM no jogo como “conservador”. Isso significa que a nossa implementação atual não faz uso agressivo de toda a VRAM que você dispõe, e isso muitas vezes causas frustações nos usuários que se deparam com textura que são descarregadas muito cedo e desnecessariamente (um bom exemplo é quando você percebe um item borrado por um curto período).

Nossa equipe de desenvolvimento tem trabalhado para melhorar essa implementação e criar um perfil mais agressivo, que use mais a VRAM que você tem disponível e que armazene o máximo possível de artefatos que a sua GPU permitir. Esse tipo de abordagem é melhor porque beneficia usuários com GPU’s intermediárias ou top de linha que vão ter uma experiência muito mais fluida de jogo, uma vez que esses artefatos não serão descarregados e carregados a todo o momento. Isso vai depender, claro, de quanta VRAM você tiver disponível. Mas os problemas que atualmente estão atrelados à transmissão de textura e ao seu carregamento/descarregamento serão eliminados em boa parte para a maioria dos usuários. E claro, aqueles que tem GPU’s mais antigas irão continuar com a mesma experiência atual, prevenindo-os de ter de lidar com travamentos quando a VRAM acabar.

Nosso plano inicial era fazer _deploy_ dessa atualização na próxima correção de engine, que foi inicialmente agendada para a semana antes do lançamento da versão 3.15, em julho. Contudo, estamos muito insatisfeitos com a situação atual do jogo e estamos trabalhando para colocar no ar essa correção num futuro mais próximo (idealmente na próxima semana, mas antes disso esse post será atualizado com a data de lançamento na medida em que os testes continuam).

Essa correção não será uma panaceia para todos os problemas de performance e gráficos que o jogo está apresentando, mas certamente terá um grande impacto em como o jogo será percebido pela maioria dos usuários. Nossa equipe de desenvolvimento vai continuar buscando problemas e como arrumá-los. Como sempre, obrigado pelo seu retorno constante e pelos relatórios de bugs.

**Fonte:** [**Announcements — Upcoming Video Memory Utilisation Improvements — Forum — Path of Exile**](https://www.pathofexile.com/forum/view-thread/3118478)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [May 13, 2021](https://medium.com/p/cfc67df4c3d2).

[Canonical link](https://medium.com/@paulopilotti/path-of-exile-e-seus-eternos-problemas-de-engine-gr%C3%A1fica-cfc67df4c3d2)

Exported from [Medium](https://medium.com) on April 19, 2025.
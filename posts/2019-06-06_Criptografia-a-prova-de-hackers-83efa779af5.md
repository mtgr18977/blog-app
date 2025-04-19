---
title: "Criptografia a prova de hackers"
date: 2025-04-19T17:39:36.142Z
tags: []
---

Tradução do artigo originalmente publicado na Quanta Magazine: Cryptography That Can’t Be Hacked

* * *

### Criptografia a prova de hackers

Tradução do artigo originalmente publicado na Quanta Magazine: [Cryptography That Can’t Be Hacked](https://www.quantamagazine.org/how-the-evercrypt-library-creates-hacker-proof-cryptography-20190402/)

* * *

#### Alguns pesquisadores lançaram um tipo de código criptográfico que é a prova de hackers — programas com o mesmo nível de segurança que uma prova matemática.

Programadores são humanos, matemática é imortal.

Ao tornar a programação cada vez mais “matemática” a comunidade de cientistas da computação espera eliminar erros (bugs) no código que por ventura abram brechas de segurança para hackers, vazem dados digitais e qualquer tipo de praga digital moderna.

Nos últimos anos um grupo de cientistas deu um grande passo em direção a esse objetivo com o lançamento do [EverCrypt:](https://github.com/project-everest/hacl-star/blob/fstar-master/README.EverCrypt.md) um conjunto de ferramentas computacionais criptográficas.

Os pesquisadores foram capazes de provar — no sentido de prova matemática, como você pode fazer com o Teorema de Pitágoras — que a sua abordagem para segurança online é completamente invulnerável aos principais tipos de ataques hacker que estão disponíveis atualmente. _“Quando falamos em prova, estamos falando que o nosso código não está vulnerável a esses ataques”_ diz [Karthik Bhargavan](http://prosecco.gforge.inria.fr/personal/karthik/) cientista da computação em Paris, no centro Inria, que trabalhou no EverCrypt.

O EverCrypt não foi escrito como os outros códigos-fonte. De maneira geral, ao programar qualquer programa computacional, uma equipe de programadores criou um software que se espera que satisfaça certos objetivos. Uma vez terminado, eles testam o código. Se o código passar nos testes sem mostrar nenhum tipo de comportamento indesejável, os programadores concluem que o programa faz o que ele deveria fazer.

Ainda assim, erros no código usualmente aparecem apenas em casos extremos, chamados de “_casos de borda_” — que são uma tempestade perfeita de erros que revela uma vulnerabilidade crítica. Muitos dos mais ataques hackers mais danosos dos últimos anos explorou esse tipo de caso.

_“É um tipo de erro em cascata que se torna muito difícil de encontrar porque estes \[os eventos que levam ao erro\] ocorrem individualmente e de maneira muito específica”_ diz [Bryan Parno](http://www.andrew.cmu.edu/user/bparno/) cientista da computação na Universidade Carneggie Mellon que também trabalhou no EverCrypt.

Para provar esse tipo de abordagem, Parno e seus colegas especificaram exatamente o que o código deveria fazer e então provaram que o código era capaz de fazer o que se propunha, afastando a ideia de que o código poderia se comportar de maneira inadequada em circunstâncias incomuns. A estratégia é chamada de “[Verificação Formal](https://www.quantamagazine.org/formal-verification-creates-hacker-proof-code-20160920/)”.

_“Você pode reduzir a questão de como o código se comporta em uma equação matemática e então verificar se essa equação se sustenta_. _Se sim, você sabe que o seu código possuí essa propriedade”_, diz Parno.

Uma vez que é praticamente impossível especificar formalmente a função de programas complexos como um navegador web, os pesquisadores se focaram, então, em programas que são críticos e a mesmo tempo receptivos à definição matemática. O EverCrypt é uma biblioteca que lida com criptografia, ou codificação e decodificação de informações privadas. Essas bibliotecas criptográficas são, essencialmente, matemáticas. Elas envolvem aritmética com números primos e operações em objetos canônicos como curvas elípticas. Definir o que bibliotecas criptográficas fazem em termos formais não é muito difícil.

O trabalho em cima do EverCrypt começou em 2016 como parte do [Projeto Everest](https://www.microsoft.com/en-us/research/project/project-everest-verified-secure-implementations-https-ecosystem/), uma iniciativa liderada pelo Centro de Inovação da Microsoft. Nessa época — e ainda hoje — bibliotecas criptográficas são um ponto fraco em muitas aplicações. Eles são lentos, o que arrasta o desempenho geral das aplicações as quais eles fazem parte, e cheio de erros (bugs). _“Acho que houve alguma percepção dos desenvolvedores de aplicativos de que há um desastre esperando para acontecer”_ diz [Jonathan Protzenko](https://jonathan.protzenko.fr/) um cientista da computação no Centro de Inovação que trabalhou no EverCrypt. _“O mercado de software está esperando por algo que traga o que EverCrypt traz”._

O desafio principal para criar o EverCrypt foi desenvolver uma plataforma de programação que possa expressar todos os atributos diferentes que os pesquisadores querem ter em uma biblioteca criptográfica verificada. Essa plataforma precisa ter a capacidade das linguagens tradicionais como C++, bem como a sua sintaxe lógica e uma estrutura de testes como a [Isabelle](https://isabelle.in.tum.de/) e a [Coq](https://coq.inria.fr/), que os matemáticos tem usado a anos. Não existe nenhuma plataforma desse tipo até o momento em que os pesquisadores iniciaram os trabalhos no EverCrypt, então eles criaram uma — uma linguagem de programação chamada [F\*](https://www.fstar-lang.org/), Ela colocou matemática e software no mesmo patamar.

_“Unificamos essas plataformas em um framework único para que a distinção entre escrever programas e provar teoremas fosse realmente reduzida”_, disse Bhargavan. _“Você pode escrever programas do mesmo modo que um programador, mas, ao mesmo tempo você pode provar esses teoremas como se fosse um teórico”._

As novas bibliotecas criptográficas trazem um número de garantias de segurança. Os pesquisadores provaram que o EverCrypt é livre de erros, tais como estouros de buffer, que podem habilitar ataques hacker — efetivamente, foi provado que ele não é suscetível aos casos de borda. Eles também provaram que o EverCrypt escolhe sempre a melhor função criptográfica — ele nunca usa o algoritmo errado.

Mas a maior garantia que o EverCrypt traz consigo é ser capaz se fazer esse tipo de escolha em classes completamente diferentes de brechas de segurança. Estas ocorrem quando um ator intermediário é capaz de inferir o conteúdo de uma mensagem criptografada apenas observando como o programa opera.

Por exemplo, um observador pode saber como um algoritmo de criptografia funciona mais rápido apenas adicionando um “0” e que ele funciona mais devagar apenas adicionando um “1” em qualquer valor. Ao medir o tempo gasto para que o algoritmo criptografe uma mensagem com essas alterações esse observador é capaz de entender qual é a melhor representação binária de uma mensagem — a com mais 0 ou 1 e, assim sendo, eventualmente inferir a mensagem completa. _“Em algum momento no fundo do seu algoritmo ou no modo como você implementou este algoritmo você está deixando alguma informação vazar, o que pode acabar com o propósito da criptografia”_ diz Bhargavan. Esses “ataques laterais” estão atrás de diversos dos mais notórios ataques hacker nos últimos anos, incluindo o ataque [Lucky Thirteen](https://arstechnica.com/information-technology/2013/02/lucky-thirteen-attack-snarfs-cookies-protected-by-ssl-encryption/). Os pesquisadores provaram que o EverCrypt nunca vaza nenhuma informação de maneira que possa ser atacada por ataques temporais.

Ou seja, o EverCrypt é, provavelmente, imune a muitos ataques; contudo, isso não o faz o arauto de uma era de programas perfeitos. Protzenko pontuou que sempre iremos ter ataques que nunca foram feitos. E o EverCrypt não pode se provar seguro contra ataques que nunca foram feitos, claro.

Ainda assim, mesmo uma biblioteca criptográfica verificada tem que lidar sincronizadamente com outros softwares, como um sistema operacional ou as aplicações desktop mais comuns, que não são verificados e não terão em um futuro próximo. _“Não estamos mirando em softwares complexos como um processador de texto ou o Skype”_, disse Protzenko, porque não é óbvio saber como será possível capturá-los em uma linguagem formal para o EverCrypt. _“É difícil pensar no comportamento possível para esses programas”._

Por conta dessas vulnerabilidades adjacentes, programas não verificados podem comprometer uma biblioteca criptográfica, o Projeto Everest tem como objetivo rodear o EverCrypt com a maior quantidade de software verificado possível. O objetivo mais abrangente da iniciativa é obter uma implementação plenamente verificada do protocolo HTTPS, o programa que mantém a maior parte da web segura. Isso irá envolver meia dúzia de elementos de software individualmente como EverCrypt, cada um sendo formalmente verificado do seu próprio modo para funcionar ao seu modo e todos são formalmente verificados para funcionar juntos.

_“O Projeto Everest está tentando construir uma grande pilha de programas que tenham sido verificados e verificados juntos. Com o passar do tempo estamos confiantes que essa fronteira \[de programas verificados\] vai continuar crescendo”_, diz Parno.

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [June 6, 2019](https://medium.com/p/83efa779af5).

[Canonical link](https://medium.com/@paulopilotti/criptografia-a-prova-de-hackers-83efa779af5)

Exported from [Medium](https://medium.com) on April 19, 2025.
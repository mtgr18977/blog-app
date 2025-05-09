---
title: "Inventando uma Internet quântica"
date: 2025-04-19T17:39:36.155Z
tags: []
---

Tradução do artigo originalmente publicado pela Quanta Magazine.

* * *

![](https://cdn-images-1.medium.com/max/2560/1*NSZEJaRGAN3e5Ayw1o2ozw.jpeg)

Fonte: [https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/qutechresear.jpg](https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/qutechresear.jpg)

### Inventando uma Internet quântica

**Tradução do** [**artigo**](https://www.quantamagazine.org/stephanie-wehner-is-designing-a-quantum-internet-20190925/) **originalmente publicado pela** [**Quanta Magazine**](https://www.quantamagazine.org/)**.**

Os primeiros dados transmitidos pela Arpanet, precursora da Internet, passaram de um computador na Universidade da Califórnia, em Los Angeles, para um no no Instituto de Pesquisas de Stanford, em Palo Alto, em 29 de outubro. de 1969;

Naquela noite, a equipe da UCLA telefonou para a equipe do SRI e começou a digitar “LOGIN”.

> _“Digitamos o L e perguntamos: ‘Você recebeu o L?’; ‘Sim’ foi a resposta do SRI. Digitamos o O e perguntamos: ‘Você recebeu o O?’; ‘Sim’; digitamos o G e perguntamos: ‘Você recebeu o G?’ Falha! O host do SRI caiu. Assim foi a primeira mensagem que iniciou a revolução que agora chamamos de internet”._

A capacidade das redes de transmitir dados — bem como sua tendência a travar, ou se comportar de maneira imprevisível — sempre fascinou Stephanie Wehner. “Em um único computador, as coisas vão acontecer de forma tranquila e sequencial”, disse Wehner, físico e cientista da computação da Universidade de Tecnologia de Delft. “Em uma rede, muitas coisas inesperadas podem acontecer.” Isso é verdade de dois modos, principalmente: os programas nos computadores conectados interferem entre si, com efeitos surpreendentes. E os usuários das redes são criativos. Com a internet, observou Wehner, inicialmente “as pessoas pensavam que a usaríamos para enviar alguns arquivos”.

Wehner ficou online pela primeira vez em 1992, alguns anos antes da internet se tornar acessível. Sendo uma adolescente na Alemanha, nos anos 90 e já uma hábil programadora, ela logo se tornou uma hacker na internet incipiente. Aos 20 anos ela conseguiu um emprego como hacker “boa”, eliminando vulnerabilidades na rede para um provedor de Internet. Então ela ficou entediada com o trabalho e buscou uma compreensão mais profunda da transmissão de informações e redes.

Wehner é agora uma das líderes intelectuais do esforço para criar um novo tipo de internet a partir do zero. Ela está trabalhando para projetar a “internet quântica”, uma rede que transmitiria — em vez de bits clássicos com valores de 0 ou 1 — bits quânticos nos quais ambas as possibilidades, 0 e 1, coexistem. Esses “qubits” podem ser feitos de fótons que estão em uma combinação de duas polarizações diferentes. A capacidade de enviar qubits de um lugar para outro através de cabos de fibra óptica pode não transformar a sociedade tão completamente quanto a Internet clássica, mas revolucionaria muitos aspectos da ciência e da cultura, da segurança, da computação e da astronomia.

Wehner é a coordenadora da Quantum Internet Alliance, uma iniciativa da União Europeia para construir uma rede de transmissão de informações quânticas em todo o continente. Em um artigo publicado na Science em outubro passado, ela e dois co-autores estabeleceram um plano de seis estágios para iniciar a internet quântica, onde cada estágio de desenvolvimento suportará novos algoritmos e aplicativos. O primeiro estágio já está em andamento, com a construção de uma rede quântica de demonstração que conectará quatro cidades na Holanda — uma espécie análoga à Arpanet. Tracy Northup, membro da Quantum Internet Alliance da Universidade de Innsbruck, elogiou “a amplitude da visão de Stephanie e seu compromisso com a construção do tipo de estruturas de grande escala é que farão isso acontecer”.

Depois de deixar o seu emprego como hacker, Wehner foi para a universidade na Holanda para estudar ciência da computação e física. Ela ouviu o teórico da informação quântica John Preskill fazer uma palestra em Leiden descrevendo as vantagens dos bits quânticos para a comunicação. Alguns anos mais tarde, depois de obter seu doutorado, deixou para trás os clássicos e ingressou no grupo de Preskill no Instituto de Tecnologia da Califórnia como pós-doutoradanda.

Na Caltech, além de provar vários teoremas notáveis sobre informações quânticas, criptografia quântica e a própria natureza da mecânica quântica, Wehner emergiu como “uma líder natural”, disse Preskill, que “costumava ser a cola que unia as pessoas”. Em 2014, depois de ser professora em Cingapura, ela se mudou para Delft, onde começou a colaborar com experimentalistas para estabelecer as bases para a Internet quântica.  
A Revista Quanta conversou com Wehner durante dois dias em agosto. A entrevista foi condensada e editada para maior clareza.

**A internet quântica é uma rede para transmissão de qubits entre locais distantes. Porque precisamos disso?**

A idéia não é substituir a internet que temos hoje, mas realmente adicionar funcionalidades novas e especiais. Existem todos os tipos de aplicações de redes quânticas que serão descobertas no futuro, mas já conhecemos várias delas. É claro que a aplicação mais famosa é a comunicação segura: o fato de que se pode usar a comunicação quântica para executar o que chamamos de distribuição de chave quântica, onde a segurança é mantida mesmo que o invasor tenha um computador quântico. Um computador quântico seria capaz de quebrar muitos dos protocolos de segurança existentes hoje.

**O que torna as chaves quânticas tão seguras?**

Uma boa maneira de entender o que uma internet quântica pode fazer é pensar em “emaranhamento quântico”, uma propriedade especial que dois bits quânticos podem ter e que tornam tudo isso possível. A primeira propriedade do emaranhamento é que ela é “coordenada ao máximo”: eu teria um bit quântico aqui e você teria um bit quântico em Nova York, e usaríamos a internet quântica para enredar esses dois qubits. E então, se eu fizer uma medição do meu qubit aqui e você fizer a mesma em Nova York, sempre obteremos o mesmo resultado, mesmo que o resultado não tenha sido determinado com antecedência. Portanto, você pode pensar intuitivamente que uma Internet quântica é muito boa para tarefas que exigem coordenação, devido à primeira propriedade do emaranhamento quântico.

Agora, considerando que isso é coordenado ao máximo, você pode dizer: “Ei, não seria ótimo se esse envolvimento pudesse ser compartilhado com centenas de pessoas?” Mas isso não é realmente possível. Portanto, a segunda propriedade do emaranhamento é que ela é inerentemente privada. Se meu qubit aqui está emaranhado com o seu qubit em Nova York, sabemos que nada mais pode fazer parte desse emaranhado. E é por essa razão que a comunicação quântica é tão boa para problemas que exigem segurança.  
Como uma das aplicações mais simples da comunicação quântica, a distribuição quântica de chaves pode estar disponível assim logo no início de 2020 na rede de demonstração que você está construindo.

**Quais são algumas das aplicalções mais avançados que serão possíveis mais tarde?**

Novos tipos de computação remota serão possíveis. Digamos que você tenha um projeto de um material proprietário e deseje testar suas propriedades em uma simulação. Um computador quântico promete ser muito melhor nisso do que um computador clássico. Mas você pode imaginar que nem todo mundo no mundo terá um grande computador quântico em sua sala de estar tão cedo — possivelmente não em nossa vida. Uma maneira de fazer isso é enviar o projeto do material para mim e então eu faço uma simulação para você no meu computador quântico e digo o resultado. Isso é ótimo, mas agora eu também conheço o projeto do seu material proprietário. Então, uma coisa que a rede quântica possibilita é que você possa usar um dispositivo quântico muito simples — na verdade, ele pode fazer apenas um qubit por vez — e a rede quântica pode transferir qubits do seu dispositivo para o meu poderoso computador quântico. E você pode usar esse computador quântico de tal maneira que ele não possa aprender qual é o seu projeto de material durante a computação.

Para dar outro exemplo, as pessoas também mostraram que o emaranhamento permite uma sincronização mais precisa do relógio entre dois locais, o que terá muitas aplicações. Uma internet quântica também poderia ser usada para criar um telescópio melhor, basicamente combinando telescópios distantes. O estado das partículas de luz que entram no telescópio 1 são teletransportadas, usando o emaranhamento quântico, para o telescópio 2 e, em seguida, são combinadas com a luz do telescópio 2.

**Você também está trabalhando na simulação da futura Internet quântica. Porque é necessária essa estratégia?**

Com essa extensa plataforma de simulação que construímos recentemente e que agora está sendo executada em um supercomputador, podemos explorar diferentes configurações quânticas de rede e obter uma compreensão das propriedades que são muito difíceis de prever analiticamente. Dessa forma, esperamos encontrar um design escalável que possa permitir a comunicação quântica em toda a Europa.

A imprevisibilidade das redes é algo que sempre me fascinou. Os computadores são interessantes, mas o que realmente me interessa é transmitir dados de um ponto para outro. Esta é a razão pela qual eu entrei no mundo hacker e me interessei pela internet clássica e obtive acesso a ela em primeiro lugar. É, fundamentalmente, muito difícil entender o que acontece em uma rede porque existem muitas coisas não caracterizadas. Por exemplo, se você deseja enviar uma mensagem, não pode prever exatamente quanto tempo pode demorar. A mensagem pode ser perdida. Um computador pode falhar. Pode ir muito devagar e isso pode corromper os dados. Pode ter mudado o protocolo de maneiras inesperadas, porque é uma versão antiga, nova ou maliciosa.

**Você era uma hacker “do mal” antes de se tornar uma hacker “do bem”?**

Isso não é algo que se pode dizer em entrevistas! Eu acho que o mundo era um lugar melhor naquela época. Mas não confesso nada.

**Por que você decidiu parar de invadir e se tornar uma cientista?**

Eu sei que hackers parecem ser de um mundo super emocionante, mas eu já fazia isso há algum tempo. É claro que se melhora os métodos, mas é tudo um pouco mais do mesmo. Fiquei entediada e decidi explorar algumas novas aventuras. E então eu descobri a teoria da informação quântica e isso foi super fascinante.

[**Um teorema que você provou sobre informações quânticas**](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.100.220502) **é o teorema de armazenamento barulhento. O que é isso e quais são as implicações para a comunicação quântica?**

Armazenamento barulhento fala sobre criptografia com uma suposição física. No mundo clássico, muitas vezes, se faz uma suposição computacional. Por exemplo, você supõe que é difícil determinar os fatores primos de grandes números e, se essa suposição for verdadeira, meu protocolo estará seguro. Essas provas de segurança são boas e estão em todos os lugares, mas é preciso perceber que elas podem ser invalidadas mais tarde. Se em algum momento futuro alguém inventar um procedimento inteligente para resolver o problema computacional em que sua segurança se baseia, a segurança poderá ser retroativamente quebrada. Por exemplo, quando tivermos computadores quânticos eles serão capazes de fatorar grandes números e, portanto, a segurança baseada em fatoração será quebrada. Se alguém gravar suas mensagens hoje, poderá ser descriptografado mais tarde.

O trabalho do armazenamento barulhento era sobre se podemos fazer uma suposição física que não pode ser quebrada retroativamente? A suposição física nos diz que é difícil armazenar muitos estados quânticos sem ruído, o que só precisa ser verdade em um período de tempo muito curto. Se eu assumir que, no momento, você só pode armazenar até 1 milhão de qubits ruidosos, posso tratar meus parâmetros de protocolo para aumentar a segurança enviando mais informações do que esses milhões de qubits ruidosos podem capturar. Isso é bom porque, caso amanhã você resolva comprar uma memória quântica com 2 milhões de qubits, será tarde demais; as informações já foram enviadas com segurança.

Isso nos permitiria implementar todos os tipos de protocolos na comunicação quântica. Digamos que duas pessoas queiram comparar as senhas uma da outra sem nunca as revelar. Não é o que fazemos agora, quando você usa um caixa eletrônico e digita seu PIN lá — em vez disso, digito o PIN no meu próprio dispositivo e ele nunca será vazado para o caixa eletrônico. Esse protocolo se torna possível com a suposição de armazenamento barulhento.

**É provável que a busca pela Internet quântica promova insights fundamentais sobre as leis da natureza — uma espécie de abordagem da ciência que aprende fazendo?**

Às vezes, há um julgamento nas ciências de que algumas perguntas são fundamentais e outras são mundanas. Eu acho que trazer algo para o mundo real que as pessoas possam realmente usar nunca é mundano. É extremamente dificil, pelo contrário. Há um salto absolutamente alucinante de “Eu tenho essa ótima ideia; vamos discutir isso no quadro branco ”, para o celular que estou usando no momento para falar com você. Com a internet quântica, estamos tentando fazer isso do zero. Desde o inicio. Começamos com um experimento em estágio inicial no laboratório e chegamos até essa rede que estamos tentando instalar na Holanda, estamos indo para algo que está fora do laboratório, que funciona a distância, que pode ser usado por pessoas, com quem eles podem brincar e depois por pessoas que não precisam conhecer a física para fazê-lo. Se uma parte do sistema já existisse, poderíamos dizer: “Agora vamos melhorar isso”. Mas o passo a passo para a primeira versão é muito grande.

Ao fazer isso, acho que teremos um entendimento mais fundamental em várias áreas. Aprenderemos mais sobre a física, tornando essas redes possíveis, porque atualmente não sabemos exatamente como fazê-lo. Ainda estamos testando diferentes tipos de nós e repetidores quânticos, dispositivos que retransmitem o emaranhado por grandes distâncias. E no domínio da ciência da computação, aprenderemos uma maneira totalmente nova de programar e controlar essas redes devido as diferenças fundamentais da comunicação clássica.

Mas também acho que, usando essa rede, obteremos informações sobre criatividade e ciências sociais — sobre como, de fato, as pessoas vão usar essas redes. Se você olhar para a Internet clássica, as pessoas pensaram que a usaríamos para enviar alguns arquivos. Que ótimo. Mas as pessoas ficaram mais criativas.

**Entendo que é difícil estabelecer uma linha do tempo para tudo isso, mas em sua vida você espera ver o que legitimamente descreveria como uma Internet quântica?**

Eu ficaria otimista sobre isso, sim.

Este artigo foi reimpresso em [ScientificAmerican.com.](https://www.scientificamerican.com/article/to-invent-a-quantum-internet/)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [January 5, 2020](https://medium.com/p/6ecc2241930d).

[Canonical link](https://medium.com/@paulopilotti/inventando-uma-internet-qu%C3%A2ntica-6ecc2241930d)

Exported from [Medium](https://medium.com) on April 19, 2025.
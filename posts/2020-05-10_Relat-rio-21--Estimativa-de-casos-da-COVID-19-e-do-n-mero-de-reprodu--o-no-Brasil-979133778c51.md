---
title: "Relatório 21: Estimativa de casos da COVID-19 e do número de reprodução no Brasil"
date: 2025-04-19T17:39:36.203Z
tags: []
---

Tradução do relatório número 21 do Imperial College que traz dados preditivos sobre e uma análise sobre o novo modelo proposto para a…

* * *

### Relatório 21: Estimativa de casos da COVID-19 e do número de reprodução no Brasil

#### Tradução do relatório número 21 do Imperial College que traz dados preditivos sobre a disseminação do novo coronavírus no Brasil e uma breve análise sobre o novo modelo proposto no preprint BRAM-COV e, finalmente, um modelo preditivo para a disseminação nos estados brasileiros com previsão de casos, óbitos e disseminação.

![](https://cdn-images-1.medium.com/max/1200/1*NxnvEZZ3LEPNW-yirQiuHQ.jpeg)

Thomas um Mellan , H Henrique Hoeltgebaum, Swapnil Mishra, Charlie Whittaker, Ricardo P Schnekenberg , Axel Gandy , H Juliette T Unwin, Michaela AC Vollmer, Helen Coupland, Iwona Hawryluk, Nuno Ro drigues Faria, Juan Vesga, Harrison Zhu, Michael Hutchinson, Oliver Ratmann, Melodie Monod, Kylie Ainslie, Marc Baguelin, Sangeeta Bhatia, Adhiratha Boonyasiri, Nicholas Brazeau, Giovanni Charles, Laura V Cooper, Zulma Cucunuba, Gina Cuomo-Dannenburg, Amy Dighe, Bimandra Djaafara, Jeff Eaton, Sabine L van Elsland, Richard FitzJohn, Keith Fraser, Katy Gaythorpe, Will Green, Sarah Hayes, Natsuko Imai, Ben Jeffrey, Edward Knock, Daniel Laydon, John Lees, Tara Mangal, Andria Mousa, Gemma Nedjati-Gilani, Pierre Nouvellet, Daniela Olivera, Kris V Parag, Michael Pickles, Hayley e Thompson Robert Verity, Carolina Walters, Haowei Wang, Yuanrong Wang, Oliver J Watson, Lilith Whittles, Xiaoyue Xi, Lucy Okell, Ilaria Dorigatti, Patrick Walker, Azra Ghani, Steven Riley, Neil M Ferguson, Christl A. Donnelly, Seth Flaxman e Samir Bhatt

Departamento de Epidemiologia de Doenças Infecciosas, Imperial College London   
Departamento de Matemática, Imperial College London  
Centro de Colaboração da OMS para Modelagem de Doenças Infecciosas e Centro MRC para Análise Global de Doenças Infecciosas

Abdul Latif Jameel Instituto de Análise de Doenças e Emergências, Imperial College London , Departamento de Estatística, Universidade de Oxford, Departamento de Neurociências Clínicas de Nuffield, Universidade de Oxford

* * *

#### Resumo

O Brasil é um epicentro da COVID-19 na América Latina. Neste relatório, descrevemos a epidemia brasileira usando três medidas epidemiológicas: o número de infecções, o número de óbitos e o número de reprodução. Nossa estrutura de modelagem requer dados de óbitos suficientes para estimar tendências e, portanto, limitamos nossa análise a 16 estados que sofreram um total de mais de cinquenta óbitos. A distribuição das mortes entre os estados é altamente heterogênea, com cinco estados — São Paulo, Rio de Janeiro, Ceará, Pernambuco e Amazonas — respondendo por 81% das mortes relatadas até o momento. Nesses estados, estimamos que a porcentagem de pessoas infectadas com SARS-CoV-2 varie de 3,3% (IC95%: 2,8% -3,7%) em São Paulo até 10,6% (IC95%: 8,8% -12,1%) no Amazonas. O número de reprodução (uma medida da intensidade da transmissão) no início da epidemia significava que um indivíduo infectado infectaria três ou quatro outros em média. Após intervenções não farmacêuticas, como fechamento de escolas e diminuição da mobilidade da população, mostramos que o número de reproduções caiu substancialmente em cada estado. No entanto, para todos os 16 estados que estudamos, estimamos com alta confiança, que o número de reprodução permanece acima de 1. Um número de reprodução acima de 1 significa que a epidemia ainda não está controlada e continuará a crescer. Essas tendências estão em forte contraste com outras grandes epidemias de COVID-19 na Europa e na Ásia, onde bloqueios forçados levaram com sucesso a um número de reprodução abaixo de 1. Embora a epidemia brasileira ainda seja relativamente incipiente em escala nacional, nossos resultados sugerem que são necessárias ações adicionais para limitar a disseminação e impedir a sobrecarga do sistema de saúde.

#### Introdução

O mundo enfrenta uma emergência de saúde pública sem precedentes na pandemia da COVID-19. Desde o surgimento do novo coronavírus (SARS-CoV-2) na China em dezembro de 2019, a disseminação global foi rápida, com mais de 3,5 milhões de casos e quase 250 mil mortes relatadas em 187 países no dia 6 de maio [\[13\]](#_bookmark25). Embora a transmissão da doença para além da Ásia tenha sido inicialmente centrada na Europa Ocidental e na América do Norte, agora há uma expansão significativa em outras partes do mundo, incluindo muitos países da África Subsaariana e da América Latina.

Uma dessas áreas de preocupação é o Brasil — desde o relato de seu primeiro caso em 25 de fevereiro, sua epidemia cresceu rapidamente, com o país relatando agora mais de 135.000 casos e mais de 7.000 mortes [\[14\]. Em](#_bookmark26) resposta à disseminação significativa e à transmissão pela comunidade dos No país, autoridades estaduais e municipais do Brasil determinaram extensas medidas de saúde pública para reduzir a transmissão da COVID-19, inclusive declarando um estado de emergência, determinando o fechamento de empresas de varejo e serviços,restringir o transporte e fechar escolas. Pacotes específicos de intervenções foram decididos em nível estadual, com variação substancial entre os estados na medida em que as medidas foram adotadas e seu tempo comparativo [\[4](#_bookmark15) \]. É importante ressaltar que as intervenções empregadas até o momento permanecem aquém dos bloqueios generalizados e obrigatórios implementados em partes da Ásia e da Europa e que provaram seriam altamente eficazes para conter a disseminação do vírus [\[7,](#_bookmark18) [19\].](#_bookmark31)

![](https://cdn-images-1.medium.com/max/800/1*47Ck3RGFNbcbyweicisbHw.png)

Figura 1: Mapa de casos (a) e óbitos (b) no Brasil por nível estadual. Fonte de dados: Painel Coronavírus em [https://covid.saude.gov.br](https://covid.saude.gov.br/) , acessado em 7 de maio de 2020.

Ainda não está claro até que ponto essas medidas foram eficazes na redução da transmissão em todo o país. Os casos relatados em todo o Brasil mais que dobraram nos últimos 10 dias e mostram poucos sinais de desaceleração. Dado esse rápido crescimento, é necessário um melhor entendimento da situação epidemiológica atual e o impacto das intervenções implantadas até o momento para orientar as decisões políticas destinadas a impedir o agravamento da emergência de saúde pública que o país enfrenta. Motivados por isso, ampliamos um modelo hierárquico bayesiano semi-mecanístico publicado anteriormente sobre a dinâmica epidemiológica da COVID-19 [\[7,](#_bookmark18) [19\]](#_bookmark31) para avaliar o impacto de intervenções destinadas a coibir a transmissão do COVID-19 em todo o Brasil. Em nossa estrutura, estimamos o número de mortes, infecções e transmissão em função dos padrões da mobilidade humana. Utilizamos essa estrutura para explorar a situação epidemiológica em detalhes em um nível estadual e entender a disseminação do vírus em todo o país até o momento. Esses resultados incluem estimativas da proporção de indivíduos infectados até o momento, bem como o impacto de diferentes intervenções de controle, e fornecem informações sobre possíveis trajetórias epidêmicas futuras, caso medidas adicionais de controle sejam empregadas ou relaxem as intervenções atuais.

![](https://cdn-images-1.medium.com/max/800/1*KvOS3uKTJz5teSk_lty_WA.png)

Tabela 1: Taxa de mortalidade estimada por infecção (IFR), população do estado, mortes e mortes relatadas por milhão de habitantes, número estimado de infecções em milhares, taxa de ataque (RA) e número de reprodução com variação temporal em 6 de maio de 2020 com intervalos credíveis de 95%, para São Paulo (SP), Rio de Janeiro (RJ), Pernambuco (PE), Ceará (CE), Amazonas (AM), Pará (PA), Maranhão (MA), Bahia (BA), Espírito Santo (ES) ), Paraná (PR), Minas Gerais (MG), Paraíba (PB), Rio Grande do Sul (RS), Rio Grande do Norte (RN), Alagoas (AL), Santa Catarina (SC).

![](https://cdn-images-1.medium.com/max/800/1*v6dFUX1jidxRYlaxf3hnaQ.png)

Figura 2: As estimativas de infecções, mortes e _Rt._ Esquerda: número diário de infecções, barras marrons são casos relatados, faixas azuis são infecções previstas, em azul escuro o intervalo credível de 50% (IC) e em azul claro IC 95%. Meio: número diário de mortes, barras marrons são relatadas, faixas azuis são mortes previstas, IC como na parcela esquerda. Direita: número de reprodução variável no tempo _Rt_ , verde escuro IC 50%, verde claro IC 95%. Se a _Rt_ é superior a 1, o número de infecções continua a crescer. Ícones representam as intervenções mostradas no momento em que ocorreram.

#### Taxas de Ataque

O Brasil já registrou quase o dobro de mortes por COVID-19 do que a China e mais de 100.000 casos confirmados. Mas, apesar desses altos números, estimamos que apenas uma pequena proporção de indivíduos em cada estado tenha sido infectada até o momento (taxa de ataque). A distribuição das mortes entre os estados é altamente heterogênea, com 5 estados — São Paulo, Rio de Janeiro, Ceará, Pernambuco e Amazonas — respondendo por 81% das mortes relatadas. Nesses estados, estimamos que a porcentagem de pessoas infectadas com SARS-CoV-2 varie de 3,3% (IC95%: 2,8% — 3,7%) em São Paulo até 10,6% (IC95%: 8,8% — 12,1%) no Amazonas. Todos os demais estados têm taxas de ataque abaixo de 2,3%, além do Pará (PA), que está ao redor de 5,05% (IC95: 3,9% — 5,9%), é inferior apenas ao Amazonas. A lista completa de estimativas de taxa de ataque para cada estado é mostrada na Tabela [1](#_bookmark0) .

Esses resultados ilustram que a proporção da população já infectada e potencialmente imune permanece baixa. Considerando um _R_0 = 3 e transmissibilidade semelhante à observada em ambientes [europeus \[7\]](#_bookmark18) e [holandeses \[16\]](#_bookmark28), a parcela estimada da população infectada até o momento permanece muito aquém do limiar de imunidade de rebanho de 70% necessário para evitar o ressurgimento rápido do vírus se as medidas de controle forem relaxadas [\[7\]](#_bookmark18) e em Br[asil. \[16\].](#_bookmark28)

#### Análise de sensibilidade — taxa de mortalidade por infecção e subnotificação

Permanece uma incerteza substancial em nossa compreensão da epidemiologia fundamental do COVID-19 e da qualidade dos sistemas de vigilância em diferentes contextos. Consequentemente, as estimativas do número esperado de mortes e infecções são sensíveis às suposições feitas em nossa estrutura de modelagem. Em particular, há incerteza em torno da taxa de mortalidade por infecção (IFR), que é a probabilidade de um indivíduo morrer se infectado com SARS-CoV-2. Se esse número for muito baixo, são esperadas mais infecções e uma taxa de ataque mais alta para o mesmo número de mortes observadas e vice-versa. Há também uma incerteza considerável nos dados de óbitos observados, pois pouco se sabe sobre a extensão e a natureza da subnotificação. Para examinar o efeito dessas premissas nas conclusões descritas acima, realizamos uma série de análises de sensibilidade (consulte o Apêndice) explorando diferentes premissas em torno das IFRs em nível estadual (relacionadas à premissas sobre como a qualidade da saúde varia com a renda estadual) e a extensão da subnotificação de mortes. Os resultados dessas análises de sensibilidade, como esperado, produzem diferenças quantitativas nas taxas de ataque previstas — por exemplo, supor que um nível de subnotificação de 50% de mortes altera nossas taxas de ataque previstas de 3,30% (IC95: 2,83% — 3,68%) e 10,60% (IC95: 8,84% — 12,10%) a 6,49% (IC95: 5,44% — 7,35%) e 19,90% (IC95: 16,40% — 22,80%) para São Paulo e Amazonas, respectivamente. Da mesma forma, as premissas em torno da extensão e variação da qualidade da saúde nos estados não alterou qualitativamente as conclusões alcançadas, a saber, os níveis de infecção na população até o momento são significativamente inferiores aos exigidos para a imunidade do rebanho.

#### Eficácia das medidas de controle

Tentativas de conter a disseminação do SARS-Cov-2 na comunidade se concentraram no desenvolvimento de várias intervenções não farmacêuticas (NPIs) que envolvem a redução do número de contatos feitos entre indivíduos [\[6\].](#_bookmark17) Exemplos comuns são fechamento de escolas, regras de distanciamento social, proibição de reuniões públicas e bloqueio completo. Interrompendo cadeias de transmissão e trazendo o número de reprodutibilidade _(Rt)_ abaixo de 1 é essencial para controlar o vírus e impedir o crescimento exponencial. Utilizando nossa estrutura, estimamos o número efetivo de reprodução variável no tempo em todos os estados brasileiros. Nós parametrizamos _Rt_ em função dos dados de mobilidade fornecidos pelo Google [\[2\]](#_bookmark13) — um pressuposto implícito dentro deste arcabouço é que as mudanças nos padrões de mobilidade podem estar relacionadas as mudanças na intensidade de transmissão, algo que é apoiado por pesquisas anteriores com dados extraídos ao examinar outros vírus respiratórios [\[18 ,](#_bookmark30) [10\].](#_bookmark21)

Descrevemos o número de reprodução efetiva variável no tempo _Rt_ para os 5 estados com o maior número atual de mortes: São Paulo (SP), Rio de Janeiro (RJ), Pernambuco (PE), Ceará (CE) e Amazonas (AM) (Figura [2).](#_bookmark1) As estimativas do número de reprodução inicial (_R_0) estão consistentemente na faixa de 3 a 4 em todos os estados, de acordo com as estimativas de transmissibilidade derivadas de dados europeus [\[7\].](#_bookmark18) Nossos resultados também mostram que _a medida Rt_ caiu drasticamente após a implementação das intervenções de saúde pública, com mobilidade com um declínio de 29% em média em todo o Brasil e _Rt_ com redução de 54% em média. Entretanto, em nenhum dos estados considerados, nossos resultados sugeriram que as medidas implementadas até o momento trouxeram _Rt_ abaixo de 1. Em contraste, em trabalho previamente publicado examinando Itália [\[19\],](#_bookmark31) onde medidas rigorosas incluindo lockdowns sociais têm sido implementadas, com mobilidade reduzida em 53% em relação à [linha](#_bookmark13) de [base \[2\],](#_bookmark13) e reduzindo _Tr_ por 85% em relação a _R_0 para trazê-lo significativamente inferior 1 Portanto, esses resultados sugerem que, na ausência de intervenções importantes adicionais, é esperado um crescimento substancial da epidemia nos 16 estados brasileiros considerados, levando ao agravamento da crise de saúde pública do COVID-19.

As mudanças no número efetivo de reprodução refletem alterações nos padrões de mobilidade e contato decorrentes de intervenções determinadas pelo governo, bem como mudanças no comportamento no nível individual. Em nossa estrutura, exploramos o impacto comparativo das reduções em diferentes tipos de mobilidade (em diferentes ambientes, incluindo local de trabalho, parques, residências e estações de trânsito) no número de reprodução efetivo (veja a Figura [3).](#_bookmark2) Os nossos resultados apoiam a ampla equivalência no efeito da redução em diferentes tipos de mobilidade e o seu impacto no correspondente _Rt_ (Figura [3).](#_bookmark2) Contudo, observamos os grandes intervalos credíveis associados a cada estimativa, o que limita nossa capacidade de identificar diferenças.

![](https://cdn-images-1.medium.com/max/800/1*x0ImiAg4wjkdvmWkKVZSew.png)

Figura 3: Tamanhos de efeito para covariáveis de mobilidade em _Rt_ .

#### Conclusão

Neste relatório, utilizamos um modelo bayesiano semi-mecanístico de transmissão COVID-19, calibrado usando dados de mortes relatadas em nível estadual, para inferir as características epidemiológicas da epidemia no Brasil até o momento. Os resultados apresentados aqui sugerem uma epidemia em andamento, na qual foram alcançadas reduções substanciais no número médio de reprodução por meio de intervenções não farmacêuticas. Entretanto, nossos resultados também mostram que, até o momento, as alterações na mobilidade não foram rigorosas o suficiente para reduzir o número de reprodução abaixo de 1. Portanto, prevemos o crescimento contínuo da epidemia em todo o Brasil e aumentos no número associado de casos e mortes, a menos que outras ações sejam tomadas.

Nossos resultados revelam ampla heterogeneidade nas taxas de ataque previstas entre estados, sugerindo que a epidemia está em um estágio muito mais avançado em alguns estados, em comparação com outros. Apesar dessa heterogeneidade, no entanto, em nenhum estado nenhum dos nossos resultados indica que a imunidade do rebanho esteja perto de ser alcançada, subestimando o estágio inicial da epidemia no Brasil atualmente e a perspectiva da situação se agravando, a menos que outras medidas de controle sejam implementadas. As taxas de ataque estimadas são calculadas a partir do número relatado de mortes. Esperamos que a apuração das mortes seja maior do que nos casos, um fenômeno atribuível à grande proporção de indivíduos infectados que geralmente se apresentam como assintomáticos, como por exemplo em [\[11\].](#_bookmark22)

Por causa dessa extensa fração assintomática e das limitações que envolvem os testes populacionais atuais, esperamos que nossas estimativas sejam mais precisas do que as taxas de ataque ingênuas estimadas a partir do número de casos relatados. É importante notar, no entanto, que estimar até que ponto as mortes são subnotificadas permanece muito difícil e, portanto, consideramos vários cenários diferentes de subnotificação de mortes em nossas análises. Embora as diferenças nessas premissas alterem nossas estimativas quantitativas da taxa de ataque, elas não alteram nossas conclusões qualitativas em torno do impacto das intervenções de controle e da proporção da população infectada até o momento abaixo do limiar necessário para a imunidade do rebanho. Além disso, consideramos a possibilidade de que a extensão da subnotificação de mortes por COVID-19 não tenha sido estacionária ao longo do tempo — especificamente, que o aumento na verificação de mortes por COVID-19 ao longo do tempo durante a fase inicial da epidemia possa levar a uma tendência crescente de _R_0 estimativas. Para testar a sensibilidade desse viés em _R_0 executamos nosso modelo com um forte viés com um baixo _R_0, mas descobrimos que nossas conclusões sobre _Rt >_ 1 não foram alteradas.

Nossos resultados em torno das taxas de ataque também são sensíveis a suposições sobre a taxa de mortalidade por infecção específica do estado (IFR) usada, uma quantidade impulsionada por uma diversidade de fatores diferentes, incluindo a estrutura demográfica da população do estado, o padrão de contatos sociais entre as faixas etárias, grupos e a qualidade/quantidade de assistência médica disponível (como oxigenoterapia de suporte e ventilação mecânica). Nossas IFRs estimadas para cada um dos estados brasileiros variam de 0,7% a 1,2%, refletindo diferenças substanciais entre os estados em sua estrutura demográfica e prestação de assistência médica. Como exemplo, a população do Amazonas é em média 7 anos mais jovem que São Paulo. Usando estimativas publicadas anteriormente do risco de mortalidade [\[17\],](#_bookmark29) essa diferença levaria a estimativas ingênuas das IFR que são mais baixas no Amazonas em comparação com São Paulo (0,38% e 0,70%, respectivamente). No entanto, esses estudos anteriores assumem um nível de assistência médica semelhante ao da China, respondendo pelos piores resultados de saúde que esperamos nos estados menos ricos do Brasil produz estimativas IFR de 0,70% para São Paulo e 0,72% no Amazonas. Embora as estimativas dessas IFRs sejam, em última análise, sensíveis a considerações sobre como a qualidade da assistência médica molda os padrões de mortalidade, os resultados apresentados são robustos às suposições que cercam a extensão da variação na qualidade da assistência médica (consulte o **Apêndice**). Também observamos que em todos os estados considerados e em todos os cenários, que o IFR que previmos é substancialmente mais alto do que o valor de 0,1% usado no trabalho recente de Galluci-Neto e colegas [\[5\].](#_bookmark16)

O quadro bayesiano semi-mecanicista utilizado também permite a quantificação do impacto de intervenções não farmacológicas sobre o número de reprodução, _Tr._ Nossos resultados sugerem reduções substanciais na estimativa do valor acoplado de _Rt_ em todos os estados seguintes introdução destas intervenções. Essa suposição se baseia no fato de que as reduções na transmissão podem ser determinadas com precisão a partir de reduções na mobilidade. Tal suposição foi confirmada em trabalhos anteriores, analisando o impacto das reduções na mobilidade da transmissão do vírus durante a epidemia chinesa [\[1\].](#_bookmark12) No entanto, é importante observar que o relacionamento que liga mobilidade e transmissão provavelmente será altamente dinâmico ao longo de uma epidemia, sendo modificado por outros fatores, como mudanças comportamentais relacionadas ao distanciamento físico e uso rotineiro de máscaras. .

Nossos resultados sugerem que, apesar das reduções, estas medidas só foram parcialmente bem sucedido na redução da transmissão — em todos os estados aqui considerados, o valor de _Rt_ permanece acima de 1, indicando que a transmissão permanece descontrolada e que, na ausência de medidas mais rigorosas que liderem as reduções adicionais na mobilidade, esse crescimento da epidemia continuará. Isso contrasta com os cenários europeus em que foram implementados bloqueios sociais, levando a reduções estimadas em _Rt_ abaixo de 1 [\[19\].](#_bookmark31) Tais reduções foram associadas a reduções substanciais nos padrões de mobilidade — em países como a Itália, onde foi exigido um bloqueio rigoroso, a mobilidade declinou em extensão muito maior do que a observada até o momento no Brasil. Por exemplo, os padrões de mobilidade em torno de supermercado/farmácia na Lombardia, uma das regiões mais atingidas da Itália, caiu em quase 75% em relação ao momento em que as medidas foram introduzidas (produzindo um _Rt_ estimada de 0,58). Por outro lado, em todo AM e São Paulo até à data, a redução máxima observada foi de apenas 18% e 21% respectivamente, produzindo _Rt_ estimado de 1,58 e 1,46, respectivamente. De maneira geral, embora nosso trabalho sugira que as medidas implementadas até o momento tenham impactado a transmissão, elas também destacam sua insuficiência para controlar a transmissão e a necessidade de medidas adicionais de limitação de contatos, além do que está sendo implementado atualmente, para reduzir o número de reprodução. no Brasil para menos de 1.

No geral, nossos resultados revelam que, apesar da extensa disseminação e transmissão do vírus por todo o país, a extensão da infecção na população em geral permanece baixa e muito aquém do nível necessário para a imunidade do rebanho. Esse resultado é robusto em relação às suposições em torno do IFR associado a cada estado e à extensão da subnotificação que assumimos nos dados de óbitos disponíveis. De maneira mais ampla, nossos resultados sugerem que, na ausência da introdução de mais medidas de controle que coíbam mais fortemente a transmissão, o Brasil enfrenta a perspectiva de uma epidemia que continuará a crescer exponencialmente.

#### Reconhecimentos

Este trabalho utilizou o Serviço Nacional HPC Cirrus do Reino Unido de Nível 2 da EPCC (http://www.cirrus.ac.uk), financiado pela Universidade de Edimburgo e pelo EPSRC (EP/P020267/1).

Gostaríamos de agradecer ao Amazon AWS e Microsoft Azure pelos créditos computacionais.

Gostaríamos de agradecer à equipe de desenvolvimento da Stan por seu apoio constante.

Agradecemos ao Conselho de Pesquisa Médica e à FAPESP (MR/S0195/1).

![](https://cdn-images-1.medium.com/max/800/1*1TBhX9bMVuIinTIshEcK8A.png)

Figura 4: A mobilidade covariável vem dos relatórios de mobilidade do Google para São Paulo (SP), Rio de Janeiro (RJ), Pernambuco (PE), Ceará (CE), Amazonas (AM).

* * *

### Apêndice

#### Modelo

Adotamos o modelo bayesiano semi-mecanicista de [\[7\]](#_bookmark18) para estimar a intensidade de transmissão e as taxas de ataque da COVID-19 condicionadas ao número relatado de mortes. O código fonte do nosso trabalho pode ser encontrado em [https://github.com/ImperialCollegeLondon/covid19model](https://github.com/ImperialCollegeLondon/covid19model) . Para o modelo brasileiro em nível estadual, foram incluídas quatro covariáveis relacionadas à mobilidade do Google. Elas descrevem a redução ou o aumento da mobilidade em áreas residenciais (_k_ = 1), estações de trânsito (_k_ = 2), parques (_k_ = 3) e a média entre compras e farmácias, áreas de varejo e de lazer e locais de trabalho (_k_ = 4) , que são calculados em média devido à colinearidade.

Tal como adotadas na recente relatório publicado, uma análise subnacional para a Itália [\[19\],](#_bookmark31) a reprodução do número _Rt_ variável ao longo do tempo é modelado como função dos dados de mobilidade do Google. Os parâmetros são estimados em conjunto para 16 estados brasileiros para avaliar se as intervenções realizadas até o momento foram capazes de reduzir _Rt_ abaixo para 1. O conjunto parcial e total foi adotado, mas produziu resultados quase idênticos.

Estes nos indicam _Ik, t, m_ onde o _k-th_ é o indicador de mobilidade do Google, no momento _t_ para o estado brasileiro _m_ . O número de reprodução variável no tempo para o estado brasileiro _m_ , _Rt, m_ , é modelado por:

![](https://cdn-images-1.medium.com/max/800/1*7YIw8ujPfdG4zp3Fg4QNRw.png)

Onde _λ_ — 1 denota a função logística, _αk_ os efeitos compartilhados entre os estados _M_ e _βm, k_ específicos do estado efeitos. As distribuições anteriores para o modelo de conjunto parcial foram definidas como:

> _αk_ ∼ N(0_,_ 0_._5)

> _βm,k_ ∼ N(0_, γ_)_,_ with _γ_ ∼ N(0_,_ 0_._5)_,_

enquanto a distribuição anterior para _R_0_, m_ foi:

> _R_0_,m_ ∼ N(3_._28_,_ |_κ_|)

> _κ_ ∼ N(0_,_ 0_._5)

com _κ_ sendo o mesmo entre todos os estados de forma a compartilhar informações sobre a variabilidade de _R_0 _, m_ . O valor de 3_._28 já foi usado em [\[7,](#_bookmark18) [19\] com](#_bookmark31) base em [\[12\].](#_bookmark24)

#### Cenários de subnotificação de óbitos

Neste trabalho, uma extensão do modelo hierárquico bayesiano semi-mecanicista de [\[7\]](#_bookmark18) é adotada para refletir a incerteza sobre mortes subnotificadas. Abordamos o efeito da subnotificação no conjunto de dados, definindo uma distribuição anterior à subnotificação de morte _ψ_ ∼ _beta_ (_θ, ρ_). Os hiperparâmetros da densidade beta são fixos para refletir no modo a taxa de subnotificação desejada, veja a Figura [5.](#_bookmark5)

Como no modelo original [\[7\],](#_bookmark18) as mortes diárias _Dt, m_ são observadas nos dias _t_ ∈ { 1 _,. . . , n_ } e estados brasileiros _m_ ∈ { 1 _,. . . , M_ } . Essas mortes diárias são modeladas usando uma função de valor real positiva _dt, m_ = E \[_Dt, m ψ_\] que representa o número esperado de mortes atribuídas à COVID-19, levando em consideração a taxa subnotificada designada _ψ_ . Presume-se que as mortes diárias _Dt, m_ sigam um binômio negativo

![](https://cdn-images-1.medium.com/max/800/1*UKRTFfUoyeQJ9U7OhEuLhw.png)

distribuição com média _dt, me_ com variância _dt, m_ + _t, m_ , onde _φ_ segue uma distribuição normal, isto é, onde N(_µ, σ_) denota uma distribuição normal com média _µ_ e desvio padrão _σ_. O resto do modelo matemático segue o manuscrito original [\[7\],](#_bookmark18) introduzindo o novo recurso de subnotificar a taxa de mortalidade _ψ_ nas mortes diárias.

O efeito da subnotificação de mortes na taxa de ataque é mostrado na Tabela [2](#_bookmark4) para três cenários adicionais: 33% e 50% e 67% de subnotificação. Os cenários de subnotificação são implementados escalando os dados de óbitos relatados por distribuições beta com médias (0.67, 0.5, 0.33) e, em cada instância, variação 0,004. As distribuições são mostradas na Figura [5.](#_bookmark5)

![](https://cdn-images-1.medium.com/max/800/1*jYfVIx6jinXGE3FSXfd5PQ.png)

Tabela 2: Taxas de ataque estimadas para cenários de subnotificação de mortes de 0%, 33%, 50% e 67%.

![](https://cdn-images-1.medium.com/max/800/1*Q07zBvNH8AT3kkF63W9Img.png)

Figura 5: Subnotificação de distribuições anteriores.

#### Casos e Rt de 16 estados

O casos, óbitos e _R_t estimada para todos os 16 estados considerados no nosso modelo de articulação, São Paulo (SP), Rio de Janeiro (RJ), Pernambuco (PE), Ceará (CE), Amazonas (AM), Pará (PA) , Maranhão (MA), Bahia (BA), Espírito Santo (ES), Paraná (PR), Minas Gerais (MG), Paraíba (PB), Rio Grande do Sul (RS), Rio Grande do Norte (RN), Alagoas (AL), Santa Catarina (SC), são mostrados na Figura [6.](#_bookmark6)

![](https://cdn-images-1.medium.com/max/800/1*GQy4MMG4Zc_JSTh1PeZzDw.png)

Figura 6: Estimativas de infecções, mortes e _Rt_ para todos os 16 estados considerados no modelo.

#### Sensibilidade total e parcial do conjunto

Os resultados deste trabalho foram produzidos com o agrupamento parcial de coeficientes covariáveis. Os resultados do conjunto completo são mostrados na Tabela [3.](#_bookmark7) Não há diferença substancial.

![](https://cdn-images-1.medium.com/max/800/1*i5tBHmA0sdYBySpUa6tFZw.png)

Tabela 3: A taxa de ataque (RA) por estado, com metade do conjunto de covariáveis e também com o conjunto completo, para mobilidade entre estados.

#### Sensibilidade do início à morte

A análise de sensibilidade da distribuição do início à morte para a taxa de ataque é mostrada na Tabela [4.](#_bookmark8) Os resultados não são substancialmente afetados pela perturbação da distribuição do início até a morte em mais ou menos 10%.

#### Cálculo de IFR e análise de sensibilidade

As estimativas da IFR esperada em diferentes estados são derivadas de estimativas publicadas anteriormente de padrões de mistura em um cenário da América Latina [\[3\],](#_bookmark14) juntamente com estimativas da transmissibilidade do vírus (o número de reprodução básico, Ro) derivado de cenários europeus [\[7\]](#_bookmark18) e de estimativas de severidade da doença.

![](https://cdn-images-1.medium.com/max/800/1*661GeYRbQouURRDKSmaBMw.png)

Tabela 4: A taxa de ataque (RA) com média de distribuição do início à morte diminuiu 10% para 16,9 dias e aumentou 10% para 20,7 dias.

Derivada da epidemia chinesa [\[15\]](#_bookmark27) e posteriormente modificada para corresponder aos dados emergentes da epidemia no Reino Unido [\[7\].](#_bookmark18) Além disso, modificamos essas estimativas de gravidade da doença (especificamente a _Infection Fatality Ratio_ ou IFR) para dar conta da substancial heterogeneidade que esperamos observar nos resultados de saúde nos estados devido à variação na qualidade e capacidade da assistência médica, cujos detalhes são descritos abaixo.

Em todos os estados considerados nesta análise, a renda média varia de entre **~$300** em São Paulo até **~$100** no [Maranhão \[8\]](#_bookmark19). É provável que tais disparidades de renda resultem em disparidades significativas na qualidade e extensão dos cuidados de saúde disponíveis. Motivados por isso, modificamos as IFRs específicas do estado usadas de maneira dependente da renda. Especificamente, assumimos que o estado de maior renda (São Paulo) possui uma qualidade de atendimento idêntica à observada na China (e, portanto, motivada pelas estimativas apresentadas em Verity et [al. \[15\]),](#_bookmark27) e que o estado com a menor renda (Maranhão) teve resultados de saúde significativamente piores — mais semelhantes aos que seriam esperados em um país de baixa renda média (ver Walker et al., [\[20\]](#_bookmark32) para obter mais detalhes sobre como as diferenças na qualidade da saúde entre os grupos impactam nos resultados). Detalhes sobre as probabilidades de mortalidade por infecção específica por idade para esses dois estados são fornecidos na Tabela [5.](#_bookmark9) Para os outros estados onde a renda fica entre a do Maranhão e a de São Paulo, interpolamos linearmente as probabilidades de fatalidade de infecções específicas por idade com base na renda média em nível estadual [\[8\]](#_bookmark19). Essas probabilidades de mortalidade de infecções específicas por idade são então combinadas com previsões da distribuição etária das infecções para produzir uma IFR geral, específica do estado.

![](https://cdn-images-1.medium.com/max/800/1*iFL8kGJCEfVdm5XN58YCzQ.png)

Tabela 5: IFR por idade para São Paulo e Maranhão.

No entanto ainda existe uma incerteza substancial nesses cálculos de IFR e, motivados por isso, realizamos uma análise de sensibilidade explorando os impactos de diferentes escolhas de matriz de mistura (Peru x Reino Unido) e de premissas relacionadas à qualidade da saúde (ou seja, o método descrito acima ou assumindo que todos os estados são capazes de fornecer um nível de assistência médica igual ao observado durante a epidemia chinesa). Os resultados dessas análises de sensibilidade são mostrados na Tabela [6](#_bookmark10) para diferentes IFRs. Embora as suposições sobre a qualidade da assistência à saúde afetem as previsões quantitativas da IFR e as taxas de ataque previstas associadas, elas não alteram qualitativamente nossas conclusões sobre a imunidade do rebanho e a falta de infecções até o momento suficientes para alcançá-la.

![](https://cdn-images-1.medium.com/max/800/1*HI0IyulY70wiLGmKtEp0iQ.png)

Tabela 6: As taxas de ataque %(RA) estimadas usando diferentes taxas de mortalidade por infecção (IFR) com ponderação populacional no nível brasileiro e usando: i) matriz de contato no Reino Unido, ii) matriz de contato no Peru, iii) matriz de contato no Reino Unido com piores resultados de hospitalização, iv) Peru matriz de contato com piores resultados de hospitalização.

![](https://cdn-images-1.medium.com/max/800/1*QDHyrpwbF7ur0bfTKeSjuw.png)

Tabela 7: Razões de mortalidade por infecção (IFR) com ponderação populacional no nível estadual brasileiro usando: i) matriz de contato no Reino Unido, ii) matriz de contato no Peru, iii) matriz de contato no Reino Unido com piores resultados de hospitalização; iv) matriz de contato no Peru com piores resultados de hospitalização.

#### Dados

Como entrada de mortes e casos relatados, nosso modelo utiliza atualizações diárias de uma iniciativa governamental financiada pelo Ministério da Saúde do Brasil, chamada _Painel Coronavírus_ , disponível em [https://covid.saude.gov.br](https://covid.saude.gov.br/). Nesses dados, o número de mortes atribuíveis à COVID-19 é segmentado por nível estadual. Possíveis subnotificações nos dados de óbito são abordadas no modelo matemático descrito na Seção [6.1.](#_bookmark3)

Para contagens populacionais, usamos a projeção de 2020 por estado, publicada pelo _Instituto Brasileiro de Geografia e Estatística_ [(IBGE). \[9\]](#_bookmark20)

Os dados do relatório de mobilidade do Google ([https://www.google.com/covid19/mobility/](https://www.google.com/covid19/mobility/)) foram usados para estimar os efeitos de diferentes intervenções ao longo do tempo. O relatório fornece a porcentagem estimada de mudança nos movimentos de locais como varejo e recreação, compras e farmácias, parques, estações de trânsito, locais de trabalho e residenciais em comparação com uma linha de base. Essa linha de base corresponde ao valor mediano de cada dia da semana, usando dados de 3 de janeiro a 6 de fevereiro de 2020. Mais detalhes podem ser encontrados na Figura [7.](#_bookmark11)

Em relação aos dados da intervenção, os valores levados em consideração são as datas em que as intervenções foram efetivamente aplicadas, mesmo sendo incentivadas em datas anteriores.

![](https://cdn-images-1.medium.com/max/800/1*Ef7y29Zkoi6vecCrKA4I9g.png)

Figura 7: Série cronológica de mobilidade do Google para todos os estados brasileiros com suas respectivas intervenções de 15 de fevereiro a 26 de abril de 2020.

![](https://cdn-images-1.medium.com/max/800/1*y6uhfzy2Z1rU8HRkTQVYRQ.png)

Tabela 8: Intervenções não farmacêuticas por estado, adaptadas de [\[4](#_bookmark15) \].

#### Referências

\[1\] KEC Ainslie et al. “Evidence of initial success for China exiting COVID-19 social distancing policy after achieving containment \[version 1; peer review: awaiting peer review\]”. In: _Wellcome Open Research_ 5.81 (2020).

\[2\] Ahmet Aktay et al. “Google COVID-19 Community Mobility Reports: Anonymization Process De- scription (version 1.0)”. In: _ArXiv_ abs/2004.0 (2020).

\[3\] Hector Verastegui Kathryn M. Edwards Ana I. Gil Claudio F. Lanata Niel Hens. Carlos G. Grijalva Nele Goeyvaerts. “Peruvian social contact data (Version 1.0) \[Data set\]. Zenodo.” In: (2017). URL: [http://doi.org/10.5281/zenodo.1215891](http://doi.org/10.5281/zenodo.1215891).

\[4\] “COVID-19 Observatory in Latin America and the Caribbean”. In: URL: [https://www.cepal.](https://www.cepal.org/en/topics/covid-19) [org/en/topics/covid-19](https://www.cepal.org/en/topics/covid-19).

\[5\] Samy Dana et al. “Brazilian Modeling of COVID-19 (BRAM-COD): a Bayesian Monte Carlo approach for COVID-19 spread in a limited data set context”. In: _medRxiv_ (2020). eprint: [https://www.](https://www.medrxiv.org/content/early/2020/05/03/2020.04.29.20081174.full.pdf) [medrxiv.org/content/early/2020/05/03/2020.04.29.20081174.full.pdf](https://www.medrxiv.org/content/early/2020/05/03/2020.04.29.20081174.full.pdf). URL: [https://www.medrxiv.org/content/early/2020/05/03/2020.04.29.20081174](https://www.medrxiv.org/content/early/2020/05/03/2020.04.29.20081174).

\[6\] NM Ferguson et al. _Impact of non-pharmaceutical interventions (NPIs) to reduce COVID-19 mor- tality and healthcare demand (Report 9)_. Tech. rep. URL: [https://www.imperial.ac.uk/](https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/news--wuhan-coronavirus/) [mrc-global-infectious-disease-analysis/news — wuhan-coronavirus/](https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/news--wuhan-coronavirus/)(visited on 03/25/2020).

\[7\] Seth Flaxman et al. “Report 13: Estimating the number of infections and the impact of non- pharmaceutical interventions on COVID-19 in 11 European countries”. In: (2020). URL: [https://doi.org/10.25561/77731](https://doi.org/10.25561/77731).

\[8\] “IBGE divulga o rendimento domiciliar per capita 2019”. In: (). URL: [https://agenciadenoticias.](https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/26956-ibge-divulga-o-rendimento-domiciliar-per-capita-2019) [ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/](https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/26956-ibge-divulga-o-rendimento-domiciliar-per-capita-2019) [26956-ibge-divulga-o-rendimento-domiciliar-per-capita-2019](https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/26956-ibge-divulga-o-rendimento-domiciliar-per-capita-2019).

\[9\] “IBGE Projeções da População”. In: (). URL: [https://www.ibge.gov.br/estatisticas/](https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?&amp;t=resultados) [sociais/populacao/9109-projecao-da-populacao.html?=&t=resultados](https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?&amp;t=resultados).

\[10\] Moritz U. G. Kraemer et al. “The effect of human mobility and control measures on the COVID-19 epidemic in China”. In: _Science_ 368.4690 (2020).

\[11\] Enrico Lavezzo et al. “Suppression of COVID-19 outbreak in the municipality of Vo, Italy”. In: _medRxiv_ (2020).

\[12\] Ying Liu et al. “The reproductive number of COVID-19 is higher compared to SARS coronavirus”. In: _Journal of Travel Medicine_ 27.2 (Feb. 2020). taaa021. ISSN: 1195–1982. eprint: [https://](https://academic.oup.com/jtm/article-pdf/27/2/taaa021/32902430/taaa021.pdf) [academic.oup.com/jtm/article-pdf/27/2/taaa021/32902430/taaa021.pdf](https://academic.oup.com/jtm/article-pdf/27/2/taaa021/32902430/taaa021.pdf). URL: [https://doi.org/10.1093/jtm/taaa021](https://doi.org/10.1093/jtm/taaa021).

\[13\] World Health Organisation. “WHO, Coronavirus disease 2019 (COVID-19) Situation Report — 107”. In: (2020). URL: [https://www.who.int/emergencies/diseases/novel-coronavirus-](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports) [2019/situation-reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports).

\[14\] “Painel Coronavírus”. In: (). URL: [https://covid.saude.gov.br/](https://covid.saude.gov.br/).

\[15\] Ilaria Dorigatti Peter Winskill Charles Whittaker Natsuko Imai Gina Cuomo-Dannenburg Hayley Thompson Patrick G T Walker Han Fu Amy Dighe Jamie T Griffin Marc Baguelin Sangeeta Bhatia Adhiratha Boonyasiri Anne Cori Zulma Cucunubá Rich FitzJohn Katy Gaythorpe Will Green Arran Hamlet Wes Hinsley Daniel Laydon Gemma Nedjati-Gilani Steven Riley Sabine van Elsland Erik Volz Haowei Wang Yuanrong Wang Xiaoyue Xi Christl A Donnelly Azra C Ghani Neil M Ferguson Robert Verity Lucy C Okell. “Estimates of the severity of coronavirus disease 2019: a model-based analysis”. In: _Lancet Infectious Diseases_ (2020).

\[16\] William Marciel de Souza et al. “Características epidemiológicas e clínicas da fase inicial da epidemia de COVID-19 no Brasil”. In: _medRxiv_ (2020). eprint: [https://www.medrxiv.org/](https://www.medrxiv.org/content/early/2020/04/29/2020.04.25.20077396.full.pdf) [content/early/2020/04/29/2020.04.25.20077396.full.pdf](https://www.medrxiv.org/content/early/2020/04/29/2020.04.25.20077396.full.pdf). URL: [https://www.](https://www.medrxiv.org/content/early/2020/04/29/2020.04.25.20077396) [medrxiv.org/content/early/2020/04/29/2020.04.25.20077396](https://www.medrxiv.org/content/early/2020/04/29/2020.04.25.20077396).

\[17\] Robert Verity et al. “Estimates of the severity of COVID-19 disease”. In: _Lancet Infect Dis_ in press (2020).

\[18\] Julia Gog Ottar N. Bjørnstad Stephen Kissler Lone Simonsen Bryan T. Grenfell Cécile Viboud Vivek Charu Scott Zeger. “Human mobility and the spatial transmission of influenza in the United States”. In: _PLOS Computational Biology_ (2017).

\[19\] Michaela A. C. Vollmer et al. “Report 20: Using mobility to es mate the transmission intensity of COVID-19 in Italy: A subnational analysis with future scenarios”. In: (2020).

\[20\] P. G. T. Walker et al. _Report 12: The Global Impact of COVID-19 and Strategies for Mitigation and Suppression_. URL: [https://www.imperial.ac.uk/mrc-global-infectious-disease-](https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/news--wuhan-coronavirus/) [analysis/news — wuhan-coronavirus/](https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/news--wuhan-coronavirus/)

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [May 10, 2020](https://medium.com/p/979133778c51).

[Canonical link](https://medium.com/@paulopilotti/relat%C3%B3rio-21-estimativa-de-casos-da-covid-19-e-do-n%C3%BAmero-de-reprodu%C3%A7%C3%A3o-no-brasil-979133778c51)

Exported from [Medium](https://medium.com) on April 19, 2025.
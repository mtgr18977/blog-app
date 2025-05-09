---
title: "Características epidemiológicas da nova infecção por coronavírus: Uma análise estatística dos…"
date: 2025-04-19T17:39:36.176Z
tags: []
---

Natalie M. Linton1, Tetsuro Kobayashi1̣, Yichi Yang, Katsuma Hayashi, Andrei R. Akhmetzhanov, Sung-mok Jung, Baoyin Yuan, Ryo Kinoshita…

* * *

### Características epidemiológicas da nova infecção por coronavírus: Uma análise estatística dos dados de casos disponíveis ao público

* * *

Natalie M. Linton1_,_ Tetsuro Kobayashi1̣, Yichi Yang, Katsuma Hayashi, Andrei R. Akhmetzhanov, Sung-mok Jung, Baoyin Yuan, Ryo Kinoshita, Hiroshi Nishiura  
_Graduate School of Medicine, Hokkaido University, Sapporo, Hokkaido, Japan  
_CREST_, Agência de Ciência e Tecnologia do Japão, Honcho 4–1–8, Kawaguchi, Saitama 332–0012, Japão_

Esses autores contribuíram igualmente para este trabalho.

#### Resumo

A disseminação geográfica de pessoas infectadas com o novo coronavírus de 2019 (2019-nCoV) oferece uma oportunidade de estudar a história natural de um vírus recém-emergido. Os eventos de migração colocam os viajantes em risco de infecção pela duração de sua exposição a uma área onde se sabe que a transmissão ocorre. Usando dados publicamente disponíveis da epidemia em curso de 2019-nCoV, onde as datas dos eventos foram compartilhadas, o presente estudo estimou o período de incubação e outros intervalos de tempo que governam a interpretação da dinâmica epidemiológica das infecções por 2019-nCoV. Nossos resultados mostram que os períodos de incubação caem no intervalo de dois a nove dias, com 95% de confiança, e o período médio de incubação é de 4–5 dias quando aproximados, usando a distribuição Weibull, que foi o modelo de melhor ajuste. O tempo mediano desde o início da doença até a hospitalização foi estimado em 3 dias. Com base na estimativa de 95% do período de incubação, recomendamos que a duração do isolamento e da quarentena seja de pelo menos nove dias. Observamos também que o atraso médio de 13,8 dias entre o início da doença e a morte deve ser considerado ao estimar o risco de fatalidade deste novo vírus.

Palavras-chave: epidemiologia; período de incubação; vírus; distribuição; doenças infecciosas emergentes

#### 1 Introdução

Em 24 de janeiro de 2020, 1287 casos novos de infecções por coronavírus (2019-nCoV) foram relatados na China continental, causando 41 mortes. Embora inicialmente se pensasse que as infecções no primeiro grupo de casos deviam-se principalmente à transmissão zoonótica (de animal para humano) — possivelmente devido a animais silvestres vendidos no mercado atacadista local de frutos do mar \[1,2 \] — o crescimento da incidência de casos em Wuhan após o fechamento do mercado e a exportação de casos em toda a China e internacionalmente mostra evidências convincentes de aumento da transmissão secundária de homem para homem, alimentada pela migração humana. Casos já foram detectados em muitas outras partes do mundo \[3\], incluindo outros países asiáticos, Estados Unidos e França. Essa expansão geográfica além do epicentro inicial de Wuhan oferece uma oportunidade para estudar a infecção da história natural 2019-nCoV, pois os eventos de migração limitam as janelas de risco ao intervalo de tempo durante o qual a pessoa viajou para a área onde a exposição poderia ocorrer.

O período de incubação é definido como o tempo entre a infecção e o início da doença. O conhecimento do período de incubação de uma doença infecciosa transmitida diretamente é fundamental para determinar o período de tempo necessário para a restrição de movimentos de indivíduos saudáveis (isto é, período de quarentena) \[5, 6\]. Portanto, realizamos a estimativa do período de incubação para o 2019-nCoV para avaliar quanto tempo as pessoas expostas devem ser monitoradas. A distribuição do período de incubação também pode ajudar a entender a infecciosidade relativa do 2019-nCoV ao longo da infecção.

Outra questão epidemiológica importante nas doenças infecciosas são os atrasos inerentes ao tempo que regem cada evento de infecção, por exemplo, hospitalização e morte, que informam a dinâmica temporal das epidemias. Ou seja, a curva epidêmica baseada na data da internação de cada caso é melhor interpretada e analisada pela compreensão do tempo desde o início dos sintomas até a hospitalização. Um estudo clínico publicado já mostrou que o tempo médio de atraso entre o início da doença e a admissão é de aproximadamente 7 dias\[7\], mas as variações dos pacientes devem ser cuidadosamente monitoradas. O tempo entre a hospitalização e a morte também é fundamental para evitar a subestimação do risco de fatalidade dos casos \[8\].

Usando dados publicamente disponíveis da epidemia em andamento de 2019-nCoV com datas conhecidas de eventos, o presente estudo tem como objetivo estimar o período de incubação e outros intervalos de tempo que governam a interpretação da dinâmica epidemiológica de 2019-nCoV. Realizamos a estimativa de pontos percentuais usando um método de inicialização.

#### 2 Métodos

#### 2.1 Dados epidemiológicos

Recuperamos informações sobre casos com infecção e diagnóstico confirmados para 2019-nCoV fora do epicentro da província de Hubei, na China, com base em relatórios oficiais de institutos governamentais. Coletamos os dados diretamente de sites governamentais ou de sites de notícias que citaram diretamente declarações governamentais. Os dados foram coletados em tempo real e, portanto, podem ser atualizados à medida que mais detalhes sobre os casos se tornam publicamente disponíveis. Os dados organizados estão disponíveis como material suplementar on-line (tabela S1). A atualização mais recente do conjunto de dados foi em 25 de janeiro de 2020 para os casos relatados até 24 de janeiro.

Especificamente, coletamos as datas de exposição (entrada e/ou saída de Wuhan), início da doença, hospitalização e morte. Os casos incluíram residentes de outros locais que viajaram para Wuhan, bem como residentes de Wuhan que foram diagnosticados fora de Wuhan e relatados pelos governos dos locais onde a doença foi detectada. Assim, estimamos o período de incubação (i) examinando visitantes de Wuhan e (ii) examinando visitantes e residentes de Wuhan que foram diagnosticados fora da província de Hubei. O primeiro pode ser mais preciso na definição do intervalo de exposição, mas o tamanho da amostra é maior para o último.

#### 2.2 Modelo estatístico

Utilizamos as datas de três pontos críticos do curso da doença (datas de início, hospitalização e morte) para calcular quatro intervalos de tempo: os períodos (a) da exposição ao início da doença (período de incubação), (b) do início da doença à hospitalização, (c) do início da doença à morte e (d) da hospitalização à morte. Todos esses intervalos foram sujeitos a uma função de probabilidade duplamente censurada por intervalos para estimar os valores dos parâmetros e que pode ser escrita como:

![](https://cdn-images-1.medium.com/max/800/1*aAvx4v34N4WwejbafMKksw.png)

Aqui, por exemplo, no caso de (a), _g_(_._) é a probabilidade da função densidade de (a) (p.d.f.) de exposição após uma distribuição uniforme, e _f_ (_._)é a p.d.f. do período de incubação independente de _g_(_._). D representa um conjunto de dados entre todos os casos observados _i_. A exposição e o início dos sintomas obedecem aos limites superior e inferior, (_ER, EL_) e (_SR, SL_), respectivamente. Por exemplo, se a data de início da doença é de um dia, o seu respectivo intervalo é (_SR, SR_ + 1), onde _SR_ é a data de início comunicada para a doença.

Realizamos um método de autoinicialização, com base na reamostragem de casos, para calcular os 95% de confiança nos intervalos (IC). Da mesma forma, conseguimos calcular as distribuições de (b), © e (d). Também assumimos que a função densidade de probabilidade _f_ (_._) segue três distribuições diferentes, ou seja, distribuições lognormal, Weibull e gama. O Critério de Informação de Akaike (AIC) foi utilizado para identificar o melhor modelo de ajuste para cada intervalo de tempo.

#### 3\. Resultados

A Tabela 1 mostra os percentis estimados e os valores de AIC para cada combinação de intervalo de tempo e distribuição. Para as estimativas do período de incubação, o melhor ajuste foi encontrado com a distribuição Weibull para os dados, excluindo e incluindo os residentes de Wuhan. O período médio de incubação usando a distribuição Weibull foi estimado em 4,6 dias (IC 95%: 3,3, 5,7) ao excluir residentes de Wuhan (_n_ = 12) e 5,0 dias (IC 95%: 4,1, 5,8) ao incluir residentes de Wuhan (_n_ =31) A Figura 1 mostra a função de distribuição cumulativa do período de incubação e os percentis 5 e 95 são mostrados além da mediana. Os percentis 95 foram estimados em 7,3 dias (IC 95%: 5,6 e 8,4) dias para não residentes em Wuhan e em 7,6 dias (IC 95%: 6,0 e 8,8) quando incluindo residentes em Wuhan.

![](https://cdn-images-1.medium.com/max/800/1*UNv5tbOxv7xX9YNqaD5feQ.png)

Tabela 1. Estimativas de inicialização a partir de 1000 iterações. Todos os casos foram diagnosticados com 2019-nCoV positivo em laboratórios fora da província de Hubei. WR: moradores de Wuhan. AIC = _−_2 _·_ _L_(_θ∗_; D) + 2,6 _·_ ( todas as estimativas tinham 6 parâmetros). Intervalos para início, hospitalização e óbito calculados à esquerda = data relatada; direita = data relatada + 1 dia. As células sombreadas indicam o modelo com o valor mínimo de AIC.

A mediana do tempo entre o início da doença e a hospitalização foi estimada em 2,7 dias (IC 95%: 1,7, 4,2), usando a distribuição gama, que produziu o menor valor de AIC (Tabela 1). A Figura 2A mostra que a função densidade p.d.f. correspondente ao tempo desde o início dos sintomas e a hospitalização até a morte também foram computados (Tabela 1 e Figura 2BC). Os modelos de melhor ajuste para cada intervalo foram as distribuições lognormal e Weibull, respectivamente. O tempo mediano do início ao óbito foi de 13,8 dias (IC 95%: 11,8, 16,0) e o tempo médio da internação até o óbito foi de 8,3 dias (IC 95%: 6,4, 10,5).

![](https://cdn-images-1.medium.com/max/800/1*JcjxLpm0v0-TsF-tm40s0w.png)

Figura 1. Distribuição cumulativa estimada para o período de incubação do 2019-nCoV a partir de casos de surtos relatados em janeiro de 2020. Os dados são de relatos de casos públicos publicados por governos fora da província de Hubei, China. Esquerda: exclui os residentes de Wuhan (província de Hubei) das estimativas. Direita: inclui os residentes de Wuhan nas estimativas.

![](https://cdn-images-1.medium.com/max/1200/1*KGOXxEvazut6tPVOiNrbPA.png)

Figura 2. Distribuições de probabilidade de tempo desde o início ou a hospitalização até a hospitalização ou morte dos casos do surto de 2019-nCoV relatados até 24 de janeiro de 2020. (A) Densidade de probabilidade do tempo desde o início da doença até a hospitalização em dias definidos para a distribuição gama mais adequada. (B) Densidade de probabilidade do tempo desde o início da doença até a morte em dias definidos para a distribuição lognormal mais adequada. © Densidade de probabilidade do tempo desde a hospitalização até a morte em dias definidos para a distribuição Weibull mais adequada.

#### 4\. Discussão

Nossos resultados mostram que 95% dos períodos de incubação caem no intervalo de 2 a 9 dias, e o período médio de incubação foi de 4 a 5 dias quando a distribuição Weibull foi usada como o modelo mais adequado. O tempo mediano desde o início da doença até a hospitalização foi estimado em 3 dias. O tempo médio entre o início da doença e a morte foi de 13,8 dias, cujo atraso é essencial para a estimativa apropriada do risco de fatalidade do caso para 2019-nCoV \[10\].

O presente estudo avança a discussão pública sobre infecções por 2019-nCoV, pois o período de incubação e o tempo entre o início da doença e a morte foram explicitamente estimados usando dados disponíveis ao público. Nosso período médio estimado de incubação do 2019-nCoV é comparável aos valores medianos conhecidos do período de incubação para síndrome respiratória aguda grave (SARS) — estimada em 4,0–6,4 dias \[8, 11, 12\]. Além de mostrar empiricamente a comparabilidade com a SARS, o presente estudo também mostrou que o percentil 95 do período de incubação é de 7 a 8 dias, indicando que um período de quarentena de nove dias poderia garantir principalmente a ausência de doença entre indivíduos saudáveis expostos.

O tempo entre o início da doença e a morte também é comparável ao da SARS \[8\], e o atraso médio de 13,8 dias que calculamos indica que a estimativa bruta da razão entre o número acumulado de mortes e a dos casos tende a resultar em subestimação do risco de fatalidade dos casos, especialmente durante o estágio inicial da epidemia. Durante a epidemia de SARS em Hong Kong, 2003, o tempo entre o início da doença e a hospitalização foi reduzido em função do tempo do calendário, refletindo que a prática de rastreamento de contatos havia trabalhado gradualmente. Além disso, o estudo sobre influenza pandêmica H1N1–2009 demonstrou uma associação negativa entre o tempo de início da doença, a hospitalização e o número básico de reprodução, ou seja, o número médio de casos secundários gerados por um único caso primário em uma população totalmente suscetível \[13\] Embora nossa estimativa tenha sido de aproximadamente 3 dias, consistente com a alta mortalidade no ambiente hospitalar, isso pode ser reduzido no futuro curso da epidemia.

Existem várias limitações do presente estudo. Primeiro, o conjunto de dados se baseia em informações publicadas e a data do evento definido (por exemplo, a data do início da doença) depende da tomada de decisão de cada autoridade governamental. Dada a novidade da doença, é possível que o início dos sintomas e outros dados de eventos tenham sido tratados de maneira diferente entre as jurisdições (por exemplo, o início foi a data da febre ou a data da dispneia?). Segundo, o tamanho da amostra era limitado e a variação provavelmente era enviesada. Terceiro, não fomos capazes de examinar a heterogeneidade das estimativas por diferentes atributos dos casos (por exemplo, idade e grupos de risco).

Enquanto várias tarefas futuras permanecem, acreditamos que o presente estudo tenha sido bem-sucedido em esclarecer as características epidemiológicas da nova infecção por coronavírus. A duração da quarentena deve ser de pelo menos nove dias, e o tempo decorrido entre o início da doença e a morte de catorze dias deve ser tratado ao estimar o risco de fatalidade do caso.

Material suplementar: Tabela S1 Datas do evento para os casos incluídos na análise.

Contribuições dos autores: NML, TK, ARA e HN conceberam o estudo e participaram do desenho do estudo. Todos os autores auxiliaram na coleta dos dados. NML, TK e HN analisaram os dados e TK, HN, NML e YY redigiram o manuscrito. Todos os autores editaram o manuscrito e aprovaram a versão final.

Conflitos de interesse: Os autores declaram não haver conflitos de interesses.

#### Referências

1\. Peng, W., Xinxin H., Eric, HY, Jessica, WY, Kathy, L., Joseph, WT, Benjamin C., Gabriel, L. Avaliação experimental em tempo real das características epidemiológicas de novas infecções por coronavírus em Wuhan, China, em 22 de janeiro de 2020. Euro Vigilância 2020, 25 (3), pii = 2000044 ([doi: 10.2807 / 1560–7917).ES.2020.25.3.2000044](http://dx.doi.org/10.2807/1560-7917.ES.2020.25.3.2000044)).

2\. Center for Disease Control and Prevention 2019 Novo Coronavírus, Wuhan, China. Disponível online: ([link de referência](https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html)) (acessado em 24 de janeiro de 2020).

3\. Centro Europeu de Prevenção e Controle das Doenças Distribuição geográfica dos casos 2019-nCov. Disponível online: ([link de referência](https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases)) (acessado em 24 de janeiro de 2020).

4\. Nishiura, H., Lee, HW, Cho, SH, Lee, WG, In, TS, Moon, SU, Chung, GT, Kim, TS Estimativas de períodos de incubação de curto e longo prazo da malária por Plasmodium vivax na República da Coréia. Trans R Soc Trop Med Hyg Abril de 2007; 101 (4): 338–43 ([doi: 10.1016 / j.trstmh.2006.11.002](http://dx.doi.org/10.1016/j.trstmh.2006.11.002)).

5\. Lessler, J., Reich, NG, Cummings, DA Equipe de Investigação em Influenza Suína Higiênica e Departamento de Saúde da Cidade de Nova York, Nair HP, Jordan HT, Thompson N. Surto de influenza pandêmica A 2009 (H1N1) em Nova York Escola da cidade. N Engl J Med. 2009, 361 (27), 2628–36. ([doi: 10.1056 / NEJMoa0906089](http://dx.doi.org/10.1056/NEJMoa0906089)).

6\. Nishiura, H. Determinação do período de quarentena apropriado após a exposição à varíola: uma abordagem objetiva usando a distribuição do período de incubação. Int J Hyg Environ Health. 2009, 212 (1), 97–104. ([doi: 10.1016 / j.ijheh.2007.10.003](http://dx.doi.org/10.1016/j.ijheh.2007.10.003)).

7\. Huang, C., Wang, Y., Li, X., Ren, L., Zhao, J., Hu, Y., Zhang, L., Fan, G., Xu, J., Gu, X., Cheng, Z., Yu, T., Xia, J., Wei, Y., Wu, W., Xie, X; Yin, W., Li, H., Liu, M., Xiao, Y., Gao, H., Guo, L., Xie. J; Wang, G., Jiang, R., Gao, Z., Jin, Q., Wang, J., Cao, B. Lancet e. no prelo, ([doi: 10.1016 /S0140–6736 (20) 30183–5](http://dx.doi.org/10.1016/S0140-6736%2820%2930183-5)).

8\. Donnelly, CA, Ghani, AC, Leung, GM, Hedley, AJ, Fraser, C., Riley, S., Abu-Raddad, LJ, Ho, LM, Thach, TQ, Chau, P., Chan, KP, Lam , TH, Tse, LY, Tsang, T., Liu, SH, Kong, JH, Lau, EM, Ferguson, NM, Anderson, RM Determinantes epidemiológicos da disseminação do agente causal da síndrome respiratória aguda grave em Hong Kong. Lancet. 24 de maio de 2003; 361 (9371): 1761–6 ([doi: 10.1016 / S0140–6736 (03) 13410–1](http://dx.doi.org/10.1016/S0140-6736%2803%2913410-1)).

9\. Reich, NG, Lessler, J., Cummings, DA: Brookmeyer, R. Estimativa da distribuição do período de incubação com dados grosseiros. Statistics in Medicine 2009, 28 (22), 2769–84. ([doi: 10.1002 / sim.3659](http://dx.doi.org/10.1002/sim.3659)).

10\. Ghani AC, Donnelly CA, Cox DR, Griffin JT, Fraser C, Lam TH, Ho LM, Chan WS, Anderson RM, Hedley AJ, Leung GM. Métodos para estimar a taxa de letalidade de casos para uma nova doença infecciosa emergente. J. Epidemiol. 2005, 1662 (5), 479–86 ([doi: 10.1093 / aje /](http://dx.doi.org/10.1093/aje/kwi230)kwi230).

11\. Cowling, BJ, Park. M. Fang. VJ, Wu, P., Leung, GM, Wu, JT Avaliação epidemiológica preliminar do surto de MERS-CoV na Coréia do Sul, de maio a junho de 2015. Euro Surveillance 2015, 20 (25), pii: 21175 ([doi: 10.2807 / 1560–7917.es2015.20.25.21163](http://dx.doi.org/10.2807/1560-7917.es2015.20.25.21163)).

* * *

medRxiv preprint doi: [https://doi.org/10.1101/2020.01.26.20018754](https://doi.org/10.1101/2020.01.26.20018754).

O detentor dos direitos autorais desta pré-impressão **(que não foi revisada por pares)** é o autor/financiador, que concedeu ao medRxiv uma licença para exibir a pré-impressão em perpetuidade. É disponibilizado sob uma [licença internacional CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/) .

By [Paulo Pilotti Duarte](https://medium.com/@paulopilotti) on [March 25, 2020](https://medium.com/p/fe8dff703c9).

[Canonical link](https://medium.com/@paulopilotti/caracter%C3%ADsticas-epidemiol%C3%B3gicas-da-nova-infec%C3%A7%C3%A3o-por-coronav%C3%ADrus-uma-an%C3%A1lise-estat%C3%ADstica-dos-fe8dff703c9)

Exported from [Medium](https://medium.com) on April 19, 2025.
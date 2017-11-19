---
layout: post
comments: true
title:  "Visualização de dados com Chart.js"
subtitle: "Uma introdução ao Chart.js"
author: Victor Holanda
date:   2017-11-18 23:00:00 -0300
last_modified_at: 2017-11-18 23:00:00 -0300
categories: [Tecnologia]
tags: [chartjs, tutorial]
---

Encontrei um [tutorial sobre Chart.js][tutorial_chartjs]{:target="_blank"}, o tutorial é bem explicativo e foi feito por um sueco chamado Tobias. Então, resolvi traduzir, espero não ter cometido graves erros na tradução.

---------------------------------

1. [Introdução](#introdução "Introdução"){:class="js-scroll-trigger"}
2. [O que nós iremos construir](#o-que-nós-iremos-construir "O que nós iremos construir"){:class="js-scroll-trigger"}
3. [O que você irá precisar](#o-que-você-irá-precisar "O que você irá precisar"){:class="js-scroll-trigger"}
4. [Espere, o que é Chart.js?](#espere-o-que-é-chartjs "Espere, o que é Chart.js?"){:class="js-scroll-trigger"}
5. [Passo 1: Adicionar Chart.js](#passo-1-adicionar-chartjs "Passo 1: Adicionar Chart.js"){:class="js-scroll-trigger"}
6. [Passo 2: Prepare o lugar em seu HTML para renderizar o gráfico](#passo-2-prepare-o-lugar-em-seu-html-para-renderizar-o-gráfico "Passo 2: Prepare o lugar em seu HTML para renderizar o gráfico"){:class="js-scroll-trigger"}
7. [Passo 3: Prepare os dados](#passo-3-prepare-os-dados "Passo 3: Prepare os dados"){:class="js-scroll-trigger"}
8. [Passo 4: Desenhando a linha!](#passo-4-desenhando-a-linha "Passo 4: Desenhando a linha!"){:class="js-scroll-trigger"}
9. [Passo 5: Estilo na linha](#passo-5-estilo-na-linha "Passo 5: Estilo na linha"){:class="js-scroll-trigger"}
10. [Passo 6: Adicione o resto dos dados](#passo-6-adicione-o-resto-dos-dados "Passo 6: Adicione o resto dos dados"){:class="js-scroll-trigger"}

---------------------------------

#### Introdução

Você pode contar histórias poderosas com dados. Se você quer visualizar dados em um post no blog, no seu site, ou em uma apresentação, há poucas bibliotecas que podem ajudar você alcançar resultados impressionantes com relativamente pouco trabalho.

[Chart.js][chartjs]{:target="_blank"} é uma dessas bibliotecas. Quando eu estava ensinando datas em Hyper Island, esta é uma das ferramentas essenciais incluída no programa de Estratégia de Dados. Embora menos flexível e capaz que [D3][d3]{:target="_blank"}, é mais fácil se envolver e começar, mas poderoso suficiente para cobrir mais que apenas suas necessidades básicas. Neste tutorial introdutório nós iremos construir um gráfico interativo e ter uma breve visão geral da capacidade do framework.

#### O que nós iremos construir

Nós iremos criar um simples mais poderoso gráfico de linhas responsivo, visualizando a população do mundo durante os últimos 500 anos, e uma predição para 20050:

**Números de terráqueos (em milhões)**
<canvas id="myChart" width="200" height="100"></canvas>  



Nós iremos customizar o gráfico para usar nossas próprias cores, e seremos capazes de clicar na legenda para alternar a visibilidade das linhas correspondentes, bem como visualizar detalhes do ponto. Você pode baixar o [resultado final][download]{:target="_blank"} ou visualizar uma [demonstração][demo]{:target="_blank"}.

#### O que você irá precisar

Nenhuma experiência prévia com HTML, CSS ou JavaScript é necessária para avançar esse tutorial. Iniciante, algumas experiências irão ajudar você compreender as nuances do que está acontecendo, mas menos considerável seu nível de expertise, ao final do tutorial, você terá um gráfico. Tudo que você precisa é um editor de texto (eu recomendo [Sublime][sublime]{:target="_blank"} ou [Atom][atom]{:target="_blank"}).

#### Espere, o que é Chart.js?

[Chart.js][chartjs]{:target="_blank"} é uma biblioteca de código aberto mantida pela comunidade ([está disponível no GitHub][githubchartjs]{:target="_blank"}) que ajuda você facilmente visualizar dados usando JavaScript. É similar para [Chartist][chartist]{:target="_blank"} e [Google Charts][googlechart]{:target="_blank"}. Suporta 8 diferentes tipos de gráficos (incluindo barras, linhas e círculo) e eles serão todos responsivos. Em outras palavras, você irá configurar seu gráfico uma vez, e Chart.js irá fazer o trabalho pesado para você e fazer claro que isto esteja sempre legível (por exemplo removendo alguns detalhes não críticos se o gráfico for menor).

De uma forma geral, isto é o que você precisa fazer para desenhar um gráfico com Chart.js:

1. Definir onde na sua página desenhar o gráfico.
2. Definir qual tipo de gráfico você quer desenhar.
3. Fornecer ao Chart.js dados, títulos e outras opções.

... e você irá ter um belo, responsivo, gráfico! Embora não aprofundamos muito nas mudanças do desenho de nosso gráfico nesse tutorial, gráficos do Chart.js são altamente customizáveis. Como uma regra, tudo que você pode ver pode afetar e, embora os gráficos parecem bons sem muita customizações, você provavelmente será capaz de realizar todas as suas visões de design (ou de outra pessoa) com algum esforço extra.

##### Passo 1: Adicionar Chart.js

Primeiro nós precisamos adicionar Chart.js para nossa página então podemos usar a biblioteca. Para este projeto, eu preparei um simples parque de diversão com um arquivo HTML com só o essencial. Baixe o ponto inicial e abra o diretório, e você deve ver três arquivos:
* index.html
* style.css
* script.js

Eu adicionei algumas estilizações básicas para o `style.css`, mas `script.js` está completamente vazio, este é onde iremos adicionar o código para desenhar nosso gráfico em um momento. Por agora, abra `index.html` em um editor de texto. Para usar Chart.js nós precisamos linkar a biblioteca dentro de nosso `head`. Você poderia baixar a biblioteca e hospedá-la por conta própria, mas o mais fácil (e provavelmente mais rápido) maneira é apenas usar CND (_content delivery network_ - rede de entrega de conteúdo, em português - nesse exemplo, uma maneira elegante de dizer "pessoas legais que estão hospedando as bibliotecas que precisamos")

Se você ir para chartjs.org e clicar na Documentação, você irá ver um link para o CDN de recomendação deles. Siga o link, e procure por a URL terminando com `Chart.min.js`. No momento que escrevia, a última versão é `2.5.0`:

	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

Copie e cole esta linha na linha 5 em `index.html`. Depois de colado, seu `head` deve parecer com isso:

	<head>
	  <title>World population</title>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
	  <link rel="stylesheet" type="text/css" href="style.css">
	</head>


##### Passo 2: Prepare o lugar em seu HTML para renderizar o gráfico

A última coisa que nós precisamos preparar antes de nós iniciarmos a visualização de nossos dados é definir uma área em nosso HTML onde nós queremos desenhar o gráfico. Para Chart.js você faz isso adicionando um elemento canvas, e configurando `width` e `height` para definir a proporção de seu gráfico.

Na linha 13 em `index.html`, copie e cole esta linha para criar seu elemento canvas:

	<canvas id="myChart" width="1600" height="900"></canvas>

Perceba que nós adicionamos um `id`(`myChart`) para o elemento `canvas` para que nós possamos usar depois para referenciar ou desenhar um elemento gráfico em JavaScript ou CSS. Como o ID está configurado não tem significância para o Chart.js; você pode nomear da forma que você quiser. O que importa é que você use o mesmo ID quando você referência em JavaScript ou CSS. Se você está adicionando vários gráfico para uma página, apenas tenha certeza que cada ID é único (você poderia por exemplo dá seus gráficos nomes mais específicos, como `populationChart` ou `regionChart`).

##### Passo 3: Prepare os dados

Os dados que nós estamos usando é de um artigo da [Wikipedia sobre a população mundial][wikipedia_world]{:target="_blank"}, e inclui uma predição da população mundial da [UN's relatório de Prospecção da População Mundial][un_population]{:target="_blank"}. Aqui está os dados cru que estamos usando:

**Histórico Mundial e predição da população (em milhões)**


|Country 		|	1500 |	1600 |	1700	|	1750  |	1800	|	1850	|	1900  |	1950  |	1999  |	2050  |
|---------------|-------:|------:|---------:|--------:|--------:|----------:|--------:|------:|------:|------:|
|África 		|	86	 |	114	 |	106	 	|	106	  |	107		|	111		|	133	  |	221   |	783	  |	2478  |
|Asia 			|	282	 |	350	 |	411		|	502	  |	635		|	809		|	947	  |	1402  |	3700  |	5267  |
|Europa 		|	168	 |	170	 |	178		|	190	  |	203		|	276		|	408	  |	547   |	675	  |734    |
|América Latina |	40	 |	20	 |	10		|	16	  |	24		|	38		|	74	  |	167   |	508	  |	784   |
|América do Norte	|	6	 |	3	 |	2		|	2	  |	7		|	26		|	82	  |	172   |	312	  |433	  |  

  

Desenhar linhas e adicionar rótulos aos eixos, Chart.js espera o dado seja passado em forma de [array][array]{:target="_blank"}, como: `[10, 4, 7]`. Nós iremos usar 6 arrays no total: um para todos os anos serem mostrados no eixo X (1500-2050), e um array para cada país, contendo os dados da população. Então todos nós precisamos fazer é copiar cada linha da nossa tabela acima, separar cada valor com vírgula, e então terminar e iniciar a lista com [] - colchetes.

A tabela acima, reformatada para arrays, parecerá como:

	// Nossos rótulos para o eixo X
	var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];

	// Para desenhar as linhas
	var africa = [86,114,106,106,107,111,133,221,783,2478];
	var asia = [282,350,411,502,635,809,947,1402,3700,5267];
	var europe = [168,170,178,190,203,276,408,547,675,734];
	var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
	var northAmerica = [6,3,2,2,7,26,82,172,312,433];

Copie todas estas linhas, e cole elas dentro de `script.js`

##### Passo 4: Desenhando a linha!

Finalmente! Nós chegamos no momento da verdade. Visualização dos dados com Graph.js será bem direto. Tudo que nós precisamos fazer é definir qual o gráfico que nós queremos desenhar, e passar os dados que nós queremos visualizar. Vamos iniciar desenhando uma simples linha para ver se nós temos funcionando: abaixo dos dados que você passou dentro de `script.js`, adicione estas linhas de JavaScript:

	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: years,
	    datasets: [
	      { 
	        data: africa
	      }
	    ]
	  }
	});

... abra `index.html` em um navegador, atualize e... tada! Você criou um gráfico! Não é o mais lindo, mas hey, está aumentando e está parecendo profissional!

O que está acontecendo nesse pedaço de código? Vamos quebrá-lo abaixo. Primeiro, nós alocamos o elemento [`canvas`][canvas]{:target="_blank"} que nós adicionamos mais cedo para nosso arquivo `index.html` (note "myChart"):

	var ctx = document.getElementById("myChart");

Então, usando aquele canvas elemento, nós criamos um gráfico de linha (`type: 'line'`), e passamos alguns de nossos dados. `labels: years` configurando nosso array de `years` (que nós criamos mais cedo) para os rótulos do eixo-x, e `data: africa` usamos nossa variável `africa` para desenhar a linha.

Vamos tentar corrigir agora. Você deve ter percebido que nossa linha está faltando o rótulo (dizendo indefinido no topo do gráfico), e não está muito colorido. Boo! Vamos fazê-lo.

##### Passo 5: Estilo na linha

Inicie um nome a nossa primeira linha. Depois de `data: africa`, adicione uma vírgula (**hey!** Eu estou falando sério sobre a vírgula (relembre a vírgula!), esqueça ela e tudo quebra), crie uma nova linha e adicione `label: "África"`:

	{ 
	  data: africa,
	  label: "África"
	}

Para configurar a cor da borda e remover a grande área cinza, adicione outra vírgula depois de `label: "África"` e adicione estas duas linhas:

	borderColor: "#3e95cd",
	fill: false

Bem não é tudo (atualize e você deve ver uma linha azul chamada África)!

##### Passo 6: Adicione o resto dos dados

Tudo que nós precisamos agora é copiar o código de África e colar outras quatro vezes, adicionando uma vírgula depois de cada `}`. Faça a lista das linhas e tenha certeza que você usou todas as nossas variáveis de regiões (`asia`, `europe`, etc. ), e nomeie de acordo. Um vez feito, parecerá com algo assim:

	{ 
	  data: africa,
	  label: "África",
	  borderColor: "#3e95cd",
	  fill: false
	},
	{ 
	  data: asia,
	  label: "Asia",
	  borderColor: "#3e95cd",
	  fill: false
	},
	{ 
	  data: europe,
	  label: "Europa",
	  borderColor: "#3e95cd",
	  fill: false
	},
	{ 
	  data: latinAmerica,
	  label: "América Latina",
	  borderColor: "#3e95cd",
	  fill: false
	},
	{ 
	  data: northAmerica,
	  label: "América do Norte",
	  borderColor: "#3e95cd",
	  fill: false
	}

Se você atualizar, você deverá visualizar um gráfico da população da terra ao longo do tempo. Hooray!

As linhas estão todas da mesma cor. Você pode colocar qualquer cor que você quiser para uma linha, mas para usar o mesmo esquema de cor como em meu gráfico de exemplo, mude o valor de`borderColor` para cada nova região: **`#8e5ea2`**, **`#3cba9f`**, **`#e8c3b9`**, **`#c45850`**.

E com isto, você terminou! Seu gráfico finalizado deve parecer com isso:


<a href="{{ '/demo/demo-chartjs.html' | prepend: site.baseurl }}" class="btn btn-primary" target="_blank">Ver resultado</a>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.js"></script>


<script type="text/javascript">

	// Nossos rótulos para o eixo X
	var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];

	// Para desenhar as linhas
	var africa = [86,114,106,106,107,111,133,221,783,2478];
	var asia = [282,350,411,502,635,809,947,1402,3700,5267];
	var europe = [168,170,178,190,203,276,408,547,675,734];
	var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
	var northAmerica = [6,3,2,2,7,26,82,172,312,433];

	
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: years,
	    datasets: [
		    { 
			  data: africa,
			  label: "África",
			  borderColor: "#3e95cd",
			  fill: false
			},
			{ 
			  data: asia,
			  label: "Asia",
			  borderColor: "#8e5ea2",
			  fill: false
			},
			{ 
			  data: europe,
			  label: "Europa",
			  borderColor: "#3cba9f",
			  fill: false
			},
			{ 
			  data: latinAmerica,
			  label: "América Latina",
			  borderColor: "#e8c3b9",
			  fill: false
			},
			{ 
			  data: northAmerica,
			  label: "América do Norte",
			  borderColor: "#c45850",
			  fill: false
			}
		]
	  }
	});

</script>



[tutorial_chartjs]: http://tobiasahlin.com/blog/introduction-to-chartjs/ "Tobias: Introduction to Chart.js"
[chartjs]: http://www.chartjs.org/ "Oficial Chart.js"
[d3]: https://d3js.org/ "Oficial D3.js"
[sublime]: https://www.sublimetext.com/ "Oficial Sublime Text"
[atom]: https://atom.io/ "Oficial Atom"
[chartist]: https://gionkunz.github.io/chartist-js/ "Oficial Chartist"
[googlechart]: https://developers.google.com/chart/ "Google Chart"
[download]: http://tobiasahlin.com/demo/chartjs-intro/static/final.zip "Download final"
[demo]: {{site.url}}/demo/demo-chartjs.html "Demonstração"
[wikipedia_world]: https://en.wikipedia.org/wiki/World_population#Population_growth_by_region "Wikipedia World Population"
[un_population]: https://esa.un.org/unpd/wpp/Publications/Files/Key_Findings_WPP_2015.pdf "UN’s World Population Prospects report"
[canvas]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API "Canvas"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[githubchartjs]: https://github.com/chartjs/Chart.js "Github Chart.js"
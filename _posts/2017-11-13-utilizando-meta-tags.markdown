---
layout: post
comments: true
title:  "Utilizando Meta tags"
subtitle: "O que é e como usar?"
author: Victor Holanda
date:   2017-11-13 17:20:00 -0300
categories: [Tecnologia, SEO]
tags: ["meta tags", "tutorial", "SEO"]
---

Meta tags são linhas de código HTML que descrevem o conteúdo do site para os buscadores (Google, Bing, etc.). As meta tags não irão ser visualizadas na página, mas os robôs de pesquisas poderão visualizar as informações contidas dentro dessas meta tags.

As meta tags são tipicamentes usadas para especificar descrição da página, palavras-chaves, autor do documento, última modificação, e etc.. Elas podem ser utilizadas por navegadores para, por exemplo, informar ao navegador como apresentar as informações contidas naquela página, ou recarregar a página para obter informações atualizadas. Os mecanismos de buscas podem coletar as informações e facilitar, por exemplo, no posicionamento de sua página web nos resultados das buscas de internet.

Portanto, as meta tags são uma das técnicas utilizadas em estratégias de [SEO][1]{:target="_blank"} que significa Search Engine Optimization (Otimização para mecanismos de busca) que permite o melhor posicionamento dos sites/blogs nos buscadores.

As meta tags `<meta>` são sempre inseridas dentro do elemento `<head>`. Além disso, meta tags sempre recebem um par de nome e valor.

As meta tags utilizadas neste blog, que serão dividas em 4 partes, são as seguintes:

---------------------------------

1. [Meta tags básicas](#1-meta-tags-básicas "Meta tags básicas"){:class="js-scroll-trigger"}
2. [Meta tags do Open Graph protocol](#2-meta-tags-do-open-graph-protocol "Meta tags do Open Graph protocol"){:class="js-scroll-trigger"}
3. [Meta tags voltadas para artigos](#3-meta-tags-voltadas-para-artigos "Meta tags voltadas para artigos"){:class="js-scroll-trigger"}
4. [Meta tags para imagens](#4-meta-tags-para-imagens "Meta tags para imagens"){:class="js-scroll-trigger"}

---------------------------------

##### 1. Meta tags básicas

{% highlight html %}

1.	<meta charset="utf-8">
2.	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
3.	<meta name="description" content="Amante de tecnologia, gestão e projetos. Com dedicação, sigo em busca de alcançar todos os meus objetivos pessoais, acadêmicos e profissionais.">
4.	<meta name="author" content="Victor Holanda">
5.	<meta name="keywords" content="Blog Pessoal, Victor Holanda, Administração, Tecnologia, Teresina, Piaui">

{% endhighlight %}

1. É referente ao tipo de codificação dos caracteres da página, o [`utf-8`][2]{:target="_blank"} é uma codificação padrão para email, páginas web e outros locais onde os caracteres são armazenados, essa codificação permite basicamente que caracteres com [diacríticos][3]{:target="_blank"}, ou seja, com sinais gráficos como acentos, sejam visualizados de forma correta.

2. Trata do [viewport][4]{:target="_blank"}, ou a área onde o site aparece. É a área branca da janela quando é aberta o navegador. O viewport  sempre vai ter o tamanho da janela, mas as formas que serão renderizados vai depender bastante do dispositivo. Os valores de content pode ser os que seguem abaixo:

	a. **width**: Define uma largura para o viewport. Os valores podem ser em PX ou “device-width”, que determina automaticamente um valor igual a largura da tela do dispositivo.  

	b. **height**: Define uma altura para o viewport. Os valores podem ser em PX ou “device-height”, que determina automaticamente um valor igual a altura da tela do dispositivo.

	c. **initial-scale**: Define a escala inicial do viewport.

	d. **user-scalable**: Define a possibilidade de o usuário fazer “zoom” em um determinado lugar da tela. É ativado quando o usuário bate duas vezes com o dedo em um lugar da tela.

	e. **shrink-to-fit**: Previne que a página seja escalado para caber no viewport em navegadores Safari. Omitir essa irá gerar uma alerta no navegador.

3. Define a descrição básica da página. Em algumas situações parte dessa descrição é utilizada em resultados de buscas.

4. Nome do autor da página.

5. Palavras-chaves da página. Termos mais importantes que podem ser usadas para facilitar nos resultados dos buscadores.

Você pode usar  outras tags específicas para o buscador do [Google][5]{:target="_blank"} que controlam o comportamento do rastreamento e indexação das páginas, tradução automática e etc..

---------------------------------

##### 2. Meta tags do Open Graph protocol

O [protocolo Open Graph][6]{:target="_blank"} permite que qualquer página da web seja visualizado como um post normal do Facebook.

{% highlight html %}

     <!-- Meta Tags Open Graph Protocol. See more: http://ogp.me/ -->

1.     <meta property="og:locale" content="pt_BR">  
1.1.   <meta property="og:locale:alternate" content="en_US">
1.2.   <meta property="og:locale:alternate" content="es_ES">
2.     <meta property="og:site_name" content="Victor Holanda">
3.     <meta property="og:title" content="Utilizando Meta Tags |  Victor Holanda">
4.     <meta property="og:url" content="http://victorholanda21.github.io/tecnologia/2017/11/12/utilizando-meta-tags.html">

{% endhighlight %}

1. Define o local do seu site, o padrão é `en_US`.  
1.1 e 1.2 Definem locais alternativos.
2. Nome do site.
3. Título da página.
4. Endereço da página.

---------------------------------

##### 3. Meta tags voltadas para artigos

{% highlight html %}

1.     <meta property="og:type" content="article">
2.     <meta property="article:author" content="Victor Holanda">
3.     <meta property="article:section" content="Tecnologia">
4.     <meta property="article:tag" content="meta tags, tutorial">
5.     <meta property="article:published_time" content="2017-11-12">
6.     <meta property="og:description" content="O que é e como usar?">

 {% endhighlight %}
 
1. Tipo da página, pode ser "article", "book" ou "profile".
2. Autor do artigo.
3. Qual a categoria do artigo.
4. Tópicos referente ao artigo.
5. Data da publicação.
6. Descrição do artigo.

---------------------------------

##### 4. Meta tags para imagens

{% highlight html %}

1.    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/12675056?s=400&u=75e88e527d6365ce28f32f239e4ef9ee8ae88190&v=4">
2.    <meta property="og:image:type" content="image/jpg">
3.    <meta property="og:image:width" content="460">
4.    <meta property="og:image:height" content="460">

{% endhighlight %}

1. Imagem da página quando for compartilhada, eu particularmente utilizo a minha foto.
2. Tipo da imagem.
3. Largura da imagem definida em 460 px.
4. Altura da imagem definida em 460px.

Essas são só as meta tags utilizadas nesse post.

[1]: https://marketingdeconteudo.com/o-que-e-seo/ "Marketing de conteudo: O que é SEO?"
[2]: https://pt.wikipedia.org/wiki/UTF-8 "Wikipedia: UTF-8"
[3]: https://pt.wikipedia.org/wiki/Diacr%C3%ADtico "Wikipedia: diacrítico"
[4]: https://tableless.com.br/manipulando-metatag-viewport/ "Tableless: Manipulando a metatag Viewport"
[5]: https://support.google.com/webmasters/answer/79812?hl=pt-BR "Metatags que o Google entende"
[6]: http://ogp.me/ "Open Graph protocol"
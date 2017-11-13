---
layout: post
title:  "Aprendendo Markdown"
subtitle: "O que é e como usar?"
author: Victor Holanda
date:   2017-11-12 22:00:00 -0300
category: Tecnologia
tags: markdown tutorial
---

Markdown é uma linguagem simples de marcação que converte texto simples para html, ou seja, o markdown é:
 1. uma sintaxe de formatação de texto; e 
 2. uma ferramenta de software, escrito em [Perl][perl]{:target="_blank"}, que converte o texto plano para html. 

A documentação do projeto pode ser vista em [Daring Fireball][daring]{:target="_blank"} e a sintaxe pode ser testada usando o online [Dingus][dingus]{:target="_blank"}. O markdown é utilizado pelo [Github Pages][github pages]{:target="_blank"} para formatação dos textos.

Algumas opções de sintaxes que serão vistas nesse tutorial:


1. [Cabeçalho](#1-cabeçalho){:class="js-scroll-trigger"}
2. [Listas](#2-listas){:class="js-scroll-trigger"}
3. [Citações](#3-citações){:class="js-scroll-trigger"}
4. [Bloco de códigos](#4-bloco-de-códigos){:class="js-scroll-trigger"}
5. [Linhas horizontais](#5-linhas-horizontais){:class="js-scroll-trigger"}
6. [Links](#6-links){:class="js-scroll-trigger"}
7. [Imagens](#7-imagens){:class="js-scroll-trigger"}
8. [Tabelas](#8-tabelas){:class="js-scroll-trigger"}
9. [Enfâse](#9-enfâse){:class="js-scroll-trigger"}
10. [Notas de rodapé](#10-notas-de-rodapé){:class="js-scroll-trigger"}
11. [Abreviações](#11-abreviações){:class="js-scroll-trigger"}
12. [Caractere de Escapes](#12-caractere-de-escapes){:class="js-scroll-trigger"}

--------------------------------------------------------------------------------------
##### 1. Cabeçalho

Markdown suporta dois estilos de cabeçalhos:

* `=` para primeiro nível e `-` para segundo nível:


{% highlight html %}

H1  
==  

H2
---

{% endhighlight %}


* O `#` pode ser usado de  1-6 no início da linha correspondendo aos níveis 1-6:

{% highlight html %}

# h1
## h2
### h3
#### h4
##### h5
###### h6

{% endhighlight %}

O resultado será:

# h1
## h2
### h3
#### h4
##### h5
###### h6

--------------------------------------------------------------------------------------

##### 2. Listas

Para listas não ordenadas use `*`, `+` e `-` como marcador de lista:


{% highlight html %}

* Vermelho
* Verde
* Azul

{% endhighlight %}

É equivalente a:

{% highlight html %}

+ Vermelho
+ Verde
+ Azul

{% endhighlight %}

E:

{% highlight html %}

- Vermelho
- Verde
- Azul

{% endhighlight %}

O resultado será:

- Vermelho
- Verde
- Azul

Para lista ordenadas use números:

{% highlight html %}

1. Vermelho
2. Verde
3. Azul

{% endhighlight %}

O resultado será:

1. Vermelho
2. Verde
3. Azul

Se, ao invés você escrever a lista assim:

{% highlight html %}

1. Vermelho
1. Verde
1. Azul

{% endhighlight %}

ou:

{% highlight html %}

3. Vermelho
1. Verde
8. Azul

{% endhighlight %}

Você terá o mesmo resultado. Caso você queira usar uma sequência diferente, como anos, você pode usar o caractere de escape `\` assim:

{% highlight html %}

2017\. Ano que criei o site "victorholanda21.github.io".

{% endhighlight %}

O resultado será:

2017\. Ano que criei esse site "victorholanda21.github.io".

--------------------------------------------------------------------------------------

##### 3. Citações

Para citações coloque `>` no início da linha:

{% highlight html %}

> Esta é uma citação com dois parágrafos. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

{% endhighlight %}

O resultado será (pré-formatado pelo css do tema):

> Esta é uma citação com dois parágrafos. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.


Você pode também colocar somente um `>` no início do primeiro parágrafo e também terá o mesmo resultado:

{% highlight html %}

> Esta é uma citação com dois parágrafos. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

{% endhighlight %}

Você pode colocar cabeçalhos, lista e bloco de códigos dentro de citações:

{% highlight html %}
> ## Cabeçalho.
> 
> 1.   Primeiro item.
> 2.   Segundo item.
> 
> Exemplo de código:
> 
>     return shell_exec("echo $input | $markdown_script");
{% endhighlight %}

O resultado será:

> ## Cabeçalho.
> 
> 1.   Primeiro item.
> 2.   Segundo item.
> 
> Exemplo de código:
> 
>     return shell_exec("echo $input | $markdown_script");

--------------------------------------------------------------------------------------

##### 4. Bloco de códigos

Bloco de códigos pré-formatados são usados por programadores para marcação de código fonte. Para produzir em markdown simplesmente inicie cada linha do bloco com ao menos 4 espaços ou 1 tab. Por exemplo:

{% highlight html %}

Este é um parágrafo normal:
	Este é um bloco de código.

{% endhighlight %}


No Jekyll você também pode usar:

{ % highlight ruby % } 

puts "Olá"

{ % endhighlight % }

**Obs.:** retire o espaço entre `{`, `}` e `%` 

--------------------------------------------------------------------------------------

##### 5. Linhas horizontais

Você pode criar linhas horizontais de três maneiras ou mais, usando hífen, asteriscos ou underline. Cada exemplo você terá o mesmo resultado:

{% highlight html %}

* * *
***
*******
- - - 
---------------

{% endhighlight %}

--------------------------------------------------------------------------------------

##### 6. Links

Markdown suporta dois estilos de links: "inline" e referência. Em ambos, o texto do link é delimitado por colchetes `[ ]` e o link delimitado por parênteses `( )`.

Para links "inline" você pode:

{% highlight html %}

Este é [um exemplo](http://example.com/ "Titulo") de link inline com atributo título
[Este link](http://example.net/ ) sem o atributo título
Entre em [Contato](/contato/) quando o endereço de destino é do mesmo site

{% endhighlight %}

Para referência você usa um segundo grupo de colchetes e dentro você coloca um rótulo de sua escolha para a identificação do link. Exemplo:


{% highlight html %}

Este é [um exemplo][1] de link usando referência
[Este link] [2] você pode separar os grupos de colchetes por um espaço
Entre em [Contato][contato]
Use [Exemplo][] para omitir o segundo e usando o primeiro como referência

{% endhighlight %}

Em qualquer lugar do documento você irá definir o destino do link:

{% highlight html %}

[1]: http://example.com/ "Titulo opcional"
[2]: http://example.net/   (Título opcional)
[contato]: /contato/ ‘Título opcional’
[Exemplo]: http://exemplo.com.br/

{% endhighlight %}

O nome de definição pode consistir de letras, números, espaço e pontuação, mas eles não são case sensitive, ou seja, não há diferença entre letras maiúsculas e minúsculas.

Você pode adicionar atributos ao link como `id`, `class` ou `target` envolvendo pelas chaves `{ }` cada atributos, por exemplo:

{% highlight html %}

Este é [um exemplo](http://example.com/ "Titulo"){:id="algum-id"}{:class="primeira-classe outra-classe"}{:target="_blank" }

{% endhighlight %}

--------------------------------------------------------------------------------------

##### 7. Imagens

Para inserir imagens você pode usar os mesmo estilos e uma sintaxe parecida com a utilizada em links. Exemplo:

{% highlight html %}

![Nome da imagem](/endereço/da/imagem.jpg "Título opcional")
![Nome da imagem][id]

[id]: localizacao/da/imagem.jpg "Título opcional"

{% endhighlight %}

**Obs.:** O nome da imagem é o nome que irá aparecer ao colocar o mouse em cima da imagem ou quando a imagem não for visualizada, por alguma falha de download, por exemplo.

--------------------------------------------------------------------------------------

##### 8. Tabelas

Para criar uma tabela simples com cabeçalho utilize o tubo `|` (pipe, em inglês) para separar as colunas.

{% highlight html %}

Cabeçalho | Cabeçalho
----------|---------------
Conteúdo | Conteúdo
Conteúdo | Conteúdo

{% endhighlight %}

O resultado será:

Cabeçalho | Cabeçalho
---------------|---------------
Conteúdo | Conteúdo
Conteúdo | Conteúdo
		|

Se preferir pode organizar da seguinte forma que também terá o mesmo resultado:

{% highlight html %}

| Cabeçalho | Cabeçalho | 
| ----------|---------- |
| Conteúdo | Conteúdo |
| Conteúdo | Conteúdo |

{% endhighlight %}

Você pode especificar o alinhamento da coluna adicionando o sinal de dois pontos `:`. Se adicionado na esquerda a coluna será alinhada à esquerda; se adicionado na direita a coluna será alinha à direita; e em ambos os lados a coluna será centralizada:

{% highlight html %}

| Número | Item      	| Valor 	|
|:-----:| :-------------| --------:	|
| 1 	| Computador	| R$1.600,00 |
| 2 	| Mouse     	|   R$12,00 |
| 3 	| Mousepad    	|    R$1,00 |

{% endhighlight %}

O resultado:

| Número | Item      	| Valor 	|
|:-----:| :-------------| --------:	|
| 1 	| Computador	| R$1.600,00 |
| 2 	| Mouse     	|   R$12,00 |
| 3 	| Mousepad    	|    R$1,00 |


--------------------------------------------------------------------------------------


##### 9. Enfâse

Markdown trata asteriscos `*` e underscores `_` como indicador de ênfases. Envolvendo o texto com um `*` ou `_` o texto ficará em itálico; dois `*` ou `_` o texto ficará em negrito:

{% highlight html %}
*um asterisco*
_um underscore_

**dois asteriscos**
__dois underscore_


{% endhighlight %}

O resultado será:

*um asterisco*  
_um underscore_

**dois asteriscos**  
__dois underscores__

--------------------------------------------------------------------------------------

##### 10. Notas de rodapé

As notas de rodapés são definidas de forma parecida dos links por referência:

 {% highlight html %}

Algum texto com rodapé.[^1]

[^1]: Este é a nota de rodapé
	Este é um segundo parágrafo opcional

{% endhighlight %}

--------------------------------------------------------------------------------------

##### 11. Abreviações

Markdown também permite usar abreviações. Funciona da seguinte forma, crie uma definição de abreviação como:

 {% highlight html %}

*[HTML]: Hyper Text Markup Language

{% endhighlight %}

E em qualquer lugar do texto use a palavra, abreviações são case sensitive:

 {% highlight html %}

O HTML é uma linguagem de marcação de texto usada na web

{% endhighlight %}

--------------------------------------------------------------------------------------

##### 12. Caractere de Escapes

Markdown usa a barra invertida `\` para providenciar um escape, ou seja, para para os caracteres serem literalmente utilizado e não serem interpretados:

  {% highlight html %}

\*asterisco\*

{% endhighlight %}

Resultado:

\*asterisco\*

[perl]: https://pt.wikipedia.org/wiki/Perl "Wikipedia: Perl"
[daring]: https://daringfireball.net/projects/markdown/ "Oficial: Daring Fireball"
[dingus]: https://daringfireball.net/projects/markdown/dingus "Dingus"
[github pages]: /tecnologia/2017/11/10/ola-github-pages.html "Olá, Github Pages"

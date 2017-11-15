---
layout: post
comments: true
title:  "Adicionando Disqus ao Jekyll"
subtitle: "Usando Disqus para moderar comentários no seu blog"
author: Victor Holanda
date:   2017-11-14 16:00:00 -0300
last_modified_at: 2017-11-14 20:00:00 -0300
categories: [Tecnologia]
tags: ["disqus", "tutorial", "moderar", "comentários"]
---

O [Disqus][oficial_disqus]{:target="_blank"} é um serviço online que oferece uma [plataforma][wiki_disqus]{:target="_blank"} de discussões e postagem de comentários para sites. O Disqus ajuda a escritores aumentarem o engajamento e construir uma audiência fiel.

Para inserir o Disqus em seu site você deve primeiramente se cadastrar no site. Após isso, em poucos minutos você já pode instalar no seu site o Disqus utilizando as opções que o próprio site fornece.

Para instalar no Jekyll eu segui os seguintes passos desse breve tutorial:

---------------------------------

1. [Criar um arquivo `disqus.html`](#1-criar-um-arquivo-disqushtml "Criar um arquivo `disqus.html`"){:class="js-scroll-trigger"}
2. [Editar o arquivo `post.html`](#2-editar-o-arquivo-posthtml "Editar o arquivo `post.html`"){:class="js-scroll-trigger"}
3. [Permitir comentários no post](#3-permitir-comentários-no-post "Permitir comentários no post"){:class="js-scroll-trigger"}
4. [Moderar os comentários](#4-moderar-os-comentários "Moderar os comentários"){:class="js-scroll-trigger"}

-------------------------------

##### 1. Criar um arquivo `disqus.html`
No diretório `_includes` eu criei um arquivo com o seguinte conteúdo:


{% highlight html %}

<div id="disqus_thread"></div>
<script type="text/javascript">
  
  // required: replace example with your forum shortname
{% raw %}
  var disqus_shortname = '{{ site.disqus_shortname }}';
  var disqus_identifier = '{{ page.url }}';
{% endraw %}
  
  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
</section>

{% endhighlight %}

Para facilitar eu atribui para as variáveis `disqus_shortname` no arquivo `_config.yml`.  
Em `page.url` você vai adicionar a url da página que terá a seção de comentários.

-------------------------------

##### 2. Editar o arquivo `post.html`

No diretório `_layouts` eu editei o arquivo `post.html` e inseri no final do post o seguinte código:

{% highlight ruby %}

  {% raw %}
     {% page.comments %}
  {% endraw %}

      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="clearfix">
            <div class="comments">

          {% raw %}
            {% jekyll.environment == 'production' %}
          {% endraw %}

          {% raw %}
                {{ include disqus.html }}
          {% endraw %}

          {% raw %}
             {% else %}
          {% endraw %}

              <h4>Disqus comentários aqui!</h4>

          {% raw %}
             {% endif %}
          {% endraw %}
            </div>
            <hr>
          </div>
          
        </div>
      </div>

{% raw %}
  {% endif %}
{% endraw %}

{% endhighlight %}

Ele verifica se na página está habilitado a opção de comentários, se verdadeiro ele verifica se o jekyll está em ambiente de produção (quando ele está disponível na Internet), caso também seja verdadeiro ele inclui nessa parte da página o arquivo `disqus.html`. Caso o site esteja em modo de desenvolvimento irá mostrar somente uma mensagem informando onde aparecerão os comentários.

-------------------------------

##### 3. Permitir comentários no post

E por último basta ativar os comentários no post, em cada post você deve inserir `comments: true`:


{% highlight html %}

---
layout: post
comments: true

(...)

---


{% endhighlight %}

-------------------------------

##### 4. Moderar os comentários

Pronto, após isso basta visitar a seção de [moderar][disqus_moderate]{:target="_blank"} comentários do Disqus e acompanhar os comentários em cada página.

[oficial_disqus]: https://disqus.com/ "Oficial: Diqus"
[wiki_disqus]: https://pt.wikipedia.org/wiki/Disqus "Wikipedia: Disqus"
[disqus_moderate]: https://disqus.com/admin/moderate/ "Disqus: Moderar comentários"

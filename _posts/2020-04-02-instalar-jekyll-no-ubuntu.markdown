---
layout: post
comments: true
title:  "Instalando o Jekyll no Ubuntu"
subtitle: "Aprenda a instalar o Ruby e o Jekyll"
author: Victor Holanda
date:   2020-04-02 12:00:00 -0300
last_modified_at: 2020-04-02 14:00:00 -0300
category: Tecnologia
tags: ["github", "github pages", "jekyll", "hospedagem", "Ruby", "programação", "Rubygems", "rbenv", "Bundler", "terminal", "Ubuntu"]
---

# Sumário

---------------------------------
1. [Acesse a pasta HOME](#1-acesse-a-pasta-home "Acesse a pasta HOME"){:class="js-scroll-trigger"}
2. [Atualize os pacotes](#2-atualize-os-pacotes "Atualize os pacotes"){:class="js-scroll-trigger"}
3. [Instale as dependências](#3-instale-as-dependências "Instale as dependências"){:class="js-scroll-trigger"}
4. [Clone o repósitorio do ambiente Ruby](#4-clone-o-repósitorio-do-ambiente-ruby-ruby-environment "Clone o repósitorio do ambiente Ruby"){:class="js-scroll-trigger"}
5. [Adicione nas variáveis de ambiente do seu sistema](#5-adicione-nas-variáveis-de-ambiente-do-seu-sistema "Adicione nas variáveis de ambiente do seu sistema"){:class="js-scroll-trigger"}
6. [Clone e adicione nas variáveis de ambiente o 'ruby-build'](#6-agora-clone-e-adicione-nas-variáveis-de-ambiente-o-ruby-build "Agora clone e adicione nas variáveis de ambiente o 'ruby-build'"){:class="js-scroll-trigger"}
7. [Verifique se o rbenv está configurado corretamente](#7-verifique-se-o-rbenv-está-configurado-corretamente "Verifique se o rbenv está configurado corretamente"){:class="js-scroll-trigger"}
8. [Instale todas as versões disponíveis do Ruby](#8-instale-todas-as-versões-disponíveis-do-ruby "Instale todas as versões disponíveis do Ruby"){:class="js-scroll-trigger"}
9. [Instale o Ruby 2.6.4](#9-agora-instale-o-ruby-264 "instale o Ruby 2.6.4"){:class="js-scroll-trigger"}
10. [Instale o Bundler](#10-instale-o-bundler "Instale o Bundler"){:class="js-scroll-trigger"}
11. [Instale o rubygems](#11-instale-o-rubygem "Instale o rubygems"){:class="js-scroll-trigger"}
12. [Instale o Jekyll](#12-instale-o-jekyll "Instale o Jekyll"){:class="js-scroll-trigger"}
13. [Teste rodando um projeto](#13-teste-rodando-um-projeto "Teste rodando um projeto"){:class="js-scroll-trigger"}
14. [Clone meu projeto](#14-clone-meu-projeto "Clone meu projeto"){:class="js-scroll-trigger"}
15. [Atualize as gems](#15-atualize-as-gems "Atualize as gems"){:class="js-scroll-trigger"}
16. [Rode o projeto](#16-rode-o-projeto "Rode o projeto"){:class="js-scroll-trigger"}
17. [Links](#15-links "Links"){:class="js-scroll-trigger"}

---------------------------------


##### 1. Acesse a pasta HOME

Usando o terminal do seu sistema, vá para o diretório HOME do seu computador:

```
cd $HOME
```

##### 2. Atualize os pacotes:

```
sudo apt-get update 
```

##### 3. Instale as dependências:

```
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev
```

##### 4. Clone o repósitorio do ambiente Ruby (Ruby environment):

_O rbenv serve para preparar seu ambiente para diferentes versões do Ruby e garantir que o seu ambiente de desenvolvimento corresponda com o de produção._

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv

```

##### 5. Adicione nas variáveis de ambiente do seu sistema:

```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL
```

##### 6. Agora clone e adicione nas variáveis de ambiente o 'ruby-build':


_O ruby-build é um utilitário de linha de comando que torna fácil instalar virtualmente qualquer versão do Ruby, da fonte._
_É um disponibilizado como um plugin para o rbenv que providencia o rbenv comandos de instalação, ou como um programa autônomo._

```
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL
```

##### 7. Verifique se o rbenv está configurado corretamente:

```
type rbenv

```

Você terá um resultado parecido com esse:

```
rbenv é uma função
rbenv () 
{ 
    local command;
    command="${1:-}";
    if [ "$#" -gt 0 ]; then
        shift;
    fi;
    case "$command" in 
        rehash | shell)
            eval "$(rbenv "sh-$command" "$@")"
        ;;
        *)
            command rbenv "$command" "$@"
        ;;
    esac
}
```

##### 8. Instale todas as versões disponíveis do Ruby:

```
rbenv install -l
```

Não se assuste pois irá aparecer uma lista extensa no seu terminal.

##### 9. Agora instale o Ruby 2.6.4:

```
rbenv install 2.6.4
rbenv global 2.6.4
ruby -v
```
Essa era a versão na data da minha instalação.

**A instalação do Ruby pode ser um processo longo (mais ou menos 30 minutos), então esteja preparado.**


##### 10. Instale o Bundler:

_O Bundler providência um consistente ambiente para os projetos Ruby para rastreamento e instalação das gems exatas e versões que são necessárias._

```
gem install bundler
rbenv rehash
```

##### 11. Instale o rubygems:

_O rubygems é um gerenciador de pacotes para a linguagem Ruby que provê um formato padrão para a distribuição de programas e bibliotecas em um formato autosuficiente chamado de gem._

sudo apt-get install rubygems

##### 12. Instale o Jekyll:

```
gem install jekyll

```

**Mais demora, então continue preparado.**


##### 13. Teste rodando um projeto:

```
$ jekyll new my-awesome-site
$ cd my-awesome-site
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

**Seu projeto está no ar \o/ .**


##### 14. Clone meu projeto:

```
git clone https://github.com/VictorHolanda21/victorholanda21.github.io.git ; cd victorholanda21.github.io/

```
##### 15. Atualize as gems:

```
bundle update
```
##### 16. Rode o projeto:

```
bundle exec jekyll serve
```

##### 17. Links:

* [Digital Ocean: how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-18-04-pt](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-18-04-pt)
* [Stack overflow: you-dont-have-write-permissions-for-the-var-lib-gems-2-3-0-directory](https://stackoverflow.com/questions/37720892/you-dont-have-write-permissions-for-the-var-lib-gems-2-3-0-directory)
* [Ruby](https://www.ruby-lang.org/pt/)
* [Jekyllrb](https://jekyllrb.com/)
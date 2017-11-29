---
layout: post
comments: true
title:  "Instalando WordPress no Linux"
subtitle: "O que é e como instalar?"
author: Victor Holanda
date:   2017-11-28 22:00:00 -0300
last_modified_at: 2017-11-28 22:00:00 -0300
categories: [Tecnologia]
tags: [wordpress, tutorial, lamp, server, web]
---

Iniciei um trabalho voluntário para o **Centro Débora Mesquita - CDM**, e tive que aprender a utilizar o WordPress. O **WordPress** é um CMS (Custom Management System ou Sistema de Gerenciamento de Conteúdo) largamente utilizado por sites, blogs e etc.. Para facilitar o aprendizado e evitar possíveis erros que afetassem o site real, configurei minha máquina de forma a simular um servidor WEB. Dessa forma, poderia criar um site parecido, testar e propor melhorias. Com isso, resolvi descrever o passo a passo de configuração em uma máquina Linux.


---------------------------------

1. [LAMP Server e phpMyAdmin](#1-lamp-server-e-phpmyadmin "LAMP Server e phpMyAdmin"){:class="js-scroll-trigger"}
2. [Instalando o LAMP Server e phpMyAdmin](#2-instalando-o-lamp-server-e-phpmyadmin "Instalando o LAMP Server e phpMyAdmin"){:class="js-scroll-trigger"}
3. [Instalando o WordPress](#3-instalando-o-wordpress "Instalando o WordPress"){:class="js-scroll-trigger"}
4. [Configurando o MySQL](#4-configurando-o-mysql "Configurando o MySQL"){:class="js-scroll-trigger"}
5. [Configurações extras](#5-configurações-extras "Configurações extras"){:class="js-scroll-trigger"}

---------------------------------


O primeiro passo é instalar o LAMP Server e o phpMyAdmin. Mas o que é LAMP Server e o phpMyAdmin?

#### 1. LAMP Server e phpMyAdmin


Primeiramente, vamos entender o que é o LAMP.

O LAMP é uma combinação de softwares livres e de código aberto. O acrônimo LAMP refere-se as primeiras letras de:

* Linux (sistema operacional),
* Apache (servidor web),
* MariaDB ou MySQL (software de banco de dados) e
* PHP (linguagens de programação) ou Python,

Em geral é usado LAMP para dizer que é um instalador de Apache, Mysql e PHP para Linux, sendo denominados como WAMP os softwares que tem a mesma destinação para sistemas operacionais Windows, MAMP para Macintosh e XAMPP quando refere-se a qualquer dos diferentes sistemas operativos. 

Agora, vamos entender o que é phpMyAdmin.

O phpMyAdmin é uma aplicação web livre e de código aberto desenvolvido em PHP para administração de banco de dados MySQL pelo navegador WEB. A partir desse sistema é possível gerenciar banco de dados, ferramenta obrigatória em quase todas as hospedagem de site da web.

Finalmente, vamos partir para instalação e configuração do sistema.

Eu sou um usuário Linux, então irei fazer o passo a passo no Linux. Para usuários Windows, uma alternativa que recomendo é usar uma virtualização do sistema Linux no computador, ou seja, utilizar um software como o VirtualBox para executar o Linux dentro de seu Windows. Sem mais enrolações, vamos iniciar.

#### 2. Instalando o LAMP Server e phpMyAdmin

Abra o terminal Linux, após isso iremos verificar se há alguma atualização para o sistema:

	sudo apt-get update

Após isso iremos digitar o comando para instalar o LAMP Server e o phpMyAdmin de uma vez só:

	sudo apt-get install lamp-server^ phpmyadmin

Obs.: não esqueça de inserir o ^ ele informa ao sistema que os dois software irão trabalhar em conjunto evitando assim futuras dores de cabeças e configurações.

Após confirmar a continuação da instalação ele vai solicitar algumas perguntas:

1. Senha do usuário para o MySQL (não esqueça a senha);
2. Qual o servidor web que será utilizado, escolha apache2, aperte espaço para selecionar;
3. Configurar a base de dados para o phpMyAdmin, confirme;
4. Informe a senha utilizada para o MySql, colocada anteriormente;

Assim que finalizar, para testar crie um arquivo no diretório do servidor:

	sudo vi /var/www/info.php

Digite dentro do arquivo (antes aperte `i` para inserir conteúdo):

	<?
	phpinfo();
	?>

Salve. Para salvar aperte a tecla ESC e digite `:wq!`.
Acesse no seu navegador o endereço `http://localhost/info.php`.

Se tudo der certo, você irá visualizar uma tela com informações de seu sistema e do servidor web.

#### 3. Instalando o WordPress

Agora, vamos para a segunda etapa que é instalar o WordPress.

Baixe o WordPress atualizado diretamente do site oficial, faça o download do arquivo com o final `.tar.gz`.

Finalizado o download, no terminal digite para entrar no diretório que está o WordPress: 

	cd Downloads/

Agora vamos descompactar o arquivo, onde se lê _version_ substitua pela versão do WordPress que você fez download, uma ajuda é apertar TAB assim que digitar `word`:

	tar -xzvf wordpress-version.tar.gz

Vamos criar um novo diretório para nossa aplicação, onde se lê `nome_do_diretorio` substitua por um nome de sua preferência:

	sudo mkdir /var/www/nome_do_diretorio

Agora vamos copiar todos os arquivos do WordPress para o diretório que criamos anteriormente:

	sudo cp -r wordpress/* /var/www/nome_do_diretorio

Próximo passo é recomendável, não obrigatório, que é editar o arquivo `apache2.conf`:

	sudo vi /etc/apache2/apache2.conf

No fim do arquivo insira:

	AddType application/x-httpd-php .html

Essa linha ajuda quando se tem o site fora da pasta `/var/www`.

Agora vamos aplicar as alterações realizadas reiniciando o servidor:

	service apache2 reload

#### 4. Configurando o MySQL

Certo, agora vamos configurar o banco de dados da aplicação:

	mysql -u root -p

Primeiro vamos criar um banco de dados, substitua `NomeDoBanco` por um nome de sua preferência:

	CREATE DATABASE NomeDoBanco;

Agora, vamos criar um usuário para o banco, substitua `UsuarioDoBanco` e `SenhaDoBanco` por um nome de sua preferência:

	CREATE USER 'UsuarioDoBanco'@'localhost' IDENTIFIED BY 'SenhaDoBanco';

Garantindo privilegios de uso do banco para o usuário:

	GRANT ALL PRIVILEGES ON NomeDoBanco.* TO 'UsuarioDoBanco' IDENTIFIED BY 'SenhaDoBanco';

Pronto, só sair do mysql:	
	
	exit

Próximo passo, informar ao WordPress sobre nosso banco de dados. 
Vamos copiar um arquivo, o `sample` indica que é um arquivo de amostra.
	
	sudo cp /var/www/nome_do_diretorio/wp-config-sample.php /var/www/nome_do_diretorio/wp-config.php

Agora vamos editar o novo arquivo:

	sudo vi /var/www/nome_do_diretorio/wp-config.php

Procure a linha que contém as funções parecido com o que está abaixo e substitua por suas informações:

	define('DB_NAME', 'NomeDoBanco');
	define('DB_USER', 'UsuarioDoBanco');
	define('DB_PASSWORD', 'SenhaDoBanco');

Salva. Saia do documento e reinicie o apache:

	sudo service apache2 restart

Agora, no navegador, acesse:

	http://localhost/nome_do_diretorio

#### 5. Configurações extras

Os próximos passos, são passos que recomendo vamos trocar o dono do diretório usando o comando `chwon`, isso é necessário para que o WordPress tenha permissão de escrita e possa instalar plugins, fazer uploads de imagens e etc., no terminal digite:

	sudo chwon www-data:www-data -R /var/www/nome_do_diretorio/*

Agora fornecer permissão de escrita ao usuário:
	
	sudo chmod -R g+w /var/www/nome_do_diretorio/*

Após isso, vamos alterar o arquivo de configurações do apache em `/etc/apache2/apache2.conf`.

Procure a linha que contém:
	
	User www-data
	Group www-data

Se essa linha tiver igual abaixo, você tem que editar o arquivo que ele informa `/etc/apache2/envvars`:

	# These need to be set in /etc/apache2/envvars
	User ${APACHE_RUN_USER}
	Group ${APACHE_RUN_GROUP}

Então, vamos no arquivo que ele indicou, procure a linha e coloque seu nome de usuários, deverá ficar parecido com isso:

	export APACHE_RUN_USER=victor
	export APACHE_RUN_GROUP=www-data


E para finalizar, vamos inserir essa linha no final do arquivo `/var/www/nome_do_diretorio/wp-config.php` para liberar a instalação de plugins.

	define('FS_METHOD', 'direct');

Reinicie o servidor e teste, tudo deve estar funcionando perfeitamente.

	sudo service apache2 restart

Esses foram os passos que tive que fazer, consegui executar o básico do WordPress, o único problema que tive foi funções como slide não funcionar perfeitamente, meu notebook não tem memória e processamento suficiente para um servidor WEB. É uma pena, mas já era suficiente para iniciar a brincadeira.

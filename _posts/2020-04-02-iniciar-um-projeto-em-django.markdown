---
layout: post
comments: true
title:  "Iniciar um projeto em Django"
subtitle: "Aprenda a instalar o Django e iniciar um projeto"
author: Victor Holanda
date:   2020-04-02 14:50:00 -0300
last_modified_at: 2020-04-02 15:15:00 -0300
category: Tecnologia
tags: ["django", "python", "hospedagem", "programação", "terminal", "Ubuntu"]
---

### 1.  O que é o Django?

No site oficial do Django ele define da seguinte forma:

> Django é um Framework Web de alto nível em Python que encoraja o desenvolvimento rápido e o design limpo e pragmático. Construído por desenvolvedores experientes, ele cuida de grande parte do aborrecimento de um desenvolvimento Web, fazendo com que você possa focar em escrever suas aplicações sem precisar reinventar a roda. É gratuito e códio aberto.



### 2.  Inicie com o Django:

##### 2.1.  Tenha certeza que você tem o Python3 instalado:

```
python3 --version
```

##### 2.2. Crie um diretório para facilitar:

```
mkdir djangoprojeto ; cd djangoprojeto
```

##### 2.3. Crie um ambiente virtual para facilitar no desenvolvimento:

```
python3 -m venv myvenv
```

##### 2.4. Caso você tenha algum problema execute o comando e tente novamente:

```
sudo apt install python3-venv
```

##### 2.5. Ative o ambiente:

```
source myvenv/bin/activate
```

Lembre-se de substituir o nome "myvenv" pelo nome que você definiu anteriormente de seu ambiente virtual.

##### 2.6. Caso queira desativar é só digitar:

```
deactivate
```

##### 2.7. Instalar o pip

Com seu ambiente virtual ativo, instale a última versão do pip, que será usado para instalar o django e outros softwares durante o desenvolvimento:

```
python -m pip install --upgrade pip
```

##### 2.8. E então instale o Django:

```
pip install Django==3.0.5
```

##### 2.9. Instale usando o "requirements.txt":

```
touch requirements.txt ; echo Django~=2.2.4 ; cat requirements.txt ; pip install -r requirements.txt
```

##### 2.10. Atualize sempre o "requirements.txt":

Tenha o costume que sempre após instalar algum programa no seu projeto atualizar o arquivo requirements.txt:

```
pip freeze > requirements.txt
```

##### 2.11. Crie um projeto:

```
django-admin startproject mysite .

```

Você terá algo assim:

```
djangoprojeto
├───manage.py
├───mysite
│        settings.py
│        urls.py
│        wsgi.py
│        __init__.py
└───requirements.txt
```

##### 2.12. Em _settings.py_  faça as seguintes alterações:

```
LANGUAGE_CODE = 'pt-BR'
TIME_ZONE = 'America/Fortaleza'

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

ALLOWED_HOSTS = ['127.0.0.1', '.pythonanywhere.com']
```

##### 2.13. Crie um banco de dados:

```
python manage.py migrate
```

##### 2.14. Rode o servidor:

```
python manage.py runserver
```

Caso queira disponibilizar para acesso na rede interna:

```
python manage.py runserver 0:8000
```

Acesse:

```
http://127.0.0.1:8000/
```

##### 2.15. Inicie uma app:

```
django-admin startapp myapp
```

##### 2.16. Rodar as migrações:

Quando criar os modelos execute o comando

```
python ../manage.py makemigrations
```

##### 2.16. Excluir banco de dados e migrations:

Durante os testes pode ser interessante excluir banco de dados e migrations, execute os seguintes comandos:

```
find -name "__pycache__" -exec rm -rf {} \;
```
```
find -name "00*" -exec rm -rf {} \;
```
```
find -name "db.sqlite3" -exec rm -rf {} \;

```




### 3. Para aprender mais:

* [Django Girls](https://tutorial.djangogirls.org/pt/)
* [Django Basic](https://github.com/rg3915/tutoriais/tree/master/django-basic)
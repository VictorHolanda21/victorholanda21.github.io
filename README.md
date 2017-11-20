# Introduction

That's my personal page in the Internet, it is my resume and a blog. In this blog I will to talk about technology, administration, projects and other subjects that I like.

I used Jekyll, a ruby framework, to provide the pages statics. Also, I used:

* [Disqus][disqus], to the commentaries;
* [Google Analytics][analytics], to monitor the pages access;
* [Lunrjs][lunrjs], to search;
* [JSON+LD][jsonld], to linked data;

I used two templates bootstrap,
* [Resume][resume], to the main theme;
* [Clean Blog][clean-blog], to the blog section;

So, if you want to download this project almost all you will need change is in `_config.yml`, the page `index.html`, `sitemap.xml` and some pages that are in portuguese.

You also have to delete the file `
google59e721dc98067966.html` because is my site verification in Google.

# Installation

Make sure that you have [**Ruby**][ruby], [**Jekyll**][jekyll] and [**Git**][git] installed and in your terminal put the command:

	git clone https://github.com/VictorHolanda21/victorholanda21.github.io.git

So, enter in the project's directory and run the command:
	
	bundle exec jekyll server


  
Is something not working? Don't worry, that happens sometimes. First of all, check your terminal for errors and search in the Internet for some solutions ;). It is the best advice that I can give you.

[ruby]: https://www.ruby-lang.org/en/ "Ruby language"
[jekyll]: https://jekyllrb.com/ "Jekyll"
[git]: https://git-scm.com/ "Git"
[disqus]: https://disqus.com/ "Disqus - build an audience on your website"
[analytics]: https://www.google.com/analytics/ "Google Analytics"
[lunrjs]: https://lunrjs.com/ "Lunrjs - Search made simple"
[jsonld]: https://json-ld.org/ "JSON for Linking Data"
[resume]: https://startbootstrap.com/template-overviews/resume/ "Template Bootstrap: Resume"
[clean-blog]: https://startbootstrap.com/template-overviews/clean-blog/ "Template Bootstrap: Clean Blog"

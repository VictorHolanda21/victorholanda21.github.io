(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('resultados');
    var countResults = document.getElementById('count-results');

    if (results.length) { // Are there any results?
      var appendString = '';
      var appendCountString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<a href="' + item.url + '" title="' + item.title + '"><h2 class="post-title">' + item.title + '</h2></a>';
        appendString += '<p>' + item.content.substring(0, 150) + ' ... </p>';
        appendString += '<p class="post-meta">Por <a href=/pesquisar/?q=' + item.author + ' title="Pesquisar: ' + item.author + '"> '+ item.author + '</a> em '+ item.date;
        appendString += '<hr>';
        if (results.length > 1){
          appendCountString = 'Aproximadamente <b>' + results.length + '</b> resultados.' ;
        } else {
          appendCountString = 'Aproximadamente <b>' + results.length + '</b> resultado.' ;
        }
      }

      searchResults.innerHTML = appendString;
      countResults.innerHTML = appendCountString;
      scrollPage();
    } else {
      countResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }


  }

  function scrollPage(){
    document.getElementById("count-results").click(function() {
        $('html,body').animate({
            scrollTop: $("#resultados").offset().top},
            'slow');
    });  
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('q');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('categories');
      this.field('tags');
      this.field('content');
      this.field('date');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'categories': window.store[key].categories,
        'tags': window.store[key].tags,
        'content': window.store[key].content,
        'date': window.store[key].date,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();

let url,
    data,
    results,
    titles = [],
    snippets = [];
    userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.substr(0,2);
    
const randomButton = document.getElementById('random'),
      input = document.getElementById('input'),
      go = document.getElementById('go'),
      loader = document.getElementById('loader'),
      randomUrl = `https://${userLang}.wikipedia.org/wiki/Special:Random`,
      list = document.getElementById('list');
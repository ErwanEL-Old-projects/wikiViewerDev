const randomButton = document.getElementById('random'),
      input = document.getElementById('input'),
      go = document.getElementById('go'),
      loader = document.getElementById('loader'),
      userLang = navigator.language || navigator.userLanguage,
      randomUrl = `https://${userLang}.wikipedia.org/wiki/Special:Random`,
      list = document.getElementById('list');

let url,
    data,
    results,
    titles = [],
    snippets = [];
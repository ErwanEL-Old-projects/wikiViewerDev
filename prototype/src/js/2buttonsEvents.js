randomButton.addEventListener('click', () => {
    window.open(randomUrl,'_blank');
    window.open(randomUrl);
});
// data.query.search.length === 0
go.addEventListener('click', () => {
    list.innerHTML = "";
    lis = [];
    encodeUrl();
    request();
});

//Permet de d'utiliser 'entrée' pour effectuer la recherche
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        go.click();
    };
});

//permet de passer la classe active lors du clique sur un élément de la liste
list.addEventListener("click", function(e) {
    if(e.node === list.child && e.target.parentNode.nodeName === 'A') {
        e.target.parentNode.classList.add('active');
    };
});
const randomButton = document.getElementById('random');
const input = document.getElementById('input');
const go = document.getElementById('go');
const loader = document.getElementById('loader');
const randomUrl = "https://en.wikipedia.org/wiki/Special:Random";
const list = document.getElementById('list');
let url;
let data;
let results;
let titles = [];
let snippets = [];

const encodeUrl = () => {
    let encodedInput;
    encodedInput = encodeURIComponent(input.value);
    url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${encodedInput}&utf8=`;
};

const userInterface = () =>  {
    results.forEach(result => {
        titles.push(result.title);
        snippets.push(result.snippet);
        list.innerHTML += `<a href="https://en.wikipedia.org/wiki/${result.title}" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">${result.title}</h5>
                                </div>
                            <p class="mb-1">${result.snippet}</p>
                            </a>`;
    });
};

const request = function () {
    loader.style.display = 'block';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            loader.style.display = 'none';
            data = JSON.parse(xhr.responseText);
            results = data.query.search;
            list.innerHTML = "";
            userInterface();
        };
    };
    xhr.open('GET', url, true);
    xhr.send();
};

randomButton.addEventListener('click', () => {
    window.open(randomUrl,'_blank');
    window.open(randomUrl);
});

go.addEventListener('click', () => {
    list.innerHTML = "";
    lis = [];
    encodeUrl();
    request();
});

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        go.click();
    };
});

list.addEventListener("click", function(e) {
    if(e.node === list.child && e.target.parentNode.nodeName === 'A') {
        e.target.parentNode.classList.add('active');
    };
});
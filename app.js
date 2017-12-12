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


loader.style.display = 'none';


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
                            </a>`
    });
};

const request = function () {
    loader.style.display = 'block';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            loader.style.display = 'none';
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.open('GET', url, false);
    xhr.send();
};

randomButton.addEventListener('click', () => {
    window.open(randomUrl,'_blank');
    window.open(randomUrl);
});

go.addEventListener('click', () => {
    encodeUrl();
    request();
    results = data.query.search;
    list.innerHTML = "";
    userInterface();
});

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        go.click();
    }
});
    
// function loadAjax() {
// document.getElementById('results').innerHTML = '';
// openModal();
// var xhr = false;
// if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
// }
// else {
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
// }
// if (xhr) {
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             closeModal();
//             document.getElementById("results").innerHTML = xhr.responseText;
//         }
//     }
//     xhr.open("GET", "load-ajax-data.php", true);
//     xhr.send(null);
// }
// }







// let lis = document.getElementsByClassName('list-group');
// lis = lis[0].children;
// lis.map(li => {
//     console.log(li);
// });

// lis.addEventListener('mouseover', () => {
//     lis.classList.add('active');
// });
// lis.addEventListener('mouseout', () => {
//     lis.classList.remove('active');
// });

// $(function(){
//     console.log('ready');

//     $('.list-group li').click(function(e) {
//         e.preventDefault()

//         $that = $(this);

//         $that.parent().find('li').removeClass('active');
//         $that.addClass('active');
//     });
// })
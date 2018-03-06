const encodeUrl = () => {
    const encodedInput = encodeURIComponent(input.value);
    url = `https://${userLang}.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${encodedInput}&utf8=`;
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

const request = () => {
    loader.style.display = 'block';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            loader.style.display = 'none';
            data = JSON.parse(xhr.responseText);
            results = data.query.search;
            // list.innerHTML = "";
            noResults();
            userInterface();
        };
    };
    xhr.open('GET', url, true);
    xhr.send();
};

const noResults = () => {
    if (results.length === 0) {
        list.innerHTML = '<em class="text-light">No results found.</em>';
    }
};
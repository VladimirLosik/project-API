let form = document.querySelector("#form");

form.addEventListener("submit", () => {
    let formData = new FormData(form);
    let searchStr = formData.get("inputSearch");

    fetch(`https://swapi.dev/api/${searchStr}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(json => alert(json) )
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
})
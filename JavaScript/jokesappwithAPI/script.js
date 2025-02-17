const URL = "https://api.chucknorris.io/jokes/random";


async function getJokes(){

    const response = await fetch(URL);
    const data = await response.json();

    document.getElementById("icon").src = data.icon_url;
    document.getElementById("joke").innerHTML = data.value;
    
}

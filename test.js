distr();
async function distr() {
    let url = `https://www.ozon.ru/search/?text=%D0%BF%D0%B0%D0%BF%D0%B0%D0%B8&from_global=true&page=1`;
    let response = await fetch(url);
    let htmlString = await response.text();
    console.log(htmlString);
}
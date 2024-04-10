const http = require("http");
const { parse } = require('node-html-parser');

const port = 80;
const server = http.createServer(function (request, response) {
    let objParams = {};
    let params = request.url.replace('/?', '');
    params = params.split('&');
    for (p in params) {
        let p_v = params[p].split('=');
        console.log(p_v)
        objParams[p_v[0]] = p_v[1];
    };

    if ('queryOzon' in objParams) {
        let result = distr(objParams['queryOzon']);
        result.then(result => {
            console.log('result', result)
            // response.setHeader("Content-Type", "application/json");
            // response.end(JSON.stringify(result));
            response.setHeader("Content-Type", "text/html; charset=utf-8");
            response.end(result);
        });
    }
    else response.end('NO');
});

server.listen(port, () => { console.log("Сервер запущен по адресу http://localhost:80") });



async function distr(queryText, page, returnArray, qS) {
    if (!page) page = 1;
    else page += 1;

    if (!returnArray) returnArray = [];

    let url = `https://www.ozon.ru/search/?text=${encodeURIComponent(queryText)}&from_global=true&page=${page}`;
    let response = await fetch(url);
    let htmlString = await response.text();
    return htmlString;
    const root = parse(htmlString);

    let scriptsInHTML = root.querySelector("body > script:nth-child(2)").childNodes[0]._rawText;

    if (!qS) {
        let tag_1 = '"stateId":"searchResultsV2-';
        let poz_1 = scriptsInHTML.indexOf(tag_1);
        qS = poz_1 >= 0 ? scriptsInHTML.slice(poz_1 + tag_1.length) : null;
        qS = qS.slice(0, qS.indexOf('-default-1"'));
        console.log('qS = ', qS);
        if (!qS) return 'Error 001'
    };

    let el = root.querySelector(`#state-searchResultsV2-${qS}-default-1`);
    let cardsInSearch = JSON.parse(el._attrs['data-state']).items;

    for (c in cardsInSearch) {
        let cart = cardsInSearch[c];
        let link = cart.action.link;
        let rk = link.includes('/?advert=') ? 'РК' : 'Органика';
        returnArray.push({ [cart.skuId]: { rk } });
    };


    if (page === 50) return returnArray;
    else return distr(queryText, page, returnArray, qS);
};
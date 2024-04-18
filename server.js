const axios = require('axios'); // npm install axios
const apikeyZenRows = 'd5c14dd24084fd8b8b24712a4787e90e56fc4b08';

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
        let maxPage = objParams['maxPage'] ? objParams['maxPage'] : 1; 
        let result = parsingInSearchOzonByQuery(objParams['queryOzon'], maxPage);
        result.then(result => {
            console.log('result', result)
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(result));
        });
    }
    else response.end('NO');
});

server.listen(port, () => { console.log("Сервер запущен по адресу http://localhost:80") });



async function parsingInSearchOzonByQuery(queryText, maxPage, page, returnArray, qS) {
    if (!page) page = 1;
    else page += 1;
    console.log('page', page);

    if (!returnArray) returnArray = [];

    let url = `https://www.ozon.ru/search/?text=${encodeURIComponent(queryText)}&from_global=true&page=${page}`;

    let response = await getHTML_Ozon_InZenRows(url);
    let htmlString = await response.data;

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


    if (page === maxPage) {
        console.log(returnArray);
        return returnArray;
    }
    else return parsingInSearchOzonByQuery(queryText, maxPage, page, returnArray, qS);
};




async function getHTML_Ozon_InZenRows(url) {
    let html = await axios({
        'url': 'https://api.zenrows.com/v1/',
        'method': 'GET',
        'params': {
            'url': url,
            'apikey': apikeyZenRows,
            'js_render': 'true',
            'premium_proxy': 'true',
        }
    });
    return html;
};
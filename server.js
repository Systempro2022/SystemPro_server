const axios = require('axios'); // npm install axios

const http = require("http");
const { parse } = require('node-html-parser');

const port = 80;
const server = http.createServer(function (request, response) {
    try {
        let put_params = request.url.split('?'); // [путь (адрес), неразобраные параметры]
        let putRequest = put_params[0] ? put_params[0] : null; // Получим адрес, если он есть
        if (putRequest === '/favicon.ico') {
            response.end('no_favicon');
            return;
        };
        console.log('putRequest =', putRequest);

        // Распарсим параметры
        let params = put_params[1] ? put_params[1].split('&') : null;
        var objParamsRequest = {};
        for (p in params) {
            let p_v = params[p].split('=');
            objParamsRequest[p_v[0]] = p_v[1];
        };
        console.log('objParamsRequest =', objParamsRequest);


        // Обработка запросов

        if (putRequest === '/parsingInSearchOzonByQuery' && 'query' in objParamsRequest) {
            let result = parsingInSearchOzonByQuery(objParamsRequest);
            result.then(result => {
                console.log('result =', result)
                response.setHeader("Content-Type", "application/json"); //response.setHeader("Content-Type", "text/html; charset=utf-8");
                response.end(JSON.stringify(result));
                objParamsRequest = {};
            });
        }
        else response.end('NO');

    } catch (error) {
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({ 'ok': false, 'message': error.stack }));
    };
});

server.listen(port, () => { console.log("Сервер запущен") });


// Парсим поисковую выдачу OZON по запросу
async function parsingInSearchOzonByQuery(objParamsRequest, page, returnArray, qS) {
    if (!page) page = 1;
    else page += 1;
    console.log('page =', page);

    if (!returnArray) returnArray = [];

    let maxPage = objParamsRequest['maxPage'] ? Number(objParamsRequest['maxPage']) : 1;
    let queryText = objParamsRequest['query'];
    let url = `https://www.ozon.ru/search/?text=${encodeURIComponent(queryText)}&from_global=true&page=${page}`;
    try {
        var response = await getHTML_Ozon_InScrapingbee(url);
    } catch (error) {
        return { 'ok': false, 'message_ZenRows': error.response.data };
    };
    let htmlString = await response.data;
    let noResult = htmlString.includes('Простите, по вашему запросу товаров сейчас нет.');
    if (noResult) return { 'ok': true, 'data': 'Простите, по вашему запросу товаров сейчас нет.'};
    
    const root = parse(htmlString);
    let scriptsInHTML = root.querySelector("body > script:nth-child(2)").childNodes[0]._rawText;

    if (!qS) {
        let tag_1 = '"stateId":"searchResultsV2-';
        let poz_1 = scriptsInHTML.indexOf(tag_1);
        qS = poz_1 >= 0 ? scriptsInHTML.slice(poz_1 + tag_1.length) : null;
        qS = qS.slice(0, qS.indexOf('-default-1"'));
        console.log('qS =', qS);
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
        //console.log(returnArray);
        return { 'ok': true, 'data': returnArray };
    }
    else return parsingInSearchOzonByQuery(objParamsRequest, page, returnArray, qS);

    // Получаем HTML
    async function getHTML_Ozon_InScrapingbee(url) {
        let html = await axios({
            'url': 'https://app.scrapingbee.com/api/v1/',
            'method': 'GET',
            'params': {
                'api_key': objParamsRequest.apiKeyScrapingbee,
                'url': url,
                'return_page_source': 'true',
                'stealth_proxy': 'true',
            }
        });
        //console.log(html);
        return html;
    };
};
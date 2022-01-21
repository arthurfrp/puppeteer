const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const cotacao = []
    
    await page.goto('https://br.advfn.com/investimentos/futuros/boi-gordo', {waitUntil: "networkidle2"})
    const gado = 'Brazilian feeder BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })


    await page.goto('https://br.advfn.com/investimentos/futuros/dolar', {waitUntil: "networkidle2"})
    const dolar = 'Dolar Expetations BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })


    await page.goto('https://br.advfn.com/investimentos/futuros/milho', {waitUntil: "networkidle2"})
    const milho = 'Brazilian Corn BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })
    
    
    await page.goto('https://br.advfn.com/investimentos/futuros/soja', {waitUntil: "networkidle2"})
    const soja = 'Brazilian Corn BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })
    
    
    await page.goto('https://br.advfn.com/investimentos/futuros/cafe', {waitUntil: "networkidle2"})
    const cafe = 'Brazilian Corn BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })

    
    await page.goto('https://br.advfn.com/investimentos/futuros/milho', {waitUntil: "networkidle2"})
    const milho = 'Brazilian Corn BRL ' + await page.$eval('span[class="PriceTextUp"]', (span) => {
        return span.innerHTML
    })

    cotacao.push({dolar})
    cotacao.push({gado})
    cotacao.push({milho})
    cotacao.push({soja})
    cotacao.push({cafe})


    console.log(cotacao)

    fs.writeFile('cotacao.json', JSON.stringify(cotacao, null, 2),err => {
        if(err) throw new Error('API Error offline... market prices out to date')
        console.log('API online connected with market prices')
    } )

})();

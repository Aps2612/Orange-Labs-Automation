const puppeteer = require('puppeteer');

async function runAutomation() {
  const browser = await puppeteer.launch({ headless: false }); // Launch headful browser
  const page = await browser.newPage();
  await page.goto('https://swap.defillama.com');


await page.type('#react-select-2-input', 'Arbitrum');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');



const input = await page.$('.css-lv0ed5')
await input.click({clickCount : 3})
await input.type('12')




// const ele = await page.$('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button')
// await ele.click();
// await ele.type('WBTC')


// const newPagePromise = getNewPageWhenLoaded()
// const ele = await page.$('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button')
// await ele.click();
// const newPage  = await newPagePromise;
// newPage = newPage.mainFrame();
// const element = await newPage.waitForSelector('#chakra-modal-\:rg\: > div.List > div > div:nth-child(1) > div');
// newPage.click(element);

// function getNewPageWhenLoaded() {
//     return new Promise((x) => browser.once('targetcreated', async (target) => {
//         const newPage = await target.page();
//         const newPagePromise = new Promise(() => newPage.once('domcontentloaded', () => x(newPage)));
//         const isPageLoaded = await newPage.evaluate(() => document.readyState);
//         return isPageLoaded.match('complete|interactive') ? x(newPage) : newPagePromise;
//     }));
// }


















// const ele2 = await page.$('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button > span')
// await ele2.click();
// await ele2.type('USDC')
// await ele2.click()
// const ele2 = await ele.$('#chakra-modal-\:r3e\: > div.List > div > div:nth-child(1) > div')










 
}

runAutomation();

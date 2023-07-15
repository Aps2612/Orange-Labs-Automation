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

  const input = await page.$('.css-lv0ed5');
  await input.click({ clickCount: 3 });
  await input.type('12');


  const ele = await page.$(
    '#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button'
  );
  await ele.click();
  await ele.type('WBTC')
  const newPage = await getNewPageWhenLoaded();
  const element = await newPage.waitForSelector(
    '#chakra-modal-\\:rg\\: > div.List > div > div:nth-child(1) > div'
  );
  await newPage.click(element);

  function getNewPageWhenLoaded() {
    return new Promise((x) =>
      browser.once('targetcreated', async (target) => {
        const newPage = await target.page();
        const newPagePromise = new Promise(() =>
          newPage.once('domcontentloaded', () => x(newPage))
        );
        const isPageLoaded = await newPage.evaluate(() => document.readyState);
        return isPageLoaded.match('complete|interactive')
          ? x(newPage)
          : newPagePromise;
      })
    );
  }
}

runAutomation();

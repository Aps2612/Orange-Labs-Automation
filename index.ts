/**
 * Puppeteer automation script to perform tasks on the "https://swap.defillama.com" website.
 */

const puppeteer = require('puppeteer');



/**
 * Function to run the automation script.
 */
async function runAutomation() {
  // Launch a new Puppeteer browser instance
  const browser = await puppeteer.launch({ headless: false }); 

  // Create a new page in the browser
  const page = await browser.newPage();

  // Navigate to the "https://swap.defillama.com" website
  await page.goto('https://swap.defillama.com');

// Type "Arbitrum" in the input field with id "react-select-2-input"
await page.type('#react-select-2-input', 'Arbitrum');

// Simulate arrow key presses to navigate through the dropdown options
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');
await page.keyboard.press('ArrowDown');

// Press Enter key to select the desired option from the dropdown
await page.keyboard.press('Enter');


  // Find the input field with class "css-lv0ed5"
const input = await page.$('.css-lv0ed5')

// Triple-click inside the input field to select its contents
await input.click({clickCount : 3})

 // Type "12" into the input field
await input.type('12')


// Click the button to trigger the opening of a new page
const buttonElement = await page.$(
  '#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button'
);

//Clicking the button once to open up Input and New popup frame
await buttonElement.click();

//Typing WBTC in thr input box
await buttonElement.type('WBTC')


// const element = await buttonElement.$(
//   '#chakra-modal-:rq: > div.List > div > div:nth-child(1) > div'
// );
const WBTC = await buttonElement.$('.chakra-text css-72rvq0')
 

await WBTC.click()


// Click the button to trigger the opening of a new page
const buyButtonElement = await page.$('#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-bb167634-1.bpASfZ > div.sc-bb167634-3.Lyrxc > div.sc-bb167634-0.bVZjlY > div.css-1urcov8 > div:nth-child(3) > div.css-1k491an > button > span')


//Clicking the button once to open up Input and New popup frame
await buyButtonElement.click()

//Typing WBTC in thr input box
await buyButtonElement.type('USDC')


await buyButtonElement.$('#chakra-modal-\:r1d\: > div.List > div > div:nth-child(2) > div > p > span');

// await buyButtonElement.class()


}

runAutomation();

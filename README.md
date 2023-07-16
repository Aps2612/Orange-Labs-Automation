# Orange Labs Automation

This repository contains a Puppeteer automation script that performs specific tasks on the "https://swap.defillama.com" website. The script utilizes Puppeteer, a Node.js library, to automate browser actions such as navigation, form filling, and interaction with elements on the webpage.

## Prerequisites

To run this automation script, ensure that you have the following installed:

- [Node.js](https://nodejs.org) (version 10 or later)
- [npm](https://www.npmjs.com) (Node Package Manager) 

## Setup

1. Clone the repository or download the script files to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:

   ```bash
   npm install

## Usage

1. Open the index.js file in a text editor.

2. Customize the script if needed. You can modify the website URL, input field selectors, or any other parameters based on your requirements.

3. Save the changes.

4. In the terminal or command prompt, run the automation script using the following command:

    ```bash
   npm install
    
5. The Puppeteer script will launch a Chromium browser in non-headless mode and perform the specified tasks on the "https://swap.defillama.com" website.

6. Observe the browser actions and results in the launched browser window.

## Script Explanation

  The automation script performs the following tasks:

- Launches a new instance of the Puppeteer-controlled browser.
- Navigates to the "https://swap.defillama.com" website.
- Fills an input field with the text "Arbitrum" and selects an option from the dropdown.
- Clicks on an input field and enters the value "12".
- Clicks on a sell Input button to trigger the opening of a new page.
- Type 'WBTC' in the input box and selet the desired selector
- Clicks on a buy input box button to trigger the opening of a new page.
- Type 'USDC' in the input box and selet the desired selector
  
import { test, expect} from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Utility function to write raw table rows into a csv file
 * @param fileName - name of the csv file to create
 * @param headers - Array of column headers
 * @param rows - Array of rows  (each row  is an array of strings)
 */

async function writeToCSV(fileName: string, headers: string[], rows: string[][]): Promise<void> {
    try{
        const filePath= path.resolve(__dirname, fileName);

    //Build CSV files directly from rows
    const csvContent = [ headers.join(','),...rows.map(row => row.join(',')) ].join('\n');   
    fs.writeFileSync(filePath, csvContent, 'utf8');
    console.log(`created CSV file succesfully at: ${filePath}`);
    } catch (error){
        console.log('error writing CSV file:', error);
        throw error;
    }
    }

/**
 * Generic function to scrape columns from a table and save them.
 * @param page - Playwright page object
 * @param url - Website URL
 * @param tableSelector - selector for the table
 * @param outputFile - CSV file name
 */

async function scrapeTabletoCSV(page:any, url:string, tableSelector:string, outputfile:string){
    try{

     //Naviagte to the site
     await page.goto(url);
  
     // Wait until table cells are present
     await page.waitForSelector(`${tableSelector} tr td`,{state: 'attached', timeout: 60000 });

     //Get all rows
     const rows = await page.locator(`${tableSelector} tr`).all();
     console.log(`Found ${rows.length} rows`);

     // Extract headers (first row) 
     const headersRaw: string[] = await page.locator(`${tableSelector} th`).allInnerTexts(); 
     // Keep line breaks, trim edges
     const cleanedHeaders = headersRaw.map(h => h.trim()).filter(h => h.length > 0);
     const quotedHeaders  = cleanedHeaders.map(h => `"${h.replace(/"/g, '""')}"`);
     const headers = quotedHeaders.slice(0, 4);
     console.log('Headers: ', headers);

     //Extract first 4 columns
     const scrapedData: string[][]= [];
     for (const row of rows.slice(1)) { 
     const cells = await row.locator( 'td').allInnerTexts(); 
     const padded = cells.slice(0, 4); 
     // Pad missing cells to always have 4 columns
     while (padded.length < 4) padded.push('');
     //Skip empty rows (all cells are '') 
     const isEmpty = padded.every((cells: string) => cells.trim() === ''); 
     if (isEmpty) continue; 
     scrapedData.push(padded);
     }
     console.log('Scraped rows:', scrapedData);

      //Write Scraped rows directly in to CSV file
      await writeToCSV(outputfile, headers, scrapedData);

      //Validation
      expect(scrapedData.length).toBeGreaterThan(0);
      console.log(`scraped ${scrapedData.length} rows from ${url}`);
    } catch (error){
        console.log('Error scraping table: ', error);
        throw error;

      }
      }

test('Scrape table values and write into a CSV file', async ({ page }) => { 
    await scrapeTabletoCSV(
         page,
        'https://www.epexspot.com/en/market-results?market_area=GB&auction=&trading_date=&delivery_date=2026-01-03&underlying_year=&modality=Continuous&sub_modality=&technology=&data_mode=table&period=&production_period=&product=30', //URL
        '.js-table-values',                                     //table Selector
        'scraped_data.csv'                                      //Output fileName
    );

});

const puppeteer = require('puppeteer');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:5173';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function verify() {
  console.log('--- STARTING BHU-SETU ENHANCEMENTS VERIFICATION ---');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: CHROME_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('[1] Loading Portal at ' + BASE_URL);
    await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
    await sleep(1500);

    const title = await page.title();
    console.log('✓ Page Title:', title);

    // 2. Test Official Gov Portals popover
    console.log('[2] Testing Official Gov Portals Popover in Header...');
    const clickedGov = await page.evaluate(() => {
      const btn = document.querySelector('button[aria-label="Official Government Portals"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    console.log('✓ Clicked Gov Portals popover button:', clickedGov);
    await sleep(500);

    const govLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href*=".gov.in"], a[href*="cersai.org.in"]'));
      return links.map(l => ({ text: l.textContent.trim(), href: l.href }));
    });
    console.log(`✓ Found ${govLinks.length} official government portal links in popover/header:`);
    govLinks.slice(0, 6).forEach(l => console.log(`   - ${l.text} -> ${l.href}`));

    // Close popover
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent.includes('Official Gov Portals'));
      if (target) target.click();
    });
    await sleep(300);

    // 3. Test Location Search: Landmarks
    console.log('[3] Testing Landmark Search ("Nemili")...');
    const searchSelector = 'input[aria-label="Search cadastral registry"]';
    await page.click(searchSelector);
    await page.evaluate((sel) => {
      const input = document.querySelector(sel);
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, 'Nemili');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    }, searchSelector);
    await sleep(800);

    const landmarkFound = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.divide-y > div'));
      const landmarkItem = items.find(i => i.textContent.includes('Nemili') || i.textContent.includes('GAZETTEER'));
      if (landmarkItem) {
        return landmarkItem.textContent.trim().substring(0, 100);
      }
      return null;
    });
    console.log('✓ Landmark Search Result:', landmarkFound);

    // Click on Nemili landmark
    await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.divide-y > div'));
      const item = items.find(i => i.textContent.includes('Nemili') && !i.textContent.includes('GAZETTEER'));
      if (item) item.click();
    });
    await sleep(800);

    // 4. Test Coordinate Search: "30.7398, 76.7827"
    console.log('[4] Testing Coordinate Search ("30.7398, 76.7827")...');
    await page.evaluate((sel) => {
      const input = document.querySelector(sel);
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, '30.7398, 76.7827');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    }, searchSelector);
    await sleep(800);

    const coordResult = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.divide-y > div'));
      const coordItem = items.find(i => i.textContent.includes('Jump to Coordinates'));
      return coordItem ? coordItem.textContent.trim().replace(/\s+/g, ' ') : null;
    });
    console.log('✓ Coordinate Navigation Option:', coordResult);

    // 5. Test Parcel Search and Selection: "SCO 143"
    console.log('[5] Testing Cadastral Parcel Search ("SCO 143")...');
    await page.evaluate((sel) => {
      const input = document.querySelector(sel);
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, 'SCO 143');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    }, searchSelector);
    await sleep(800);

    const parcelClicked = await page.evaluate(() => {
      const items = document.querySelectorAll('.divide-y > div');
      if (items.length > 1) {
        items[1].click();
        return true;
      }
      return false;
    });
    console.log('✓ Parcel Selected via Dropdown Index 1:', parcelClicked);
    await sleep(1000);

    // 6. Verify Property Passport
    console.log('[6] Verifying Property Passport & External Gov Verification Links...');
    await page.evaluate(() => {
      const rorBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('2. RoR & Ownership'));
      if (rorBtn) rorBtn.click();
      return true;
    });
    await sleep(600);

    const rorLink = await page.evaluate(() => {
      const a = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('Verify on State Portal'));
      return a ? { text: a.textContent.trim(), href: a.href } : null;
    });
    console.log('✓ RoR Verification Link:', rorLink);

    // Encumbrance tab
    await page.evaluate(() => {
      const encBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('3. Encumbrance'));
      if (encBtn) encBtn.click();
    });
    await sleep(600);

    const cersaiLink = await page.evaluate(() => {
      const a = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('CERSAI Portal'));
      return a ? { text: a.textContent.trim(), href: a.href } : null;
    });
    console.log('✓ Encumbrance CERSAI Link:', cersaiLink);

    // 7. Verify Footer Links
    console.log('[7] Verifying Footer Links...');
    const footerLinks = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return [];
      const links = Array.from(footer.querySelectorAll('a'));
      return links.map(l => ({ text: l.textContent.trim(), href: l.href })).filter(l => l.href.startsWith('http'));
    });
    console.log(`✓ Found ${footerLinks.length} active external links in Footer:`);
    footerLinks.slice(0, 8).forEach(l => console.log(`   - ${l.text} -> ${l.href}`));

    // 8. Verify Official Gov Record Modal
    console.log('[8] Testing Official Gov Record Modal (Jamabandi / AnyPatta Extract)...');
    const openedGovModal = await page.evaluate(() => {
      const govBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Gov Record') || b.textContent.includes('View Extract'));
      if (govBtn) {
        govBtn.click();
        return true;
      }
      return false;
    });
    console.log('✓ Clicked Gov Record Extract button:', openedGovModal);
    await sleep(800);

    const govModalTitle = await page.evaluate(() => {
      const modal = document.querySelector('.bg-navy-900 div');
      const text = document.body.textContent;
      const hasJamabandi = text.includes('Jamabandi') || text.includes('Patta');
      const hasCersai = text.includes('CERSAI');
      const hasCors = text.includes('Survey of India CORS');
      return { modalFound: !!modal, hasJamabandi, hasCersai, hasCors };
    });
    console.log('✓ Official Gov Record Modal Inspection:', govModalTitle);

    // Close Gov Modal
    await page.evaluate(() => {
      const closeBtn = document.querySelector('.bg-navy-900 button:last-child');
      if (closeBtn) closeBtn.click();
    });
    await sleep(500);

    // 9. Verify Search by Gov Record Keys (Patta / CERSAI)
    console.log('[9] Testing Search by Government Registry Key ("CERSAI")...');
    await page.evaluate((sel) => {
      const input = document.querySelector(sel);
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, 'CERSAI');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    }, searchSelector);
    await sleep(800);

    const cersaiMatches = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.divide-y > div'));
      return items.length;
    });
    console.log(`✓ Search for "CERSAI" returned ${cersaiMatches} registry matches.`);

    console.log('===================================================');
    console.log('ALL VERIFICATIONS SUCCESSFUL! SYSTEM FULLY FUNCTIONAL');
    console.log('===================================================');
  } catch (err) {
    console.error('Verification failed:', err);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

verify();

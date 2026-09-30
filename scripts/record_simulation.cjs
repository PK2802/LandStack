/**
 * Bhu-Setu National Land Stack: Automated 120-Second Headless Video Recording Engine
 *
 * This standalone script automates user interactions in a clean, headless Chrome
 * instance at 1920x1080 (30 FPS) and records the entire 120-second product demo
 * directly to "land_stack_simulation.mp4" in the project root.
 *
 * Crucial constraint: NO REACT/UI SOURCE CODE IS TOUCHED.
 * All temporary visual overlays (Scene 1 problem diagram, animated cursor, subtitles,
 * and end card) are injected at runtime into the browser DOM via page.evaluate().
 */

const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const OUTPUT_FILE = path.resolve(__dirname, '..', 'land_stack_simulation.mp4');

// System Chrome executable
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function smoothMouseMove(page, targetX, targetY, steps = 18) {
  await page.evaluate(({ x, y }) => {
    let cursor = document.getElementById('demo-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'demo-cursor';
      cursor.style.position = 'fixed';
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.borderRadius = '50%';
      cursor.style.border = '2px solid #F59E0B';
      cursor.style.backgroundColor = 'rgba(245, 158, 11, 0.4)';
      cursor.style.boxShadow = '0 0 12px rgba(245, 158, 11, 0.6)';
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '999999';
      cursor.style.transform = 'translate(-50%, -50%)';
      cursor.style.transition = 'all 0.12s ease-out';
      document.body.appendChild(cursor);
    }
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  }, { x: targetX, y: targetY });

  await page.mouse.move(targetX, targetY, { steps });
}

async function clickCoords(page, x, y) {
  await smoothMouseMove(page, x, y, 16);
  await sleep(100);

  // Animate pulse on cursor
  await page.evaluate(() => {
    const cursor = document.getElementById('demo-cursor');
    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.65)';
      setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 150);
    }
  });

  await page.mouse.click(x, y);
  await sleep(200);
}

async function clickButtonWithText(page, text) {
  const coords = await page.evaluate((t) => {
    const candidates = Array.from(document.querySelectorAll('button, a, [role="button"], span, div'));
    for (const b of candidates) {
      if (b.textContent && b.textContent.trim().includes(t)) {
        const rect = b.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.left >= 0) {
          return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        }
      }
    }
    return null;
  }, text);

  if (coords) {
    await clickCoords(page, coords.x, coords.y);
  }

  // Ensure DOM click fires
  await page.evaluate((t) => {
    const b = Array.from(document.querySelectorAll('button, a, [role="button"], span, div')).find(
      el => el.textContent && el.textContent.trim().includes(t)
    );
    if (b) {
      if (typeof b.click === 'function') b.click();
      else if (b.parentElement && typeof b.parentElement.click === 'function') b.parentElement.click();
    }
  }, text);
}

async function clickSelector(page, selector) {
  const el = await page.$(selector);
  if (!el) {
    console.warn(`[clickSelector] Selector not found: ${selector}`);
    return;
  }
  const box = await el.boundingBox();
  if (box) {
    await clickCoords(page, box.x + box.width / 2, box.y + box.height / 2);
  }
  await page.evaluate((sel) => {
    const element = document.querySelector(sel);
    if (element) element.click();
  }, selector);
}

async function closeModalIfOpen(page) {
  await page.evaluate(() => {
    // Find close button with lucide-x
    const closeButtons = Array.from(document.querySelectorAll('button')).filter(
      b => b.querySelector('svg.lucide-x') || b.textContent.includes('×')
    );
    if (closeButtons.length > 0) {
      closeButtons[closeButtons.length - 1].click();
    }
  });
  await sleep(600);
}

async function updateSubtitles(page, timestamp, sceneTitle, text) {
  await page.evaluate(({ timestamp, sceneTitle, text }) => {
    let sub = document.getElementById('demo-subtitles');
    if (!sub) {
      sub = document.createElement('div');
      sub.id = 'demo-subtitles';
      sub.style.position = 'fixed';
      sub.style.bottom = '16px';
      sub.style.left = '50%';
      sub.style.transform = 'translateX(-50%)';
      sub.style.width = '90%';
      sub.style.maxWidth = '1120px';
      sub.style.backgroundColor = 'rgba(15, 23, 42, 0.94)';
      sub.style.border = '1px solid #334155';
      sub.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.6)';
      sub.style.borderRadius = '4px';
      sub.style.padding = '10px 20px';
      sub.style.zIndex = '999990';
      sub.style.fontFamily = 'Inter, ui-sans-serif, system-ui, sans-serif';
      sub.style.color = '#F8FAFC';
      sub.style.display = 'flex';
      sub.style.alignItems = 'center';
      sub.style.justifyContent = 'space-between';
      sub.style.gap = '16px';
      sub.style.pointerEvents = 'none';
      sub.style.backdropFilter = 'blur(8px)';
      document.body.appendChild(sub);
    }

    sub.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0;">
        <span style="background-color: #C2410C; color: #FFF; font-size: 10px; font-weight: 700; padding: 3px 7px; border-radius: 2px; font-family: monospace;">${timestamp}</span>
        <span style="color: #FBBF24; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${sceneTitle}</span>
      </div>
      <div style="flex: 1; font-size: 12px; line-height: 1.4; color: #E2E8F0; font-style: italic; text-align: center;">
        "${text}"
      </div>
    `;
  }, { timestamp, sceneTitle, text });
}

async function runRecording() {
  console.log('===================================================================');
  console.log('BHU-SETU: STARTING 120-SECOND SCREEN SIMULATION VIDEO RECORDING');
  console.log(`Target URL: ${BASE_URL}`);
  console.log(`Output File: ${OUTPUT_FILE}`);
  console.log(`Browser: ${CHROME_PATH}`);
  console.log(`FFmpeg: ${ffmpegPath}`);
  console.log('===================================================================');

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: CHROME_PATH,
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1920,1080',
      '--disable-web-security',
      '--force-device-scale-factor=1',
      '--hide-scrollbars'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  const recorder = new PuppeteerScreenRecorder(page, {
    followNewTab: false,
    fps: 30,
    ffmpeg_Path: ffmpegPath,
    videoFrame: {
      width: 1920,
      height: 1080,
    },
    aspectRatio: '16:9',
  });

  console.log('[Init] Navigating to Bhu-Setu portal...');
  await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
  await sleep(2000);

  // Start recording
  console.log('[0:00] Starting MP4 video capture...');
  await recorder.start(OUTPUT_FILE);

  try {
    // ===================================================================
    // SCENE 1: The Fragmentation Problem (0:00 - 0:20 | 20s)
    // ===================================================================
    console.log('[0:00 - 0:20] SCENE 1: The Fragmentation Problem & ULPIN Solution');
    await updateSubtitles(
      page,
      '00:05 / 02:00',
      'Scene 1: The Bottleneck',
      'Land governance across Indian states remains fragmented across disconnected departments. Ownership papers sit in Revenue, physical boundaries in Survey, deed registrations in the Sub-Registrar Office, and encumbrances in banks.'
    );

    // Inject Scene 1 Visual Diagram Overlay
    await page.evaluate(() => {
      const overlay = document.createElement('div');
      overlay.id = 'scene1-overlay';
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.backgroundColor = 'rgba(11, 23, 44, 0.96)';
      overlay.style.zIndex = '999980';
      overlay.style.display = 'flex';
      overlay.style.flexDirection = 'column';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.padding = '40px';
      overlay.style.color = '#FFF';
      overlay.style.fontFamily = 'Inter, sans-serif';
      overlay.style.transition = 'opacity 0.6s ease';

      overlay.innerHTML = `
        <div style="text-align: center; max-width: 800px; margin-bottom: 28px;">
          <div style="display: inline-block; background-color: #1E293B; border: 1px solid #334155; padding: 4px 12px; border-radius: 2px; font-size: 11px; font-weight: 700; color: #F59E0B; margin-bottom: 12px; font-family: monospace;">
            DIGITAL PUBLIC INFRASTRUCTURE PILOT • GOVERNMENT OF INDIA
          </div>
          <h1 style="font-size: 34px; font-weight: 800; margin: 0; color: #FFFFFF; letter-spacing: -0.5px;">
            The Land Governance Bottleneck
          </h1>
          <p style="color: #94A3B8; font-size: 14px; margin-top: 8px;">
            Siloed databases, unlinked cadastral boundaries, and manual title searches across departments.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 1050px; width: 100%;">
          <div style="background-color: #0F172A; border: 1px solid #334155; padding: 20px; border-radius: 4px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🏛</div>
            <div style="font-weight: 700; font-size: 14px; color: #FFF;">Revenue Dept</div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 6px;">Jamabandi / Patta (Form-VII) & Land Rights</div>
            <div style="margin-top: 12px; font-size: 10px; color: #F87171; background-color: #450A0A; padding: 3px 6px; border-radius: 2px;">No Spatial Verification</div>
          </div>

          <div style="background-color: #0F172A; border: 1px solid #334155; padding: 20px; border-radius: 4px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">📜</div>
            <div style="font-weight: 700; font-size: 14px; color: #FFF;">Sub-Registrar (SRO)</div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 6px;">Deed Conveyance & Stamp Registration</div>
            <div style="margin-top: 12px; font-size: 10px; color: #F87171; background-color: #450A0A; padding: 3px 6px; border-radius: 2px;">Deeds Unlinked to Map</div>
          </div>

          <div style="background-color: #0F172A; border: 1px solid #334155; padding: 20px; border-radius: 4px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">📐</div>
            <div style="font-weight: 700; font-size: 14px; color: #FFF;">Town Planning</div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 6px;">Master Plan Zoning, FSI, Water Buffers</div>
            <div style="margin-top: 12px; font-size: 10px; color: #F87171; background-color: #450A0A; padding: 3px 6px; border-radius: 2px;">Manual Building Permits</div>
          </div>

          <div style="background-color: #0F172A; border: 1px solid #334155; padding: 20px; border-radius: 4px; text-align: center;">
            <div style="font-size: 28px; margin-bottom: 8px;">🏦</div>
            <div style="font-weight: 700; font-size: 14px; color: #FFF;">Scheduled Banks</div>
            <div style="font-size: 11px; color: #94A3B8; margin-top: 6px;">CERSAI Mortgage Liens & Loan Recovery</div>
            <div style="margin-top: 12px; font-size: 10px; color: #F87171; background-color: #450A0A; padding: 3px 6px; border-radius: 2px;">Risk of Multiple Mortgages</div>
          </div>
        </div>

        <div style="margin-top: 26px; background-color: #1E293B; border: 2px solid #F59E0B; padding: 14px 28px; border-radius: 4px; text-align: center; max-width: 650px;">
          <div style="font-size: 11px; font-weight: 700; color: #FBBF24; text-transform: uppercase; font-family: monospace;">Solution: Unified Digital Public Infrastructure</div>
          <div style="font-size: 17px; font-weight: 800; color: #FFFFFF; margin-top: 4px;">
            The 14-Digit ULPIN (Bhu-Aadhaar) Geocode Anchor
          </div>
          <div style="font-size: 11px; color: #94A3B8; margin-top: 4px;">
            Anchoring every record, right, and restriction to an authoritative spatial polygon.
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    });

    await sleep(9500);

    await updateSubtitles(
      page,
      '00:15 / 02:00',
      'Scene 1: ULPIN Solution',
      'Bhu-Setu solves this by anchoring every record, right, and restriction to a single spatial anchor: the 14-digit Unique Land Parcel Identification Number.'
    );

    await sleep(9500);

    // Fade out and remove Scene 1 overlay
    await page.evaluate(() => {
      const overlay = document.getElementById('scene1-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 600);
      }
    });
    await sleep(1500);

    // ===================================================================
    // SCENE 2: The 3-Tier GIS Map Engine (0:20 - 0:45 | 25s)
    // ===================================================================
    console.log('[0:20 - 0:45] SCENE 2: The 3-Tier GIS Map Engine');
    await updateSubtitles(
      page,
      '00:25 / 02:00',
      'Scene 2: 3-Tier GIS Engine',
      'At the core is an open GIS engine organizing spatial governance into three foundational layers: georeferenced cadastral boundaries at the base, legal ownership and bank charges in the essential tier, and master plan zoning with environmental buffers in the extended tier.'
    );

    // Open Layer Drawer
    console.log('Interacting with Map Layers Drawer...');
    await clickButtonWithText(page, 'Map Layers');
    await sleep(1500);

    // Switch basemaps / toggle layers to show interactivity
    console.log('Toggling Street Map basemap...');
    await clickButtonWithText(page, 'Street Map');
    await sleep(1500);
    await clickButtonWithText(page, 'Satellite');
    await sleep(1500);

    // Switch Pilot Region to Tamil Nadu
    console.log('Switching Pilot to Tamil Nadu (Kanchipuram)...');
    await page.select('select[aria-label="Pilot Region"]', 'tamilnadu');
    await sleep(4000);

    await updateSubtitles(
      page,
      '00:35 / 02:00',
      'Scene 2: Multi-State Pilots',
      'Any parcel across urban wards or rural villages is searchable instantly via ULPIN or survey coordinates.'
    );

    // Switch back to Chandigarh
    console.log('Switching Pilot back to Chandigarh (Sector 17)...');
    await page.select('select[aria-label="Pilot Region"]', 'chandigarh');
    await sleep(3000);

    // Search for SCO 143
    console.log('Typing SCO 143 into cadastral search input...');
    const searchInput = 'input[aria-label="Search cadastral registry"]';
    await clickSelector(page, searchInput);
    await page.evaluate(() => {
      const input = document.querySelector('input[aria-label="Search cadastral registry"]');
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, 'SCO 143');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    });
    await sleep(1500);

    // Click the matching search result (index 1 is the first record item)
    console.log('Selecting SCO 143 from matching records dropdown...');
    await page.evaluate(() => {
      const items = document.querySelectorAll('.divide-y > div');
      if (items.length > 1) {
        items[1].click();
      }
    });
    await sleep(4000);

    // ===================================================================
    // SCENE 3: The Unified Digital Property Passport (0:45 - 1:10 | 25s)
    // ===================================================================
    console.log('[0:45 - 1:10] SCENE 3: The Unified Digital Property Passport');
    await updateSubtitles(
      page,
      '00:50 / 02:00',
      'Scene 3: Property Passport',
      'Clicking a parcel opens its unified Property Passport. Instead of visiting four different offices, citizens and lenders see verified ownership, survey discrepancies, active bank mortgages, and zoning restrictions in one consolidated view.'
    );

    // Click through the 4 tabs in Property Passport
    console.log('Inspecting Tab 1: Identity & Survey...');
    await clickButtonWithText(page, '1. Identity & Survey');
    await sleep(3000);

    console.log('Inspecting Tab 2: RoR & Ownership...');
    await clickButtonWithText(page, '2. RoR & Ownership');
    await sleep(3500);

    console.log('Inspecting Tab 3: Encumbrance (SRO & Bank Lien)...');
    await clickButtonWithText(page, '3. Encumbrance');
    await sleep(3500);

    console.log('Inspecting Tab 4: Zoning & Master Plan...');
    await clickButtonWithText(page, '4. Zoning & Master Plan');
    await sleep(3000);

    // Click Export Verified Passport (PDF)
    await updateSubtitles(
      page,
      '01:02 / 02:00',
      'Scene 3: Verifiable Certificate',
      'A tamper-verifiable, digitally signed passport can be exported in seconds with cryptographic QR verification and SHA-256 seal.'
    );

    console.log('Clicking Export Verified Passport (PDF)...');
    await clickButtonWithText(page, 'Export Verified Passport (PDF)');
    await sleep(5500);

    // Close Print Certificate Modal
    console.log('Closing certificate modal...');
    await closeModalIfOpen(page);
    await sleep(1500);

    // ===================================================================
    // SCENE 4: Interoperability & Automated Compliance (1:10 - 1:35 | 25s)
    // ===================================================================
    console.log('[1:10 - 1:35] SCENE 4: Interoperability & Automated Compliance Engine');
    await updateSubtitles(
      page,
      '01:15 / 02:00',
      'Scene 4: Compliance Engine',
      'Interoperability prevents fraud and regulatory violations before they happen. When a building or development application is submitted, Bhu-Setu runs automated spatial intersection checks against municipal restriction layers and river protection corridors.'
    );

    // Close Property Passport if open
    console.log('Closing passport drawer...');
    await closeModalIfOpen(page);
    await sleep(1000);

    // Switch Role to Planner
    console.log('Switching Role to Planner...');
    await clickButtonWithText(page, 'Planner');
    await sleep(1500);

    // Switch to Tamil Nadu to demonstrate Water Body Collision
    console.log('Switching pilot to Tamil Nadu for riparian buffer test...');
    await page.select('select[aria-label="Pilot Region"]', 'tamilnadu');
    await sleep(3000);

    // Click Cross-Departmental Simulator button
    console.log('Launching Cross-Departmental Simulator...');
    await clickButtonWithText(page, 'Cross-Departmental Simulator');
    await sleep(2500);

    // In Simulator, select the parcel with river buffer: Survey No. 144/A
    console.log('Selecting Survey No. 144/A (River Buffer) in Simulator...');
    await page.evaluate(() => {
      const sel = document.querySelector('select[aria-label="Target Parcel for Spatial Analysis"]');
      if (sel) {
        sel.value = 'TN-PARCEL-04';
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    await sleep(2000);

    // Run PostGIS Simulation
    console.log('Running PostGIS Spatial Simulation...');
    await clickButtonWithText(page, 'Execute PostGIS Analysis');
    await sleep(4000); // Wait for query execution and result display

    await updateSubtitles(
      page,
      '01:25 / 02:00',
      'Scene 4: Collision Detected',
      'In this pilot case, an illegal building permit is automatically flagged and rejected within milliseconds: ST_Intersects evaluates true against the protected 50-meter riparian buffer.'
    );

    await sleep(6500);

    // Close Simulator Modal
    console.log('Closing Spatial Simulator...');
    await closeModalIfOpen(page);
    await sleep(2000);

    // ===================================================================
    // SCENE 5: AI Boundary Drift & Architecture Blueprint (1:35 - 2:00 | 25s)
    // ===================================================================
    console.log('[1:35 - 2:00] SCENE 5: AI Boundary Drift Detection & Architecture Blueprint');
    await updateSubtitles(
      page,
      '01:40 / 02:00',
      'Scene 5: AI Drift Detection',
      'Integrated computer vision detects unauthorized physical encroachments by comparing registered boundaries with satellite building footprints.'
    );

    // Switch back to Chandigarh
    console.log('Switching back to Chandigarh for AI Drift Anomaly...');
    await page.select('select[aria-label="Pilot Region"]', 'chandigarh');
    await sleep(2000);

    // Open Layer Drawer and toggle AI Satellite Drift
    console.log('Toggling AI Drift / Encroachment layer to ON...');
    await clickButtonWithText(page, 'Map Layers');
    await sleep(1000);
    await clickButtonWithText(page, 'AI Drift / Encroachment');
    await sleep(2000);

    // Click into SCO 143 to open Property Passport with Anomaly
    console.log('Opening SCO 143 to inspect boundary anomaly...');
    await page.evaluate(() => {
      const input = document.querySelector('input[aria-label="Search cadastral registry"]');
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, 'SCO 143');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('focus', { bubbles: true }));
    });
    await sleep(1200);
    await page.evaluate(() => {
      const items = document.querySelectorAll('.divide-y > div');
      if (items.length > 1) {
        items[1].click();
      }
    });
    await sleep(2500);

    // Click Open AI Encroachment & Satellite Drift Inspector
    console.log('Launching Satellite Drift Modal...');
    await clickButtonWithText(page, 'Open AI Encroachment');
    await sleep(5000);

    // Close Drift modal
    await closeModalIfOpen(page);
    await sleep(1200);
    // Close passport
    await closeModalIfOpen(page);
    await sleep(1200);

    // Navigate to /technical-docs
    console.log('Navigating to Technical Documentation (STD v1.4)...');
    await updateSubtitles(
      page,
      '01:48 / 02:00',
      'Scene 5: Technical Architecture',
      'Built on open OGC standards, PostGIS, and microservices architecture, Bhu-Setu delivers a scalable blueprint to modernize Indian land administration.'
    );

    await clickButtonWithText(page, 'Docs');
    await sleep(3500);

    // Smooth scroll down to view architecture diagram
    console.log('Scrolling through system architecture and OpenAPI specs...');
    await page.evaluate(() => {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    });
    await sleep(3500);

    // Show Final End Card
    console.log('Displaying Institutional End Card...');
    await updateSubtitles(
      page,
      '01:55 / 02:00',
      'Scene 5: Bhu-Setu DPI',
      'Transparent for citizens, authoritative for government. Bhu-Setu: National Land Stack Infrastructure.'
    );

    await page.evaluate(() => {
      const endCard = document.createElement('div');
      endCard.id = 'end-card-overlay';
      endCard.style.position = 'fixed';
      endCard.style.inset = '0';
      endCard.style.backgroundColor = 'rgba(11, 23, 44, 0.97)';
      endCard.style.zIndex = '999995';
      endCard.style.display = 'flex';
      endCard.style.flexDirection = 'column';
      endCard.style.alignItems = 'center';
      endCard.style.justifyContent = 'center';
      endCard.style.padding = '40px';
      endCard.style.color = '#FFF';
      endCard.style.fontFamily = 'Inter, sans-serif';
      endCard.style.textAlign = 'center';

      endCard.innerHTML = `
        <div style="background-color: #1E293B; border: 1px solid #334155; padding: 6px 16px; border-radius: 2px; font-size: 11px; font-weight: 700; color: #F59E0B; margin-bottom: 20px; font-family: monospace;">
          GOVERNMENT OF INDIA • DEPARTMENT OF LAND RESOURCES (DoLR)
        </div>
        <h1 style="font-size: 38px; font-weight: 900; margin: 0; color: #FFFFFF; letter-spacing: -0.5px;">
          Bhu-Setu: National Land Stack
        </h1>
        <p style="color: #CBD5E1; font-size: 16px; margin-top: 10px; max-width: 600px; font-weight: 500;">
          Unified, Spatial, Interoperable Digital Public Infrastructure for Land Governance
        </p>
        <div style="margin-top: 30px; display: flex; gap: 20px; font-size: 13px; font-family: monospace;">
          <span style="background-color: #0F172A; border: 1px solid #334155; padding: 8px 16px; border-radius: 4px; color: #FBBF24;">
            🌐 Portal: landstack.gov.in
          </span>
          <span style="background-color: #0F172A; border: 1px solid #334155; padding: 8px 16px; border-radius: 4px; color: #38BDF8;">
            📄 Spec: STD v1.4 (OGC API)
          </span>
        </div>
      `;
      document.body.appendChild(endCard);
    });

    await sleep(6000);

    console.log('===================================================================');
    console.log('SIMULATION VIDEO RECORDING COMPLETED SUCCESSFULLY!');
    console.log(`Saved MP4: ${OUTPUT_FILE}`);
    console.log('===================================================================');
  } catch (err) {
    console.error('Recording error:', err);
  } finally {
    console.log('Stopping screen recorder and finalizing MP4 container...');
    await recorder.stop();
    await browser.close();
    console.log('Browser closed cleanly.');
  }
}

runRecording();

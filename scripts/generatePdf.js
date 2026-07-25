import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const resumeHtml = new URL("../dist/resume.html", import.meta.url);
const resumePdf = new URL("../dist/resume.pdf", import.meta.url);

export async function generatePdf() {
  await access(resumeHtml);
  await mkdir(new URL("../dist/", import.meta.url), { recursive: true });
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(resumeHtml.href, { waitUntil: "load" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({ path: fileURLToPath(resumePdf), format: "A4", printBackground: true, preferCSSPageSize: true });
  } finally {
    await browser.close();
  }
  const pdf = await readFile(resumePdf, "latin1");
  const pageCount = (pdf.match(/\/Type\s*\/Page(?!s)\b/g) || []).length;
  if (pageCount !== 1) throw new Error(`Resume overflow: generated PDF has ${pageCount} pages; expected 1.`);
  console.log(`Built ${fileURLToPath(resumePdf)} (1 page)`);
}

if (import.meta.url === new URL(process.argv[1], "file:").href) await generatePdf();

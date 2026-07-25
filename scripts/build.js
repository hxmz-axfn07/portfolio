import { buildPortfolio } from "./buildPortfolio.js";
import { buildResume } from "./buildResume.js";
import { generatePdf } from "./generatePdf.js";
import { validateContent } from "./validate.js";

const content = await validateContent();
await buildPortfolio(content);
await buildResume(content);
await generatePdf();

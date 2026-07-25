import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { escapeHtml, groupedSkills, renderTemplate } from "./content.js";
import { validateContent } from "./validate.js";

const output = new URL("../dist/resume.html", import.meta.url);
const host = (url) => new URL(url).hostname.replace(/^www\./, "");
const bullets = (entries) => `<ul>${entries.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>`;

export async function buildResume(content) {
  content ??= await validateContent();
  const template = await readFile(new URL("../templates/resume.html", import.meta.url), "utf8");
  const skills = Object.entries(groupedSkills(content.skills, "resume"))
    .map(([category, entries]) => `<p class="skill-row"><strong>${escapeHtml(category)}:</strong> ${entries.map((entry) => escapeHtml(entry.name)).join(", ")}</p>`).join("");
  const experience = content.experience.filter((entry) => entry.display?.resume?.enabled)
    .map((entry) => `<article class="item"><div class="row"><div><div class="title">${escapeHtml(entry.company)}</div><div class="role">${escapeHtml(entry.role)}</div></div><div class="date">${escapeHtml(entry.duration)}${entry.location ? `<br>${escapeHtml(entry.location)}` : ""}</div></div>${bullets(entry.resume.bullets)}</article>`).join("");
  const projects = content.projects.filter((project) => project.display?.resume?.enabled)
    .map((project) => `<article class="item"><div class="row"><div class="title">${escapeHtml(project.title)}${project.links.github ? ` | <a href="${escapeHtml(project.links.github)}">GitHub</a>` : ""}</div><div class="date">${escapeHtml(project.duration)}</div></div>${bullets(project.resume.bullets)}</article>`).join("");
  const education = content.education.map((entry) => `<article class="item"><div class="row"><div><div class="title">${escapeHtml(entry.institution)}</div><div class="role">${escapeHtml(entry.degree)}</div></div><div class="date">${escapeHtml(entry.duration)}${entry.location ? `<br>${escapeHtml(entry.location)}` : ""}</div></div>${entry.details?.length ? bullets(entry.details) : ""}</article>`).join("");
  const html = renderTemplate(template, {
    NAME: escapeHtml(content.personal.name), PHONE: escapeHtml(content.personal.phone), EMAIL: escapeHtml(content.personal.email), GITHUB: escapeHtml(content.personal.github), GITHUB_LABEL: escapeHtml(host(content.personal.github)), LINKEDIN: escapeHtml(content.personal.linkedin), LINKEDIN_LABEL: escapeHtml(host(content.personal.linkedin)), LOCATION: escapeHtml(content.personal.location), SUMMARY: escapeHtml(content.personal.resume.summary), SKILLS: skills, EXPERIENCE: experience, PROJECTS: projects, EDUCATION: education,
  });
  await mkdir(new URL("../dist/", import.meta.url), { recursive: true });
  await writeFile(output, html);
  console.log(`Built ${fileURLToPath(output)}`);
}

if (import.meta.url === new URL(process.argv[1], "file:").href) await buildResume();

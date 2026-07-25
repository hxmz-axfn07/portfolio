import { readFile } from "node:fs/promises";

const dataDirectory = new URL("../data/", import.meta.url);

export async function readData(name) {
  return JSON.parse(await readFile(new URL(`${name}.json`, dataDirectory), "utf8"));
}

export async function loadContent() {
  const [personal, projects, experience, education, skills] = await Promise.all(
    ["personal", "projects", "experience", "education", "skills"].map(readData),
  );
  return { personal, projects, experience, education, skills };
}

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

export function groupedSkills(skills, target) {
  return skills.filter((skill) => skill.display?.[target]).reduce((groups, skill) => {
    (groups[skill.category] ??= []).push(skill);
    return groups;
  }, {});
}

export function renderTemplate(template, values) {
  return template.replace(/{{([A-Z_]+)}}/g, (_, key) => values[key] ?? "");
}

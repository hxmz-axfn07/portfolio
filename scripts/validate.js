import { loadContent } from "./content.js";

const required = (value, label, errors) => {
  if (value === undefined || value === null || value === "") errors.push(`Missing required field: ${label}`);
};

export async function validateContent() {
  const content = await loadContent();
  const errors = [];
  const warnings = [];
  ["name", "email", "github", "linkedin"].forEach((field) => required(content.personal[field], `personal.${field}`, errors));
  const ids = new Set();

  for (const project of content.projects) {
    ["id", "title", "duration"].forEach((field) => required(project[field], `projects.${project.id || "?"}.${field}`, errors));
    if (ids.has(project.id)) errors.push(`Duplicate project id: ${project.id}`);
    ids.add(project.id);
    if (!project.links?.github && !project.links?.live) warnings.push(`Project "${project.title}" has no links.`);
    if (project.display?.resume?.enabled && !project.resume?.bullets?.length) warnings.push(`Resume project "${project.title}" has no bullets.`);
    if (project.display?.portfolio?.enabled && !project.portfolio?.description) errors.push(`Portfolio project "${project.title}" has no description.`);
  }
  for (const entry of content.experience) {
    ["company", "role", "duration"].forEach((field) => required(entry[field], `experience.${field}`, errors));
    if (entry.display?.resume?.enabled && !entry.resume?.bullets?.length) warnings.push(`Resume experience "${entry.company}" has no bullets.`);
  }
  for (const entry of content.education) ["institution", "degree", "duration"].forEach((field) => required(entry[field], `education.${field}`, errors));
  for (const skill of content.skills) ["name", "category"].forEach((field) => required(skill[field], `skills.${field}`, errors));
  warnings.forEach((warning) => console.warn(`Warning: ${warning}`));
  if (errors.length) throw new Error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  return content;
}

if (import.meta.url === new URL(process.argv[1], "file:").href) await validateContent();

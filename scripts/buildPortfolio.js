import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { groupedSkills } from "./content.js";
import { validateContent } from "./validate.js";

const outputDirectory = new URL("../dist/", import.meta.url);
const output = new URL("../dist/index.html", import.meta.url);

function portfolioContent(data) {
  return {
    personal: {
      name: data.personal.name,
      codename: data.personal.initials,
      title: data.personal.title,
      tagline: data.personal.portfolio.tagline,
      email: data.personal.email,
      location: data.personal.location,
      resume_url: "resume.pdf",
    },
    socials: { github: data.personal.github, linkedin: data.personal.linkedin },
    about: {
      headline: "About Me",
      description: data.personal.portfolio.about,
      highlights: data.personal.portfolio.highlights,
    },
    experience: data.experience.filter((entry) => entry.display?.portfolio?.enabled).map((entry) => ({
      role: entry.role,
      company: entry.company,
      location: entry.location,
      period: entry.duration,
      bullets: entry.portfolio.bullets,
    })),
    projects: data.projects.filter((project) => project.display?.portfolio?.enabled).map((project) => ({
      name: project.title,
      date: project.duration,
      description: project.portfolio.description,
      tech: project.tech,
      highlights: project.portfolio.highlights,
      github: project.links.github,
      live: project.links.live,
    })),
    skills: Object.fromEntries(Object.entries(groupedSkills(data.skills, "portfolio")).map(([category, skills]) => [category.toLowerCase().replaceAll(" / ", "_").replaceAll(" ", "_"), skills.map((skill) => skill.name)])),
    education: data.education.map((entry) => ({
      institution: entry.institution,
      degree: entry.degree,
      period: entry.duration,
      location: entry.location,
      details: entry.details,
    })),
    contact: {
      headline: "Get In Touch",
      subtext: "Have a project, internship, or collaboration in mind? Let's build something useful.",
      formEndpoint: `https://formsubmit.co/${data.personal.email}`,
    },
    footer: { text: "Built for clean code, fast updates, and maintainable systems.", copyright: String(new Date().getFullYear()) },
  };
}

export async function buildPortfolio(data) {
  data ??= await validateContent();
  const [html, javascript, css] = await Promise.all([
    readFile(new URL("../templates/portfolio.html", import.meta.url), "utf8"),
    readFile(new URL("../templates/portfolio.js", import.meta.url), "utf8"),
    readFile(new URL("../templates/portfolio.css", import.meta.url), "utf8"),
  ]);
  await mkdir(outputDirectory, { recursive: true });
  await Promise.all([
    writeFile(output, html),
    writeFile(new URL("../dist/script.js", import.meta.url), javascript.replace("{{PORTFOLIO_CONTENT}}", JSON.stringify(portfolioContent(data), null, 2))),
    writeFile(new URL("../dist/styles.css", import.meta.url), css),
    copyFile(new URL("../fav.png", import.meta.url), new URL("../dist/fav.png", import.meta.url)),
  ]);
  console.log(`Built ${fileURLToPath(output)}`);
}

if (import.meta.url === new URL(process.argv[1], "file:").href) await buildPortfolio();

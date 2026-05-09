const content = {
  personal: {
    name: "Hamza Arfin",
    codename: "HA",
    title: "Full-Stack Developer",
    tagline: "Building clean APIs, scalable backends, and useful full-stack apps.",
    email: "arfinhamza987@gmail.com",
    location: "New Delhi, India",
    resume_url: "resume.pdf",
  },
  socials: {
    github: "https://github.com/hxmz-axfn07",
    linkedin: "https://www.linkedin.com/in/hamza-a-31b83828a/",
  },
  about: {
    headline: "About Me",
    description:
      "Full-stack developer experienced in building web applications using Python, Flask, and MySQL. Skilled in REST API development, database design, and backend systems with projects in recommendation systems and data-driven applications.",
    highlights: [
      "Building full-stack web applications since 2023",
      "Passionate about clean architecture and efficient APIs",
      "Focused on backend systems and data-driven solutions",
      "Currently pursuing B.Tech in Computer Science",
    ],
  },
  experience: [
    {
      role: "Undergraduate Research Intern",
      company: "FLAME NLP Research Lab, IIIT Delhi",
      location: "New Delhi, India",
      period: "July 2025 - September 2025",
      bullets: [
        "Developed and deployed the official lab website using Jekyll",
        "Built a scalable static website with modular components for managing research updates, publications, and team information",
        "Structured content using templates and data files to enable easy updates without modifying core code",
        "Improved usability, performance, and maintainability of the lab's digital presence",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Software Development Projects",
      location: "New Delhi, India",
      period: "2023 - Present",
      bullets: [
        "Built full-stack web applications using Python, Flask, MySQL, HTML, CSS, JavaScript",
        "Developed REST APIs, authentication systems, and database workflows",
        "Designed backend architecture and relational schemas using MySQL",
        "Implemented responsive UI and managed version control with Git/GitHub",
      ],
    },
  ],
  projects: [
    {
      name: "BERT Sarcasm Detection Classifier",
      date: "May 2026",
      description:
        "Fine-tuned bert-base-uncased for sarcasm detection using headline and balanced sarcasm datasets",
      tech: ["Python", "BERT", "Transformers", "PyTorch", "Scikit-learn"],
      highlights: [
        "Trained BertForSequenceClassification with class weighting and threshold tuning",
        "Reached 93.77% F1, 94.06% accuracy, 0.983 ROC-AUC, and 0.979 PR-AUC",
        "Generated confusion matrix, ROC/PR curves, training curves, and final model artifacts",
      ],
      github: "https://github.com/hxmz-axfn07/sarcasm-detection-bert",
      live: "",
    },
    {
      name: "Hybrid Movie Recommendation System",
      date: "March 2026",
      description:
        "A recommendation platform built with Python, Flask, HTML, CSS, and JavaScript",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "TMDB API"],
      highlights: [
        "Implemented hybrid recommender using KNN collaborative filtering on the MovieLens dataset (100k+ ratings)",
        "Integrated TMDB API and built REST endpoints serving movie metadata and posters",
      ],
      github: "https://github.com/hxmz-axfn07/movie-recommendation-system",
      live: "",
    },
    {
      name: "Streamly Streaming Aggregator",
      date: "November 2025",
      description:
        "A streaming search platform with real-time search suggestions and optimized API requests",
      tech: ["Flask", "TMDB API", "Python"],
      highlights: [
        "Developed streaming search platform using Flask and TMDB API",
        "Implemented real-time search suggestions and optimized API requests with rate limiting",
      ],
      github: "https://github.com/hxmz-axfn07/Streamly",
      live: "",
    },
    {
      name: "Flask Hospital Management System",
      date: "August 2024",
      description:
        "Hospital management web app with relational database schema for patients, doctors, and appointments",
      tech: ["Flask", "MySQL", "SQLAlchemy"],
      highlights: [
        "Built hospital management web app using Flask, MySQL, SQLAlchemy",
        "Designed relational database schema managing patient, doctor, and appointment records across multiple tables",
      ],
      github: "",
      live: "",
    },
    {
      name: "PythonMySQL Hospital Database System",
      date: "October 2023",
      description:
        "Hospital database system with CRUD operations for patient, doctor, and appointment management",
      tech: ["Python", "MySQL"],
      highlights: [
        "Developed hospital database system using Python and MySQL",
        "Implemented CRUD operations for patient, doctor, and appointment management",
      ],
      github: "",
      live: "",
    },
  ],
  skills: {
    languages: ["Python", "C", "C++", "JavaScript", "SQL"],
    web: ["Flask", "HTML", "CSS", "REST APIs", "Backend Development", "Jekyll"],
    ml: ["NumPy", "Pandas", "Scikit-learn"],
    database: ["MySQL", "SQLAlchemy"],
    tools: ["Git", "GitHub"],
    concepts: ["Data Structures", "Algorithms", "CRUD", "API Integration"],
  },
  education: [
    {
      institution: "Jamia Hamdard University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2023 - 2027",
      location: "New Delhi, India",
      details: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
        "Focused on web development, backend systems, and database-driven applications",
      ],
    },
    {
      institution: "Dev Samaj Modern School - 2",
      degree: "Senior Secondary School",
      period: "2021 - 2023",
      location: "New Delhi, India",
      details: [],
    },
    {
      institution: "Dev Samaj Modern School - 2",
      degree: "Secondary School",
      period: "2019 - 2021",
      location: "New Delhi, India",
      details: [],
    },
  ],
  contact: {
    headline: "Get In Touch",
    subtext: "Have a project, internship, or collaboration in mind? Let's build something useful.",
    formEndpoint: "https://formsubmit.co/arfinhamza987@gmail.com",
  },
  footer: {
    text: "Built for clean code, fast updates, and maintainable systems.",
    copyright: "2025",
  },
};

const navItems = [
  ["ABOUT", "#about"],
  ["EXPERIENCE", "#experience"],
  ["PROJECTS", "#projects"],
  ["SKILLS", "#skills"],
  ["EDUCATION", "#education"],
  ["CONTACT", "#contact"],
];

const skillTitles = {
  languages: "Languages",
  web: "Web",
  ml: "ML / Data",
  database: "Database",
  tools: "Tools",
  concepts: "Concepts",
};

const skillIcons = {
  languages: "code",
  web: "globe",
  ml: "brain",
  database: "database",
  tools: "wrench",
  concepts: "cpu",
};

const icons = {
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  menu:
    '<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>',
  mail:
    '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect>',
  "file-text":
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
  "arrow-down": '<path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path>',
  "external-link":
    '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
  code:
    '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  globe:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>',
  brain:
    '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>',
  wrench:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
  cpu:
    '<path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect>',
  briefcase:
    '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>',
  "map-pin":
    '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
  calendar:
    '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>',
  "graduation-cap":
    '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>',
  user:
    '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  "message-square":
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  send:
    '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path>',
  heart:
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>',
};

function icon(name, size = 20, className = "") {
  return `<svg class="lucide lucide-${name} ${className}" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

function renderNav() {
  const links = navItems
    .map(
      ([label, href], index) => `
        <a href="${href}" class="p5-nav__link">
          <span class="p5-nav__link-index">0${index + 1}</span>
          <span class="p5-nav__link-text">${label}</span>
        </a>
      `
    )
    .join("");

  const mobileLinks = navItems
    .map(
      ([label, href], index) => `
        <a href="${href}" class="p5-mobile-menu__item" style="animation-delay: ${0.08 * index}s">
          <span class="p5-mobile-menu__item-index">0${index + 1}</span>
          <span class="p5-mobile-menu__item-text">${label}</span>
          <span class="p5-mobile-menu__item-arrow">&rarr;</span>
        </a>
      `
    )
    .join("");

  return `
    <nav class="p5-nav">
      <div class="p5-nav__inner">
        <a href="#hero" class="p5-nav__logo">
          <span class="p5-nav__logo-bracket">[</span>
          <span class="p5-nav__logo-text">${content.personal.codename}</span>
          <span class="p5-nav__logo-bracket">]</span>
        </a>
        <div class="p5-nav__links">${links}</div>
        <button class="p5-nav__menu-btn" aria-label="Toggle menu">${icon("menu", 24)}</button>
      </div>
    </nav>
    <div class="p5-mobile-menu">
      <div class="p5-mobile-menu__bg"></div>
      <div class="p5-mobile-menu__content">
        ${mobileLinks}
        <div class="p5-mobile-menu__socials">
          <a href="${content.socials.github}" target="_blank" rel="noopener noreferrer">${icon("github", 20)}</a>
          <a href="${content.socials.linkedin}" target="_blank" rel="noopener noreferrer">${icon("linkedin", 20)}</a>
          <a href="mailto:${content.personal.email}" data-copy-email="${content.personal.email}" aria-label="Copy email address">${icon("mail", 20)}</a>
        </div>
      </div>
    </div>
  `;
}

function renderHero() {
  const lines = Array.from({ length: 12 })
    .map(
      (_, index) =>
        `<div class="p5-splash__line" style="transform: rotate(${30 * index}deg); animation-delay: ${0.05 * index}s"></div>`
    )
    .join("");

  return `
    <section id="hero" class="p5-hero">
      <div class="p5-splash">
        <div class="p5-splash__lines">${lines}</div>
        <div class="p5-splash__text"><span class="p5-splash__name">${content.personal.codename}</span></div>
        <div class="p5-splash__burst"></div>
      </div>
      <div class="p5-hero__bg">
        <div class="p5-hero__stripe p5-hero__stripe--1"></div>
        <div class="p5-hero__stripe p5-hero__stripe--2"></div>
        <div class="p5-hero__stripe p5-hero__stripe--3"></div>
        <div class="p5-hero__dots"></div>
      </div>
      <div class="p5-hero__content">
        <div class="p5-hero__tag">
          <span class="p5-hero__tag-line"></span>
          <span class="p5-hero__tag-text">CODENAME</span>
        </div>
        <h1 class="p5-hero__name">
          <span class="p5-hero__name-main">${content.personal.codename}</span>
          <span class="p5-hero__name-real">${content.personal.name}</span>
        </h1>
        <div class="p5-hero__title-block">
          <div class="p5-hero__title-bg"></div>
          <h2 class="p5-hero__title">${content.personal.title}</h2>
        </div>
        <p class="p5-hero__tagline">${content.personal.tagline}</p>
        <div class="p5-hero__actions">
          <a href="${content.socials.github}" target="_blank" rel="noopener noreferrer" class="p5-hero__social-link">${icon("github", 20)}<span>GitHub</span></a>
          <a href="${content.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="p5-hero__social-link">${icon("linkedin", 20)}<span>LinkedIn</span></a>
          <a href="mailto:${content.personal.email}" class="p5-hero__social-link" data-copy-email="${content.personal.email}">${icon("mail", 20)}<span>Email</span></a>
          <a href="${content.personal.resume_url}" target="_blank" rel="noopener noreferrer" class="p5-hero__social-link">${icon("file-text", 20)}<span>Resume</span></a>
        </div>
        <div class="p5-hero__location"><span>${content.personal.location}</span></div>
      </div>
      <div class="p5-hero__scroll">
        <span>SCROLL</span>
        ${icon("arrow-down", 16, "p5-hero__scroll-arrow")}
      </div>
    </section>
  `;
}

function renderSectionHeader(title) {
  return `
    <div class="p5-section__header">
      <div class="p5-section__header-accent"></div>
      <h2 class="p5-section__title">${title}</h2>
      <div class="p5-section__header-line"></div>
    </div>
  `;
}

function renderAbout() {
  const highlights = content.about.highlights
    .map(
      (item) => `
        <div class="p5-about__highlight-item">
          <span class="p5-about__highlight-marker"></span>
          <span class="p5-about__highlight-text">${item}</span>
        </div>
      `
    )
    .join("");

  return `
    <section id="about" class="p5-section p5-about">
      ${renderSectionHeader(content.about.headline)}
      <div class="p5-about__content">
        <div class="p5-about__text-block">
          <p class="p5-about__description">${content.about.description}</p>
        </div>
        <div class="p5-about__highlights">${highlights}</div>
      </div>
    </section>
  `;
}

function renderExperience() {
  const cards = content.experience
    .map(
      (item) => `
        <div class="p5-experience__card">
          <div class="p5-experience__card-accent"></div>
          <div class="p5-experience__card-content">
            <div class="p5-experience__card-header">
              <h3 class="p5-experience__role">${item.role}</h3>
              <div class="p5-experience__meta">
                <span class="p5-experience__company">${icon("briefcase", 14)}${item.company}</span>
                <span class="p5-experience__location">${icon("map-pin", 14)}${item.location}</span>
                <span class="p5-experience__period">${icon("calendar", 14)}${item.period}</span>
              </div>
            </div>
            <ul class="p5-experience__bullets">
              ${item.bullets.map((bullet) => `<li class="p5-experience__bullet"><span class="p5-experience__bullet-marker"></span>${bullet}</li>`).join("")}
            </ul>
          </div>
        </div>
      `
    )
    .join("");

  return `
    <section id="experience" class="p5-section p5-experience">
      ${renderSectionHeader("Experience")}
      <div class="p5-experience__timeline">${cards}</div>
    </section>
  `;
}

function renderProjects() {
  const cards = content.projects
    .map(
      (project, index) => `
        <div class="p5-project-card" style="animation-delay: ${0.1 * index}s">
          <div class="p5-project-card__top">
            <span class="p5-project-card__number">0${index + 1}</span>
            <span class="p5-project-card__date">${project.date}</span>
          </div>
          <h3 class="p5-project-card__name">${project.name}</h3>
          <p class="p5-project-card__desc">${project.description}</p>
          <div class="p5-project-card__tech">
            ${project.tech.map((tech) => `<span class="p5-project-card__tech-tag">${tech}</span>`).join("")}
          </div>
          <ul class="p5-project-card__highlights">
            ${project.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          </ul>
          <div class="p5-project-card__links">
            ${
              project.github
                ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="p5-project-card__link">${icon("github", 16)}<span>Code</span></a>`
                : ""
            }
            ${
              project.live
                ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="p5-project-card__link p5-project-card__link--live">${icon("external-link", 16)}<span>Live</span></a>`
                : ""
            }
          </div>
          <div class="p5-project-card__corner"></div>
        </div>
      `
    )
    .join("");

  return `
    <section id="projects" class="p5-section p5-projects">
      ${renderSectionHeader("Projects")}
      <div class="p5-projects__grid">${cards}</div>
    </section>
  `;
}

function renderSkills() {
  const groups = Object.entries(content.skills)
    .map(
      ([key, items], index) => `
        <div class="p5-skill-group" style="animation-delay: ${0.1 * index}s">
          <div class="p5-skill-group__header">
            ${icon(skillIcons[key] || "code", 18, "p5-skill-group__icon")}
            <h3 class="p5-skill-group__title">${skillTitles[key] || key}</h3>
          </div>
          <div class="p5-skill-group__items">
            ${items.map((item) => `<span class="p5-skill-tag">${item}</span>`).join("")}
          </div>
        </div>
      `
    )
    .join("");

  return `
    <section id="skills" class="p5-section p5-skills">
      ${renderSectionHeader("Skills")}
      <div class="p5-skills__grid">${groups}</div>
    </section>
  `;
}

function renderEducation() {
  const cards = content.education
    .map(
      (item) => `
        <div class="p5-education__card">
          <div class="p5-education__card-icon">${icon("graduation-cap", 24)}</div>
          <div class="p5-education__card-content">
            <h3 class="p5-education__institution">${item.institution}</h3>
            <p class="p5-education__degree">${item.degree}</p>
            <div class="p5-education__meta">
              <span>${icon("calendar", 14)}${item.period}</span>
              <span>${icon("map-pin", 14)}${item.location}</span>
            </div>
            ${
              item.details.length
                ? `<ul class="p5-education__details">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
                : ""
            }
          </div>
        </div>
      `
    )
    .join("");

  return `
    <section id="education" class="p5-section p5-education">
      ${renderSectionHeader("Education")}
      <div class="p5-education__list">${cards}</div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="p5-section p5-contact">
      ${renderSectionHeader(content.contact.headline)}
      <p class="p5-contact__subtext">${content.contact.subtext}</p>
      <div class="p5-contact__wrapper">
        <form class="p5-contact__form" action="${content.contact.formEndpoint}" method="POST" target="p5-form-target">
          <input type="hidden" name="_subject" value="Portfolio calling card" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_replyto" value="" />
          <input type="text" name="_honey" tabindex="-1" autocomplete="off" class="p5-honey" />
          <div class="p5-contact__field">
            <label class="p5-contact__label">${icon("user", 16)}<span>Name</span></label>
            <input type="text" class="p5-contact__input" name="name" placeholder="Enter your codename..." required />
          </div>
          <div class="p5-contact__field">
            <label class="p5-contact__label">${icon("mail", 16)}<span>Email</span></label>
            <input type="email" class="p5-contact__input" name="email" placeholder="your@email.com" required />
          </div>
          <div class="p5-contact__field">
            <label class="p5-contact__label">${icon("message-square", 16)}<span>Message</span></label>
            <textarea class="p5-contact__textarea" name="message" placeholder="Write your calling card message..." rows="5" required></textarea>
          </div>
          <button type="submit" class="p5-contact__submit">${icon("send", 16)}<span>SEND CALLING CARD</span></button>
        </form>
        <iframe class="p5-form-target" name="p5-form-target" title="Form submission target"></iframe>
        <div class="p5-contact__info">
          <button type="button" class="p5-contact__info-card p5-copy-email" data-copy-email="${content.personal.email}">${icon("mail", 20)}<span>${content.personal.email}</span></button>
          <div class="p5-contact__info-card">
            <span class="p5-contact__info-label">Location</span>
            <span>${content.personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="p5-footer">
      <div class="p5-footer__inner">
        <div class="p5-footer__left">
          <span class="p5-footer__logo">[${content.personal.codename}]</span>
          <p class="p5-footer__text">${content.footer.text}</p>
        </div>
        <div class="p5-footer__socials">
          <a href="${content.socials.github}" target="_blank" rel="noopener noreferrer" class="p5-footer__social-link">${icon("github", 18)}</a>
          <a href="${content.socials.linkedin}" target="_blank" rel="noopener noreferrer" class="p5-footer__social-link">${icon("linkedin", 18)}</a>
          <a href="mailto:${content.personal.email}" class="p5-footer__social-link" data-copy-email="${content.personal.email}" aria-label="Copy email address">${icon("mail", 18)}</a>
        </div>
        <div class="p5-footer__right">
          <p class="p5-footer__copyright">${icon("heart", 12, "p5-footer__heart")}<span>&copy; ${content.footer.copyright} ${content.personal.name}</span></p>
        </div>
      </div>
      <div class="p5-footer__accent"></div>
    </footer>
  `;
}

function smoothScrollTo(target, behavior = "smooth") {
  const section = document.querySelector(target);
  if (section) {
    const offset = target === "#hero" ? 0 : 86;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior });
  }
}

function showToast(message) {
  let toast = document.querySelector(".p5-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "p5-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("p5-toast--show");
  clearTimeout(showToast.hideTimer);
  showToast.hideTimer = setTimeout(() => {
    toast.classList.remove("p5-toast--show");
  }, 2200);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("input");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.left = "-9999px";
  input.style.position = "fixed";
  input.style.top = "0";
  document.body.appendChild(input);
  input.focus();
  input.select();
  input.setSelectionRange(0, input.value.length);
  const copied = document.execCommand("copy");
  input.remove();
  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

function markCopied(item) {
  const label = item.querySelector("span:last-child");
  if (!label) {
    return;
  }

  const oldText = label.textContent;
  label.textContent = "Copied!";
  clearTimeout(item.copyTimer);
  item.copyTimer = setTimeout(() => {
    label.textContent = oldText;
  }, 1800);
}

function attachBehavior() {
  const nav = document.querySelector(".p5-nav");
  const menu = document.querySelector(".p5-mobile-menu");
  const menuButton = document.querySelector(".p5-nav__menu-btn");
  const heroContent = document.querySelector(".p5-hero__content");
  const splash = document.querySelector(".p5-splash");

  setTimeout(() => heroContent.classList.add("p5-hero__content--loaded"), 100);
  setTimeout(() => splash && splash.remove(), 2200);

  window.addEventListener("scroll", () => {
    nav.classList.toggle("p5-nav--scrolled", window.scrollY > 50);
  });

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("p5-mobile-menu--open");
    menuButton.innerHTML = icon(isOpen ? "x" : "menu", 24);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.remove("p5-mobile-menu--open");
      menuButton.innerHTML = icon("menu", 24);
      smoothScrollTo(link.getAttribute("href"));
    });
  });

  if (window.location.hash) {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setTimeout(() => smoothScrollTo(window.location.hash, "auto"), 450);
    setTimeout(() => smoothScrollTo(window.location.hash, "auto"), 2300);
  }

  window.addEventListener("hashchange", () => smoothScrollTo(window.location.hash));

  document.querySelectorAll("[data-copy-email]").forEach((item) => {
    item.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const email = item.getAttribute("data-copy-email");
      try {
        await copyText(email);
        markCopied(item);
        showToast("Email copied to clipboard");
      } catch (error) {
        showToast(email);
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("p5-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".p5-section").forEach((section) => observer.observe(section));

  const form = document.querySelector(".p5-contact__form");
  const formTarget = document.querySelector(".p5-form-target");
  let formSubmitting = false;

  formTarget.addEventListener("load", () => {
    if (!formSubmitting) {
      return;
    }

    formSubmitting = false;
    form.reset();

    const submit = form.querySelector(".p5-contact__submit");
    submit.classList.add("p5-contact__submit--sent");
    submit.innerHTML = "<span>MESSAGE SENT!</span>";
    showToast("Calling card sent");

    setTimeout(() => {
      submit.classList.remove("p5-contact__submit--sent");
      submit.disabled = false;
      submit.innerHTML = `${icon("send", 16)}<span>SEND CALLING CARD</span>`;
    }, 3000);
  });

  form.addEventListener("submit", () => {
    const formData = new FormData(form);
    const data = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      message: formData.get("message").trim(),
      timestamp: new Date().toISOString(),
    };
    const messages = JSON.parse(localStorage.getItem("p5_messages") || "[]");
    messages.push(data);
    localStorage.setItem("p5_messages", JSON.stringify(messages));

    form.querySelector('input[name="_subject"]').value = `Portfolio calling card from ${data.name}`;
    form.querySelector('input[name="_replyto"]').value = data.email;

    const submit = form.querySelector(".p5-contact__submit");
    formSubmitting = true;
    submit.disabled = true;
    submit.innerHTML = "<span>SENDING...</span>";
  });
}

function render() {
  document.getElementById("root").innerHTML = `
    <div class="p5-app">
      ${renderNav()}
      <main class="p5-main">
        ${renderHero()}
        ${renderAbout()}
        ${renderExperience()}
        ${renderProjects()}
        ${renderSkills()}
        ${renderEducation()}
        ${renderContact()}
      </main>
      ${renderFooter()}
    </div>
  `;
  attachBehavior();
}

setTimeout(render, 600);

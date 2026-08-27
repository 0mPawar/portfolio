# Portfolio Data Linking Guide

This document defines how data files in the portfolio should be organized and linked.

Use this guide whenever adding new projects, experience, education, certificates, achievements, competitions, skills, or technologies.

---

## 1. Core Rule: One Real-World Item, One Primary Record

Each data type has a specific purpose.

Do not create duplicate records just because one real-world activity belongs to multiple areas.

Instead:

1. Create the item in its **primary data file**.
2. Create related records only when they represent a genuinely different concept.
3. Link the records using IDs.

Example:

> You participate in a competition, win Best Project, and receive a certificate.

These are three different concepts:

- Competition: the event
- Achievement: winning/recognition
- Certificate: official proof

They should be represented separately and linked.

---

# 2. Data File Responsibilities

## `projects.json`

Use for applications, websites, software, tools, or other projects you built or significantly worked on.

### Questions this data answers

- What did I build?
- What technologies did I use?
- What skills did I apply?
- Was the project related to an achievement, competition, or certificate?

### Typical relations

```text
Project
├── Skills
├── Technologies
├── Experience
├── Education
├── Achievements
├── Competitions
└── Certificates
```

### Example

```json
{
  "id": "portfolio-website",
  "name": "Portfolio Website",
  "skills": ["frontend-development"],
  "technologies": ["react", "tailwind-css"],
  "achievements": ["best-project-award"],
  "certificates": ["best-project-certificate"]
}
```

---

## `experience.json`

Use for professional or practical work.

Examples:

- Internship
- Job
- Freelance work
- Volunteer technical work
- Long-term professional role

### Questions this data answers

- Where did I work?
- What was my role?
- What did I do?
- Which projects or technologies were involved?

### Typical relations

```text
Experience
├── Projects
├── Skills
├── Technologies
├── Education
└── Certificates
```

### Example

```json
{
  "id": "abc-internship",
  "company": "ABC Company",
  "role": "Software Development Intern",
  "skills": ["frontend-development"],
  "technologies": ["react"],
  "projects": ["client-dashboard"],
  "certificates": ["internship-completion-certificate"]
}
```

> An internship is primarily **Experience**.  
> The document received after completing it is a **Certificate**.

---

## `education.json`

Use for formal academic education.

Examples:

- School
- Diploma
- Bachelor degree
- Master degree
- College program

### Questions this data answers

- Where did I study?
- What qualification did I pursue?
- What was my academic field?

### Typical relations

```text
Education
├── Skills
├── Technologies
├── Projects
├── Achievements
├── Competitions
└── Certificates
```

### Example

```json
{
  "id": "bca-degree",
  "institution": "Example College",
  "degree": "Bachelor of Computer Applications",
  "projects": ["final-year-project"],
  "achievements": ["best-project-award"]
}
```

---

## `certificates.json`

Use for an actual certificate, credential, completion document, participation certificate, or professional certification.

### Questions this data answers

> What official proof or credential have I received?

Examples:

- Java course completion certificate
- Internship completion certificate
- Competition participation certificate
- Best Project certificate
- Workshop certificate
- Professional certification

### Important rule

A certificate is **proof**, not necessarily an accomplishment or event.

The same certificate can link to:

```text
Certificate
├── Projects
├── Skills
├── Technologies
├── Experience
├── Education
├── Achievements
└── Competitions
```

### Example: Java Course

```json
{
  "id": "java-course-certificate",
  "title": "Java Programming Certificate",
  "issuer": "Example Academy",
  "date": "2026-05-20",
  "skills": ["java-programming"],
  "technologies": ["java"]
}
```

Usually this does **not** need a separate achievement.

### Example: Internship Certificate

```json
{
  "id": "internship-completion-certificate",
  "title": "Internship Completion Certificate",
  "issuer": "ABC Company",
  "date": "2026-06-30",
  "experience": ["abc-internship"]
}
```

### Example: Competition Certificate

```json
{
  "id": "hackathon-participation-certificate",
  "title": "Hackathon Participation Certificate",
  "issuer": "Hackathon Organization",
  "date": "2026-03-15",
  "competitions": ["xyz-hackathon"]
}
```

---

## `achievements.json`

Use for notable accomplishments, awards, recognition, rankings, or significant milestones.

### Questions this data answers

> What have I accomplished or been recognized for?

Examples:

- Best Project Award
- First place in a competition
- Special recognition
- Academic award
- Notable ranking

### Do not add every certificate here

Completing a normal course and receiving a certificate is usually only a **Certificate**.

Create an Achievement when the result itself is notable.

### Typical relations

```text
Achievement
├── Projects
├── Experience
├── Education
├── Competitions
└── Certificates
```

### Example

```json
{
  "id": "best-project-award",
  "title": "Best Project Award",
  "organization": "Example College",
  "date": "2026-04-10",
  "projects": ["portfolio-website"],
  "education": ["bca-degree"],
  "certificates": ["best-project-certificate"]
}
```

---

## `competitions.json`

Use for competitive events you participated in.

### Questions this data answers

> Which competitions did I participate in and what was my result?

Examples:

- Hackathon
- Coding competition
- Project competition
- Quiz competition
- College competition

### A competition is not automatically an achievement

Participation can be represented only in `competitions.json`.

If you win or receive notable recognition, add a separate Achievement and link it.

If you receive a certificate, add a Certificate and link it.

### Typical relations

```text
Competition
├── Projects
├── Skills
├── Technologies
├── Education
├── Achievements
└── Certificates
```

### Example

```json
{
  "id": "xyz-hackathon",
  "name": "XYZ Hackathon",
  "result": "First Place",
  "date": "2026-03-15",
  "projects": ["portfolio-website"],
  "achievements": ["xyz-hackathon-winner"],
  "certificates": ["xyz-hackathon-certificate"]
}
```

---

## `skills.json`

Use for capabilities or areas of knowledge.

Examples:

- Frontend Development
- Problem Solving
- API Development
- Database Design
- Java Programming

### Questions this data answers

> What can I do?

Skills can be linked to:

```text
Skill
├── Projects
├── Experience
├── Education
├── Certificates
└── Technologies
```

### Ordering

Skills should be displayed alphabetically:

```text
A → Z
```

Do not manually depend on JSON order for display.

---

## `technologies.json`

Use for specific tools, frameworks, languages, libraries, platforms, or technologies.

Examples:

- React
- Java
- Node.js
- Express.js
- MongoDB
- Git

### Questions this data answers

> What technologies do I work with?

### Ordering

Technologies should be displayed alphabetically:

```text
A → Z
```

Do not manually depend on JSON order for display.

---

# 3. Relationship Direction

The project currently supports relations through ID arrays.

Example:

```json
{
  "projects": ["portfolio-website"],
  "skills": ["frontend-development"],
  "technologies": ["react", "tailwind-css"]
}
```

Every ID must exactly match the `id` field in the corresponding JSON file.

For example:

### `projects.json`

```json
{
  "id": "portfolio-website",
  "name": "Portfolio Website"
}
```

Then another file can link to it:

```json
{
  "projects": ["portfolio-website"]
}
```

### Rules

- Use IDs, not names.
- IDs should be unique.
- Prefer lowercase kebab-case.
- Do not use duplicate IDs.
- Do not link to an ID that does not exist.

Good:

```text
portfolio-website
java-course-certificate
best-project-award
xyz-hackathon
```

Avoid:

```text
Portfolio Website
Java Certificate 2026
BEST_PROJECT
```

---

# 4. Full Example: One Real-World Story

Suppose:

1. You participate in a college project competition.
2. You build a project.
3. You win Best Project.
4. You receive a certificate.

The data should be:

## Project

```json
{
  "id": "smart-attendance-system",
  "name": "Smart Attendance System",
  "competitions": ["college-project-competition"],
  "achievements": ["best-project-award"]
}
```

## Competition

```json
{
  "id": "college-project-competition",
  "name": "College Project Competition",
  "projects": ["smart-attendance-system"],
  "achievements": ["best-project-award"],
  "certificates": ["best-project-certificate"]
}
```

## Achievement

```json
{
  "id": "best-project-award",
  "title": "Best Project Award",
  "competitions": ["college-project-competition"],
  "projects": ["smart-attendance-system"],
  "certificates": ["best-project-certificate"]
}
```

## Certificate

```json
{
  "id": "best-project-certificate",
  "title": "Best Project Certificate",
  "competitions": ["college-project-competition"],
  "achievements": ["best-project-award"],
  "projects": ["smart-attendance-system"]
}
```

This creates a complete connected story without mixing the purpose of each section.

---

# 5. Quick Decision Guide

When adding something new, ask these questions.

## Did I build something?

→ Add a **Project**

## Did I work somewhere or perform a professional role?

→ Add **Experience**

## Was it formal academic study?

→ Add **Education**

## Did I receive an official document or credential?

→ Add a **Certificate**

## Did I accomplish, win, rank, or receive recognition?

→ Add an **Achievement**

## Did I participate in a competitive event?

→ Add a **Competition**

More than one answer can be correct.

If one event produces multiple concepts, create multiple linked records.

---

# 6. Common Scenarios

## Scenario: Complete a Java Course

```text
Course completion
        ↓
   Certificate
        ↓
Java Skill + Java Technology
```

Primary data:

```text
Certificate
```

Relations:

```text
Skills
Technologies
```

---

## Scenario: Complete an Internship

```text
Internship
    ├── Experience
    └── Completion Certificate
            ↓
        Certificate
```

Primary data:

```text
Experience
Certificate
```

---

## Scenario: Participate in a Hackathon

```text
Hackathon
    ↓
Competition
```

If you receive a certificate:

```text
Competition ←→ Certificate
```

If you win:

```text
Competition ←→ Achievement
```

If you build a project:

```text
Competition ←→ Project
```

---

## Scenario: Win Best Project in College

```text
Project
   ↓
Achievement
   ↓
Certificate
```

Optional additional relation:

```text
Education
```

---

# 7. Recommended JSON Relationship Fields

Use these fields consistently where relevant:

```json
{
  "projects": [],
  "skills": [],
  "technologies": [],
  "experience": [],
  "education": [],
  "achievements": [],
  "competitions": [],
  "certificates": []
}
```

You do not need every field in every record.

Only add relation fields that are relevant.

Example:

```json
{
  "id": "java-course-certificate",
  "title": "Java Programming Certificate",
  "skills": ["java-programming"],
  "technologies": ["java"]
}
```

This is cleaner than:

```json
{
  "projects": [],
  "skills": ["java-programming"],
  "technologies": ["java"],
  "experience": [],
  "education": [],
  "achievements": [],
  "competitions": []
}
```

Prefer omitting empty relation fields.

---

# 8. Current Display Ordering Policy

This policy is planned for implementation in the application.

## Chronological sections

Display:

```text
Oldest → Newest
```

For:

- Projects
- Experience
- Education

The sorting should be handled in application logic rather than manually relying on JSON array order.

## Alphabetical sections

Display:

```text
A → Z
```

For:

- Skills
- Technologies

---

# 9. Final Data Model

```text
PROFILE
│
├── PROJECTS
│   ├── Skills
│   ├── Technologies
│   ├── Experience
│   ├── Education
│   ├── Achievements
│   ├── Competitions
│   └── Certificates
│
├── EXPERIENCE
│   ├── Projects
│   ├── Skills
│   ├── Technologies
│   └── Certificates
│
├── EDUCATION
│   ├── Projects
│   ├── Achievements
│   └── Competitions
│
├── CERTIFICATES
│   ├── Projects
│   ├── Skills
│   ├── Technologies
│   ├── Experience
│   ├── Education
│   ├── Achievements
│   └── Competitions
│
├── ACHIEVEMENTS
│   ├── Projects
│   ├── Experience
│   ├── Education
│   ├── Competitions
│   └── Certificates
│
├── COMPETITIONS
│   ├── Projects
│   ├── Skills
│   ├── Technologies
│   ├── Education
│   ├── Achievements
│   └── Certificates
│
├── SKILLS
│   └── A → Z
│
└── TECHNOLOGIES
    └── A → Z
```

---

# 10. Before Adding New Data

Use this checklist:

- [ ] Does this belong to an existing category?
- [ ] Is the primary category correct?
- [ ] Does it require a separate Certificate, Achievement, or Competition record?
- [ ] Are related IDs valid?
- [ ] Are IDs lowercase kebab-case?
- [ ] Is the item duplicated unnecessarily?
- [ ] Are only relevant relationship fields included?
- [ ] If it is chronological data, does it contain appropriate date information?
- [ ] If it is a Skill or Technology, will application logic sort it A → Z?

---

## Golden Rule

> **Events, accomplishments, credentials, projects, and experience are different concepts. Represent each concept separately, then connect them using IDs.**

This keeps the portfolio data scalable, avoids duplication, and allows one item to appear in multiple meaningful parts of the portfolio.

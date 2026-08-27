# Data Structure Guide

This document explains how portfolio content is organized and maintained.

## Data Location

Portfolio content is primarily stored in:

```text
src/data/
```

Main data files include:

```text
profile.json
projects.json
skills.json
technologies.json
experience.json
education.json
certificates.json
achievements.json
competitions.json
socialLinks.json
navigation.json
portfolioStatus.json
```

## General Rules

When adding or editing data:

1. Give every entity a stable, unique `id`.
2. Keep IDs consistent when they are referenced by another file.
3. Use the correct date field for chronological items.
4. Use meaningful names and slugs where routing depends on them.
5. Do not duplicate information unnecessarily when an ID relationship can be used.

## Projects

Typical project data may contain:

- `id`
- `name`
- `slug`
- `shortDescription`
- `banner`
- `logo`
- `category`
- `status`
- `featured`
- `startDate`
- `endDate`
- `githubUrl`
- `liveUrl`
- `skills`
- `technologies`

Use `slug` for project detail routes.

## Skills and Technologies

These are reusable entities.

Typical fields:

- `id`
- `name`
- `icon`
- `iconLibrary`

Projects and other entities should reference them through IDs rather than duplicating their names.

## Experience

Typical fields may include:

- `id`
- `role`
- `company`
- `startDate`
- `endDate`
- `description`

Use the experience `id` where a route or relationship requires it.

## Education

Typical fields may include:

- `id`
- `degree`
- `institute`
- `startDate`
- `endDate`
- `description`

Use the education `id` where a route or relationship requires it.

## Certificates

Certificates represent credentials earned through courses, internships, competitions, colleges, organizations, or other activities.

A certificate can optionally reference related:

- Projects
- Skills
- Technologies
- Experience
- Education
- Achievements
- Competitions

Example relationship fields:

```json
{
  "projects": ["project-id"],
  "skills": ["skill-id"],
  "technologies": ["technology-id"],
  "experience": ["experience-id"],
  "education": ["education-id"],
  "achievements": ["achievement-id"],
  "competitions": ["competition-id"]
}
```

Only include relationship IDs when they are genuinely relevant.

## Achievements

Achievements represent recognition, awards, accomplishments, or notable results.

They can exist independently or be related to certificates, education, projects, or competitions.

## Competitions

Competitions represent participation in or results from contests, hackathons, challenges, or other competitive events.

A competition may have related projects, achievements, certificates, skills, or technologies.

## Social Links

Each social link should contain enough information for display and linking, such as:

- `id`
- `name`
- `url`
- `icon`
- `iconLibrary`
- optional `username`

For icons, use the configured icon system consistently. For example:

```json
{
  "icon": "FaGithub",
  "iconLibrary": "fa6"
}
```

## Before Adding New Data

Check:

- Is the `id` unique?
- Is the correct section being used?
- Are date values valid?
- Are relationship IDs valid?
- Does a route depend on a `slug` or `id`?
- Are optional links actually available?

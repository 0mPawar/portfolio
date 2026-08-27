# Portfolio Relationships

This document explains how data entities are linked.

## Relationship Principle

Entities are connected using stable IDs.

Do not duplicate the full related object inside another JSON file when the existing entity can be referenced by its ID.

Example:

```json
{
  "skills": ["react", "javascript"]
}
```

The application resolves those IDs from `skills.json`.

## Related Items

Certificates may reference:

- Projects
- Skills
- Technologies
- Experience
- Education
- Achievements
- Competitions

The relationship fields are optional.

Example:

```json
{
  "projects": ["portfolio-website"],
  "skills": ["react"],
  "technologies": ["vite"],
  "experience": [],
  "education": [],
  "achievements": [],
  "competitions": []
}
```

## Resolving IDs

The project uses utilities such as:

```js
getByIds(items, ids)
```

and filtering logic such as:

```js
items.filter((item) => ids.includes(item.id))
```

The important requirement is that every referenced ID must exactly match the target item's `id`.

## Certificates vs Achievements vs Competitions

### Certificate

A document or credential received for completing, participating in, or being recognized for something.

Examples:

- Course completion certificate
- Internship certificate
- Competition participation certificate
- College certificate for a project

### Achievement

The accomplishment or recognition itself.

Examples:

- Won Best Project
- Ranked first
- Received an award

### Competition

The event or competitive activity.

Examples:

- Hackathon
- Coding competition
- College competition

One real-world event can therefore create multiple related records:

```text
Competition
    ↓
Achievement
    ↓
Certificate
```

or:

```text
Internship / Experience
    ↓
Certificate
```

or:

```text
Education / College Event
    ↓
Project
    ↓
Achievement
    ↓
Certificate
```

Do not force all three records to exist. Create only the entities that have a meaningful purpose.

## Relationship Maintenance Checklist

When adding a relationship:

1. Confirm that both entities already exist.
2. Copy the exact target `id`.
3. Avoid duplicate IDs in the relationship array.
4. Do not create a relationship merely because two items occurred at the same time.
5. Verify that the relationship appears correctly in the relevant details UI.

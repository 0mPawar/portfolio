# Portfolio Status System

The portfolio status system communicates whether the displayed data is current and whether the website is under development or maintenance.

## Configuration

The status flags are defined in `APP_CONFIG`:

```js
export const APP_CONFIG = {
  isDataUpdated: true,
  isUnderDevelopment: false,
  isUnderMaintenance: false,
};
```

## Flag Meaning

### `isDataUpdated`

Controls whether the displayed portfolio information is considered current.

- `true` → data is up to date
- `false` → some information may not reflect the latest updates

### `isUnderDevelopment`

Controls whether the portfolio is actively being developed.

- `true` → some sections or features may still be changing or incomplete
- `false` → no development notice is required

### `isUnderMaintenance`

Controls whether the portfolio is undergoing maintenance.

- `true` → some pages or features may be temporarily unavailable
- `false` → no maintenance notice is required

## Status Key

The three booleans are converted into a three-character key:

```js
const statusKey = [
  APP_CONFIG.isDataUpdated,
  APP_CONFIG.isUnderDevelopment,
  APP_CONFIG.isUnderMaintenance,
]
  .map((value) => (value ? "1" : "0"))
  .join("");
```

Order:

```text
isDataUpdated
isUnderDevelopment
isUnderMaintenance
```

Examples:

```text
true, false, false  → 100
false, true, false  → 010
true, true, true    → 111
```

## Status Messages

The appropriate message is loaded from:

```text
src/data/portfolioStatus.json
```

Each status key can define:

```json
{
  "show": true,
  "title": "Portfolio Status Notice",
  "description": "Status description",
  "notice": "Additional information",
  "buttonText": "Continue Anyway",
  "type": "warning"
}
```

When:

```json
{
  "show": false
}
```

the status alert should not be displayed.

## Normal State

The intended normal portfolio state is:

```text
100
```

Meaning:

```text
Data updated       → true
Under development  → false
Under maintenance  → false
```

This state should normally use:

```json
{
  "show": false
}
```

## Footer Indicator

The footer indicator should remain consistent with the overall status.

- 🟢 Green → normal state; no status alert
- 🔴 Red → any active development, maintenance, or data-status notice

A practical implementation can determine the indicator from whether the current `portfolioStatus.json` entry has `show: true`.

## Maintenance Checklist

When changing status:

1. Update the three flags in `APP_CONFIG`.
2. Confirm the generated status key.
3. Verify that the matching key exists in `portfolioStatus.json`.
4. Check whether `show` should be `true` or `false`.
5. Test the alert title, description, notice, type, and button text.
6. Verify the footer indicator.

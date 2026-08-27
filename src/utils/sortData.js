function parseTimestamp(val) {
  if (!val) return NaN;
  const d = new Date(val);
  const time = d.getTime();
  return isNaN(time) ? NaN : time;
}

/**
 * Sorts an array of items by a date field in ascending order (Old → New).
 * Items with missing, null, undefined, or invalid dates appear at the end.
 * Preserves initial array order (stable sort) for equivalent dates or invalid dates.
 * Does NOT mutate original array.
 *
 * @param {Array} items - Array of items to sort
 * @param {string} dateKey - The key holding the date value (e.g. "startDate", "issueDate", "date")
 * @returns {Array} New sorted array
 */
export function sortByDateAscending(items = [], dateKey) {
  if (!Array.isArray(items)) return [];

  return [...items]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const timeA = parseTimestamp(a.item?.[dateKey]);
      const timeB = parseTimestamp(b.item?.[dateKey]);

      const validA = !isNaN(timeA);
      const validB = !isNaN(timeB);

      if (validA && validB) {
        if (timeA !== timeB) {
          return timeA - timeB;
        }
        return a.index - b.index;
      }

      if (validA && !validB) return -1;
      if (!validA && validB) return 1;

      return a.index - b.index;
    })
    .map((entry) => entry.item);
}

/**
 * Sorts an array of items alphabetically by a string field (e.g. name, title) in A → Z order.
 * Uses case-insensitive locale-aware comparison.
 * Preserves initial array order (stable sort) for equivalent values or missing values.
 * Does NOT mutate original array.
 *
 * @param {Array} items - Array of items to sort
 * @param {string} nameKey - The key holding the string value (default: "name")
 * @returns {Array} New sorted array
 */
export function sortByNameAlphabetical(items = [], nameKey = "name") {
  if (!Array.isArray(items)) return [];

  return [...items]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const valA = a.item?.[nameKey] != null ? String(a.item[nameKey]) : "";
      const valB = b.item?.[nameKey] != null ? String(b.item[nameKey]) : "";

      const comp = valA.localeCompare(valB, undefined, {
        sensitivity: "base",
        numeric: true,
      });

      if (comp !== 0) {
        return comp;
      }

      const exactComp = valA.localeCompare(valB, undefined, {
        numeric: true,
      });

      if (exactComp !== 0) {
        return exactComp;
      }

      return a.index - b.index;
    })
    .map((entry) => entry.item);
}

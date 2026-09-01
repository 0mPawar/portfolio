/**
 * Returns true when `url` is a non-empty, non-whitespace string.
 *
 * Handles: undefined, null, missing property, empty string, whitespace-only.
 */
export function isValidUrl(url) {
  return typeof url === "string" && url.trim().length > 0;
}

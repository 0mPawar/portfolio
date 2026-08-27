/**
 * Utility to resolve static asset URLs for local development and GitHub Pages deployments.
 *
 * @param {string} path - Local path or external URL of the asset.
 * @returns {string} The processed asset URL.
 */
export function getAssetUrl(path) {
  if (!path || typeof path !== "string") {
    return "";
  }

  const trimmed = path.trim();
  if (!trimmed) {
    return "";
  }

  // Leave external URLs unchanged (http://, https://, //, data:, blob:)
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("//") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  // Remove leading slashes from local path
  const cleanPath = trimmed.replace(/^\/+/, "");

  // Prevent double prepending if cleanPath already starts with base path
  const baseWithoutLeadingSlash = normalizedBaseUrl.replace(/^\/+/, "");
  if (
    baseWithoutLeadingSlash &&
    baseWithoutLeadingSlash !== "/" &&
    cleanPath.startsWith(baseWithoutLeadingSlash)
  ) {
    return `/${cleanPath}`;
  }

  return `${normalizedBaseUrl}${cleanPath}`;
}

export default getAssetUrl;

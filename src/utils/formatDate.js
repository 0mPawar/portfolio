function formatDate(
  dateString,
  options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
) {
  if (!dateString) return "Unknown";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", options);
}

export default formatDate;
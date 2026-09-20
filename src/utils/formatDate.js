function formatDate(
  dateString,
  options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
) {
  if (!dateString) return "Unknown";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", options);
}

function formatDateRange(startDate, endDate, formatDateValue) {
  if (!startDate && !endDate) return "Date not specified";

  const start = startDate ? formatDateValue(startDate) : "Present";
  const end = endDate ? formatDateValue(endDate) : "Present";

  return `${start} — ${end}`;
}

export default formatDate;
export { formatDateRange };

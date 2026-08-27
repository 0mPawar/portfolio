export const uniqueIds = (ids = []) => {
  return [...new Set(ids.filter(Boolean))];
};

export const uniqueById = (items = []) => {
  return Array.from(
    new Map(items.filter(Boolean).map((item) => [item.id, item])).values()
  );
};

export const flattenIds = (items = [], key) => {
  return uniqueIds(items.flatMap((item) => item?.[key] || []));
};
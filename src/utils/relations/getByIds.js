import { uniqueIds } from "../arrayUtils";

export const getByIds = (data = [], ids = []) => {
  const unique = uniqueIds(ids);

  return unique
    .map((id) => data.find((item) => item.id === id))
    .filter(Boolean);
};

export const getById = (data = [], id) => {
  return data.find((item) => item.id === Number(id)) || null;
};

export const getIds = (items = []) => {
  return items.filter(Boolean).map((item) => item.id);
};
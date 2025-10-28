export const isNotEmptyArray = (arr) => {
  return Array.isArray(arr) && arr?.length > 0;
};

export const getEmptyArray = (length) => Array.from({ length });

import { Person } from "../types";

export const sortByProperty = (array: Person[], property: keyof Person) => {
    return array.sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];
  
      if (aValue === undefined) return 1;
      if (bValue === undefined) return -1;
  
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
};
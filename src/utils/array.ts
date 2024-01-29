import { GenericObject, ObjectWithKeys } from "@/src/types/array";

export function isObjectInArray(
  array: ObjectWithKeys[],
  targetObject: ObjectWithKeys,
  keysToCheck: string[]
): boolean {
  if (array.length === 0) return false;
  return array.some((object) =>
    keysToCheck.every((key) => object[key] === targetObject[key])
  );
}

// Define a generic function to sort the array
export function sortByKey<T extends GenericObject>(array: T[], sortKey: keyof T): T[] {
  return [...array].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) {
      return -1;
    }
    if (a[sortKey] > b[sortKey]) {
      return 1;
    }
    return 0;
  });
}

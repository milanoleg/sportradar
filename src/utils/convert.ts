import { isObject, isArray, transform, camelCase } from "lodash";

const keysToCamel = (obj: any): any =>
  transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key as any);

    // @ts-ignore
    acc[camelKey] = isObject(value) ? keysToCamel(value) : value;
  });

export { keysToCamel };

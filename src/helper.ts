import { BN } from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';

/**
 * A mapped type that replaces properties of type `From` with `To`.
 */
type TransformProperties<T, From, To> = {
  [K in keyof T]: T[K] extends From ? To : T[K];
};

/**
 * Takes an object and a transform function.
 * If a property is of type `From`, transform it to type `To`.
 */
export function transformObject<T, From, To>(
  obj: T,
  transform: (val: From) => To,
  isFrom: (val: unknown) => val is From // Type guard to check `From` at runtime
): TransformProperties<T, From, To> {
  const result: any = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      // Only transform if runtime check passes
      if (isFrom(value)) {
        result[key] = transform(value);
      } else {
        result[key] = value;
      }
    }
  }

  // Cast to ensure we return the correct mapped type
  return result as TransformProperties<T, From, To>;
}

export function stringify<T>(obj: T) {
  const removeBN = transformObject(
    obj,
    (val: BN) => val.toString(10) as string,
    (val): val is BN => val instanceof BN
  );
  const removePubkey = transformObject(
    removeBN,
    (val: PublicKey) => val.toString(),
    (val): val is PublicKey => val instanceof PublicKey
  );
  return removePubkey;
}

export type Stringify<T> = ReturnType<typeof stringify<T>>;

import { Arbitrary } from 'jsverify';
export declare function undefinedOr<T>(arb: Arbitrary<T>): Arbitrary<T | undefined>;

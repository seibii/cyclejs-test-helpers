import { MockTimeSource } from '@cycle/time';
export { diagramArbitrary } from './diagramArbitrary';
export { undefinedOr } from './undefinedOr';
export declare function promise(run: (err: any) => void): Promise<boolean>;
export declare function withTime(test: (Time: MockTimeSource) => void, args?: Object): () => Promise<boolean>;
export declare function addPrevState(main: any, prevState: any, stateName?: string): any;

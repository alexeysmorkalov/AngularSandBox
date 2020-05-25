import {expect} from 'chai';

describe ('TypeScript 3.9', () => {
    // When a line is prefixed with a // @ts-expect-error comment, 
    // TypeScript will suppress that error from being reported; 
    // but if there’s no error, TypeScript will report that // @ts-expect-error wasn’t necessary.
    it ('@ts-expect-error', () => {
        // @ts-expect-error
        console.log(47 * "octopus");
    });
});
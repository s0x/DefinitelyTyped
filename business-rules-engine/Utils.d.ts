/// <reference path="../node/node.d.ts" />
declare module Utils {
    class StringFce {
        static format(s: string, args: any): string;
    }
    class NumberFce {
        static GetNegDigits(value: string): number;
    }
}
declare module "node-Utils" {export = Utils;}

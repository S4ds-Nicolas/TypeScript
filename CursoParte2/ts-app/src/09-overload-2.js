"use strict";
// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStr = parseStr;
// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }
function parseStr(input) {
    if (Array.isArray(input)) {
        return input.join(''); // string
    }
    else if (typeof input === 'string') {
        return input.split(''); // string[]
    }
    else if (typeof input === 'number') {
        return true; // boolean
    }
}
const rtaArray = parseStr('Nico');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Nico =>', rtaArray);
const rtaStr = parseStr(['N', 'i', 'c', 'o']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);
const rtaBoolean = parseStr(12);

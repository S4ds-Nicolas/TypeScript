"use strict";
let anyVar;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};
let isNew = anyVar;
anyVar.doSomething();
anyVar.touppercase();
let unknowVar;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};
// unknowVar.doSomething();
if (typeof unknowVar === 'string') {
    unknowVar.toUpperCase();
}
if (typeof unknowVar === 'boolean') {
    let isNewV2 = unknowVar;
}
const parse = (str) => {
    return JSON.parse(str);
};

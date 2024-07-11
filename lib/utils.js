"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinClassNames = void 0;
const joinClassNames = (...classNames) => classNames.filter(c => c).join(' ');
exports.joinClassNames = joinClassNames;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const utils_1 = require("../utils");
const TextRow = ({ className, maxHeight, color, lineSpacing = '0.7em', style }) => {
    const defaultStyles = {
        maxHeight,
        width: '100%',
        height: '1em',
        backgroundColor: color,
        marginTop: lineSpacing
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('text-row', className), style: Object.assign(Object.assign({}, defaultStyles), style) }));
};
exports.default = TextRow;

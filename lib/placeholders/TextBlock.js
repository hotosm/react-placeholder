"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextRow_1 = require("./TextRow");
const utils_1 = require("../utils");
const defaultStyles = {
    width: '100%'
};
const defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];
const TextBlock = ({ rows, lineSpacing, color, style, className, widths = defaultWidths }) => {
    const getRowStyle = (i) => {
        return {
            maxHeight: `${100 / (rows * 2 - 1)}%`,
            width: `${widths[(i + widths.length) % widths.length]}%`
        };
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('text-block', className), style: Object.assign(Object.assign({}, defaultStyles), style) }, Array.apply(null, Array(rows)).map((_, i) => (React.createElement(TextRow_1.default, { color: color, style: getRowStyle(i), lineSpacing: i !== 0 ? lineSpacing : 0, key: i })))));
};
exports.default = TextBlock;

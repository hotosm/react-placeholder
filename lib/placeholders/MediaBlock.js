"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TextBlock_1 = require("./TextBlock");
const RoundShape_1 = require("./RoundShape");
const utils_1 = require("../utils");
const defaultStyles = {
    display: 'flex'
};
const MediaBlock = ({ className, style, color, rows }) => {
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('media-block', className), style: Object.assign(Object.assign({}, defaultStyles), style) },
        React.createElement(RoundShape_1.default, { color: color, style: { minHeight: 55, width: 55, minWidth: 55, marginRight: 10 } }),
        React.createElement(TextBlock_1.default, { color: color, rows: rows })));
};
exports.default = MediaBlock;

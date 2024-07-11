"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const utils_1 = require("../utils");
const RectShape = ({ className, style, color }) => {
    const defaultStyle = {
        backgroundColor: color,
        width: '100%',
        height: '100%',
        marginRight: 10
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('rect-shape', className), style: Object.assign(Object.assign({}, defaultStyle), style) }));
};
exports.default = RectShape;

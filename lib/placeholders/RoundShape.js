"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const utils_1 = require("../utils");
const RoundShape = ({ className, style, color }) => {
    const defaultStyles = {
        backgroundColor: color,
        borderRadius: '500rem',
        width: '100%',
        height: '100%'
    };
    return (React.createElement("div", { className: (0, utils_1.joinClassNames)('round-shape', className), style: Object.assign(Object.assign({}, defaultStyles), style) }));
};
exports.default = RoundShape;

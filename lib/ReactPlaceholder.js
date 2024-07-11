"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const placeholders = require("./placeholders");
const utils_1 = require("./utils");
const ReactPlaceholder = (_a) => {
    var { delay = 0, type = 'text', color = '#CDCDCD', rows = 3, ready: readyProp, firstLaunchOnly, children, className, showLoadingAnimation, customPlaceholder } = _a, rest = __rest(_a, ["delay", "type", "color", "rows", "ready", "firstLaunchOnly", "children", "className", "showLoadingAnimation", "customPlaceholder"]);
    const [ready, setReady] = React.useState(readyProp);
    const timeout = React.useRef(null);
    const getFiller = () => {
        const classes = showLoadingAnimation
            ? (0, utils_1.joinClassNames)('show-loading-animation', className)
            : className;
        if (customPlaceholder && React.isValidElement(customPlaceholder)) {
            const mergedCustomClasses = (0, utils_1.joinClassNames)(customPlaceholder.props.className, classes);
            return React.cloneElement(customPlaceholder, {
                className: mergedCustomClasses
            });
        }
        else if (customPlaceholder) {
            return customPlaceholder;
        }
        const Placeholder = placeholders[type];
        return (React.createElement(Placeholder, Object.assign({}, rest, { color: color, rows: rows, className: classes })));
    };
    React.useEffect(() => {
        if (!firstLaunchOnly && ready && !readyProp) {
            if (delay && delay > 0) {
                timeout.current = window.setTimeout(() => {
                    setReady(false);
                }, delay);
            }
            else {
                setReady(false);
            }
        }
        else if (readyProp) {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
            if (!ready) {
                setReady(true);
            }
        }
    }, [firstLaunchOnly, ready, readyProp, delay]);
    // clear the timeout when the component unmounts
    React.useEffect(() => () => {
        if (timeout.current) {
            window.clearTimeout(timeout.current);
        }
    }, []);
    // Casting - workaround for DefinitelyTyped/react issue with
    // FunctionComponents returning ReactElement, where they should be able to
    // return ReactNode. Casting also doesn't introduce another layer in the
    // component tree like another `<>children</>` workaround does.
    //
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
    // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return ready ? children : getFiller();
};
exports.default = ReactPlaceholder;

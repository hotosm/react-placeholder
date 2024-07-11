import * as React from 'react';
export type Props = {
    maxHeight?: string | number;
    className?: string;
    color: string;
    style?: React.CSSProperties;
    lineSpacing?: string | number;
};
declare const TextRow: React.FC<Props>;
export default TextRow;

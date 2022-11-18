import React from 'react';
import { MaterialSymbol } from '../ClientImports';
export interface Icon_Props {
    iconName: MaterialSymbol;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
    className?: string;
}
export interface Icon_State {
}
export declare class Icon extends React.Component<Icon_Props, Icon_State> {
    constructor(props: Icon_Props);
    render(): JSX.Element;
}

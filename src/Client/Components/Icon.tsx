import React from 'react'
import { MaterialSymbol } from '../ClientImports';
export interface Icon_Props { 
    iconName: MaterialSymbol,
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLSpanElement>
    className?: string
}
export interface Icon_State { }
export class Icon extends React.Component<Icon_Props, Icon_State>{
    constructor(props: Icon_Props) {
        super(props);
    }
    render() {
        return <span className={`noselect material-symbols-outlined ${this.props.className ? this.props.className : ''}`} style={this.props.style} onClick={this.props.onClick}>{this.props.iconName}</span>
    }
}
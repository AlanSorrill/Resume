import React from 'react'
import { Combine, Icon, isImagePath, MaterialSymbol } from '../ClientImports';
export interface IconComponent_Props {
    iconName: Icon,
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLSpanElement>
    className?: string
    size?: number
}
export interface IconComponent_State { }
export class IconComponent extends React.Component<IconComponent_Props, IconComponent_State>{
    constructor(props: IconComponent_Props) {
        super(props);
    }
    get size() {
        return typeof this.props.size == 'number' ? this.props.size : 18;
    }
    render() {
        if (isImagePath(this.props.iconName)) {
            return <img src={this.props.iconName} style={Combine({ width: this.size, height: this.size }, this.props.style)} />
        }
        return <span className={`noselect material-symbols-outlined ${this.props.className ? this.props.className : ''}`} style={this.props.style} onClick={this.props.onClick}>{this.props.iconName}</span>
    }
}
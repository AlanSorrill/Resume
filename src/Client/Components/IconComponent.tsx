import React from 'react'
import { Icon, isImagePath, MaterialSymbol } from '../ClientImports';
export interface IconComponent_Props { 
    iconName: Icon,
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLSpanElement>
    className?: string
}
export interface IconComponent_State { }
export class IconComponent extends React.Component<IconComponent_Props, IconComponent_State>{
    constructor(props: IconComponent_Props) {
        super(props);
    }
    render() {
        if(isImagePath(this.props.iconName)){
            return <img src={this.props.iconName}/>
        }
        return <span className={`noselect material-symbols-outlined ${this.props.className ? this.props.className : ''}`} style={this.props.style} onClick={this.props.onClick}>{this.props.iconName}</span>
    }
}
import React from 'react'
import { Combine, Icon, isImagePath, isLightMode, MaterialSymbol } from '../ClientImports';
// SVG icons that are already full-color and must not be darkened in light mode.
const FullColorIcons = new Set<string>([]);

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
            // SVG icons are drawn white for the dark theme; darken them on the light theme. PNGs and full-color SVGs stay as-is.
            const darken = isLightMode && this.props.iconName.toLowerCase().endsWith('.svg') && !FullColorIcons.has(this.props.iconName);
            return <img src={this.props.iconName} style={Combine({ width: this.size, height: this.size, ...(darken ? { filter: 'invert(0.8)' } : {}) }, this.props.style)} />
        }
        return <span className={`noselect material-symbols-outlined ${this.props.className ? this.props.className : ''}`} style={this.props.style} onClick={this.props.onClick}>{this.props.iconName}</span>
    }
}
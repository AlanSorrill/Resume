import React from 'react'
import { Combine, inchesToPixels } from '../Helpers';
export interface Paper_Props {

    children?: React.ReactNode
    style?: React.CSSProperties
}
export interface Paper_State { }
export class Paper extends React.Component<Paper_Props, Paper_State>{
    constructor(props: Paper_Props) {
        super(props);
    }
    render() {
        return <div style={Combine(this.props.style, {
            width: inchesToPixels(8.5),
            height: inchesToPixels(11),
        })}>{this.props.children}</div>
    }
}
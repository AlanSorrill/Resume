import React from 'react'
import { Combine } from '../Helpers';
export interface Center_Props {
    direction: 'vertical' | 'horizontal',
    children?: React.ReactNode
    style?: React.CSSProperties
}
export interface Center_State { }
export class Center extends React.Component<Center_Props, Center_State>{
    constructor(props: Center_Props) {
        super(props);
    }
    render() {
        return <div style={Combine(typeof this.props.style == 'undefined' ? {} : this.props.style, { display: 'flex', flexDirection: this.props.direction == 'horizontal' ? 'row' : 'column' })}>
            <div style={{ flexGrow: 1 }} />
            {this.props.children}
            <div style={{ flexGrow: 1 }} />
        </div>
    }
}
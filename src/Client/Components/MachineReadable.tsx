import React from 'react'
import { Card, Content, IconBullet, Section } from '../ClientImports'

export interface MR_Section_Props {
    section: Section
}
export interface MR_Section_State { }
export class MR_Section extends React.Component<MR_Section_Props, MR_Section_State>{
    constructor(props: MR_Section_Props) {
        super(props);
    }
    render() {
        return <div>
            <div key='title'>{this.props.section.title}</div>
            <div>{this.props.section.cards.map((card, index) => (<MR_Card key={index} cardData={card} />))}</div>
        </div>
    }
}
 
export interface MR_Card_Props {
    cardData: Card
}
export interface MR_Card_State { }
export class MR_Card extends React.Component<MR_Card_Props, MR_Card_State>{
    constructor(props: MR_Card_Props) {
        super(props);
    }
    render() {
        return <div style={{}}>
            <div>{this.props.cardData.title}</div>
            <div>{<MR_Content content={this.props.cardData.headContent} />}</div>
        </div>
    }
}

export interface MR_Content_Props {
    content: Content
}
export interface MR_Content_State { }
export class MR_Content extends React.Component<MR_Content_Props, MR_Content_State>{
    constructor(props: MR_Content_Props) {
        super(props);
    }
    render() {
        return <div></div>
    }
}

export interface MR_IconBullet_Props {
    bullet: IconBullet
    size?: number
}
export interface MR_IconBullet_State { }
export class MR_IconBullet extends React.Component<MR_IconBullet_Props, MR_IconBullet_State>{
    constructor(props: MR_IconBullet_Props) {
        super(props);
    }
    render() {
        return <div></div>
    }
}
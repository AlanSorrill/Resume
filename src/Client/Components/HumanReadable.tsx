import { Card, Colors, Content, IconBullet, IconComponent, Section,addInbetween } from '../ClientImports'
import React from 'react'

export const HR_Padding = 6

export interface HR_Section_Props {
    section: Section
}
export interface HR_Section_State { }
export class HR_Section extends React.Component<HR_Section_Props, HR_Section_State>{
    constructor(props: HR_Section_Props) {
        super(props);
    }
    render() {
        return <div>
            <div key={`title:${this.props.section.title}`} style={{ textAlign: 'center', color: Colors.darkText, fontWeight: 'bold' }}>
                {this.props.section.title}
            </div>
            <div>
                {this.props.section.cards.map(card => (<HR_Card cardData={card} />))}
            </div>
        </div>
    }
}

export interface HR_Card_Props {
    cardData: Card
}
export interface HR_Card_State { }
export class HR_Card extends React.Component<HR_Card_Props, HR_Card_State>{
    constructor(props: HR_Card_Props) {
        super(props);
    } 
    render() {
        return <div style={{ margin: HR_Padding, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ backgroundColor: Colors.cardHead, padding: HR_Padding }}>
                <div style={{ textAlign: 'left', color: Colors.accentLight, fontFamily: "'Barlow', sans-serif" }}>{this.props.cardData.title}</div>
                <HR_Content content={this.props.cardData.headContent} />
            </div>
            {typeof this.props.cardData.bodyContent == 'undefined' ? <div></div> :
                <div style={{ backgroundColor: Colors.cardBody, padding: HR_Padding }}>
                    <HR_Content content={this.props.cardData.bodyContent} />
                </div>}
        </div>
    }
}

export interface HR_Content_Props {
    content: Content
}
export interface HR_Content_State { }
export class HR_Content extends React.Component<HR_Content_Props, HR_Content_State>{
    constructor(props: HR_Content_Props) {
        super(props);
    }
    render() {
        switch (this.props.content.type) {
            case 'paragraph':
                return <div style={{ color: Colors.darkText }}>{addInbetween(this.props.content.item.split('\n') as React.ReactNode[], ()=>(<br />))}</div>
            case 'iconBullet':
                return <div style={{}}>
                    {typeof this.props.content.title == 'undefined' ? <div></div> : <div style={{ fontFamily: "'Barlow', sans-serif", color: Colors.lightText, fontWeight: 'bold' }}>
                        {this.props.content.title}
                    </div>}
                    <div> {this.props.content.items.map((data, index) => (<HR_IconBullet bullet={data} key={index} />))}</div>
                </div>
        }
        return <div>Unknown content type {this.props.content.type}</div>
    }
}

export interface HR_IconBullet_Props {
    bullet: IconBullet
    size?: number
}
export interface HR_IconBullet_State { }
export class HR_IconBullet extends React.Component<HR_IconBullet_Props, HR_IconBullet_State>{
    constructor(props: HR_IconBullet_Props) {
        super(props);
    }
    get size(){
return typeof this.props.size == 'number' ? this.props.size : 18
    }
    render() {
        return <div style={{ color: Colors.darkText, display: 'flex', fontFamily: "'Fira Sans', sans-serif" }}>
            <div style={{ flexGrow: 1 }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1 }} />
                <div>{this.props.bullet.text}</div>
                <div style={{ flexGrow: 1 }} />
            </div>
            <IconComponent iconName={this.props.bullet.icon} style={{ fontSize: this.size, paddingLeft: HR_Padding }} size={this.size} /></div>
    }
}
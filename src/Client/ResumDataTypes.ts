import { MaterialSymbol } from "./ClientImports"

export type ResumeData = {
    education: Section
    workExperience: Section
    
}
export type Section = {
    title: string
    cards: Card[]
}

export type Card = {
    title: string
    headContent: Content
    bodyContent?: Content
}

export type IconBulletContent = {
    type: 'iconBullet'
    items: IconBullet[]
}
export type BulletContent = {
    type: 'bullet'
    items: string[]
}
export type ParagraphContent = {
    type: 'paragraph'
    item: string
}
export type Content = IconBulletContent | BulletContent | ParagraphContent
export type IconBullet = {
    text: string
    icon: MaterialSymbol
}
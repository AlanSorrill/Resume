import { ImageExtension, MaterialSymbol, PublicFilePath } from "./ClientImports"

export type ResumeData = {
    education: Section
    workExperience: Section
    generalWorkExperience: Section
    skills: Section
    extra: Card[]
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
    title?: string
}
export type BulletContent = {
    type: 'bullet'
    items: string[]
    title?: string
}
export type ParagraphContent = {
    type: 'paragraph'
    item: string
    title?: string
}
export type Content = IconBulletContent | BulletContent | ParagraphContent

export type ImagePath = PublicFilePath<ImageExtension>
export type Icon = MaterialSymbol | ImagePath
export function isImagePath(icon: Icon): icon is ImagePath {
    return icon.includes('.')
}
export type IconBullet = {
    text: string
    icon: Icon
}
